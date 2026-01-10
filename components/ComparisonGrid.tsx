
import React from 'react';
import { Check, X, Shield, BarChart3, Clock, Users } from 'lucide-react';

const ComparisonGrid: React.FC = () => {
  const items = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "風險抵抗",
      pro: "全面性的缺口診斷，確保槓桿極大化",
      con: "隨機投保，保障重疊或存在隱形缺口"
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "資產配置",
      pro: "多元工具搭配，對抗通膨與市場波動",
      con: "資產單一化，難以應對極端經濟變革"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "長期價值",
      pro: "追蹤調整，確保規劃符合人生階段",
      con: "買完即遺忘，無法適應人生變更需求"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "家庭守護",
      pro: "預留稅務與法律規劃，財富精準傳承",
      con: "缺乏系統安排，導致財富縮水或紛爭"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-24">
          <h2 className="text-sm font-bold tracking-[0.4em] text-morandi-blue uppercase mb-4">Value Proposition</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-morandi-darkBlue">為什麼需要專業規劃？</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-morandi-oat flex items-center justify-center text-morandi-darkBlue">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold text-morandi-darkBlue">{item.title}</h4>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-morandi-cream p-6 rounded-2xl border-l-4 border-morandi-blue relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-30 transition-opacity">
                    <Check className="w-12 h-12 text-morandi-blue" />
                  </div>
                  <p className="text-morandi-darkBlue font-medium relative z-10">{item.pro}</p>
                </div>
                
                <div className="bg-morandi-oat/20 p-6 rounded-2xl border-l-4 border-morandi-clay/30">
                  <p className="text-morandi-darkBlue/40 text-sm italic">{item.con}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonGrid;
