import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyBc0Wk5o74QnbuLyN84eYCNp_waazfs9Y0",
    authDomain: "otnatbnb.firebaseapp.com",
    databaseURL: "https://otnatbnb.firebaseio.com",
    projectId: "otnatbnb",
    storageBucket: "otnatbnb.appspot.com",
    messagingSenderId: "667493988832"
  };
  
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;