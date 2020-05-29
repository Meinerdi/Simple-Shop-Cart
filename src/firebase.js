import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyC5nLLXxjB379cfh70ZQY5gYcpyDhu86CI",
    authDomain: "simple-shop-test.firebaseapp.com",
    databaseURL: "https://simple-shop-test.firebaseio.com",
    projectId: "simple-shop-test",
    storageBucket: "simple-shop-test.appspot.com",
    messagingSenderId: "289767511221",
    appId: "1:289767511221:web:7b7a0f65d89d364f295afc"
};

var fire = firebase.initializeApp(firebaseConfig);

export default fire