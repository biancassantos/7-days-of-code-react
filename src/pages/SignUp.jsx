import App from "../layouts/App";
import InputAreaContainer from "../components/InputAreaContainer";
import UserForm from "../components/UserForm";
import TextWithLink from "../components/ui/TextWithLink";

function SignUp() {
  return (
    <App>
      <InputAreaContainer>
        <UserForm 
        btnText="Criar uma nova conta"
        />
        <TextWithLink 
        text="Já possui uma conta? "
        linkText="Acesse agora!"
        url="/sign-in"
        />
      </InputAreaContainer>
    </App>
  )
}

export default SignUp;