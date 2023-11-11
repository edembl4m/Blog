import React, { useState } from "react";
import PostList from "./components/PostList";
import Button from "./components/UI/Button/Button";
import Input from "./components/UI/Input/Input";
import './styles/App.css';


function App() {

  const[posts, setPosts] = useState(
    [
      {id: 1, title: 'Javascript 1', body: 'Описание первого поста про JS'},
      {id: 2, title: 'Javascript 2', body: 'Описание второго поста про JS'},
      {id: 3, title: 'Javascript 3', body: 'Описание третьего поста про JS'}
    ]
  );

  return (
    <div className="App">
      <form>
        <Input type='text' placeholder={'Название поста'} />
        <Input type='text' placeholder={'Описание поста'} />
        <Button>Создать пост</Button>
      </form>
      <PostList posts={posts} title={'Посты про JS'}/>
    </div>
  );
}

export default App;
