import React, { useMemo, useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Button from "./components/UI/Button/Button";
import Modal from "./components/UI/Modal/Modal";
import './styles/App.css';


function App() {

  const[posts, setPosts] = useState(
    [
      {id: 1, title: 'Вишни', body: 'Б Описание первого поста про JS'},
      {id: 2, title: 'Арбузы вишни', body: 'В Описание второго поста про JS'},
      {id: 3, title: 'Яблоки', body: 'А Описание третьего поста про JS'}
    ]
  );

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);


  const sortedPosts = useMemo(() => {
    console.log("ОТРАБОТАЛА ФУНКЦИЯ СОРТЕД ПОСТ!");
    if(filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort])); //сортировка выбранным способом
    }
    
    return posts;
  }, [filter.sort, posts])


  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query));
  }, [filter.query, sortedPosts])


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
