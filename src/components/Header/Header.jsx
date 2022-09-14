import h from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={h.header}>
            <div className={h.logo}>
                intouch
            </div>
            <div className={h.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;