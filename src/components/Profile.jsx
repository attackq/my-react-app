import s from './Profile.module.css'

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
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className="posts">
                    <div className={s.item}> post 1</div>
                    <div className={s.item}>post 2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;