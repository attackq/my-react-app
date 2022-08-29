import React from "react";
import {addMessageCreator, updateMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateMessageText: (body) => {
            dispatch(updateMessageTextCreator(body))
        },
        addMessageText: () => {
            dispatch(addMessageCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;