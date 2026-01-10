
import React from 'react';
import { Layers, Shield, Coins } from 'lucide-react';

const KeyFactor: React.FC = () => {
  return (
    <section className="py-24 bg-finance-navy text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-finance-gold/5 rounded-full -mr-48 -mt-24 blur-3xl"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <span className="text-finance-gold font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Strategic Planning</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">財務安全的<br/><span className="text-finance-gold italic">「穩固金字塔」</span></h2>
            <p className="text-white/70 text-lg mb-12 font-light">
              真正的財務自由，始於最底層的「風險防禦」。只有地基打穩了，上層的資產增值才有意義。
            </p>
            
            <div className="space-y-8">
              {[
                { icon: <Shield className="w-6 h-6" />, title: "風險轉移", desc: "利用低成本的保險工具，將無法承受的龐大醫療或失能風險轉嫁給保險公司。" },
                { icon: <Layers className="w-6 h-6" />, title: "資產配置", desc: "根據人生不同階段的需求，配置不同流動性與報酬率的金融工具。" },
                { icon: <Coins className="w-6 h-6" />, title: "財富傳承", desc: "透過專業法律與財務安排，確保財富能按照您的意志順利傳遞給下一代。" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-finance-gold/20 flex items-center justify-center flex-shrink-0 text-finance-gold">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-white/50 text-sm font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
             <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 p-12 rounded-3xl border border-white/10 backdrop-blur-sm shadow-2xl">
                <div className="aspect-square flex flex-col justify-end space-y-2">
                   {/* Visual Representation of Pyramid */}
                   <div className="h-1/4 bg-finance-gold/80 rounded-t-sm flex items-center justify-center font-bold text-finance-navy text-xs md:text-base">資產傳承 (Wealth Legacy)</div>
                   <div className="h-1/4 bg-finance-gold/60 flex items-center justify-center font-bold text-finance-navy text-xs md:text-base">退休規劃 (Retirement)</div>
                   <div className="h-1/4 bg-finance-gold/40 flex items-center justify-center font-bold text-finance-navy text-xs md:text-base">資產配置 (Allocation)</div>
                   <div className="h-1/4 bg-finance-gold/20 rounded-b-sm flex items-center justify-center font-bold text-finance-gold text-xs md:text-base">風險保障 (Risk Protection)</div>
                </div>
                <div className="mt-8 text-center text-xs text-white/40 tracking-[0.2em]">THE FINANCIAL SECURITY PYRAMID</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFactor;
