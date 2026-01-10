
import React from 'react';
import { Heart, Compass, Umbrella } from 'lucide-react';

const PainPoints: React.FC = () => {
  const points = [
    {
      icon: <Compass className="w-8 h-8" />,
      title: "不知從何開始？",
      desc: "保單琳瑯滿目，網路上資訊紛雜。我們幫您梳理邏輯，讓每一分錢都花在刀口上。",
      bgColor: 'bg-morandi-blue/10',
      iconColor: 'text-morandi-blue'
    },
    {
      icon: <Umbrella className="w-8 h-8" />,
      title: "保障是否足夠？",
      desc: "現有的保障是否能覆蓋高額自費藥物或長照需求？我們用數據為您提供壓力測試。",
      bgColor: 'bg-morandi-sage/10',
      iconColor: 'text-morandi-sage'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "家人的未來？",
      desc: "如果您突然無法繼續工作，家庭的房貸與教育費該如何延續？這就是我們規劃的核心。",
      bgColor: 'bg-morandi-clay/10',
      iconColor: 'text-morandi-clay'
    }
  ];

  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-sm font-bold tracking-[0.4em] text-morandi-blue uppercase mb-4">Risk Perception</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-morandi-darkBlue mb-6 leading-tight">面對未來，您可能有的憂慮</h3>
          <div className="w-12 h-1 bg-morandi-gold/40 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <div key={index} className="group p-10 rounded-[2.5rem] bg-morandi-cream/50 border border-transparent hover:border-morandi-oat hover:bg-white hover:shadow-2xl hover:shadow-morandi-blue/5 transition-all duration-500">
              <div className={`w-16 h-16 rounded-2xl ${point.bgColor} ${point.iconColor} flex items-center justify-center mb-8 transform group-hover:scale-110 transition-transform duration-500`}>
                {point.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 text-morandi-darkBlue">{point.title}</h4>
              <p className="text-morandi-darkBlue/60 leading-relaxed font-light">
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
