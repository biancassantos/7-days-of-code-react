import { useForm } from "react-hook-form";
import classNames from "classnames";
import { addDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { PostsContext } from "../contexts/PostsContext";
import { AuthContext } from "../contexts/AuthContext";

function NewPostInput() {
  const { 
    register, 
    handleSubmit,
    watch,
    reset,
    formState: {
      isSubmitting, 
      isSubmitSuccessful} 
    } = useForm();

  const { postsCollectionRef } = useContext(PostsContext);
  const { currentUser } = useContext(AuthContext);

  const body = watch("postBody");
  const today = new Date().toLocaleString();

  const [bodyLength, setBodyLength] = useState(0);

  const newPost = {
    body,
    date: today,
    author: currentUser?.email
  }
  
  async function onSubmit() {
    try {
      await addDoc(postsCollectionRef, newPost);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset])

  const spanClass = classNames(
    "text-emerald-600 text-sm", {
      "text-red-600": bodyLength === 255
    });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea
      maxLength={255}
      onChange={() => setBodyLength(body.length)}
      className="w-full h-28 mb-2 p-2 rounded shadow-sm resize-none"
      {...register("postBody")}>
      </textarea>

      <div className="flex justify-between items-center">
        <span className={spanClass}>
          {bodyLength === 255 ? 
          "Você atingiu o limite de caracteres" :
          `Você ainda pode digitar ${255 - bodyLength} caracteres`}
        </span>
        <button 
        disabled={isSubmitting}
        className="bg-sky-500 text-white rounded py-1 px-2 hover:bg-sky-600 duration-300">
          Aluritar
        </button>
      </div>
    </form>
  )
}

export default NewPostInput;