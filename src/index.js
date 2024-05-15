import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import self
// if ("serviceWorker" in navigator) {
//     window.addEventListener("load", function() {
//         navigator.serviceWorker
//         .register("serviceWorker.js")
//         .then(res => {
//           // console.log("Service worker registered.")
//         })
//         .catch(err => console.log("Service worker not registered.", err))
//     })
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
