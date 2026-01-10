
import React from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import KeyFactor from './components/KeyFactor';
import Teachers from './components/Teachers';
import Testimonials from './components/Testimonials';
import Solutions from './components/Solutions';
import GoogleReviews from './components/GoogleReviews';
import ComparisonGrid from './components/ComparisonGrid';
import Gallery from './components/Gallery';
import PricingCTA from './components/PricingCTA';
import Location from './components/Location';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

const App: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-morandi-cream">
      <Hero />
      {/* 1. 解決使用者痛點 */}
      <PainPoints />
      {/* 2. 解決痛點的關鍵 - 財務金字塔 */}
      <KeyFactor />
      {/* 3. 顧問團隊介紹 */}
      <Teachers />
      {/* 4. 客戶真實改變 */}
      <Testimonials />
      {/* 5. 規劃服務範疇 */}
      <Solutions />
      {/* 6. 客戶好評 */}
      <GoogleReviews />
      {/* 7. 差異對比 */}
      <ComparisonGrid />
      {/* 10. 辦公環境 */}
      <Gallery />
      {/* 11. 呼籲行動 - 免費健檢 */}
      <PricingCTA />
      
      <Location />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;
