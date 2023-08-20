  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
      apiKey: "AIzaSyCBeDuzY4-3jmo6X3f1IZ-0hAA_icMRqiI",
      authDomain: "singup-d6447.firebaseapp.com",
      projectId: "singup-d6447",
      storageBucket: "singup-d6447.appspot.com",
      messagingSenderId: "257979370039",
      appId: "1:257979370039:web:742afc315b347eb4928db2",
      measurementId: "G-PX0538C2PW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();
  console.log(app);



  //----- New Registration code start	  
  document.getElementById("register").addEventListener("click", function () {
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      var FirstName = document.getElementById("FirstName").value;
      var LastName = document.getElementById("LastName").value;
      //For new registration
      createUserWithEmailAndPassword(auth, email, password,FirstName,LastName)
          .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log(user);
              alert("Registration successfully!!");
              
                window.location.href = "index.html";
            
              // ...
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
              console.log(errorMessage);
              alert(error);
          });
  });
  //----- End