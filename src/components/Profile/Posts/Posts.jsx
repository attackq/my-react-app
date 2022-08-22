import Post from "./Post/Post";
import s from './Posts.module.css'
import React from "react";

const Posts = (props) => {

    let newPostText = React.createRef()

    let onClickAlert = () => {
        debugger;
        props.addPost(newPostText.current.value)
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostText}></textarea>
                </div>
                <div>
                    <button onClick={onClickAlert}>Add post</button>
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