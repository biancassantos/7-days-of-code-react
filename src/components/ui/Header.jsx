import Logo from "./ui/Logo";

function Header() {
  return (
    <header className="flex justify-between items-center py-3 px-5 bg-white shadow-sm">
      <Logo />
      <div className="flex justify-between items-center gap-2">
        <p className="text-gray-500">teste@email.com</p>
        <button className="bg-red-500 hover:bg-red-600 duration-300 text-white rounded py-1 px-2">
          Sair
        </button>
      </div>
    </header>
  )
}

export default Header;