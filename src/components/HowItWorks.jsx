const steps = [
  {
    number: "01",
    title: "Connect",
    text: "Bring your financial information together in one place.",
  },
  {
    number: "02",
    title: "Understand",
    text: "Fermor turns your information into clear and useful insights.",
  },
  {
    number: "03",
    title: "Act",
    text: "Use those insights to make better financial decisions.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#31755b]">
            How it works
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Simple steps. Better decisions.
          </h2>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="border-t border-gray-200 pt-6">
              <span className="text-sm font-semibold text-[#31755b]">
                {step.number}
              </span>

              <h3 className="mt-5 text-2xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-3 max-w-sm leading-7 text-gray-600">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;