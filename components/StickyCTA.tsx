
import React from 'react';
import { MessageCircle } from 'lucide-react';

const StickyCTA: React.FC = () => {
  const lineUrl = "https://lin.ee/jMoDY4z";

  return (
    <>
      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-morandi-lightBlue p-4 z-50 md:hidden flex justify-center">
        <a 
          href={lineUrl} 
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-3 w-full max-w-sm bg-morandi-coral text-white font-bold text-lg py-4 rounded-2xl text-center shadow-lg active:scale-95 transition-transform"
        >
          <MessageCircle className="w-6 h-6" />
          加 LINE 找阿蓉聊聊
        </a>
      </div>
      
      {/* Desktop Floating Button */}
      <a 
        href={lineUrl} 
        target="_blank" 
        rel="noreferrer"
        className="hidden md:flex fixed bottom-10 right-10 z-50 bg-morandi-coral text-white font-bold py-4 px-8 rounded-2xl shadow-2xl items-center transition-all duration-300 transform hover:scale-105 hover:bg-morandi-blue hover:text-morandi-dark group gap-3"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="text-lg">加 LINE 找阿蓉聊聊</span>
      </a>
    </>
  );
};

export default StickyCTA;
