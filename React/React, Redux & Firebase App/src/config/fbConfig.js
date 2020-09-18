import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyB12yhxI717RE7sAetpKsn1z8CD-aaeod4',
  authDomain: 'net-projectplan-c098c.firebaseapp.com',
  databaseURL: 'https://net-projectplan-c098c.firebaseio.com',
  projectId: 'net-projectplan-c098c',
  storageBucket: 'net-projectplan-c098c.appspot.com',
  messagingSenderId: '770892433668',
  appId: '1:770892433668:web:3276ff886c77578b3ce851',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
