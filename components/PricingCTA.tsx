
import React from 'react';
import { MessageCircle, FileText } from 'lucide-react';

const PricingCTA: React.FC = () => {
  const lineUrl = "#";

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-finance-navy rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-finance-gold/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-finance-gold rounded-full flex items-center justify-center mb-8">
              <FileText className="w-8 h-8 text-finance-navy" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">開啟您的財務健檢</h2>
            <p className="text-xl font-light mb-12 text-white/70 leading-relaxed">
              我們將針對您現有的保單、資產現況進行深度診斷，<br className="hidden md:block" />
              找出缺口，並提供一份專屬您的建議書。
            </p>
            
            <div className="bg-white/10 px-8 py-4 rounded-full mb-12 border border-white/20">
               <span className="text-finance-gold font-bold">限時活動：</span> 每日僅開放 3 名免費 1 對 1 諮詢名額
            </div>
            
            <a 
              href={lineUrl}
              className="group inline-flex items-center justify-center bg-finance-gold hover:bg-white hover:text-finance-navy text-finance-navy font-bold text-xl py-6 px-16 rounded-lg shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              立即加 LINE 預約諮詢
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
