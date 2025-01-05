function Post({ body, date, author }) {
  return (
    <section className="flex flex-col gap-3 bg-white rounded shadow-sm p-4 w-full overflow-hidden">
      <p className="text-gray-500 text-wrap">{body}</p>
      <section className="flex flex-col sm:flex-row justify-between gap-1">
        <p className="text-sky-500 text-sm">{author}</p>
        <span className="text-gray-500 text-sm">{date}</span>
      </section>
    </section>
  )
}

export default Post;