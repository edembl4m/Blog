import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import './styles/App.css';


function App() {

  const[posts, setPosts] = useState(
    [
      {id: 1, title: 'Javascript 1', body: 'Описание первого поста про JS'},
      {id: 2, title: 'Javascript 2', body: 'Описание второго поста про JS'},
      {id: 3, title: 'Javascript 3', body: 'Описание третьего поста про JS'}
    ]
  );

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }


  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList posts={posts} title={'Посты про JS'}/>
    </div>
  );
}

export default App;
