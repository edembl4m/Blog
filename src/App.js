import React, { useMemo, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import Input from "./components/UI/Input/Input";
import Select from "./components/UI/Select/Select";
import './styles/App.css';


function App() {

  const[posts, setPosts] = useState(
    [
      {id: 1, title: 'Вишни', body: 'Б Описание первого поста про JS'},
      {id: 2, title: 'Арбузы вишни', body: 'В Описание второго поста про JS'},
      {id: 3, title: 'Яблоки', body: 'А Описание третьего поста про JS'}
    ]
  );
  const [selectedSort, setSelectedSort] = useState(''); //выбранный способ сортировки
  const [searchQuery, setSearchQuery] = useState('');


  const sortedPosts = useMemo(() => {
    console.log("ОТРАБОТАЛА ФУНКЦИЯ СОРТЕД ПОСТ!");
    if(selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort])); //сортировка выбранным способом
    }
    
    return posts;
  }, [selectedSort, posts])


  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery));
  }, [searchQuery, sortedPosts])


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }


  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  const sortPost = (sort) => {
    setSelectedSort(sort);
  }


  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <Input
          placeholder='Поиск...'
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <Select
          value={selectedSort}  //по умолчанию пустая строка
          onCahange={sortPost}
          defaultValue='Сортировка по:'
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'}
          ]}

        />
      </div>
      {
        sortedAndSearchedPosts.length
          ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Посты про JS'}/>
          : <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>
      }
    </div>
  );
}

export default App;
