import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDlCQwWdMCV-LPvz3xl2iUxF-BtNwMD9i0",
  authDomain: "sign-up-simple.firebaseapp.com",
  projectId: "sign-up-simple",
  storageBucket: "sign-up-simple.appspot.com",
  messagingSenderId: "951174305726",
  appId: "1:951174305726:web:81ddc387f588c44862cbef"
};

const app = initializeApp(firebaseConfig);

export default app;