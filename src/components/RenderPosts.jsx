import { useState, useEffect, useContext } from "react";
import Post from "./ui/Post"
import { getDocs } from "firebase/firestore";
import { AuthContext } from "../contexts/AuthContext";

function RenderPosts() {
  const [posts, setPosts] = useState([]);

  const { postsCollectionRef } = useContext(AuthContext);

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

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <>
      {posts?.map(post => {
        return (<Post  
        key={post.id}
        body={post.body}
        date={post.date}
        author={post.author}
        />)
      })}
    </>
  )
}

export default RenderPosts;