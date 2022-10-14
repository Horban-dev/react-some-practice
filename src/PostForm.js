import Input from "./Input"
import Btn from "./Btn"
import { useState } from "react"

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''})
   
    
 const addInp = (e) => {
     e.preventDefault()
     const newPost = {
         ...post, id: Date.now()
     }
     create(newPost)
     setPost({title: '', body: ''})
 }
    return (
        <form>
          <Input 
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text" 
                placeholder="first input"/>
          <Input 
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text" 
                placeholder="second input"/>

            
          <Btn style={{backgroundColor: 'yellow'}} onClick={addInp}>
              Click
          </Btn>
          
      </form>
    )
}

export default PostForm;