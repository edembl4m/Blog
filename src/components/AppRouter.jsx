import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import PostIdPage from '../pages/PostIdPage';
import {routes} from '../router';

const AppRouter = () => {
  return (
    <Routes>
        {/* <Route path="/about" element={<About />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/posts/:id" element={<PostIdPage />} />
        <Route path="*" element={<Posts />} /> */}
        {routes.map(route => 
            <Route element={<route.component />} path={route.path} exact={route.exact} key={route.path} />
        )}
        <Route path="*" element={<Posts />} />
    </Routes>
  )
}

export default AppRouter