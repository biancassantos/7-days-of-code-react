import { useEffect, useContext } from "react";
import Post from "./ui/Post"
import { AuthContext } from "../contexts/AuthContext";
import { PostsContext } from "../contexts/PostsContext";
import Spinner from "./ui/Spinner";

function RenderPosts() {
  const { getPosts, posts } = useContext(PostsContext);
  const { isPending } = useContext(AuthContext);

  useEffect(() => {
    getPosts();
  }, [])

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