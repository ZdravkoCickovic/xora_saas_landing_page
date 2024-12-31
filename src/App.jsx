import React from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Features from "./components/Features";
import Pricing from "./sections/Pricing";
import Faq from "./components/Faq";
import Testimonials from "./sections/Testimonials";
import Download from "./sections/Download";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
};

export default App;
