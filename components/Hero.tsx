
import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const lineUrl = '#'; // 這裡填寫業務員的 LINE 連結

  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2073&auto=format&fit=crop" 
          alt="Financial Security" 
          className="w-full h-full object-cover object-center opacity-40 grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-finance-navy/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-finance-navy/20 via-transparent to-[#F7FAFC]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl animate-fade-in">
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-8 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 text-white font-bold tracking-[0.1em] text-xs md:text-sm shadow-xl">
            <ShieldCheck className="w-4 h-4 text-finance-gold" />
            <span>守護的不只是財富，更是對家人的愛與承諾</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold mb-8 text-white leading-[1.2] drop-shadow-2xl">
            為您的人生<br />
            <span className="text-finance-gold">築起最強大的防禦牆</span>
          </h1>
          
          <p className="text-lg md:text-2xl mb-12 text-white/90 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            意外與疾病無法預期，但「財務安全」可以提前規劃。<br className="hidden md:block" />
            透過科學化的資產配置，讓您在任何突發狀況下都能從容應對。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href={lineUrl}
              className="inline-flex items-center justify-center bg-finance-gold hover:bg-finance-gold/90 text-finance-navy font-bold text-lg py-5 px-12 rounded-lg shadow-2xl transition duration-500 transform hover:-translate-y-1 animate-pulse-slow"
            >
              預約 1 對 1 免費財務健檢
            </a>
            <a 
              href="#planning"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 font-bold text-lg py-5 px-12 rounded-lg transition duration-500 shadow-md"
            >
              了解規劃範疇
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-white/0 to-white/50 mx-auto mb-2"></div>
        <span className="text-[10px] tracking-widest uppercase">Scroll Down</span>
      </div>
    </header>
  );
};

export default Hero;
