//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyADXJ9VjHwC3jcGIGXRN_fewS7Ka75OCSg",
      authDomain: "kwitter-224ee.firebaseapp.com",
      databaseURL: "https://kwitter-224ee-default-rtdb.firebaseio.com",
      projectId: "kwitter-224ee",
      storageBucket: "kwitter-224ee.appspot.com",
      messagingSenderId: "494898336916",
      appId: "1:494898336916:web:1b3f6f2ce8091c0e77d081"
    };
 
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code


//End code
      } });  }); }
getData();
function send(){
 msg=document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
       name:user_name,message:msg,
       like:0
 });
 document.getElementById("msg").value="";
}