import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { PostsContext } from "../contexts/PostsContext";
import { onSnapshot } from "firebase/firestore";
import Post from "./ui/Post"
import Spinner from "./ui/Spinner";

function RenderPosts() {
  const [posts, setPosts] = useState([]);

  const { isPending } = useContext(AuthContext);
  const { postsCollectionRef } = useContext(PostsContext);

  useEffect(() => {
    const unsub = onSnapshot(postsCollectionRef, (snapshot) => {
      let list = [];
      snapshot.docs.forEach(doc => {
        list.push({...doc.data(), id: doc.id});
      });
      setPosts(list);
    }, (error) => {
      console.error(error)
    });

    return () => unsub();
  }, [postsCollectionRef])

  if (isPending) return <Spinner />

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