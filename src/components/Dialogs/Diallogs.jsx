import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {

    let messageData = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let updateMessageText = () => {
        props.updateMessageText(messageData.current.value);
    }

    return (<div className={style.dialogsWrapper}>
        <div className={style.dialogs}>
            {props.dialogsPage.dialogs.map((dialog, ind) => (
                <DialogItem name={dialog.name} id={dialog.id} logo={dialog.logo} key={ind}/>))}
        </div>
        <div className={style.messages}>
            {props.dialogsPage.messages.map((message, index) => (
                <Message message={message.text} key={index}/>))}
            <textarea ref={messageData} onChange={updateMessageText} value={props.messageValue}></textarea>
            <div>
                <button onClick={addMessage}>add message</button>
            </div>
        </div>
    </div>)
}

export default Dialogs;