// Import the functions you need from the SDKs you need
import * as firebaseApp from '@react-native-firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArd7IEHhn7JP3SX4xK6PQt_z3ICXxlGhg",
    authDomain: "ekahal-69c4b.firebaseapp.com",
    projectId: "ekahal-69c4b",
    storageBucket: "ekahal-69c4b.appspot.com",
    messagingSenderId: "8142873829",
    appId: "1:8142873829:web:bbe09c20df5a281a49600c"
};

// Initialize Firebase
let app;

if (firebaseApp.default.apps.length == 0) {
    app = firebaseApp.default.initializeApp(firebaseConfig);
} else {
    app = firebaseApp.default.app
}

export { app };