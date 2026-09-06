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
      <HomePage />
      <WhyPage />
      <HowPage />
      <FeaturesPage />
      <AboutPage />
      <PricingPage />
      <PricesPage />
      <Footer />
    </div>
  );
}
