import { createContext, useState } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

export const PostsContext = createContext();

export function PostsContextProvider({ children }) {
  const [posts, setPosts] = useState([]);

  const postsCollectionRef = collection(db, "posts");

  const getPosts = async () => {
    try {
      const data = await getDocs(postsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(), 
        id: doc.id
      }));
      setPosts(...posts, filteredData);
    } catch (err) {
      console.error(err);
    }
  }

  const value = {
    postsCollectionRef,
    getPosts,
    posts
  }

  return (
    <PostsContext.Provider value={value}>
      {children}
    </PostsContext.Provider>
  )
}