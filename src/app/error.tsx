'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body className="min-h-screen flex items-center justify-center bg-slate-950 text-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Something went wrong
          </h2>
          <p className="text-gray-400 mb-6">
            An unexpected error occurred.
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-2 rounded-lg bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
