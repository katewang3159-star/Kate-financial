
import React, { useState } from 'react';
import { TrendingUp, TrendingDown, WalletCards, ChevronRight } from 'lucide-react';

const PainPoints: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const points = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "通膨讓錢變薄了？",
      desc: "物價一年比一年貴，單純存錢已經無法守護妳的購買力。阿蓉幫妳建立抗通膨資產配置，讓妳的每一分辛苦錢不再悄悄縮水。",
      bgColor: 'bg-morandi-lightBlue',
      iconColor: 'text-morandi-blue'
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "退休金夠用嗎？",
      desc: "是否擔心未來勞保破產，退休金不夠用？與其焦慮，不如現在開始規劃穩定現金流，讓以後的妳能優雅退休。",
      bgColor: 'bg-morandi-lightCoral',
      iconColor: 'text-morandi-coral'
    },
    {
      icon: <WalletCards className="w-8 h-8" />,
      title: "錢都花到哪去了？",
      desc: "妳是否覺得薪水很穩定，但錢好像總是不知花去哪了？阿蓉幫妳釐清財務漏水點，找回被浪費掉的隱形開支。",
      bgColor: 'bg-morandi-lightBlue/50',
      iconColor: 'text-morandi-dark'
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.4em] text-morandi-coral uppercase mb-4">Interactive Concerns</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-morandi-dark mb-6 leading-tight">
            親愛的，妳是否也曾有這些迷惘？
          </h3>
          <p className="text-morandi-dark/40 text-lg mb-8">點擊下方按鈕，看看阿蓉如何幫妳解決</p>
          <div className="w-16 h-1.5 bg-morandi-blue/30 rounded-full"></div>
        </div>
        
        {/* 第一層：互動按鈕 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {points.map((point, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center gap-6 p-8 rounded-[2rem] border-2 transition-all duration-500 text-left group ${
                activeIndex === index 
                ? 'border-morandi-blue bg-morandi-lightBlue/30 shadow-lg scale-105' 
                : 'border-morandi-cream bg-morandi-cream/50 hover:border-morandi-blue/20 hover:bg-white'
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-500 ${
                activeIndex === index ? 'bg-morandi-blue text-white' : `${point.bgColor} ${point.iconColor}`
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
              <ChevronRight className={`w-5 h-5 transition-transform duration-500 ${
                activeIndex === index ? 'rotate-90 text-morandi-blue' : 'text-morandi-dark/20 group-hover:translate-x-1'
              }`} />
            </button>
          ))}
        </div>

        {/* 第二層：詳細內容區 */}
        <div className="relative min-h-[220px]">
          {points.map((point, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full p-12 rounded-[3rem] bg-gradient-to-br from-morandi-cream to-white border border-morandi-blue/10 shadow-xl transition-all duration-700 ease-out ${
                activeIndex === index 
                ? 'opacity-100 translate-y-0 scale-100 z-10' 
                : 'opacity-0 translate-y-10 scale-95 -z-10 pointer-events-none'
              }`}
            >
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className={`w-20 h-20 rounded-[2rem] ${point.bgColor} ${point.iconColor} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  {React.cloneElement(point.icon as React.ReactElement, { className: "w-10 h-10" })}
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-2xl font-bold mb-4 text-morandi-dark">關於「{point.title}」</h4>
                  <p className="text-morandi-dark/70 leading-relaxed font-light text-xl md:text-2xl">
                    {point.desc}
                  </p>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-morandi-blue/10 flex justify-center md:justify-end">
                <div className="text-morandi-blue font-bold flex items-center gap-2 italic tracking-widest text-lg">
                  <div className="w-8 h-[2px] bg-morandi-blue/30"></div>
                  阿蓉Strategy
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
