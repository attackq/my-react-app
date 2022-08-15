import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://png.pngtree.com/png-vector/20190303/ourmid/pngtree-modern-abstract-3d-logo-png-image_771012.jpg"
                alt=""/>
            <span>{props.message}</span>
            <div>
                {props.likesCount}
                <button>like</button>
            </div>
        </div>
    )
}

export default Post;