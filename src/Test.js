import {useState} from 'react'
import Btn from './Btn'
import {useNavigate} from 'react-router-dom'


const Test = (props) => {
    const router = useNavigate('')
    const {body, title} = props.post;
    return (
        <div className="container">
            <div className="texts">
                <h1 className="title">{props.post.id} {title}</h1>
                <div className="text">{body}</div>
            </div>
            <Btn name={'Add'} onClick={() => router(`/posts/${props.post.id}`)}/>  
            <Btn name={'Delete'} onClick={() => props.remove(props.post)}/>     
        </div>
    )
}
export default Test;