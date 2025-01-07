import { createContext } from "react";
import { db } from "../config/firebase";
import { collection } from "firebase/firestore";

export const PostsContext = createContext();

export function PostsContextProvider({ children }) {
  const postsCollectionRef = collection(db, "posts");

  const value = {
    postsCollectionRef
  }

  return (
    <PostsContext.Provider value={value}>
      {children}
    </PostsContext.Provider>
  )
}