
import React from 'react';
import { MessageCircle } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const lineUrl = "#";

  return (
    <>
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-finance-navy/5 p-4 z-50 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] md:hidden">
        <a 
          href={lineUrl} 
          className="block w-full bg-finance-navy text-white font-bold text-lg py-4 rounded-lg text-center shadow-lg active:scale-95 transition-transform"
        >
          即刻預約免費財務健檢
        </a>
      </div>
      
      <a 
        href={lineUrl} 
        className="hidden md:flex fixed bottom-10 right-10 z-50 bg-finance-gold hover:bg-finance-navy text-finance-navy hover:text-white font-bold py-4 px-8 rounded-lg shadow-2xl items-center transition-all duration-500 transform hover:scale-105 group"
      >
        <MessageCircle className="w-6 h-6 mr-3" />
        <span className="text-lg">免費財務諮詢</span>
      </a>
    </>
  );
};

export default StickyCTA;
