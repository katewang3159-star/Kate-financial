
import React from 'react';
import { MessageCircle, ScrollText } from 'lucide-react';

const PricingCTA: React.FC = () => {
  const lineUrl = "https://lin.ee/jMoDY4z";

  return (
    <section className="py-32 bg-morandi-oat/20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-morandi-darkBlue rounded-[4rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          {/* Decorative element */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-morandi-gold/20 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-morandi-gold/20 backdrop-blur-md rounded-3xl flex items-center justify-center mb-10 border border-morandi-gold/30">
              <ScrollText className="w-10 h-10 text-morandi-gold" />
            </div>
            
            <h2 className="text-3xl md:text-6xl font-serif font-bold mb-8 leading-tight">讓專業成為<br/>您的財務靠山</h2>
            <p className="text-xl font-light mb-12 text-white/60 leading-relaxed max-w-2xl">
              規劃是一段旅程的開始。我們為您提供一份清晰、專業且具備執行力的財務報告書，讓您對未來瞭若指掌。
            </p>
            
            <div className="inline-block bg-white/5 border border-white/10 px-8 py-3 rounded-full mb-12 text-morandi-gold font-medium tracking-widest text-sm">
               限量：本週僅餘 3 個深度健檢名額
            </div>
            
            <a 
              href={lineUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center bg-morandi-gold text-morandi-darkBlue font-bold text-xl py-6 px-16 rounded-2xl shadow-2xl hover:bg-white transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 mr-4" />
              加 LINE 預約專屬時段
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
