import  firebase from 'firebase/app'

import 'firebase/auth'

import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC3zLdOaLO3D-PfVOvqBsnjsYvgRTEKiRo",
    authDomain: "metal-slime-app.firebaseapp.com",
    databaseURL: "https://metal-slime-app-default-rtdb.firebaseio.com",
    projectId: "metal-slime-app",
    storageBucket: "metal-slime-app.appspot.com",
    messagingSenderId: "312235634891",
    appId: "1:312235634891:web:50ec2332a6a7051a296b4e"
}

firebase.initializeApp(firebaseConfig)

export default firebase