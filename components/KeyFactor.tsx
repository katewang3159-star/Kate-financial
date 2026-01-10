
import React from 'react';
import { Shield, TrendingUp, HandCoins } from 'lucide-react';

const KeyFactor: React.FC = () => {
  return (
    <section className="py-32 bg-morandi-darkBlue text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full -mr-64 -mt-64 blur-3xl"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold tracking-[0.4em] text-morandi-gold uppercase mb-6">Security Pyramid</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              打好地基，<br/><span className="text-morandi-gold">財富才能穩健成長</span>
            </h3>
            <p className="text-white/60 text-lg mb-12 font-light leading-relaxed">
              就像蓋房子，財務安全也有先後順序。沒有底層的風險轉嫁，上層的投資增值都只是空中樓閣。
            </p>
            
            <div className="space-y-10">
              {[
                { icon: <Shield />, title: "風險防護層", desc: "確保疾病與意外不會吞噬您的生活資產。" },
                { icon: <TrendingUp />, title: "資產增值層", desc: "透過複利工具，實現中長期的財務目標。" },
                { icon: <HandCoins />, title: "財富傳承層", desc: "優雅地將愛延伸，確保財富精準留給摯愛。" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 text-morandi-gold border border-white/10 group-hover:bg-morandi-gold group-hover:text-morandi-darkBlue transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-white/40 text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
             <div className="relative bg-white/5 p-12 rounded-[4rem] border border-white/10 backdrop-blur-md">
                <div className="flex flex-col gap-3">
                   {/* Visual Pyramid */}
                   <div className="h-20 bg-morandi-gold rounded-t-2xl flex items-center justify-center font-bold text-morandi-darkBlue shadow-lg transform hover:-translate-y-1 transition-transform cursor-default">資產傳承</div>
                   <div className="h-24 bg-morandi-gold/70 flex items-center justify-center font-bold text-morandi-darkBlue transform hover:-translate-y-1 transition-transform cursor-default">退休規劃</div>
                   <div className="h-28 bg-morandi-gold/40 flex items-center justify-center font-bold text-white transform hover:-translate-y-1 transition-transform cursor-default">教育與增值</div>
                   <div className="h-32 bg-morandi-gold/20 rounded-b-2xl flex items-center justify-center font-bold text-morandi-gold border border-morandi-gold/20 transform hover:-translate-y-1 transition-transform cursor-default uppercase tracking-widest text-lg">風險防護</div>
                </div>
                <div className="mt-8 text-center text-[10px] text-white/30 tracking-[0.5em] uppercase">The Professional Strategy</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFactor;
