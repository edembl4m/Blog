import React, { useEffect, useState } from "react";
import PostService from "./API/PostService";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Button from "./components/UI/Button/Button";
import Loader from "./components/UI/Loader/Loader";
import Modal from "./components/UI/Modal/Modal";
import { usePosts } from "./hooks/usePosts";
import './styles/App.css';


function App() {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostLoading, setIsPostLoading] = useState(false);


  useEffect(() => {
    fetchPosts();
  }, [])


  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }


  async function fetchPosts() {
    setIsPostLoading(true);
    const posts = await PostService.getAll();
    setPosts(posts);
    setIsPostLoading(false);
  }


  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <button onClick={fetchPosts}>GET POSTS</button>
      <Button style={{marginTop: '30px'}}onClick={() => setModal(true)}>Создать пользователя</Button>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </Modal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {
        isPostLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
            <Loader />
          </div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Посты про JS'}/>
      }
    </div>
  );
}

export default App;
