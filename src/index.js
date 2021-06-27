import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwV-FXoRkrYUIoqDU31bfHZWtlQE9ta-A",
  authDomain: "cart-6a740.firebaseapp.com",
  projectId: "cart-6a740",
  storageBucket: "cart-6a740.appspot.com",
  messagingSenderId: "836700025650",
  appId: "1:836700025650:web:a51d38e06ee18b8f9d5d2b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render( <App/>, document.getElementById('root')
);


