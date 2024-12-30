import { useForm } from "react-hook-form";
import classNames from "classnames";

function NewPostInput() {
  const { 
    register, 
    handleSubmit, 
    formState: {
      errors, 
      isSubmitting} 
    } = useForm();

  function onSubmit() {
    //
  }

  const spanClass = classNames(
    "text-emerald-600 text-sm", {
      "text-red-600": errors.newPost
    });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea
      maxLength={255}
      className="w-full h-28 mb-2 p-2 rounded shadow-sm resize-none"
      {...register("newPost", {maxLength: 255})}>
      </textarea>

      <div className="flex justify-between items-center">
        <span className={spanClass}>
          Você ainda pode digitar 255 caracteres
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