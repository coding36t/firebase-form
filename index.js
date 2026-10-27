// Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
  
  

import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";




  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional



  const firebaseConfig = {
    apiKey: "AIzaSyCOGGX6WB-JntYeZeeXsihpExEBVWE1O7k",
    authDomain: "smit-test007.firebaseapp.com",
    projectId: "smit-test007",
    storageBucket: "smit-test007.firebasestorage.app",
    messagingSenderId: "378592284398",
    appId: "1:378592284398:web:30225896339c75bad76dff",
    measurementId: "G-EKFC4FLR1X"
  };



  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  console.log(app)

  
const login = async (e) => {
    e.preventDefault();

    const auth = getAuth();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    try {
        await signInWithEmailAndPassword(auth, email, password);

        alert("Login successful!");

        window.location.href = "./dashboard.html";

    } catch (error) {
        alert(error.message);
        console.log(error.code);
    }
};

document.getElementById("login-form")
    ?.addEventListener("submit", login);


  const register = async (e) => {
e.preventDefault();
    const auth = getAuth();

    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

await createUserWithEmailAndPassword(auth, email, password)
  // .then((userCredential) => {
  //   // Signed up 
  //   const user = userCredential.user;
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // ..
  // });

console.log("user has been created");

 window.location.href = "./dashboard.html";

    console.log(email, password);
  };


  
const signout = async () => {
    const auth = getAuth();

    try {
        await signOut(auth);

        alert("Signout successful!");

        window.location.href = "./login.html";

    } catch (error) {
        console.log(error);
        alert(error.message);
    }
};

document.getElementById("signout")
    ?.addEventListener("click", signout);




  
  document.getElementById("login-form")?.addEventListener("submit", login);
  document.getElementById("register-form")?.addEventListener("submit", register);