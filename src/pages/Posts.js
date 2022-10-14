import React, { useState, useEffect, useMemo } from 'react'
import { Pagination } from '../pagination/Pagination';
import Btn from '../Btn';
import PostLists from '../PostLists';
import Loader from '../loader/Loader';
import PostService from '../API/PostService';
import {usePosts} from '../hooks/usePosts';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../utils/Pages';
import PostForm from '../PostForm';
import PostFilter from '../PostFilter';
import MyModal from '../modal/MyModal'
import '../App.css'






function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(0)
    const sortAndSearchPosts = usePosts(posts, filter.sort, filter.query)
    const [onRequest, isPostLoading, postError] = useFetching( async (limit, page) => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    })
    

    const changePage = (page) => {
        setPage(page)
        onRequest(limit, page)
    }
    

    useEffect(() => {
        onRequest()
        onRequest(limit, page)
    }, [])
        
    
    const createPost = (newPost) => {
       setPosts([...posts, newPost]) 
       setModal(false)
    }

    const deletePost = (post) => {
        setPosts(posts.filter(i => i.id !== post.id))
    }

  return (
      <section className="section"> 
      <Btn style={{marginTop: '30px'}} onClick={() => setModal(true)}>
          Создать пост
      </Btn>
      <MyModal visible={modal} setVisible={setModal}>
      <PostForm create={createPost}/>
      </MyModal>
      
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError &&
            <h1>Error ${postError}</h1>
      }
      {isPostLoading
            ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
            : <PostLists title={'Post first 1'} posts={sortAndSearchPosts} remove={deletePost}/>  
      }      
      <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
      </section>
  )
}

export default Posts;