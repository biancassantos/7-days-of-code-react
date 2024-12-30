function Post() {
  return (
    <section className="flex flex-col gap-3 bg-white rounded shadow-sm p-4 w-full overflow-hidden">
      <p className="text-gray-500 text-wrap">Texto do post</p>
      <section className="flex flex-col sm:flex-row justify-between gap-1">
        <p className="text-sky-500 text-sm">teste@email.com</p>
        <span className="text-gray-500 text-sm">30/12/2024, 02:50:15 PM</span>
      </section>
    </section>
  )
}

export default Post;