import classes from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {
    return (
        <div className={classes.friends}>
            <h2>Friends</h2>
            {props.state.map((person, ind) => (
                <Friend name={person.name} logo={person.logo} key={ind}/>
            ))}
        </div>
    )
}

export default Friends;