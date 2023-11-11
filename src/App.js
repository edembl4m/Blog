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


  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <PostForm create={createPost}/>
      {
        posts.length
          ? <PostList remove={removePost} posts={posts} title={'Посты про JS'}/>
          : <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>
      }
    </div>
  );
}

export default App;
