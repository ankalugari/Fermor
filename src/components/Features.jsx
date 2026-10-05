import { BarChart3, Lightbulb, Target, Wallet } from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Understand",
    text: "See where your money goes and get a clearer picture of your financial position.",
  },
  {
    icon: Target,
    title: "Plan",
    text: "Set meaningful goals and understand the actions that can help you reach them.",
  },
  {
    icon: Lightbulb,
    title: "Act",
    text: "Turn financial information into simple, practical next steps.",
  },
  {
    icon: BarChart3,
    title: "Grow",
    text: "Build consistent habits and track your financial progress over time.",
  },
];

function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#31755b]">
          What Fermor does
        </p>

        <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Your finances, made easier to understand.
        </h2>

        <p className="mt-5 text-lg leading-8 text-gray-600">
          Instead of overwhelming you with numbers, Fermor focuses on the
          information and actions that matter.
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="rounded-3xl border border-black/5 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e4f0e9] text-[#31755b]">
                <Icon size={21} />
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {feature.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Features;