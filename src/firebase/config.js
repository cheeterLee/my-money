import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAtbEukXJVrCdEDQtunnjN6vF0v7d_VwHk",
    authDomain: "mymoney-7ea91.firebaseapp.com",
    projectId: "mymoney-7ea91",
    storageBucket: "mymoney-7ea91.appspot.com",
    messagingSenderId: "599561327590",
    appId: "1:599561327590:web:79da745d5b29db944dbc27"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }