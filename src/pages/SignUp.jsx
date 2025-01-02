import InputAreaContainer from "../components/InputAreaContainer";
import UserForm from "../components/UserForm";
import TextWithLink from "../components/ui/TextWithLink";

function SignUp() {
  return (
    <>
      <InputAreaContainer>
        <UserForm 
        btnText="Criar uma nova conta"
        action="signup"
        />
        <TextWithLink 
        text="Já possui uma conta? "
        linkText="Acesse agora!"
        url="/sign-in"
        />
      </InputAreaContainer>
    </>
  )
}

export default SignUp;