import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  //creating user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in the user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign in with google
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //observing the user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user is: ", currentUser);
      setLoading(false);
      const currentUserEmail = currentUser?.email;
      const loggedEmail = { email: currentUserEmail };
      // if user exist then issue a token
      if (currentUser) {
        axios
          .post(
            "https://car-doctor-server-sigma-ruby.vercel.app/jwt",
            loggedEmail,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log("token response from auth", res.data);
          });
      } else {
        axios
          .post(
            "https://car-doctor-server-sigma-ruby.vercel.app/logout",
            loggedEmail,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log("logged out ", res.data);
          });
      }
    });
    return () => {
      return unSubscribe;
    };
  }, []);

  //logOut the user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const AuthInfo = { user, loading, createUser, signIn, googleSignIn, logOut };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;