import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8LzarLqGpTHuKb_F-7-JxEUefG9se80U",
  authDomain: "udemy-vue-tnn-blog.firebaseapp.com",
  projectId: "udemy-vue-tnn-blog",
  storageBucket: "udemy-vue-tnn-blog.appspot.com",
  messagingSenderId: "285478383757",
  appId: "1:285478383757:web:0d272a4a28298c39d932c4",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();

export { projectFirestore };
