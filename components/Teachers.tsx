
import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  FileSearch, 
  ChevronDown, 
  ChevronUp, 
  BarChart3, 
  Snowflake, 
  TrendingUp, 
  Clock, 
  Coins, 
  Mountain,
  Waves
} from 'lucide-react';

const Teachers: React.FC = () => {
  const [show631, setShow631] = useState(false);
  const [showSnowball, setShowSnowball] = useState(false);
  
  const imageId = '13xNMLAj2AnUWbHDH0nKnZqKsmS5BXADa';
  const imageUrl = `https://lh3.googleusercontent.com/d/${imageId}`;
  const insuranceReviewUrl = "https://lin.ee/8Lo8Mw9";

  return (
    <section className="py-24 bg-morandi-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-morandi-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Column */}
          <div className="w-full lg:w-2/5 relative">
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white bg-white">
              <img 
                src={imageUrl} 
                alt="王宥蓉 阿蓉" 
                className="w-full object-cover aspect-[3/4]"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-morandi-coral/10 rounded-[4rem] -z-10 animate-float"></div>
          </div>

          {/* Text Content Column */}
          <div className="w-full lg:w-3/5 text-left">
            <div className="inline-flex items-center gap-2 mb-8 bg-morandi-blue/10 px-5 py-2.5 rounded-full border border-morandi-blue/30">
              <Sparkles className="w-5 h-5 text-morandi-blue" />
              <span className="text-sm font-bold text-morandi-blue tracking-[0.2em] uppercase">Your Personal Butler</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-morandi-dark mb-4">
              王宥蓉
            </h2>
            <h3 className="text-xl md:text-2xl font-bold text-morandi-coral mb-10 tracking-widest">
              我是阿蓉，妳的客戶規劃管家
            </h3>

            <div className="space-y-8 mb-12">
              <p className="text-xl md:text-2xl text-morandi-dark/70 leading-relaxed font-light italic border-l-8 border-morandi-blue/30 pl-8">
                「我不喜歡推銷，我只喜歡陪妳釐清生活。保險應該是讓我們生活得更有餘裕，而不是成為負擔。」
              </p>
              <div className="text-morandi-dark/80 text-lg md:text-xl leading-relaxed space-y-6">
                <p>嘿，我是阿蓉！我明白那種「想買保障又怕被當肥羊」的心情。</p>
                <p>我的任務很簡單：幫妳把錢花在刀口上。沒有高深莫測的術語，只有最真實的規劃建議。</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "理財診斷懶人包", desc: "幫妳看清現有保單，刪除不需要的浪費" },
                { title: "高 CP 值防護網", desc: "用最低預算買到最高槓桿的保障" },
                { title: "無痛小額存錢規劃", desc: "讓存錢變有趣，夢想離妳越來越近" },
                { title: "理賠陪伴不孤單", desc: "萬一發生事情，阿蓉永遠是妳的第一靠山" }
              ].map((skill, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 rounded-3xl bg-white shadow-sm border border-morandi-lightBlue/50 hover:border-morandi-coral transition-all duration-300">
                  <ShieldCheck className="w-6 h-6 text-morandi-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-morandi-dark mb-1.5 text-lg md:text-xl">{skill.title}</h4>
                    <p className="text-sm md:text-base text-morandi-dark/50 font-light leading-relaxed">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons Group */}
            <div className="flex flex-col gap-4 mb-8">
              {/* Primary LINE Button */}
              <div className="flex justify-start">
                <a 
                  href={insuranceReviewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 bg-morandi-dark text-white font-bold py-5 px-10 rounded-2xl shadow-xl hover:bg-morandi-coral transition-all duration-300 transform hover:scale-105"
                >
                  <FileSearch className="w-7 h-7 text-morandi-blue group-hover:text-white transition-colors" />
                  <span className="text-xl md:text-2xl tracking-widest">保單健診限定名額，特價 299 元</span>
                </a>
              </div>

              <div className="flex flex-wrap gap-4">
                {/* 631 Rule Button */}
                <button 
                  onClick={() => setShow631(!show631)}
                  className={`flex items-center gap-2 font-bold transition-all py-3 px-6 rounded-xl border shadow-sm active:scale-95 transform duration-200 ${show631 ? 'bg-morandi-blue text-white border-morandi-blue' : 'text-morandi-darkBlue border-morandi-darkBlue/20 bg-white/50 hover:bg-white hover:shadow-md'}`}
                >
                  <BarChart3 className="w-5 h-5" />
                  <span className="tracking-widest">理財規劃的祕訣 (631 法則)</span>
                  {show631 ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>

                {/* Snowball Effect Button */}
                <button 
                  onClick={() => setShowSnowball(!showSnowball)}
                  className={`flex items-center gap-2 font-bold transition-all py-3 px-6 rounded-xl border shadow-sm active:scale-95 transform duration-200 ${showSnowball ? 'bg-morandi-coral text-white border-morandi-coral' : 'text-morandi-darkBlue border-morandi-darkBlue/20 bg-white/50 hover:bg-white hover:shadow-md'}`}
                >
                  <Snowflake className="w-5 h-5" />
                  <span className="tracking-widest">巴菲特雪球效應 (滾雪球祕訣)</span>
                  {showSnowball ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Container for Dynamic Content */}
            <div className="relative">
              {/* 1. 631 Rule Content */}
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${show631 ? 'max-h-[1000px] opacity-100 translate-y-0 mt-6' : 'max-h-0 opacity-0 -translate-y-4 pointer-events-none'}`}>
                <div className="py-6 max-w-2xl bg-white/40 rounded-[3rem] border border-white p-8 shadow-sm">
                  <div className="flex flex-col items-center">
                    <div className="relative w-0 h-0 border-l-[75px] border-r-[75px] border-b-[85px] border-transparent border-b-[#E67E22] flex items-end justify-center drop-shadow-md">
                      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-48 text-center text-white leading-tight">
                        <div className="font-bold text-2xl">10%</div>
                        <div className="text-[11px] font-bold whitespace-nowrap">風險管理 / 醫療保險</div>
                      </div>
                    </div>
                    <div 
                      className="relative w-[300px] h-[95px] bg-[#27AE60] mt-1.5 flex items-center justify-center text-white shadow-md"
                      style={{ clipPath: 'polygon(18% 0%, 82% 0%, 100% 100%, 0% 100%)' }}
                    >
                      <div className="text-center">
                        <div className="font-bold text-2xl">30%</div>
                        <div className="text-sm font-bold tracking-widest">投資理財</div>
                      </div>
                    </div>
                    <div 
                      className="relative w-[400px] h-[110px] bg-[#2980B9] mt-1.5 flex items-center justify-center text-white shadow-lg"
                      style={{ clipPath: 'polygon(12% 0%, 88% 0%, 100% 100%, 0% 100%)' }}
                    >
                      <div className="text-center">
                        <div className="font-bold text-3xl">60%</div>
                        <div className="text-xl font-bold tracking-[0.2em]">生活開銷</div>
                      </div>
                    </div>
                    <div className="mt-10 text-morandi-dark/30 text-[10px] font-bold tracking-[0.5em] uppercase border-t border-morandi-dark/5 pt-4 w-full text-center">
                      理財規劃金字塔結構 (631 法則)
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Snowball Effect Content */}
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${showSnowball ? 'max-h-[1200px] opacity-100 translate-y-0 mt-6' : 'max-h-0 opacity-0 -translate-y-4 pointer-events-none'}`}>
                <div className="py-8 max-w-2xl bg-gradient-to-br from-white/60 to-morandi-lightBlue/30 rounded-[3rem] border border-white p-8 shadow-lg">
                  <h4 className="text-2xl font-bold text-morandi-darkBlue mb-8 text-center flex items-center justify-center gap-3">
                    巴菲特雪球效應：滾出富足人生
                  </h4>
                  
                  <div className="space-y-12">
                    {/* Element 1 */}
                    <div className="flex gap-6 items-center group">
                      <div className="w-16 h-16 bg-morandi-blue/20 rounded-2xl flex items-center justify-center text-morandi-blue border border-morandi-blue/30 group-hover:scale-110 transition-transform">
                        <Coins className="w-8 h-8" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-morandi-blue tracking-widest mb-1">1. 初始的推力</div>
                        <h5 className="text-xl font-bold text-morandi-dark mb-2">第一桶金與儲蓄</h5>
                        <p className="text-morandi-dark/60 text-base font-light">
                          捏出紮實本金、維持節儉紀律。核心在於「儘早開始」，讓雪球有足夠的空間滾動。
                        </p>
                      </div>
                    </div>

                    {/* Element 2 */}
                    <div className="flex gap-6 items-center group">
                      <div className="w-16 h-16 bg-morandi-gold/20 rounded-2xl flex items-center justify-center text-morandi-gold border border-morandi-gold/30 group-hover:scale-110 transition-transform">
                        <Clock className="w-8 h-8" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-morandi-gold tracking-widest mb-1">2. 很長的坡道</div>
                        <h5 className="text-xl font-bold text-morandi-dark mb-2">時間與耐心</h5>
                        <p className="text-morandi-dark/60 text-base font-light">
                          複利效應需要時間發酵。關鍵在於「少折騰、長期持有」，讓資產隨時間幾何級數增長。
                        </p>
                      </div>
                    </div>

                    {/* Element 3 */}
                    <div className="flex gap-6 items-center group">
                      <div className="w-16 h-16 bg-morandi-coral/20 rounded-2xl flex items-center justify-center text-morandi-coral border border-morandi-coral/30 group-hover:scale-110 transition-transform">
                        <Waves className="w-8 h-8" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-morandi-coral tracking-widest mb-1">3. 濕的雪</div>
                        <h5 className="text-xl font-bold text-morandi-dark mb-2">正確的投資標的</h5>
                        <p className="text-morandi-dark/60 text-base font-light">
                          選擇能產生複利的資產，擁有「護城河」與穩定回報。股息再投入，創造源源不絕的動能。
                        </p>
                      </div>
                    </div>

                    {/* Final Result Visualization */}
                    <div className="mt-12 pt-8 border-t border-morandi-dark/5 flex flex-col items-center">
                      <div className="relative">
                        {/* The Large Snowball */}
                        <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-morandi-lightBlue relative animate-float">
                          <div className="text-center">
                            <div className="font-serif font-bold text-xl md:text-2xl text-morandi-darkBlue">富足人生</div>
                            <div className="text-[10px] text-morandi-blue font-bold tracking-tighter">(巨大的財富雪球)</div>
                          </div>
                          {/* Floating mini coins */}
                          <div className="absolute -top-4 -right-2 bg-yellow-400/90 text-white rounded-full p-1 shadow-sm"><Coins className="w-4 h-4" /></div>
                          <div className="absolute top-1/2 -left-6 bg-morandi-blue/90 text-white rounded-full p-1 shadow-sm"><TrendingUp className="w-4 h-4" /></div>
                        </div>
                        {/* Slope Line SVG */}
                        <div className="absolute -left-48 top-20 -z-10 opacity-20 hidden md:block">
                           <svg width="200" height="100" viewBox="0 0 200 100">
                             <path d="M0,100 Q100,100 200,20" fill="none" stroke="currentColor" strokeWidth="4" className="text-morandi-darkBlue" />
                           </svg>
                        </div>
                      </div>
                      <div className="mt-8 text-morandi-dark/40 text-[10px] font-bold tracking-[0.4em] uppercase">
                        三大關鍵要素：累積、時間、複利
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
