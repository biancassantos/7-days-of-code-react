import { AuthContext } from "./AuthContext";
import { useState, useEffect } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  const userAuth = (action, email, password) => {
    if (action === "signup") {
      return createUserWithEmailAndPassword(auth, email, password);
    } else if (action === "login") {
      return signInWithEmailAndPassword(auth, email, password);
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => setCurrentUser(user));

    return unsubscribe;
  }, [])

  return (
    <AuthContext.Provider value={{currentUser, userAuth}}>
      {children}
    </AuthContext.Provider>
  )
}