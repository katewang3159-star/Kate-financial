
import React from 'react';
import { ShieldCheck, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const lineUrl = 'https://lin.ee/jMoDY4z';
  // 使用 lh3.googleusercontent.com/d/ 格式，這通常比 uc?id 格式在嵌入網頁時更穩定
  const imageId = '1F13LyO20v97qsWK98-Uda0h55JG3Qvtm';
  const imageUrl = `https://lh3.googleusercontent.com/d/${imageId}`;

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-morandi-oat/30">
      {/* Background Abstract Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-morandi-blue/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-morandi-sage/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-3/5 text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-6 bg-white px-4 py-2 rounded-full shadow-sm border border-morandi-blue/10">
              <ShieldCheck className="w-4 h-4 text-morandi-blue" />
              <span className="text-sm font-medium text-morandi-blue tracking-wider">傳承愛與責任，從規劃開始</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight text-morandi-darkBlue">
              為生命中不可控的<br />
              <span className="text-morandi-blue">寫下確定的答案</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-10 text-morandi-darkBlue/70 font-light leading-relaxed max-w-2xl">
              專業財務規劃不只是購買產品，而是一場關於未來生活的深度對話。我們透過科學化的配置，確保您的夢想在任何風雨中都能屹立不搖。
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href={lineUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-morandi-darkBlue text-white font-bold py-5 px-10 rounded-2xl shadow-xl hover:bg-morandi-blue transition-all duration-300 transform hover:-translate-y-1"
              >
                免費預約 1:1 財務健檢
              </a>
              <a 
                href="#planning"
                className="bg-white text-morandi-darkBlue border border-morandi-darkBlue/10 font-bold py-5 px-10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                探索規劃範疇
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-2/5 relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-white">
              <img 
                src={imageUrl} 
                alt="Professional Consultation" 
                className="w-full aspect-[4/5] object-cover"
                loading="lazy"
                onError={(e) => {
                  // 如果 Google Drive 連結因為權限或 API 限制暫時無法載入的備案
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('unsplash')) {
                    target.src = "https://images.unsplash.com/photo-1573164067047-0ad2c18a2024?q=80&w=2070&auto=format&fit=crop";
                  }
                }}
              />
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-morandi-clay/20 rounded-3xl -z-10 animate-float"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-morandi-gold/20 rounded-full -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40">
        <span className="text-xs tracking-[0.3em] uppercase mb-2">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </header>
  );
};

export default Hero;
