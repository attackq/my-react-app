import Post from "./Post/Post";
import s from './Posts.module.css'
import React from "react";

const Posts = (props) => {

    let onAddPost = () => {
        props.onAddPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.post}>
                {props.posts.map((item, ind) => (
                    <Post message={item.text} likesCount={item.likesCount} key={ind}/>
                ))}
            </div>
        </div>
    )
}

export default Posts;