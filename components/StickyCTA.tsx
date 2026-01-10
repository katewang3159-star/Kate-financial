
import React from 'react';
import { MessageCircle } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const lineUrl = "https://lin.ee/jMoDY4z";

  return (
    <>
      <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-morandi-lightBlue p-4 z-50 md:hidden flex justify-center">
        <a 
          href={lineUrl} 
          target="_blank"
          rel="noreferrer"
          className="w-full max-w-sm bg-morandi-coral text-morandi-dark font-bold text-lg py-4 rounded-2xl text-center shadow-lg active:scale-95 transition-transform"
        >
          找阿蓉免費聊聊
        </a>
      </div>
      
      <a 
        href={lineUrl} 
        target="_blank" 
        rel="noreferrer"
        className="hidden md:flex fixed bottom-10 right-10 z-50 bg-morandi-coral text-morandi-dark font-bold py-4 px-6 rounded-2xl shadow-2xl items-center transition-all duration-300 transform hover:scale-105 hover:bg-morandi-blue hover:text-morandi-dark group"
      >
        <div className="bg-white/30 p-2 rounded-lg mr-3">
          <MessageCircle className="w-5 h-5 text-morandi-dark" />
        </div>
        <div className="flex flex-col items-start leading-none">
          <span className="text-[10px] uppercase tracking-widest mb-1 opacity-60 font-bold">Chat with A-Rong</span>
          <span className="text-base">阿蓉專屬諮詢</span>
        </div>
      </a>
    </>
  );
};

export default StickyCTA;