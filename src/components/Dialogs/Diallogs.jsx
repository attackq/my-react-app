import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {

    let messageData = React.createRef();

    let addMessage = () => {
        alert(messageData.current.value);
    }

    return (<div className={style.dialogsWrapper}>
        <div className={style.dialogs}>
            {props.state.dialogs.map((dialog, ind) => (
                <DialogItem name={dialog.name} id={dialog.id} logo={dialog.logo} key={ind}/>))}
        </div>
        <div className={style.messages}>
            {props.state.messages.map((message, index) => (
                <Message message={message.text} key={index}/>))}
            <textarea ref={messageData}></textarea>
            <div>
                <button onClick={addMessage}>add message</button>
            </div>
        </div>
    </div>)
}

export default Dialogs;