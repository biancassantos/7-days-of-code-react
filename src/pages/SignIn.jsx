import InputAreaContainer from "../components/InputAreaContainer";
import UserForm from "../components/UserForm";
import TextWithLink from "../components/ui/TextWithLink";

function SignIn() {
  return (
    <>
      <InputAreaContainer>
        <UserForm 
        btnText="Acessar plataforma"
        action="login"
        />
        <TextWithLink
        text="Não possui uma conta? "
        linkText="Crie uma agora!"
        url="/sign-up" 
        />
      </InputAreaContainer>
    </>
  )
}

export default SignIn;