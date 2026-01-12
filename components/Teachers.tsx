
import React from 'react';
import { Sparkles, ShieldCheck, FileSearch } from 'lucide-react';

const Teachers: React.FC = () => {
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
              我是阿蓉，妳的保險規劃管家
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

            {/* CTA Button */}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
