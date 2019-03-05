import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAH7T0J8MxHgTJuqXWKCEW42YCY6jYocdQ",
  authDomain: "react-firebase-e8e04.firebaseapp.com",
  databaseURL: "https://react-firebase-e8e04.firebaseio.com",
  projectId: "react-firebase-e8e04",
  storageBucket: "react-firebase-e8e04.appspot.com",
  messagingSenderId: "516201277833"
};

const fire = firebase.initializeApp(config);
export default fire;