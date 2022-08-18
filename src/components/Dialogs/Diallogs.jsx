import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    return (<div className={style.dialogsWrapper}>
        <div className={style.dialogs}>
            {props.dialogsData.map((dialog, ind) => (
                <DialogItem name={dialog.name} id={dialog.id} key={ind}/>))}
        </div>
        <div className={style.messages}>
            {props.messagesData.map((message, index) => (
                <Message message={message.text} key={index}/>))}
        </div>
    </div>)
}

export default Dialogs;