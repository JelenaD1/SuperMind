import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyC0o7RsDIGJ02ZqQIex4nJFTPudaIIurHs",
  authDomain: "login-dac4a.firebaseapp.com",
  projectId: "login-dac4a",
  storageBucket: "login-dac4a.appspot.com",
  messagingSenderId: "94903382668",
  appId: "1:94903382668:web:9495d12a69e2d5c55981a9"
}

const fire = firebase.initializeApp(firebaseConfig)

export default fire
