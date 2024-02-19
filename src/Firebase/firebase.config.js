// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey:import.meta.env.VITE_apiKey,
authDomain:import.meta.env.VITE_authDomain,
projectId:import.meta.env.VITE_projectId,
storageBucket:import.meta.env.VITE_storageBucket,
messagingSenderId:import.meta.env.VITE_messagingSenderId,
appId:import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyANc9-_I_0tytEJ-cgFO_nkveYCzdf-Y5w",
//   authDomain: "kids-kingdom-8406b.firebaseapp.com",
//   projectId: "kids-kingdom-8406b",
//   storageBucket: "kids-kingdom-8406b.appspot.com",
//   messagingSenderId: "567632479693",
//   appId: "1:567632479693:web:322682d69c3a4b1ab77084"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app