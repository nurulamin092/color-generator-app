// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_CRCuaElzA7kxRXFSPbxyI6dwWShpaU0",
    authDomain: "color-generator-app.firebaseapp.com",
    projectId: "color-generator-app",
    storageBucket: "color-generator-app.appspot.com",
    messagingSenderId: "300568523402",
    appId: "1:300568523402:web:b1981e6d10483647433373"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;