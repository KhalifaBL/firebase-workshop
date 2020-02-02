// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAX8UZxzqRd9QI6xINK8nk7oqHUXeHhI3Y",
    authDomain: "fir-workshop-ade85.firebaseapp.com",
    databaseURL: "https://fir-workshop-ade85.firebaseio.com",
    projectId: "fir-workshop-ade85",
    storageBucket: "fir-workshop-ade85.appspot.com",
    messagingSenderId: "690465247945",
    appId: "1:690465247945:web:a78d7e4687b3b7f064f318",
    measurementId: "G-F2LJ1WZMYP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

document.getElementById('contact-form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = document.getElementById('exampleInputName').value;
    var lastname = document.getElementById('exampleInputLastName').value;
    var email = document.getElementById('exampleInputEmail1').value;
    saveMessage(name, lastname, email);
    alert('Submission done')
}

function saveMessage(name, lastname, email) {
    var messagesRef = firebase.database().ref('contact-form/'+email);

    //var newElement = messagesRef.push();
    messagesRef.set({
        name: name,
        LastName: lastname,
        email: email

    });
}
