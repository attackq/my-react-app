import style from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (<div className={style.dialog + ' ' + style.active}>
        <div>
            <img src={props.logo} alt="" className={style.logo}/>
        </div>
        <div>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    </div>)
}

export default DialogItem;