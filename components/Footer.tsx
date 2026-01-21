
import React from 'react';

const Footer: React.FC = () => {
  return (
    <section className="py-24 bg-morandi-lightCoral text-morandi-dark pb-40 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-morandi-blue/40 to-transparent"></div>
      
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <span className="text-morandi-blue font-bold tracking-[0.5em] uppercase text-xs mb-8 block">Start Your Journey with A-Rong</span>
        <h2 className="text-3xl md:text-5xl font-serif font-light mb-8 leading-tight">讓阿蓉陪你<br/><span className="font-bold italic text-morandi-blue">在理財路上走得更安心</span></h2>
        
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 relative">
          {[
            { step: '01', title: '私訊阿蓉', desc: 'LINE 上打個招呼，隨便聊聊' },
            { step: '02', title: '雲端診斷', desc: '快速了解你目前的財務狀況' },
            { step: '03', title: '專屬懶人包', desc: '給你一份一看就懂的規劃書' }
          ].map((item, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center group">
              <div className="w-16 h-16 rounded-2xl bg-white/60 border border-morandi-blue/30 text-morandi-blue flex items-center justify-center text-xl font-bold mb-6 group-hover:bg-morandi-blue group-hover:text-morandi-cream transition-all duration-500 shadow-md">
                {item.step}
              </div>
              <h4 className="text-lg font-bold mb-2 tracking-wider">{item.title}</h4>
              <p className="text-morandi-dark/60 text-xs font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-morandi-dark/10 pt-12">
          <p className="text-morandi-dark/60 text-xs tracking-[0.4em] uppercase mb-3 font-bold">阿蓉・理財規劃管家</p>
          <p className="text-morandi-dark/30 text-[10px] italic">© {new Date().getFullYear()} All rights reserved. 專業、誠信、守護您的未來。</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
