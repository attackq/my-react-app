import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {addMessageCreator, updateMessageTextCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let messageData = React.createRef();
    let newMessageText = state.newMessageText;

    let addMessage = () => {
        props.store.dispatch(addMessageCreator());
    }

    let updateMessageText = (e) => {
        let body = e.target.value
        props.store.dispatch(updateMessageTextCreator(body))
    }

    return (<div className={style.dialogsWrapper}>
        <div className={style.dialogs}>
            {state.dialogs.map((dialog, ind) => (
                <DialogItem name={dialog.name} id={dialog.id} logo={dialog.logo} key={ind}/>))}
        </div>
        <div className={style.messages}>
            <div>
                {state.messages.map((message, index) => (
                    <Message message={message.text} key={index}/>))}
            </div>
            <div>
                <div><textarea ref={messageData} onChange={updateMessageText}  value={newMessageText}></textarea></div>
                <div><button onClick={addMessage}>add message</button></div>
            </div>
        </div>
    </div>)
}

export default Dialogs;