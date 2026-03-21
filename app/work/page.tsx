export default function Work() {
  return (
    <div className="min-h-screen bg-[#ffdbe6] text-center p-10">

      <h1 className="text-4xl mb-6">My Work ✨</h1>

      <p className="max-w-xl mx-auto mb-10">
        A look at the kind of content I create for my clients 🫶🏻
      </p>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

        <div className="bg-white h-40 rounded-2xl flex items-center justify-center shadow">
          Add Post Screenshot
        </div>

        <div className="bg-white h-40 rounded-2xl flex items-center justify-center shadow">
          Add Before & After
        </div>

        <div className="bg-white h-40 rounded-2xl flex items-center justify-center shadow">
          Add Client Page
        </div>

      </div>

      <p className="mt-10 text-neutral-700">
        More results coming soon ✨
      </p>

    </div>
  );
}