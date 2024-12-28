import { useForm } from "react-hook-form";

function SignUpForm() {
  const { 
    register, 
    handleSubmit, 
    formState: {
      errors, 
      isSubmitting
    }} = useForm();

  function onSubmit() {
    //
  }

  return (
    <form
    onSubmit={handleSubmit(onSubmit)}
    className="flex flex-col gap-[8px] w-full">
      <input 
      type="email" 
      {...register("email", {required: "Por favor, informe um e-mail."})}
      placeholder="email@exemplo.com"
      className="rounded border-[1px] border-gray-300 p-1" />
      {errors.email && <p className="text-xs text-red-600">{errors.email.message}</p>}

      <input 
      type="password" 
      {...register("password", {required: "Por favor, informe uma senha"})} 
      placeholder="Senha"
      className="rounded border-[1px] border-gray-300 p-1" />
      {errors.password && <p className="text-xs text-red-600">{errors.password.message}</p>}

      <button 
      type="submit"
      disabled={isSubmitting}
      className="rounded bg-emerald-500 hover:bg-emerald-600 duration-300 p-1 text-white text-sm" >
        Criar uma nova conta
      </button>
    </form>
  )
}

export default SignUpForm;