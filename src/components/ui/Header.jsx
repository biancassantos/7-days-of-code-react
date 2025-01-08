import Logo from "./Logo";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/sign-in");
    } catch (err) {
      console.error(err);
    }
  }

  const { currentUser } = useContext(AuthContext);

  return (
    <header className="flex justify-between items-start gap-4 py-3 px-5 bg-white shadow-sm md:items-center">
      <Logo />
      <div className="flex flex-col justify-between items-end gap-2 md:flex-row md:items-center">
        <p className="text-gray-500 text-sm text-end order-2 md:order-1">
          {currentUser?.email}
        </p>
        <button 
        onClick={logout}
        className="border-[1px] border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white duration-300 rounded py-1 px-3 order-1 md:order-2">
          Sair
        </button>
      </div>
    </header>
  )
}

export default Header;