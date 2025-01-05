import { createContext, useState, useEffect } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [isPending, setIsPending] = useState(true);

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
    isPending
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}