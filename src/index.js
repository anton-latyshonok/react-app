import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, post: 'Hi, how are you', likesCount: 3},
    {id: 2, post: "It's my first post", likesCount: 5},
    {id: 3, post: "Hello everyone", likesCount: 0}
]
let dialogs = [
    {id: 1, name: 'Bodya'},
    {id: 2, name: 'Gena'},
    {id: 3, name: 'Gena'},
    {id: 4, name: 'Andrew'},
    {id: 5, name: 'Vova'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your health?'},
    {id: 3, message: 'Nihaoma'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
