
import React, { useState } from 'react';
import { TrendingUp, TrendingDown, WalletCards, ChevronRight } from 'lucide-react';

const PainPoints: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const points = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "通膨讓錢變薄了？",
      desc: "物價一年比一年貴，單純存錢已經無法守護你的購買力。阿蓉幫你建立抗通膨資產配置，讓你的每一分辛苦錢不再悄悄縮水。",
      bgColor: 'bg-morandi-lightBlue',
      iconColor: 'text-morandi-blue'
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "退休金夠用嗎？",
      desc: "是否擔心未來勞保破產，退休金不夠用？與其焦慮，不如現在開始規劃穩定現金流，讓以後的你能優雅退休。",
      bgColor: 'bg-morandi-lightCoral',
      iconColor: 'text-morandi-coral'
    },
    {
      icon: <WalletCards className="w-8 h-8" />,
      title: "錢都花到哪去了？",
      desc: "你是否覺得薪水很穩定，但錢好像總是不知花去哪了？阿蓉幫你釐清財務漏水點，找回被浪費掉的隱形開支。",
      bgColor: 'bg-morandi-lightBlue/50',
      iconColor: 'text-morandi-dark'
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.4em] text-morandi-coral uppercase mb-4">Interactive Concerns</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-morandi-dark mb-6 leading-tight">
            親愛的，你是否也曾有這些迷惘？
          </h3>
          <p className="text-morandi-dark/40 text-lg mb-8">點擊下方卡片，直接查看解決方案</p>
          <div className="w-16 h-1.5 bg-morandi-blue/30 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {points.map((point, index) => (
            <div 
              key={index} 
              className={`flex flex-col rounded-[2.5rem] border-2 transition-all duration-500 overflow-hidden ${
                activeIndex === index 
                ? 'border-morandi-blue bg-white shadow-2xl scale-[1.02] z-10' 
                : 'border-morandi-cream bg-morandi-cream/30 hover:border-morandi-blue/20'
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex items-center gap-5 p-8 text-left group w-full"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 flex-shrink-0 ${
                  activeIndex === index ? 'bg-morandi-blue text-white shadow-lg' : `${point.bgColor} ${point.iconColor}`
                }`}>
                  {point.icon}
                </div>
                <div className="flex-grow">
                  <span className={`text-xl font-bold transition-colors duration-500 ${
                    activeIndex === index ? 'text-morandi-dark' : 'text-morandi-dark/70'
                  }`}>
                    {point.title}
                  </span>
                </div>
                <ChevronRight className={`w-5 h-5 transition-transform duration-500 flex-shrink-0 ${
                  activeIndex === index ? 'rotate-90 text-morandi-blue' : 'text-morandi-dark/20'
                }`} />
              </button>

              <div 
                className={`transition-all duration-500 ease-in-out px-8 ${
                  activeIndex === index 
                  ? 'max-h-[500px] pb-10 opacity-100' 
                  : 'max-h-0 pb-0 opacity-0 pointer-events-none'
                }`}
              >
                <div className="pt-6 border-t border-morandi-blue/10">
                  <p className="text-morandi-dark/70 leading-relaxed font-light text-lg md:text-xl">
                    {point.desc}
                  </p>
                  <div className="mt-8 flex items-center gap-3 text-morandi-blue font-bold italic tracking-wider text-sm">
                    <div className="w-6 h-[2px] bg-morandi-blue/30"></div>
                    阿蓉 Strategy
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
