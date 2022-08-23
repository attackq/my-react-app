import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Diallogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.state.dialogsPage.dialogs}/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile/" element={<Profile
                            profilePage={props.state.profilePage}
                            addPost={props.addPost}
                            updatePostText={props.updatePostText}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs
                            dialogsPage={props.state.dialogsPage}
                            addMessage={props.addMessage}
                            updateMessageText={props.updateMessageText}
                            messageValue={props.state.dialogsPage.newMessageText}/>}/>
                        <Route path="/news" element={<News/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
