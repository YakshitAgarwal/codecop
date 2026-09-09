import HomePage from "./pages/HomePage";
import HowPage from "./pages/HowPage";
import WhyPage from "./pages/WhyPage";
import FeaturesPage from "./pages/FeaturesPage";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";
import PricesPage from "./pages/PricesPage";
import Footer from "./pages/Footer";

export default function Home() {
  return (
    <div>
      <section id="home">
        <HomePage />
      </section>
      <section id="why-codecop">
        <WhyPage />
      </section>
      <section id="how-it-works">
        <HowPage />
      </section>
      <section id="features">
        <FeaturesPage />
      </section>
      <section id="about">
        <AboutPage />
      </section>
      <section id="pricing">
        <PricingPage />
      </section>
      <section id="prices">
        <PricesPage />
      </section>
      <Footer />
    </div>
  );
}
