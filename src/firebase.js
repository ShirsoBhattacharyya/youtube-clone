import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCVO1yY4_A5iz2Ae52sbHBRJ3oqmeg7Hpk",
    authDomain: "yt-clone-shirso.firebaseapp.com",
    projectId: "yt-clone-shirso",
    storageBucket: "yt-clone-shirso.appspot.com",
    messagingSenderId: "52215503512",
    appId: "1:52215503512:web:0fe3ecf70013a2db190eed"
  };
firebase.initializeApp(firebaseConfig);
export default firebase.auth();