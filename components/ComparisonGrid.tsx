
import React from 'react';
import { Check, X, Shield, PieChart, Landmark, Heart, Clock, TrendingUp } from 'lucide-react';

const ComparisonGrid: React.FC = () => {
  const items = [
    {
      icon: <Shield />,
      title: "風險抵抗力",
      pro: "即刻啟動高額保障，槓桿倍數大",
      con: "僅有現有存款，難以應付重大意外"
    },
    {
      icon: <PieChart />,
      title: "資產配置",
      pro: "科學配置多種幣別與工具，抗通膨",
      con: "資產過於集中，容易被通膨侵蝕"
    },
    {
      icon: <Clock />,
      title: "長期效益",
      pro: "透過複利與時間，穩健達成財務目標",
      con: "隨意消費，難以累積大筆長期資金"
    },
    {
      icon: <Heart />,
      title: "家人守護",
      pro: "專款專用，即使人不在愛也會延伸",
      con: "無明確法律安排，傳承容易產生糾紛"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-finance-navy mb-6">為什麼您需要專業規劃？</h2>
          <p className="text-finance-slate font-light italic text-lg">數據與邏輯的選擇，往往優於直覺。</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="bg-finance-cream p-10 rounded-3xl border border-finance-navy/5 flex flex-col md:flex-row gap-8 hover:shadow-lg transition-all">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-finance-gold flex-shrink-0">
                {item.icon}
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-finance-navy mb-6">{item.title}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-green-600 uppercase tracking-widest block mb-1">Professional Plan</span>
                      <p className="text-finance-navy font-medium">{item.pro}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 opacity-50">
                    <X className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-red-400 uppercase tracking-widest block mb-1">Traditional Way</span>
                      <p className="text-finance-slate">{item.con}</p>
                    </div>
                  </div>
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
