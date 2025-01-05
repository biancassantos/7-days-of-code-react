import { AuthContext } from "./AuthContext";
import { useState, useEffect } from "react";
import { auth, db } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection } from "firebase/firestore";

export function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [isPending, setIsPending] = useState(true);

  const postsCollectionRef = collection(db, "posts");

  const userAuth = (action, email, password) => {
    if (action === "signup") {
      return createUserWithEmailAndPassword(auth, email, password);
    } else if (action === "login") {
      return signInWithEmailAndPassword(auth, email, password);
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      user ? setCurrentUser(user) : setCurrentUser(null);
      setIsPending(false);
    });

    return () => unsubscribe();
  }, [])

  const value = {
    currentUser,
    userAuth,
    isPending,
    postsCollectionRef
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}