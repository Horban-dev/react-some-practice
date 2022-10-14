import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../loader/Loader';
import { useState, useEffect } from 'react';

const PostIdPage = () => {
    const params = useParams('')
    const [post, setPost] = useState({})
    const [comment, setComment] = useState([])
    const [fetchPostById, isLoading, error] = useFetching( async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetching( async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComment(response.data)
    })
    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            <h1>You opened the post page ID = {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.id}...{post.title}</div>

            }
            <h2>
                Comments
            </h2>
            {isComLoading
                ? <Loader/>
                : <div>
                    {comment.map(item => 
                        <div style={{marginTop: '15px'}}>
                            <h5 style={{fontWeight: 'bold'}}>{item.email}</h5>
                            <div>{item.body}</div>
                        </div>
                    )}
                  </div>  
            }
        </div>
    );
};

export default PostIdPage;