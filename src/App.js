import React, { useEffect, useState } from "react";
import PostService from "./API/PostService";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Button from "./components/UI/Button/Button";
import Loader from "./components/UI/Loader/Loader";
import Modal from "./components/UI/Modal/Modal";
import Pagination from "./components/UI/Pagination/Pagination";
import { useFetching } from "./hooks/useFetching";
import { usePosts } from "./hooks/usePosts";
import './styles/App.css';
import { getPagesArray, getPagesCount } from "./utils/page";


function App() {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);

  const [totalPages, setTotalPages] = useState(0);  //общее кол-во страниц
  const [limit, setLimit] = useState(10); //кол-во отображаемых постов
  const [page, setPage] = useState(1);  //отображаемая страница

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount, limit));
  })


  useEffect(() => {
    fetchPosts(limit, page);
  }, [page])


  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }


  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
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
      {
        postError &&
          <h1>Произошла ошибка ${postError}</h1>
      }
      {
        isPostLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
            <Loader />
          </div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Посты про JS'}/>
      }
      <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default App;
