import Logo from "./ui/Logo";

function InputAreaContainer({ children }) {
  return (
    <main className="flex justify-center items-center h-screen">
      <section className="flex flex-col justify-center items-center gap-4 p-4 w-[90vw] max-w-sm">
        <Logo />
        {children}
      </section>
    </main>
  )
}

export default InputAreaContainer;