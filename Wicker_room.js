const firebaseConfig = {
      apiKey: "AIzaSyCdmukWCEKsBl0WD-fDH0q5uG3k2fdHoUs",
      authDomain: "wicker-the99p.firebaseapp.com",
      databaseURL: "https://wicker-the99p-default-rtdb.firebaseio.com",
      projectId: "wicker-the99p",
      storageBucket: "wicker-the99p.appspot.com",
      messagingSenderId: "254837599617",
      appId: "1:254837599617:web:e9c48acf4ff7e987ce4c80"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
