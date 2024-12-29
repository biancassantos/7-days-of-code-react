import App from "../layouts/App";
import UserAuthBody from "../components/UserAuthBody";

function SignIn() {
  return (
    <App>
      <UserAuthBody 
      btnText="Acessar plataforma"
      text="Não possui uma conta? "
      linkText="Crie uma agora!"
      url="/sign-up" />
    </App>
  )
}

export default SignIn;