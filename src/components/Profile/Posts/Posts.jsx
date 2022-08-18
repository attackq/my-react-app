import Post from "./Post/Post";
import s from './Posts.module.css'

const Posts = (props) => {

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
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