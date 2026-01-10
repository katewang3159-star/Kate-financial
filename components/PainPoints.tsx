
import React from 'react';
import { AlertTriangle, TrendingDown, Heart } from 'lucide-react';

const PainPoints: React.FC = () => {
  const points = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: "明天與意外，誰先到？",
      desc: "多數人並非沒有錢，而是沒有做好「緊急預備金」與「風險對沖」的規劃。一旦發生突發狀況，生活品質將瞬間崩塌。"
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-finance-gold" />,
      title: "通膨正在吃掉你的未來",
      desc: "只是存錢是不夠的。在高通膨時代，如何配置能穩健增長的資產，確保退休後的替代率，是每個人的必修課題。"
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "想守護家人卻力不從心",
      desc: "家人的醫療開支、孩子的教育費用。如果主要收入來源中斷，如何確保家人的生活軌跡不被打亂？這就是規劃的意義。"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <span className="text-finance-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Risk Assessment</span>
          <h2 className="text-3xl md:text-5xl font-bold text-finance-navy mb-6">您是否也正面臨<br/><span className="font-light">這些看不見的財務黑洞？</span></h2>
          <div className="w-20 h-1 bg-finance-gold/30 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {points.map((point, index) => (
            <div key={index} className="group p-10 rounded-2xl bg-[#F7FAFC] border border-finance-navy/5 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="mb-6 transform group-hover:scale-110 transition-transform">
                {point.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-finance-navy">{point.title}</h3>
              <p className="text-finance-slate leading-relaxed font-light">
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
