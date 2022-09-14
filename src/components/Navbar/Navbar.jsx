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
                <div>
                    <NavLink to="/users"
                             className={({isActive}) => (isActive ? classes.active : classes.item)}
                    >Users</NavLink>
                </div>
            </nav>
            <Friends/>
        </div>
    )
}

export default Navbar;