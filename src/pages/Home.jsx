import Header from "../components/ui/Header";
import NewPostInput from "../components/NewPostInput";
import Post from "../components/ui/Post";

function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-4 items-center bg-slate-100 h-screen py-6 px-5">
        <section className="w-[90vw] max-w-3xl">
          <p className="mb-2 text-gray-600 text-sm">Alurite agora mesmo...</p>
          <NewPostInput />
        </section>
        <section className="w-[90vw] max-w-3xl">
          <Post />
        </section>
      </main>
    </>
  )
}

export default Home;