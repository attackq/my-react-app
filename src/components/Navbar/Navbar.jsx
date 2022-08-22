import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
    return (
        <div className={classes.nav}>
            <nav>
                <div>
                    <NavLink to="/profile"
                             className={({isActive}) => (isActive ? classes.active : classes.item)}
                    >Profile</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs"
                             className={({isActive}) => (isActive ? classes.active : classes.item)}
                    >Message</NavLink>
                </div>
            </nav>
            <Friends state={props.state}/>
        </div>
    )
}

export default Navbar;