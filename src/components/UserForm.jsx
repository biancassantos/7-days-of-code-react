import { useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function UserForm({ btnText, action }) {
  const { 
    register,
    watch,
    handleSubmit, 
    formState: {
      errors, 
      isSubmitting
    }} = useForm();

  const [firebaseErr, setFirebaseErr] = useState(null);

  const email = watch("email");
  const password = watch("password");

  async function onSubmit() {
    try {
      if (action === "signup") {
        await createUserWithEmailAndPassword(auth, email, password);
      } else if (action === "login") {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      if (err.message.includes("email-already-in-use")) {
        setFirebaseErr("Este e-mail já está em uso");
      } else if (err.message.includes("invalid-credential")) {
        setFirebaseErr("Este usuário é inválido ou não existe");
      }
      console.error(err);
    }
  }

  const emailClass = classNames(
    "rounded border-[1px] border-gray-300 p-1", {
    "border-red-600": errors.email
  })

  const passwordClass = classNames(
    "rounded border-[1px] border-gray-300 p-1",{
    "border-red-600": errors.password
  })

  const btnClass = classNames(
    "rounded bg-emerald-500 hover:bg-emerald-600 duration-300 p-1 text-white text-sm",{
    "bg-emerald-300": isSubmitting
  })

  return (
    <form
    onSubmit={handleSubmit(onSubmit)}
    className="flex flex-col gap-[8px] w-full">
      <input 
      type="email" 
      {...register("email", {required: "Por favor, informe um e-mail."})}
      placeholder="email@exemplo.com"
      className={emailClass} />
      {errors.email && <p className="text-xs text-red-600">{errors.email.message}</p>}

      <input 
      type="password" 
      {...register("password", {
        required: "Por favor, informe uma senha", 
        minLength: {
          value: 8, 
          message: "A senha precisa ter no mínimo 8 caracteres"
        }})}
      placeholder="Senha"
      className={passwordClass} />
      {errors.password && <p className="text-xs text-red-600">{errors.password.message}</p>}
      
      {firebaseErr && <p className="text-xs text-red-600">{firebaseErr}</p>}

      <button 
      type="submit"
      disabled={isSubmitting}
      className={btnClass} >
        {btnText}
      </button>
    </form>
  )
}

export default UserForm;