import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Select from "./components/UI/Select/Select";
import './styles/App.css';


function App() {

  const[posts, setPosts] = useState(
    [
      {id: 1, title: 'Javascript 1', body: 'Описание первого поста про JS'},
      {id: 2, title: 'Javascript 2', body: 'Описание второго поста про JS'},
      {id: 3, title: 'Javascript 3', body: 'Описание третьего поста про JS'}
    ]
  );
  const [selectedSort, setSelectedSort] = useState('');


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }


  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  const sortPost = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }


  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <Select
          value={selectedSort}
          onCahange={sortPost}
          defaultValue='Сортировка по:'
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'}
          ]}

        />
      </div>
      {
        posts.length
          ? <PostList remove={removePost} posts={posts} title={'Посты про JS'}/>
          : <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>
      }
    </div>
  );
}

export default App;
