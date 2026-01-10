
import React from 'react';
import { HeartPulse, Home, GraduationCap, Briefcase, Landmark, HandCoins } from 'lucide-react';

const Solutions: React.FC = () => {
  const services = [
    {
      icon: <HeartPulse className="w-6 h-6" />,
      title: "全方位醫療防護",
      desc: "針對高額癌症治療、失能長期照顧與實支實付醫療，建構不讓病痛拖垮家庭的防線。"
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "安穩退休規劃",
      desc: "利用分紅保單或年金工具，打造源源不絕的被動現金流，讓您的晚年尊嚴且優雅。"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "子女教育基金",
      desc: "提早為孩子的夢想鋪路，透過專項規劃累積留學或創業基金，不受市場波動干擾。"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "中小企業主規劃",
      desc: "企業主關鍵人才保險與營運中斷規劃，確保事業與家庭財務之間的完美防火牆。"
    },
    {
      icon: <Landmark className="w-6 h-6" />,
      title: "資產保全與傳承",
      desc: "合法的稅務優化建議，確保辛苦積攢的財富能精準、公平地傳承給摯愛的家人。"
    },
    {
      icon: <HandCoins className="w-6 h-6" />,
      title: "高資產配置策略",
      desc: "多幣種資產配置與信託架構規劃，應對地緣政治風險，實現財富的全球守護。"
    }
  ];

  return (
    <section id="planning" className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <span className="text-morandi-gold font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Our Expertise</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-morandi-darkBlue">專業規劃服務<br/><span className="font-light text-morandi-blue">滿足人生各階段需求</span></h2>
          <div className="w-12 h-1 bg-morandi-gold/30 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-10 rounded-[2rem] border border-morandi-oat/50 hover:border-morandi-blue/30 hover:shadow-2xl hover:shadow-morandi-blue/5 transition-all duration-500 bg-morandi-cream/30">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-morandi-blue mb-8 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-morandi-darkBlue">{service.title}</h3>
              <p className="text-morandi-darkBlue/60 text-sm font-light leading-relaxed">
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
