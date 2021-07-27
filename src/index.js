import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts= [
  { id: 1, message: 'Hello World!', likesCount: 0},
  { id: 2, message: 'My first post', likesCount: 23},
  { id: 3, message: 'Blabla', likesCount: 2},
  { id: 4, message: 'Da', likesCount: 1},
];

let dialogs = [
	{ id: 1, name: 'Yegor' },
	{ id: 2, name: 'Marshak' },
	{ id: 3, name: 'Ansimist' }, 
	{ id: 4, name: 'Kirill' },
	{ id: 5, name: 'Sito' },
	{ id: 6, name: 'Mag7' },
];

let messages = [
	{ id: 1, message: 'Hi'},
	{ id: 2, message: 'Where are you'},
	{ id: 3, message: 'Bye'}, 
	{ id: 4, message: 'I need your bike, bro'},
	{ id: 5, message: 'Who did it ?' },
	{ id: 6, message: 'Hei, snakker du norsk ?' },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts = {posts} dialogs = {dialogs} messages = {messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
