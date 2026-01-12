
import React from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import KeyFactor from './components/KeyFactor';
import Teachers from './components/Teachers';
import Testimonials from './components/Testimonials';
import Solutions from './components/Solutions';
import ComparisonGrid from './components/ComparisonGrid';
import PricingCTA from './components/PricingCTA';
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
      {/* 4. 客戶真實改變 (整合了所有好評) */}
      <Testimonials />
      {/* 5. 規劃服務範疇 */}
      <Solutions />
      {/* 6. 差異對比 */}
      <ComparisonGrid />
      {/* 7. 呼籲行動 - 免費健檢 */}
      <PricingCTA />
      
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;
