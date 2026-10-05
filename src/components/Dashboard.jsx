function Dashboard() {
  return (
    <section className="bg-[#17211b] py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#8fc9aa]">
            One clear view
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Know where you stand financially.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
            See your spending, savings and goals in one simple view so you can
            spend less time looking at numbers and more time making decisions.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-3 text-[#17211b] shadow-2xl sm:rounded-3xl sm:p-5">
          <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-[#f3f6f2] p-5">
              <p className="text-sm text-gray-500">Financial health</p>

              <div className="mt-3 flex items-end gap-2">
                <span className="text-4xl font-semibold">82</span>
                <span className="mb-1 text-sm text-[#31755b]">Good</span>
              </div>
            </div>

            <div className="rounded-2xl bg-[#f3f6f2] p-5">
              <p className="text-sm text-gray-500">Savings goal</p>

              <p className="mt-3 text-2xl font-semibold">72%</p>

              <div className="mt-3 h-2 rounded-full bg-gray-200">
                <div className="h-2 w-[72%] rounded-full bg-[#31755b]" />
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-2xl bg-[#f3f6f2] p-5">
            <div className="flex items-center justify-between">
              <p className="font-medium">Spending</p>
              <p className="text-sm text-gray-500">This month</p>
            </div>

            <div className="mt-6 space-y-5">
              {[
                ["Housing", "₹18,000", "65%"],
                ["Food", "₹7,400", "42%"],
                ["Travel", "₹5,200", "30%"],
                ["Other", "₹3,850", "22%"],
              ].map(([name, amount, width]) => (
                <div key={name}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span>{name}</span>
                    <span>{amount}</span>
                  </div>

                  <div className="h-2 rounded-full bg-gray-200">
                    <div
                      className="h-2 rounded-full bg-[#31755b]"
                      style={{ width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;