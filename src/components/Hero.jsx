import { ArrowRight, TrendingUp } from "lucide-react";

function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#31755b]/20 bg-[#31755b]/5 px-4 py-2 text-sm text-[#31755b]">
          <TrendingUp size={16} />
          A clearer way to manage your money
        </div>

        <h1 className="max-w-2xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Make better decisions with your money.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
          Fermor helps you understand your finances, make confident decisions,
          and build better financial habits over time.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="flex items-center gap-2 rounded-full bg-[#17211b] px-6 py-3.5 font-medium text-white transition hover:bg-[#31755b]">
            Get started
            <ArrowRight size={18} />
          </button>

          <a
            href="#how-it-works"
            className="rounded-full border border-gray-300 px-6 py-3.5 font-medium transition hover:border-gray-500"
          >
            See how it works
          </a>
        </div>
      </div>

      <div className="rounded-3xl border border-black/5 bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <div className="rounded-2xl bg-[#f5f7f3] p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total balance</p>
              <h2 className="mt-1 text-3xl font-semibold">₹8,42,680</h2>
            </div>

            <span className="rounded-full bg-[#dcefe5] px-3 py-1 text-sm text-[#31755b]">
              +8.4%
            </span>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-gray-500">Monthly spending</p>
              <p className="mt-2 text-xl font-semibold">₹42,350</p>
            </div>

            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm text-gray-500">Savings</p>
              <p className="mt-2 text-xl font-semibold">₹28,500</p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl bg-white p-5">
            <div className="flex items-center justify-between">
              <p className="font-medium">Monthly overview</p>
              <span className="text-sm text-gray-500">2026</span>
            </div>

            <div className="mt-8 flex h-32 items-end gap-3">
              {[45, 65, 52, 80, 62, 92, 72, 88, 76, 96, 84, 100].map(
                (height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-lg bg-[#31755b]"
                    style={{ height: `${height}%` }}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;