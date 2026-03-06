// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaiw29R1qhR9efn0LNvf6W7p8eLlKKKws",
  authDomain: "dragon-news-e05dc.firebaseapp.com",
  projectId: "dragon-news-e05dc",
  storageBucket: "dragon-news-e05dc.firebasestorage.app",
  messagingSenderId: "457818329053",
  appId: "1:457818329053:web:8caf6a414aea8f6fd3f034"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;