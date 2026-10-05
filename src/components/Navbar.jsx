import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar({ onSignIn }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-black/5 bg-[#f8f9f6]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="#" className="text-2xl font-bold tracking-tight">
          fermor<span className="text-[#31755b]">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-gray-600 hover:text-black">
            Product
          </a>

          <a href="#how-it-works" className="text-sm text-gray-600 hover:text-black">
            How it works
          </a>

          <a href="#insights" className="text-sm text-gray-600 hover:text-black">
            Insights
          </a>

          <a href="#about" className="text-sm text-gray-600 hover:text-black">
            About
          </a>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <button onClick={onSignIn} className="text-sm font-medium text-gray-700">
            Sign in
          </button>

          <button className="rounded-full bg-[#17211b] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#31755b]">
            Get started
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-black/5 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            <button
              onClick={() => {
                setOpen(false);
                onSignIn();
              }}
              className="text-left font-medium text-gray-700"
            >
              Sign in
            </button>

            <a href="#features" onClick={() => setOpen(false)}>
              Product
            </a>

            <a href="#how-it-works" onClick={() => setOpen(false)}>
              How it works
            </a>

            <a href="#insights" onClick={() => setOpen(false)}>
              Insights
            </a>

            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>

            <button className="rounded-full bg-[#17211b] px-5 py-3 text-white">
              Get started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;