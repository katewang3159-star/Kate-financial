
import React from 'react';

const Footer: React.FC = () => {
  return (
    <section className="py-32 bg-morandi-darkBlue text-white pb-48 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-morandi-gold/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <span className="text-morandi-gold font-bold tracking-[0.5em] uppercase text-xs mb-8 block">Ready to Secure Your Future?</span>
        <h2 className="text-4xl md:text-6xl font-serif font-light mb-10 leading-tight">現在開始規劃<br/><span className="font-bold italic text-morandi-gold">給未來最安心的承諾</span></h2>
        <p className="text-white/50 mb-20 text-xl font-light tracking-wide">踏出規劃的第一步，就是資產增值的開始。</p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 relative">
          <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-white/10 z-0"></div>
          
          {[
            { step: '01', title: '加 LINE 預約', desc: '專業顧問一對一初步了解' },
            { step: '02', title: '財務健檢', desc: '深度診斷現有資產與缺口' },
            { step: '03', title: '專屬規劃', desc: '量身定制最合適的防禦方案' }
          ].map((item, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center group">
              <div className="w-20 h-20 rounded-3xl bg-morandi-darkBlue border border-morandi-gold/50 text-morandi-gold flex items-center justify-center text-2xl font-bold mb-8 group-hover:bg-morandi-gold group-hover:text-morandi-darkBlue transition-all duration-500 shadow-2xl group-hover:scale-110">
                {item.step}
              </div>
              <h4 className="text-xl font-bold mb-3 tracking-wider">{item.title}</h4>
              <p className="text-white/40 text-sm font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-16">
          <div className="mb-8 flex justify-center gap-8 opacity-40">
             <span className="text-[10px] tracking-[0.3em] uppercase">Trust</span>
             <span className="text-[10px] tracking-[0.3em] uppercase">Professional</span>
             <span className="text-[10px] tracking-[0.3em] uppercase">Integrity</span>
          </div>
          <p className="text-white/40 text-sm tracking-[0.4em] uppercase mb-4 font-bold">專業財務安全規劃中心</p>
          <p className="text-white/20 text-[10px] italic">© {new Date().getFullYear()} All rights reserved. 專業、誠信、守護您的未來。</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
