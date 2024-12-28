
function SignUpForm() {
  return (
    <form
    className="flex flex-col gap-[8px] w-full">
      <input 
      type="email" 
      name="email" 
      id="email" 
      placeholder="email@exemplo.com"
      className="rounded border-[1px] border-gray-300 p-1" />
      <input 
      type="password" 
      name="password" 
      id="password" 
      placeholder="Senha"
      className="rounded border-[1px] border-gray-300 p-1" />
      <button 
      type="submit"
      className="rounded bg-emerald-500 hover:bg-emerald-600 duration-300 p-1 text-white text-sm" >
        Criar uma nova conta
      </button>
    </form>
  )
}

export default SignUpForm;