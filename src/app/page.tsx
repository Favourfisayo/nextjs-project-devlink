import Link from "next/link";
export default function page() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Discover. Share. Connect.
        </h1>
        <p className="text-gray-600 mb-8 text-lg md:text-xl">
          DevLink is your platform to explore inspiring developer portfolios and showcase your own projects with the world.
        </p>

        <div className="flex justify-center space-x-4">
          <Link
            href="/devs"
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 transition"
          >
            Browse Developers.
          </Link>
          <Link
            href="/add"
            className="border border-gray-300 px-6 py-3 rounded-full text-sm font-medium hover:border-blue-600 hover:text-blue-600 transition"
          >
            Submit Your Profile.
          </Link>
        </div>
      </div>

      <div className="mt-24 grid md:grid-cols-3 gap-8 text-left max-w-6xl w-full">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="font-semibold text-lg mb-2">💡 Discover Developers</h3>
          <p className="text-gray-600 text-sm">
            Explore real-world projects built by developers across the world.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="font-semibold text-lg mb-2">🚀 Showcase Yours</h3>
          <p className="text-gray-600 text-sm">
            Share your work, grow your network, and get noticed.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="font-semibold text-lg mb-2">🤝 Connect & Collaborate</h3>
          <p className="text-gray-600 text-sm">
            Find potential collaborators and be part of the dev community.
          </p>
        </div>
      </div>
    </section>
  );
}
