import firebase from "firebase/app"
import "firebase/database"

const fbConfig = {
  apiKey: "AIzaSyC2CvosJDACr21nw8WbCOmz55OcAcUkvs0",
  authDomain: "introduction-b04f9.firebaseapp.com",
  databaseURL: "https://introduction-b04f9-default-rtdb.firebaseio.com",
  projectId: "introduction-b04f9",
  storageBucket: "introduction-b04f9.appspot.com",
  messagingSenderId: "73449465557",
  appId: "1:73449465557:web:107faa70ef629b575ba45c"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(fbConfig);
}

export default firebase