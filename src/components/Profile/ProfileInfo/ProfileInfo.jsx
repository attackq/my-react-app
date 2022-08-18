import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.profile}>
            <div className={s.logo}>
                <img
                    src="https://image.winudf.com/v2/image/Y29tLnNnbS5iZWF1dGlmdWxiZWFjaHdhbGxwYXBlcl9zY3JlZW5zaG90c18wXzFjMTMxZGFj/screen-0.jpg?fakeurl=1&type=.webp"
                    alt=""/>
            </div>
            <div className={s.description}>
                description + ava
            </div>
        </div>
    )
}

export default ProfileInfo;