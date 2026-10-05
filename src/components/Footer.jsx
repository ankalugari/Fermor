function Footer() {
  return (
    <footer id="about" className="border-t border-black/5 bg-[#f8f9f6]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold">
              fermor<span className="text-[#31755b]">.</span>
            </h2>

            <p className="mt-4 max-w-sm leading-7 text-gray-600">
              A simpler way to understand your finances and make better
              financial decisions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Product</h3>

            <div className="mt-4 space-y-3 text-sm text-gray-600">
              <p>Features</p>
              <p>How it works</p>
              <p>Insights</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Company</h3>

            <div className="mt-4 space-y-3 text-sm text-gray-600">
              <p>About</p>
              <p>Privacy</p>
              <p>Terms</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-black/5 pt-6 text-sm text-gray-500">
          © 2026 Fermor. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;