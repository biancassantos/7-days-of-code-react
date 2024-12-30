import { Link } from "react-router";
import Logo from "./Logo";
import UserForm from "./UserForm";

function UserAuthBody({ btnText, text, linkText, url }) {
  return (
    <main className="flex justify-center items-center h-screen">
        <section className="flex flex-col justify-center items-center gap-4 p-4 w-[90vw] max-w-sm">
          <Logo />
          <UserForm btnText={btnText} />
          <p className="text-sm text-gray-500">
            {text} 
            <Link className="text-sky-500" to={url}>{linkText}</Link>
          </p>
        </section>
      </main>
  )
}

export default UserAuthBody;