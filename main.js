// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyC8WhR8o6ZUgy5OPY1H9WZdQwSenZQhAUQ",
    authDomain: "lunar-alpha-232604.firebaseapp.com",
    databaseURL: "https://lunar-alpha-232604.firebaseio.com",
    projectId: "lunar-alpha-232604",
    storageBucket: "lunar-alpha-232604.appspot.com",
    messagingSenderId: "101048105070",
    appId: "1:101048105070:web:f32d713ea5b8bbc9438e7f",
    measurementId: "G-54X8C1N3ST"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();


let messagesRef = firebase.database().ref('messages');

const getID = (id) => document.getElementById(id).value;

document.getElementById("formDiv").addEventListener('submit', submitForm);


function submitForm (e) {

e.preventDefault();

let firstName = getID("fname");
let lastName = getID("lname");
let email = getID("email");

saveMessage(firstName, lastName, email);

document.getElementById('successMessage').style.display = "block";

setTimeout(() => document.getElementById('successMessage').style.display = "none", 3000);

}

// Save message to firebase

const saveMessage = (firstName, lastName, email) => {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        First_Name: firstName,
        Last_Name: lastName,
        Email: email
    });
}
