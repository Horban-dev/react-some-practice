import Btn from './Btn';
import Test from './Test';
import {TransitionGroup, CSSTransition } from 'react-transition-group';

const PostLists = ({posts, title, remove}) => {

    if(!posts.length) {
        return (
            <div>
                <div className='zero'>Zero Posts</div>
            </div>
        )
    }
    return (
        <div>
            <h1 className="title">{title}</h1>
            <TransitionGroup>
            {posts.map((post, index) => 
                <CSSTransition
                key={post.id}
                timeout={500}
                classNames="post">
                    <Test remove={remove} number={index + 1} post={post} />    
                </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}
export default PostLists;