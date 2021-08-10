
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyADXJ9VjHwC3jcGIGXRN_fewS7Ka75OCSg",
      authDomain: "kwitter-224ee.firebaseapp.com",
      databaseURL: "https://kwitter-224ee-default-rtdb.firebaseio.com",
      projectId: "kwitter-224ee",
      storageBucket: "kwitter-224ee.appspot.com",
      messagingSenderId: "494898336916",
      appId: "1:494898336916:web:1b3f6f2ce8091c0e77d081"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+ user_name+"!";

    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room_name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log(firebase_message_id);
     console.log(message_data);
     name=message_data['name'];
     message=message_data['message'];
     like=message_data1['like'];
     name_with_tag="<h4>"=name="<img class='user_tick' src='tick.png'></h4>";
     message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
     like_button="<button class='btn btn-warning' id="=firebase_message_id+" value="+like+"onclick='updateLike(this.id)'>";
     span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span>,</button><hr>";

     row=name_with_tag+message_with_tag+like_button+span_with_tag;
     document.getElementById("output").innerHTML+= row;
      //End code
      });});}
      function redirectToRoomName(name){
            console.log(name);
            localStorage.setItem("room_name",name);
            window.location="kwitter_page.html";
      }
getData();

function updateLike(message_id){
      console.log("clicked on the like button -"+ message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}
