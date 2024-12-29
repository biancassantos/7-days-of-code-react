import App from "../layouts/App";
import UserAuthBody from "../components/UserAuthBody";

function SignUp() {
  return (
    <App>
      <UserAuthBody 
      btnText="Criar uma nova conta"
      text="Já possui uma conta? "
      linkText="Acesse agora!"
      url="/sign-in" />
    </App>
  )
}

export default SignUp;