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

  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, {...post, id: Date.now()}]);
    setPost({title: '', body: ''})
  }


  return (
    <div className="App">
      <form>
        <Input
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type='text'
          placeholder={'Название поста'}
        />
        <Input
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type='text'
          placeholder={'Описание поста'} />
        <Button onClick={addNewPost}>Создать пост</Button>
      </form>
      <PostList posts={posts} title={'Посты про JS'}/>
    </div>
  );
}

export default App;
