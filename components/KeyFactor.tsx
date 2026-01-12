
import React from 'react';
import { Shield, Coins, Wallet } from 'lucide-react';

const KeyFactor: React.FC = () => {
  return (
    <section className="py-32 bg-morandi-blue text-morandi-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/20 rounded-full -mr-64 -mt-64 blur-3xl"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold tracking-[0.4em] text-morandi-dark/50 uppercase mb-6">Smart Budgeting</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-8 leading-tight">
              理財第一步：<br/><span className="text-morandi-dark">先把漏水的地方補起來</span>
            </h3>
            <p className="text-morandi-dark/70 text-lg md:text-xl mb-12 font-light leading-relaxed">
              很多人急著投資，卻忘了先幫自己做好防護。阿蓉建議理財新朋友要「先求有再求好」，建構最強的防火牆。
            </p>
            
            <div className="space-y-10">
              {[
                { icon: <Shield />, title: "基礎醫療護城河", desc: "運用631法則，安全又安心的應對萬一發生時的醫療支出。" },
                { icon: <Wallet />, title: "無痛存錢術", desc: "把零碎的小錢鎖起來，未來的妳一定會感謝現在的自己。" },
                { icon: <Coins />, title: "夢想加速器", desc: "當地基穩了，妳才能放心地追求創業、留學或買房夢。" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/40 flex items-center justify-center flex-shrink-0 text-morandi-dark border border-morandi-dark/5 group-hover:bg-morandi-coral group-hover:text-morandi-cream transition-all duration-300">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8" })}
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold mb-2">{item.title}</h4>
                    <p className="text-morandi-dark/60 text-base md:text-lg font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
             <div className="relative bg-white/30 p-10 md:p-14 rounded-[4rem] border border-white/40 backdrop-blur-md">
                <div className="flex flex-col gap-4">
                   <div className="h-20 md:h-24 bg-morandi-coral rounded-t-[2rem] flex items-center justify-center font-bold text-morandi-cream shadow-sm text-xl md:text-2xl tracking-widest">幸福傳承</div>
                   <div className="h-24 md:h-28 bg-morandi-coral/80 flex items-center justify-center font-bold text-morandi-dark text-xl md:text-2xl tracking-widest">圓夢計畫</div>
                   <div className="h-28 md:h-32 bg-morandi-coral/60 flex items-center justify-center font-bold text-morandi-dark/70 text-lg md:text-xl tracking-widest">無痛小額儲蓄</div>
                   <div className="h-32 md:h-36 bg-morandi-coral/40 rounded-b-[2rem] flex items-center justify-center font-bold text-morandi-dark/50 uppercase tracking-[0.2em] text-lg md:text-xl">CP值最高防護</div>
                </div>
                <div className="mt-10 text-center text-xs text-morandi-dark/40 tracking-[0.5em] uppercase font-bold">阿蓉Strategy</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFactor;
