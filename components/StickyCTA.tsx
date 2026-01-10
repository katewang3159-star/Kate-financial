
import React from 'react';
import { MessageCircle } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const lineUrl = "https://lin.ee/jMoDY4z";

  return (
    <>
      <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-morandi-oat p-4 z-50 md:hidden flex justify-center">
        <a 
          href={lineUrl} 
          target="_blank"
          rel="noreferrer"
          className="w-full max-w-sm bg-morandi-darkBlue text-white font-bold text-lg py-4 rounded-2xl text-center shadow-lg active:scale-95 transition-transform"
        >
          立即預約免費財務健檢
        </a>
      </div>
      
      <a 
        href={lineUrl} 
        target="_blank"
        rel="noreferrer"
        className="hidden md:flex fixed bottom-10 right-10 z-50 bg-morandi-darkBlue text-white font-bold py-5 px-8 rounded-2xl shadow-2xl items-center transition-all duration-300 transform hover:scale-105 hover:bg-morandi-blue group"
      >
        <div className="bg-white/10 p-2 rounded-lg mr-4 group-hover:bg-white/20">
          <MessageCircle className="w-6 h-6" />
        </div>
        <div className="flex flex-col items-start leading-none">
          <span className="text-[10px] uppercase tracking-widest mb-1 opacity-60 font-light">Contact Us</span>
          <span className="text-lg">免費財務諮詢</span>
        </div>
      </a>
    </>
  );
};

export default StickyCTA;
