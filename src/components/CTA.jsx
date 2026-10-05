import { ArrowRight } from "lucide-react";

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="rounded-[2rem] bg-[#dfeee6] px-6 py-16 text-center sm:px-12">
        <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Your money should make sense.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-gray-600">
          Get a clearer view of your finances and take your next step with
          confidence.
        </p>

        <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#17211b] px-6 py-3.5 font-medium text-white transition hover:bg-[#31755b]">
          Get started
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}

export default CTA;