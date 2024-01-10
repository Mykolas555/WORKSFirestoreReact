import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi9F55zpH2to4CTclnH16mi1NG-wIforg",
  authDomain: "react-time-table.firebaseapp.com",
  projectId: "react-time-table",
  storageBucket: "react-time-table.appspot.com",
  messagingSenderId: "147663145477",
  appId: "1:147663145477:web:4e4d897217b897ca45ea6c"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase

export{ 
  app 
}