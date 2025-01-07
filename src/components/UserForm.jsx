import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router";

function UserForm({ btnText, action }) {
  const { 
    register,
    watch,
    handleSubmit, 
    formState: {
      errors, 
      isSubmitting
    }} = useForm();

  const { userAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const [firebaseErr, setFirebaseErr] = useState(null);

  const email = watch("email");
  const password = watch("password");

  async function onSubmit() {
    try {
      await userAuth(action, email, password);
      navigate("/");
    } catch (err) {
      if (err.message.includes("email-already-in-use")) {
        setFirebaseErr("Este e-mail já está em uso");
      } else if (err.message.includes("invalid-credential")) {
        setFirebaseErr("Este usuário é inválido ou não existe");
      }
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
    "rounded bg-sky-500 hover:bg-sky-600 duration-300 p-1 text-white text-sm",{
    "bg-emerald-300": isSubmitting
  })

  return (
    <form
    onSubmit={handleSubmit(onSubmit)}
    className="flex flex-col gap-[10px] w-full">
      <label 
      htmlFor="email"
      className="text-xs text-gray-500">
        E-mail
      </label>
      <input 
      type="email" 
      id="email"
      {...register("email", {required: "Por favor, informe um e-mail"})}
      className={emailClass} />
      {errors.email && <p className="text-xs text-red-600">{errors.email.message}</p>}

      <label 
      htmlFor="password"
      className="text-xs text-gray-500">
        Senha
      </label>
      <input 
      type="password" 
      id="password"
      {...register("password", {
        required: "Por favor, informe uma senha", 
        minLength: {
          value: 8, 
          message: "A senha precisa ter no mínimo 8 caracteres"
        }})}
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