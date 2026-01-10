
import React from 'react';
import { MessageCircle, Coffee } from 'lucide-react';

const PricingCTA: React.FC = () => {
  const lineUrl = "https://lin.ee/jMoDY4z";

  return (
    <section className="py-24 bg-morandi-cream">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-morandi-blue rounded-[3rem] p-10 md:p-16 text-center text-morandi-dark relative overflow-hidden shadow-2xl border border-white/30">
          {/* Decorative element */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-morandi-coral/10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-white/40 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-morandi-dark/5">
              <Coffee className="w-8 h-8 text-morandi-dark" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">像找朋友聊天一樣<br/>沒壓力地聊聊未來</h2>
            <p className="text-lg font-light mb-10 text-morandi-dark/70 leading-relaxed max-w-2xl">
              阿蓉不推銷，只想幫你省錢又能買到安心。如果你也對財務感到迷惘，歡迎隨時找阿蓉聊聊！
            </p>
            
            <div className="inline-block bg-white/40 border border-morandi-dark/5 px-6 py-2 rounded-full mb-10 text-morandi-dark/80 font-bold tracking-widest text-xs">
               新手友善：免費諮詢不限時，聊完覺得不合適也沒關係
            </div>
            
            <a 
              href={lineUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center bg-morandi-coral text-morandi-cream font-bold text-lg py-5 px-12 rounded-2xl shadow-xl hover:brightness-90 transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              加 LINE 找阿蓉聊聊
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;