import { db } from "../../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";

function DeleteButton({ id }) {
  const deletePost = async(postId) => {
    const postDoc = doc(db, "posts", postId);
    await deleteDoc(postDoc);
  }

  return (
    <button
    onClick={() => deletePost(id)}
    className="self-end text-sm text-gray-400 border-[1px] border-gray-400 rounded py-1 px-2 hover:bg-gray-400 hover:text-white duration-300">
      Apagar
    </button>
  )
}

export default DeleteButton;