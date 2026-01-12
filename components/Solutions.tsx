
import React from 'react';
import { HeartPulse, PiggyBank, GraduationCap, Coffee, ShieldPlus, PartyPopper } from 'lucide-react';

const Solutions: React.FC = () => {
  const services = [
    {
      icon: <HeartPulse className="w-7 h-7" />,
      title: "全能醫療防禦包",
      desc: "專為平衡預算設計。實支實付、進階醫療防護一次到位，萬一住院不領薪水也不怕。"
    },
    {
      icon: <Coffee className="w-7 h-7" />,
      title: "一杯咖啡存錢術",
      desc: "把每天喝咖啡或下午茶的小錢轉化為未來的教育金或創業夢想基金。"
    },
    {
      icon: <ShieldPlus className="w-7 h-7" />,
      title: "第一份保單規劃",
      desc: "剛畢業或換工作？阿蓉幫妳規劃「基礎防禦圖」，讓人生第一步踩得最穩。"
    },
    {
      icon: <PartyPopper className="w-7 h-7" />,
      title: "旅遊與意外防護",
      desc: "愛生活、愛探索？便宜卻強大的意外傷害險，讓妳出外通勤都心安。"
    },
    {
      icon: <PiggyBank className="w-7 h-7" />,
      title: "無痛老後現金流",
      desc: "複利就是妳的超能力。現在開始規劃，為未來的自己準備一份優雅的禮物。"
    },
    {
      icon: <GraduationCap className="w-7 h-7" />,
      title: "專業保單大掃除",
      desc: "幫妳檢查老舊保單。補足缺口、剔除過時項目，把錢省下來花在更有意義的地方。"
    }
  ];

  return (
    <section id="planning" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <span className="text-morandi-blue font-bold tracking-[0.4em] uppercase text-sm mb-4 block">Smart Solutions</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-morandi-dark">為妳準備的<br/><span className="font-light text-morandi-coral">三大無痛規劃術</span></h2>
          <div className="w-16 h-1.5 bg-morandi-blue/20 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="group p-10 rounded-[3rem] border border-morandi-lightBlue/30 hover:border-morandi-coral/30 hover:shadow-xl hover:shadow-morandi-coral/5 transition-all duration-500 bg-morandi-cream/20">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-morandi-blue mb-8 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-morandi-dark">{service.title}</h3>
              <p className="text-morandi-dark/60 text-base md:text-lg font-light leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
