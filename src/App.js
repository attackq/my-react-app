import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsСontainer";
import UsersContainer from "./components/Users/UsersContainer";
import React from "react";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                    <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                </Routes>
            </div>
            <div>{m1.render()}</div>
        </div>
    );
}

class Man extends React.Component{
    constructor(props) {
        super(props)
        this.props = props;
    }
    render() {
        return (
            <div>{this.props.name} {this.props.age}</div>
        )
    }
}

let m1 = new Man({name: 'vasya', age: 23})

export default App;
