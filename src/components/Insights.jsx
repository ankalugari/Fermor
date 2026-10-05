const insights = [
  {
    category: "Money basics",
    title: "How much should you keep as an emergency fund?",
  },
  {
    category: "Spending",
    title: "Where is your monthly spending really going?",
  },
  {
    category: "Habits",
    title: "Small financial habits that can grow over time.",
  },
];

function Insights() {
  return (
    <section id="insights" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#31755b]">
            Insights
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            Understand money better.
          </h2>
        </div>

        <button className="text-sm font-medium text-[#31755b]">
          View all insights →
        </button>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {insights.map((item) => (
          <article
            key={item.title}
            className="group cursor-pointer rounded-3xl border border-black/5 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-sm font-medium text-[#31755b]">
              {item.category}
            </p>

            <h3 className="mt-6 text-2xl font-semibold leading-tight">
              {item.title}
            </h3>

            <p className="mt-5 text-sm leading-6 text-gray-500">
              Simple ideas to help you understand your finances and make
              more informed decisions.
            </p>

            <div className="mt-8 text-sm font-medium">
              Read article →
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Insights;