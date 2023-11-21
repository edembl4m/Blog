import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';


const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });

  const [fetchСomments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(params.id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id)
    fetchСomments(params.id)
  }, [])

  return (
    <div>
        <h1>Вы открыли страницу поста c ID = {params.id}</h1>
        {isLoading
                ? <Loader />
                : <div>{post.id}. {post.title}</div>
        }
        <h1>Комментарии</h1>
        {isComLoading
            ? <Loader />
            : <div>
                {comments.map(comm => 
                    <div style={{marginTop: 15}} key={comm.email}>
                        <h5>{comm.email}</h5>    
                        <div>{comm.body}</div>    
                    </div>
                )}
            </div>
        }
    </div>
  )
}

export default PostIdPage