import Post from "./Post/Post";
import s from './Posts.module.css'
import React from "react";
import {addPostCreator, updateNewPostCreator} from "../../../redux/profile-reducer";

const Posts = (props) => {

    let newPostText = React.createRef();
    let profileState = props.store.getState().profilePage;

    let addPost = () => {
        props.store.dispatch(addPostCreator());
    }

    let onPostChange = () => {
        let text = newPostText.current.value;
        props.store.dispatch(updateNewPostCreator(text));
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostText} onChange={onPostChange} value={profileState.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.post}>
                {profileState.posts.map((item, ind) => (
                    <Post message={item.text} likesCount={item.likesCount} key={ind}/>
                ))}
            </div>
        </div>
    )
}

export default Posts;