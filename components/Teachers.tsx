
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
      {/* 背景裝飾 */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-morandi-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="bg-white/60 backdrop-blur-xl rounded-[3rem] p-8 md:p-14 border border-white/80 shadow-2xl">
          
          {/* 標題與標籤 */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 mb-4 bg-morandi-blue/10 px-4 py-1.5 rounded-full border border-morandi-blue/20">
              <Sparkles className="w-4 h-4 text-morandi-blue" />
              <span className="text-xs font-bold text-morandi-blue tracking-[0.2em] uppercase">Your Personal Butler</span>
            </div>
          </div>

          {/* 創意繞排內容區 */}
          <div className="relative">
            {/* 縮小的個人照片 - 桌面版浮動於左側 */}
            <div className="md:float-left md:mr-10 mb-8 md:mb-4 w-full max-w-[220px] mx-auto md:mx-0">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-white transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={imageUrl} 
                  alt="王宥蓉 阿蓉" 
                  className="w-full object-cover aspect-[3/4]"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-morandi-coral/10 rounded-full -z-10 animate-pulse"></div>
            </div>

            {/* 文字內容 */}
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-morandi-dark mb-1">
                王宥蓉
              </h2>
              <h3 className="text-base md:text-lg font-bold text-morandi-coral mb-6 tracking-[0.2em] uppercase">
                你的客戶規劃管家
              </h3>

              {/* 更新後的引言 */}
              <p className="text-xl md:text-2xl text-morandi-dark/80 leading-relaxed font-light italic border-l-4 border-morandi-blue/40 pl-6 mb-8">
                「我也不喜歡推銷，我很喜歡協助釐清生活。理財應該是讓我們生活得更有餘裕，而不是成為負擔。」
              </p>

              <div className="text-morandi-dark/70 text-lg leading-relaxed space-y-4 mb-8">
                <p>
                  嘿，我是阿蓉！我明白那種「想買保障又怕被當肥羊」的心情。
                </p>
                <p>
                  我的任務很簡單：幫你把錢花在刀口上。沒有高深莫測的術語，只有最真實的規劃建議。
                  不管是剛出社會的小資女，還是正為家庭奮鬥的你，阿蓉都會站在你這邊。
                </p>
              </div>
            </div>

            {/* 清除浮動後的專業標籤 */}
            <div className="clear-both pt-6 grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {[
                { title: "理財診斷懶人包", desc: "幫你看清現有保單，刪除不需要的浪費" },
                { title: "高 CP 值防護網", desc: "用最低預算買到最高槓桿的保障" },
                { title: "無痛小額存錢規劃", desc: "讓存錢變有趣，夢想離你越來越近" },
                { title: "理賠陪伴不孤單", desc: "萬一發生事情，阿蓉永遠是你的第一靠山" }
              ].map((skill, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white/40 border border-white shadow-sm hover:border-morandi-blue transition-colors group">
                  <ShieldCheck className="w-5 h-5 text-morandi-blue group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="font-bold text-morandi-dark text-sm">{skill.title}</h4>
                    <p className="text-[11px] text-morandi-dark/50 font-light">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 互動按鈕區 */}
            <div className="flex flex-col gap-6 pt-8 border-t border-morandi-dark/5">
              <div className="flex justify-start">
                <a 
                  href={insuranceReviewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 bg-morandi-dark text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:bg-morandi-coral transition-all duration-300 transform hover:scale-105"
                >
                  <FileSearch className="w-6 h-6 text-morandi-blue group-hover:text-white transition-colors" />
                  <span className="text-lg tracking-widest">保單健診限定名額，趕快預約</span>
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                <button 
                  onClick={() => { setShow631(!show631); setShowSnowball(false); }}
                  className={`flex items-center gap-2 font-bold transition-all py-2.5 px-5 rounded-xl border text-sm shadow-sm active:scale-95 transform duration-200 ${show631 ? 'bg-morandi-blue text-white border-morandi-blue' : 'text-morandi-darkBlue border-morandi-darkBlue/20 bg-white hover:bg-morandi-lightBlue/30'}`}
                >
                  <BarChart3 className="w-4 h-4" />
                  <span className="tracking-widest">理財規劃 (631 法則)</span>
                  {show631 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                <button 
                  onClick={() => { setShowSnowball(!showSnowball); setShow631(false); }}
                  className={`flex items-center gap-2 font-bold transition-all py-2.5 px-5 rounded-xl border text-sm shadow-sm active:scale-95 transform duration-200 ${showSnowball ? 'bg-morandi-coral text-white border-morandi-coral' : 'text-morandi-darkBlue border-morandi-darkBlue/20 bg-white hover:bg-morandi-lightCoral/30'}`}
                >
                  <Snowflake className="w-4 h-4" />
                  <span className="tracking-widest">巴菲特雪球效應</span>
                  {showSnowball ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* 動態顯示區域 */}
            <div className="relative mt-8">
              {/* 1. 631 Rule Content */}
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${show631 ? 'max-h-[1000px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4 pointer-events-none'}`}>
                <div className="py-10 bg-white/80 rounded-[3rem] border border-white shadow-inner flex flex-col items-center">
                  <div className="relative w-0 h-0 border-l-[65px] border-r-[65px] border-b-[75px] border-transparent border-b-[#E67E22] flex items-end justify-center drop-shadow-sm">
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-40 text-center text-white leading-tight">
                      <div className="font-bold text-xl">10%</div>
                      <div className="text-[10px] font-bold">風險管理</div>
                    </div>
                  </div>
                  <div 
                    className="relative w-[240px] h-[80px] bg-[#27AE60] mt-1.5 flex items-center justify-center text-white shadow-sm"
                    style={{ clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)' }}
                  >
                    <div className="text-center">
                      <div className="font-bold text-xl">30%</div>
                      <div className="text-[11px] font-bold">投資理財</div>
                    </div>
                  </div>
                  <div 
                    className="relative w-[340px] h-[95px] bg-[#2980B9] mt-1.5 flex items-center justify-center text-white shadow-md"
                    style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)' }}
                  >
                    <div className="text-center">
                      <div className="font-bold text-2xl">60%</div>
                      <div className="text-base font-bold tracking-[0.2em]">生活開銷</div>
                    </div>
                  </div>
                  <p className="mt-8 text-morandi-dark/40 text-[10px] font-bold tracking-[0.4em] uppercase">理財規劃金字塔 (631 法則)</p>
                </div>
              </div>

              {/* 2. Snowball Effect Content */}
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${showSnowball ? 'max-h-[1200px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4 pointer-events-none'}`}>
                <div className="py-10 px-8 bg-gradient-to-br from-white to-morandi-lightBlue/20 rounded-[3rem] border border-white shadow-xl">
                  <h4 className="text-2xl font-bold text-morandi-darkBlue mb-10 text-center">滾出富足人生的三大要素</h4>
                  <div className="space-y-8">
                    <div className="flex gap-4 items-start">
                      <Coins className="w-7 h-7 text-morandi-blue flex-shrink-0" />
                      <div>
                        <h5 className="font-bold text-morandi-dark text-base mb-1">初始推力：第一桶金</h5>
                        <p className="text-sm text-morandi-dark/60 leading-relaxed font-light">維持節儉紀律，捏出紮實的本金。</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <Clock className="w-7 h-7 text-morandi-gold flex-shrink-0" />
                      <div>
                        <h5 className="font-bold text-morandi-dark text-base mb-1">很長的坡道：時間複利</h5>
                        <p className="text-sm text-morandi-dark/60 leading-relaxed font-light">關鍵在於耐心，讓時間替你工作。</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <Waves className="w-7 h-7 text-morandi-coral flex-shrink-0" />
                      <div>
                        <h5 className="font-bold text-morandi-dark text-base mb-1">濕的雪：正確投資標的</h5>
                        <p className="text-sm text-morandi-dark/60 leading-relaxed font-light">選擇具有護城河的資產，複利滾動財富。</p>
                      </div>
                    </div>
                    <div className="flex justify-center pt-6">
                       <div className="w-24 h-24 bg-white rounded-full shadow-lg border-2 border-morandi-lightBlue flex items-center justify-center animate-float">
                          <span className="text-morandi-darkBlue font-bold text-xs">富足人生</span>
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
