
import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-morandi-lightBlue via-morandi-cream to-morandi-lightCoral">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-morandi-blue/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-morandi-coral/5 rounded-full blur-[80px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-8 bg-white/60 backdrop-blur-sm px-6 py-2 rounded-full border border-morandi-blue/30">
            < Sparkles className="w-5 h-5 text-morandi-coral" />
            <span className="text-sm md:text-base font-medium text-morandi-dark tracking-widest">我是阿蓉，陪妳從現在開始變富有</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 leading-tight text-morandi-dark max-w-4xl">
            讓妳的每一分辛苦錢<br />
            <span className="text-morandi-blue brightness-75">都成為未來的底氣</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-12 text-morandi-dark/70 font-light leading-relaxed max-w-3xl">
            規劃不是為了現在省錢，而是為了讓未來的妳擁有選擇權。阿蓉幫妳精準對焦需求，打造最高 CP 值的防護網。
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40 text-morandi-blue brightness-75">
        <ArrowDown className="w-6 h-6 animate-bounce" />
      </div>
    </header>
  );
};

export default Hero;
