function TrustSection() {
  const items = [
    "Understand your finances",
    "Make confident decisions",
    "Build better habits",
    "Grow over time",
  ];

  return (
    <section className="border-y border-black/5 bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {items.map((item) => (
          <div key={item} className="text-center text-sm font-medium text-gray-600">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustSection;