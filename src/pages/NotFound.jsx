import { Link } from "react-router";

function NotFound() {
  return (
    <>
      <section className="flex flex-col justify-center items-center gap-4 text-center h-screen">
        <h1 className="text-4xl text-sky-500">404</h1>
        <p className="text-xl">Oops, parece que essa página não existe!</p>
        <Link 
        to="/"
        className="text-sky-500 underline">
          Voltar para a página principal
        </Link>
      </section>
    </>
  )
}

export default NotFound;