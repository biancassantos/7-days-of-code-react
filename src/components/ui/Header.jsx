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
    <header className="flex justify-between items-center py-3 px-5 bg-white shadow-sm">
      <Logo />
      <div className="flex justify-between items-center gap-2">
        <p className="text-gray-500">{currentUser?.email}</p>
        <button 
        onClick={logout}
        className="bg-red-500 hover:bg-red-600 duration-300 text-white rounded py-1 px-2">
          Sair
        </button>
      </div>
    </header>
  )
}

export default Header;