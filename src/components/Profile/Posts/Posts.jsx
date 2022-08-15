import Post from "./Post/Post";

const Posts = () => {
    return (
        <div>
            My posts
            <div>
                New post
            </div>
            <div className="posts">
                <Post message="hello, world" likesCount="3"/>
                <Post message="it's my first post" likesCount="5"/>
            </div>
        </div>
    )
}

export default Posts;