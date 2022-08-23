import s from './Profile.module.css'
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <Posts postsData={props.profilePage.posts}
                   addPost={props.addPost}
                   newPostText={props.profilePage.newPostText}
                   updatePostText={props.updatePostText}/>
        </div>
    )
}

export default Profile;