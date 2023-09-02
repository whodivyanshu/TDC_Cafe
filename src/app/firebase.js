import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyCXEU0TumHci14P_cmtejivrssp1sf9MqU",
  authDomain: "cafemanage-63316.firebaseapp.com",
  projectId: "cafemanage-63316",
  storageBucket: "cafemanage-63316.appspot.com",
  messagingSenderId: "9330556169",
  appId: "1:9330556169:web:7dfc2523b26b467ad6e7d8",
  databaseURL: "https://cafemanage-63316-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
