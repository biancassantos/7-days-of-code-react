import { Link } from "react-router";
import UserForm from "./UserForm";

function UserAuthBody({ btnText, text, linkText, url }) {
  return (
    <main className="flex justify-center items-center h-screen">
        <section className="flex flex-col justify-center items-center gap-4 p-4 w-[90vw] max-w-sm">
          <h1 className="text-xl text-[#0EA5E9] font-medium">
            Aluritter
          </h1>
          <UserForm btnText={btnText} />
          <p className="text-sm text-gray-500">
            {text} 
            <Link className="text-[#0EA5E9]" to={url}>{linkText}</Link>
          </p>
        </section>
      </main>
  )
}

export default UserAuthBody;