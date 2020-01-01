import firebase from 'firebase'

var firebaseConfig = {
  apiKey: 'AIzaSyCUEgPMGvFL2hIj23v05m3GXvFdabUElxc',
  authDomain: 'vue-smoothies-bc47c.firebaseapp.com',
  databaseURL: 'https://vue-smoothies-bc47c.firebaseio.com',
  projectId: 'vue-smoothies-bc47c',
  storageBucket: 'vue-smoothies-bc47c.appspot.com',
  messagingSenderId: '139161052417',
  appId: '1:139161052417:web:0bff9cc6c74ba4d40de700'
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
