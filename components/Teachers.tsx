
import React from 'react';
import { Quote, Sparkles, ShieldCheck } from 'lucide-react';

const Teachers: React.FC = () => {
  // 使用使用者提供的照片 ID
  const imageId = '1F13LyO20v97qsWK98-Uda0h55JG3Qvtm';
  const imageUrl = `https://lh3.googleusercontent.com/d/${imageId}`;

  return (
    <section className="py-32 bg-morandi-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-morandi-gold/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Column */}
          <div className="w-full lg:w-2/5 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
              <img 
                src={imageUrl} 
                alt="孟潔 Mavis - 您的財務規劃師" 
                className="w-full object-cover aspect-[3/4]"
              />
            </div>
            {/* Aesthetic element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-morandi-blue/20 rounded-full -z-10 animate-pulse"></div>
            <div className="absolute -top-10 -left-10 p-6 bg-white rounded-3xl shadow-xl z-20 hidden md:block border border-morandi-oat">
              <div className="flex items-center gap-3 text-morandi-darkBlue">
                <ShieldCheck className="w-6 h-6 text-morandi-gold" />
                <span className="font-bold tracking-wider">誠信・專業・溫度</span>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="w-full lg:w-3/5 text-left">
            <div className="inline-flex items-center gap-2 mb-6 bg-morandi-gold/10 px-4 py-2 rounded-full border border-morandi-gold/20">
              <Sparkles className="w-4 h-4 text-morandi-gold" />
              <span className="text-xs font-bold text-morandi-gold tracking-[0.2em] uppercase">About Your Advisor</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-morandi-darkBlue mb-4 leading-tight">
              孟潔 <span className="text-morandi-blue italic font-light">Mavis</span>
            </h2>
            <h3 className="text-xl md:text-2xl font-light text-morandi-blue mb-8 tracking-widest">
              您的專屬財務守護者 ｜ 保險管家
            </h3>

            <div className="space-y-6 mb-12">
              <p className="text-lg text-morandi-darkBlue/70 leading-relaxed font-light">
                「規劃不只是為了現在，更是為了在不可控的未來中，依然能保有選擇權。」
              </p>
              <p className="text-morandi-darkBlue/80 leading-relaxed">
                我是孟潔，致力於將繁雜的金融條款轉化為溫暖的守護方案。我不只看保單的額度，更在意這份規劃是否能真正承載您對家人的那份「愛與責任」。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "全方位保單診斷", desc: "釐清重複與缺口，讓保障極大化" },
                { title: "家庭財務風險規劃", desc: "建立家人的財務防火牆" },
                { title: "退休穩定金流設計", desc: "打造尊嚴且優雅的晚年生活" },
                { title: "資產配置與保全", desc: "專業建議，確保財富精準傳承" }
              ].map((skill, idx) => (
                <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-white/50 border border-morandi-oat/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-morandi-gold mt-2"></div>
                  <div>
                    <h4 className="font-bold text-morandi-darkBlue mb-1">{skill.title}</h4>
                    <p className="text-xs text-morandi-darkBlue/50">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-8">
               <div className="flex flex-col">
                  <span className="text-3xl font-serif font-bold text-morandi-gold">100+</span>
                  <span className="text-[10px] text-morandi-blue tracking-widest uppercase">已守護家庭</span>
               </div>
               <div className="w-px h-12 bg-morandi-oat"></div>
               <div className="flex flex-col">
                  <span className="text-3xl font-serif font-bold text-morandi-gold">1:1</span>
                  <span className="text-[10px] text-morandi-blue tracking-widest uppercase">深度顧問服務</span>
               </div>
               <div className="w-px h-12 bg-morandi-oat"></div>
               <Quote className="w-10 h-10 text-morandi-blue/20" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Teachers;
