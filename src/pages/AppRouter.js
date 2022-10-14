import {Route, Routes, Navigate} from 'react-router-dom';
import About from './About'
import Posts from './Posts'
import Error from './Error';
import Login from './Login';
import PostIdPage from './PostIdPage';


const AppRouter = () => {
  
    return (
      
        <Routes>
                <Route path="/about" element={<About/>}/>
                <Route exact path="/posts" element={<Posts/>}/>
                <Route path="/error" element={<Error/>}/>
                <Route exact path="/posts/:id" element={<PostIdPage/>}/>
                <Route path="*" element={<Navigate to ="error"/>}/> 
                
        </Routes>
    
    );
};

export default AppRouter;