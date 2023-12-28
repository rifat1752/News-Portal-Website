// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYxWtSETRdZG9--mAbTNZjLzPzyyJ6he8",
  authDomain: "news-portal-websites.firebaseapp.com",
  projectId: "news-portal-websites",
  storageBucket: "news-portal-websites.appspot.com",
  messagingSenderId: "445731836144",
  appId: "1:445731836144:web:17e0300c641d8dfe01b235"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;