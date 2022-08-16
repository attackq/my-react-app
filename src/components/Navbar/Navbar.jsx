import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
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
            {/*<div >*/}
            {/*    <Link to="/news">News</Link>*/}
            {/*</div>*/}
            {/*<div >*/}
            {/*    <Link to="/music">Music</Link>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <Link to="/settings">Settings</Link>*/}
            {/*</div>*/}
        </nav>
    )
}

export default Navbar;