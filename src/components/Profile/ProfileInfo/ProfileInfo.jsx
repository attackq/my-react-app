import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.profile}>
            <div className={s.logo}>
                <img
                    src="https://image.winudf.com/v2/image/Y29tLnNnbS5iZWF1dGlmdWxiZWFjaHdhbGxwYXBlcl9zY3JlZW5zaG90c18wXzFjMTMxZGFj/screen-0.jpg?fakeurl=1&type=.webp"
                    alt=""/>
            </div>
            <div className={s.description}>
                <img src={props.profile.photos.small} alt=""/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                {props.profile.lookingForAJob
                    ? <button>HELP ME FIND MY JOB</button>
                    : <button>NICE JOB BRO</button>}
            </div>
        </div>
    )
}

export default ProfileInfo;