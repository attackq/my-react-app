import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {addMessageCreator, updateMessageTextCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let addMessage = () => {
        props.addMessageText();
    }

    let updateMessageText = (e) => {
        let body = e.target.value;
        props.updateMessageText(body)
    }

    return (<div className={style.dialogsWrapper}>
        <div className={style.dialogs}>
            {props.dialogsPage.dialogs.map((dialog, ind) => (
                <DialogItem name={dialog.name} id={dialog.id} logo={dialog.logo} key={ind}/>))}
        </div>
        <div className={style.messages}>
            <div>
                {props.dialogsPage.messages.map((message, index) => (
                    <Message message={message.text} key={index}/>))}
            </div>
            <div>
                <div><textarea onChange={updateMessageText} value={props.newMessageText}></textarea></div>
                <div>
                    <button onClick={addMessage}>add message</button>
                </div>
            </div>
        </div>
    </div>)
}

export default Dialogs;