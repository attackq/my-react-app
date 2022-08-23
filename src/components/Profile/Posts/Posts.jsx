import Post from "./Post/Post";
import s from './Posts.module.css'
import React from "react";

const Posts = (props) => {

    let newPostText = React.createRef()

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        props.updatePostText(newPostText.current.value);
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostText} onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.post}>
                {props.postsData.map((item, ind) => (
                    <Post message={item.text} likesCount={item.likesCount} key={ind}/>
                ))}
            </div>
        </div>
    )
}

export default Posts;