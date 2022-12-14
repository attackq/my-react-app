import {addPostCreator, updateNewPostCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostCreator(text));
        },
        onAddPost: () => {
            dispatch(addPostCreator());
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);



export default PostsContainer;