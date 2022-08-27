import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";

// state={props.state.dialogsPage.dialogs}
const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile/" element={<Profile
                        store={props.store}/>}/>
                    <Route path="/dialogs/*" element={<Dialogs
                        store={props.store}/>}/>
                    <Route path="/news" element={<News/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
