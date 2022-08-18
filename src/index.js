import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Egor'},
    {id: 4, name: 'Alex'},
    {id: 5, name: 'Sam'},
    {id: 6, name: 'Gangsta'}
]

let messagesData = [
    {id: 1, text: 'hi'},
    {id: 2, text: 'How are you'},
    {id: 3, text: 'i am here'}
]

let postsData = [
    {id: 1, text: 'My first post', likesCount: 2},
    {id: 2, text: 'How are you?', likesCount: 12},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogsData={dialogsData}
         messagesData={messagesData} postsData={postsData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
