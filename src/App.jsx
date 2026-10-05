import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustSection from "./components/TrustSection";
import Features from "./components/Features";
import Dashboard from "./components/Dashboard";
import Insights from "./components/Insights";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";

function App() {
  const [showSignIn, setShowSignIn] = useState(false);

  if (showSignIn) {
    return <SignIn onBack={() => setShowSignIn(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#f8f9f6] text-[#17211b]">
      <Navbar onSignIn={() => setShowSignIn(true)} />

      <main>
        <Hero />
        <TrustSection />
        <Features />
        <Dashboard />
        <Insights />
        <HowItWorks />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;