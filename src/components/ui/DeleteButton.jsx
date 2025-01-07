import { db } from "../../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";

function DeleteButton({ id }) {
  const deletePost = async(postId) => {
    const postDoc = doc(db, "posts", postId)
    await deleteDoc(postDoc);
  }

  return (
    <button
    onClick={() => deletePost(id)}
    className="self-end">
      Apagar
    </button>
  )
}

export default DeleteButton;