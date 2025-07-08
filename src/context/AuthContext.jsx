import { auth } from "../../firebase";
import { db } from "../../firebase";

import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import { useState, useEffect, createContext, useContext } from "react";

const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider(props) {
  const { children } = props;
  const [globalUser, setGlobalUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [globalData, setGlobalData] = useState(null);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logout() {
    setGlobalUser(null);
    setGlobalData(null);
    return signOut(auth);
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  const value = {
    globalUser,
    setGlobalUser,
    isLoading,
    setIsLoading,
    globalData,
    setGlobalData,
    signup,
    login,
    logout,
    resetPassword,
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      // console.log("CURRENT USER: ", user);
      setGlobalUser(user);
      if (!user) {
        console.log("No user is signed in");
        return;
      }
      try {
        setIsLoading(true);
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        let firestoreData = {};
        if (docSnap.exists()) {
          firestoreData = docSnap.data();

          // console.log("Found user data", firestoreData);
        }
        setGlobalData(firestoreData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    });
    return unsubscribe;
  }, []);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
