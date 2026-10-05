import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

function SignIn({ onBack }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="grid min-h-screen bg-[#f8f9f6] text-[#17211b] lg:grid-cols-2">
      <section className="flex min-h-screen flex-col px-6 py-6 sm:px-10 lg:px-14">
        <button
          onClick={onBack}
          className="inline-flex w-fit items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-[#31755b]"
        >
          <ArrowLeft size={17} />
          Back to Fermor
        </button>

        <div className="mx-auto my-auto w-full max-w-md py-12">
          <a href="#" className="text-2xl font-bold tracking-tight">
            fermor<span className="text-[#31755b]">.</span>
          </a>

          <p className="mt-12 text-sm font-semibold uppercase tracking-widest text-[#31755b]">
            Welcome back
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Sign in to Fermor
          </h1>
          <p className="mt-4 leading-7 text-gray-600">
            Enter your details to continue to your financial overview.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <label className="block text-sm font-medium">
              Email address
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base outline-none transition placeholder:text-gray-400 focus:border-[#31755b] focus:ring-2 focus:ring-[#31755b]/15"
              />
            </label>

            <label className="block text-sm font-medium">
              Password
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                required
                placeholder="Enter your password"
                className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base outline-none transition placeholder:text-gray-400 focus:border-[#31755b] focus:ring-2 focus:ring-[#31755b]/15"
              />
            </label>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#17211b] px-5 py-3.5 font-medium text-white transition hover:bg-[#31755b]"
            >
              Sign in
              <ArrowRight size={18} />
            </button>
          </form>

          {submitted && (
            <p role="status" className="mt-4 text-sm text-[#31755b]">
              Sign-in is not connected yet. Your details have not been sent.
            </p>
          )}

          <div className="mt-8 border-t border-black/10 pt-6 text-center">
            <p className="text-sm text-gray-600">Just looking around?</p>
            <button
              onClick={onBack}
              className="mt-2 text-sm font-semibold text-[#31755b] hover:underline"
            >
              Continue without signing in
            </button>
          </div>
        </div>

        <p className="text-xs text-gray-500">© 2026 Fermor</p>
      </section>

      <aside className="relative hidden overflow-hidden bg-[#17211b] px-12 py-16 text-white lg:flex lg:items-end">
        <div className="absolute inset-0 opacity-30" aria-hidden="true">
          <div className="absolute -right-24 -top-20 h-96 w-96 rounded-full border border-[#8fc9aa]/50" />
          <div className="absolute -right-8 top-8 h-96 w-96 rounded-full border border-[#8fc9aa]/30" />
          <div className="absolute bottom-0 left-0 h-2/3 w-full bg-gradient-to-t from-[#31755b]/35 to-transparent" />
        </div>
        <div className="relative max-w-lg">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#8fc9aa]">
            A clearer view
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight">
            Make your money feel easier to understand.
          </h2>
          <p className="mt-5 max-w-md leading-7 text-gray-300">
            Bring your spending, savings, and goals into one calm, clear view.
          </p>
        </div>
      </aside>
    </main>
  );
}

export default SignIn;