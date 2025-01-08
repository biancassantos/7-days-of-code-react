import InputAreaContainer from "../components/InputAreaContainer";
import UserForm from "../components/UserForm";
import TextWithLink from "../components/ui/TextWithLink";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router";
import Spinner from "../components/ui/Spinner";

function SignIn() {
  const { currentUser, isPending } = useContext(AuthContext);

  // aguarda a autenticação do usuário
  if (isPending) return <Spinner />

  return (
    <>
      {currentUser ? 
      <Navigate to="/" /> : // não permite acessar a página de login se o usuário já estiver logado
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
      </InputAreaContainer>}
    </>
  )
}

export default SignIn;