
import React from 'react';
import { Quote, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';

const Teachers: React.FC = () => {
  // 使用使用者提供的照片 ID：13xNMLAj2AnUWbHDH0nKnZqKsmS5BXADa
  const imageId = '13xNMLAj2AnUWbHDH0nKnZqKsmS5BXADa';
  const imageUrl = `https://lh3.googleusercontent.com/d/${imageId}`;

  return (
    <section className="py-32 bg-morandi-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-morandi-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-morandi-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Column */}
          <div className="w-full lg:w-2/5 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white bg-white">
              <img 
                src={imageUrl} 
                alt="王宥蓉 - 您的財務規劃師" 
                className="w-full object-cover aspect-[3/4]"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('unsplash')) {
                    target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop";
                  }
                }}
              />
            </div>
            {/* Aesthetic elements */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-morandi-gold/15 rounded-[3rem] -z-10 animate-float"></div>
            <div className="absolute -top-10 -left-10 p-6 bg-white rounded-3xl shadow-xl z-20 hidden md:block border border-morandi-oat">
              <div className="flex items-center gap-3 text-morandi-darkBlue">
                <HeartHandshake className="w-6 h-6 text-morandi-gold" />
                <span className="font-bold tracking-wider">專業・誠信・守護</span>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="w-full lg:w-3/5 text-left">
            <div className="inline-flex items-center gap-2 mb-6 bg-morandi-gold/10 px-4 py-2 rounded-full border border-morandi-gold/20">
              <Sparkles className="w-4 h-4 text-morandi-gold" />
              <span className="text-xs font-bold text-morandi-gold tracking-[0.2em] uppercase">Professional Advisor</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-morandi-darkBlue mb-4 leading-tight">
              王宥蓉
            </h2>
            <h3 className="text-xl md:text-2xl font-light text-morandi-blue mb-8 tracking-widest">
              您的專屬財務規劃師 ｜ 保險管家
            </h3>

            <div className="space-y-6 mb-12">
              <p className="text-lg text-morandi-darkBlue/70 leading-relaxed font-light italic border-l-4 border-morandi-gold/30 pl-6">
                「保險不是消費，而是一份承諾的具現化。我的任務是確保當風險來臨時，這份承諾能穩穩接住您與家人。」
              </p>
              <div className="text-morandi-darkBlue/80 leading-relaxed space-y-4">
                <p>
                  我是宥蓉，致力於提供具備「溫度」的專業規劃。金融市場瞬息萬變，但家庭保障的地基必須永恆穩健。我擅長將複雜的條款轉化為簡單易懂的保障地圖，讓每一分投入都能發揮最大價值。
                </p>
                <p>
                  從保單診斷、風險配置到長期的資產增值規劃，我始終站在客戶的角度出發，守護每一個家庭最重要的資產與夢想。
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "全方位保單健檢", desc: "精準梳理既有保障，汰弱留強" },
                { title: "家庭風險防火牆", desc: "確保疾病與意外不拖垮家庭經濟" },
                { title: "退休金流系統設計", desc: "打造一輩子領不完的尊嚴退休金" },
                { title: "高額稅務傳承規劃", desc: "讓愛延續，財富精準留給下一代" }
              ].map((skill, idx) => (
                <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-white/50 border border-morandi-oat/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <ShieldCheck className="w-5 h-5 text-morandi-blue mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-morandi-darkBlue mb-1 text-base">{skill.title}</h4>
                    <p className="text-xs text-morandi-darkBlue/50 font-light">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-8">
               <div className="flex flex-col">
                  <span className="text-3xl font-serif font-bold text-morandi-gold">100+</span>
                  <span className="text-[10px] text-morandi-blue tracking-widest uppercase">守護家庭案例</span>
               </div>
               <div className="w-px h-12 bg-morandi-oat"></div>
               <div className="flex flex-col">
                  <span className="text-3xl font-serif font-bold text-morandi-gold">1:1</span>
                  <span className="text-[10px] text-morandi-blue tracking-widest uppercase">深度客製規劃</span>
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
