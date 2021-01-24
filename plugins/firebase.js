import firebase from "firebase/app"
import "firebase/database"

const fbConfig = {
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(fbConfig);
}

export default firebase