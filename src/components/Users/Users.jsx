import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (<div>
        {pages.map(page => {
                return <span className={props.currentPage === page && styles.selectedPage}
                             onClick={() => {
                                 props.onPageChanged(page)
                             }}>{page}</span>
            }
        )}
        {props.users.map(user => (
            <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={styles.userPhoto} alt='photo'/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                props.toggleFollowingProgress(true, user.id)
                                usersAPI.getFollow(user.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.toggleFollowUser(user.id)
                                    }
                                    props.toggleFollowingProgress(false, user.id)
                                })
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                props.toggleFollowingProgress(true, user.id)
                                usersAPI.getUnfollow(user.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.toggleFollowUser(user.id)
                                    }
                                    props.toggleFollowingProgress(false, user.id)
                                })
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>
                </span>
            </div>
        ))}
    </div>)
}

export default Users;