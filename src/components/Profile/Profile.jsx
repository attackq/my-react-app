import s from './Profile.module.css'
import Posts from "./Posts/Posts";

const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img
                    src="https://image.winudf.com/v2/image/Y29tLnNnbS5iZWF1dGlmdWxiZWFjaHdhbGxwYXBlcl9zY3JlZW5zaG90c18wXzFjMTMxZGFj/screen-0.jpg?fakeurl=1&type=.webp"
                    alt=""/>
            </div>
            <div>
                description + ava
            </div>
            <Posts/>
        </div>
    )
}

export default Profile;