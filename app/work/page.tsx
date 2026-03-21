export default function Work() {
  return (
    <div className="text-center py-24 px-6">

      <h1 className="text-4xl mb-10">My Work 💗</h1>

      <p className="mb-12 text-neutral-700 max-w-xl mx-auto">
        Here’s a look at some of the content I’ve created ✨
      </p>

      {/* IMAGE GRID */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

        <img 
          src="/work1.jpeg" 
          className="rounded-2xl shadow-md hover:scale-105 transition"
        />

        <img 
          src="/work2.jpeg" 
          className="rounded-2xl shadow-md hover:scale-105 transition"
        />

        <img 
          src="/work3.jpeg" 
          className="rounded-2xl shadow-md hover:scale-105 transition"
        />

      </div>

    </div>
  );
}