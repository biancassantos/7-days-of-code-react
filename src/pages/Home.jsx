import Header from "../components/ui/Header";
import NewPostInput from "../components/NewPostInput";
import RenderPosts from "../components/RenderPosts";

function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-6 items-center bg-slate-100 min-h-screen h-full py-6 px-5">
        <section className="w-[90vw] max-w-3xl">
          <p className="mb-2 text-gray-600 text-sm">Alurite agora mesmo...</p>
          <NewPostInput />
        </section>
        <section className="flex flex-col gap-5 w-[90vw] max-w-3xl">
          <RenderPosts />
        </section>
      </main>
    </>
  )
}

export default Home;