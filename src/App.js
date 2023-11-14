import React, { useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Button from "./components/UI/Button/Button";
import Modal from "./components/UI/Modal/Modal";
import { usePosts } from "./hooks/usePosts";
import './styles/App.css';


function App() {

  const[posts, setPosts] = useState(
    [
      {id: 1, title: 'Вишни', body: 'Б Описание первого поста'},
      {id: 2, title: 'Арбузы вишни', body: 'В Описание второго поста'},
      {id: 3, title: 'Яблоки', body: 'А Описание третьего поста'}
    ]
  );

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);


  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }


  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <Button style={{marginTop: '30px'}}onClick={() => setModal(true)}>Создать пользователя</Button>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </Modal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Посты про JS'}/>
    </div>
  );
}

export default App;
