// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } 
  from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// 🔧 ใส่ค่าจาก Firebase ของคุณตรงนี้
const firebaseConfig = {
  apiKey: "AIzaSyBT8Q09srNXg-Pp7oKNE6Vt5OGI4Y2ST80",
  authDomain: "goolag-pink.firebaseapp.com",
  projectId: "goolag-pink",
  storageBucket: "goolag-pink.firebasestorage.app",
  messagingSenderId: "915886007681",
  appId: "1:915886007681:web:78ee906964c6b0edd63480",
  measurementId: "G-05YJHY3PCN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
