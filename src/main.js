// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import firebase from 'firebase'

Vue.config.productionTip = false

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBT1lmlbQkXBREOkbboWBE3A0uSvHJLCu8",
  authDomain: "firevue-82601.firebaseapp.com",
  databaseURL: "https://firevue-82601.firebaseio.com",
  projectId: "firevue-82601",
  storageBucket: "firevue-82601.appspot.com",
  messagingSenderId: "570397033881",
  appId: "1:570397033881:web:9e537abb4363bbedb6bf08",
  measurementId: "G-3DS49D4JM5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

window.firebase=firebase;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
