
import React from 'react';
import { PlaneTakeoff, TrendingDown, WalletCards } from 'lucide-react';

const PainPoints: React.FC = () => {
  const points = [
    {
      icon: <PlaneTakeoff className="w-9 h-9" />,
      title: "想出國就出國？",
      desc: "是否希望能有一筆錢，讓妳隨時想出國就能出國？阿蓉教妳如何從小錢開始，有節奏地存出妳的夢想旅遊金。",
      bgColor: 'bg-morandi-lightBlue',
      iconColor: 'text-morandi-blue'
    },
    {
      icon: <TrendingDown className="w-9 h-9" />,
      title: "退休金夠用嗎？",
      desc: "是否擔心未來勞保破產，退休金不夠用？與其焦慮，不如現在開始規劃穩定現金流，讓以後的妳能優雅退休。",
      bgColor: 'bg-morandi-lightCoral',
      iconColor: 'text-morandi-coral'
    },
    {
      icon: <WalletCards className="w-9 h-9" />,
      title: "錢都花到哪去了？",
      desc: "妳是否覺得薪水很穩定，但錢好像總是不知花去哪了？阿蓉幫妳釐清財務漏水點，找回被浪費掉的隱形開支。",
      bgColor: 'bg-morandi-lightBlue/50',
      iconColor: 'text-morandi-dark'
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-sm font-bold tracking-[0.4em] text-morandi-coral uppercase mb-4">Real Life Concerns</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-morandi-dark mb-8 leading-tight">親愛的，妳是否也曾有這些迷惘？</h3>
          <div className="w-16 h-1.5 bg-morandi-blue/30 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {points.map((point, index) => (
            <div key={index} className="group p-12 rounded-[3rem] bg-morandi-cream/50 border border-transparent hover:border-morandi-blue/10 hover:bg-white hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center">
              <div className={`w-20 h-20 rounded-3xl ${point.bgColor} ${point.iconColor} flex items-center justify-center mb-10 transform group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                {point.icon}
              </div>
              <h4 className="text-2xl font-bold mb-6 text-morandi-dark">{point.title}</h4>
              <p className="text-morandi-dark/60 leading-relaxed font-light text-base md:text-lg">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;