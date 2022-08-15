import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <a href="src/components/Navbar/Navbar#">Profile</a>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <a href="src/components/Navbar/Navbar#">Message</a>
            </div>
            <div className={classes.item}>
                <a href="src/components/Navbar/Navbar#">News</a>
            </div>
            <div className={classes.item}>
                <a href="src/components/Navbar/Navbar#">Music</a>
            </div>
            <div className={classes.item}>
                <a href="src/components/Navbar/Navbar#">Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;