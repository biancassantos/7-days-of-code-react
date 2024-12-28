import App from "../layouts/App";
import SignUpForm from "../components/SignUpForm";
import { Link } from "react-router";

function SignUp() {
  return (
    <App>
      <main className="flex justify-center items-center h-screen">
        <section className="flex flex-col justify-center items-center gap-4 p-4 w-[90vw] max-w-sm">
          <h1 className="text-xl text-[#0EA5E9] font-medium">Aluritter</h1>
          <SignUpForm />
          <p className="text-sm text-gray-500">
            Já possui uma conta? <Link className="text-[#0EA5E9]">Acesse agora!</Link>
          </p>
        </section>
      </main>
    </App>
  )
}

export default SignUp;