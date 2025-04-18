import InputAreaContainer from "../components/InputAreaContainer";
import UserForm from "../components/UserForm";
import TextWithLink from "../components/ui/TextWithLink";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router";
import Spinner from "../components/ui/Spinner";

function SignUp() {
  const { currentUser, isPending } = useContext(AuthContext);

  // aguarda a autenticação do usuário
  if (isPending) return <Spinner />  

  return (
    <> 
      {currentUser ? 
      <Navigate to="/" /> : // não permite acessar a página de cadastro se o usuário já estiver logado
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
      </InputAreaContainer>}
    </>
  )
}

export default SignUp;