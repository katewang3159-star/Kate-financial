
import React from 'react';
import { Shield, Coins, Search, Headphones } from 'lucide-react';
import { Check } from 'lucide-react';

const ComparisonGrid: React.FC = () => {
  const items = [
    {
      icon: <Search className="w-5 h-5" />,
      title: "規劃方式",
      pro: "阿蓉懂你：量身打造高 CP 值組合",
      con: "亂跟風：看網路熱門就買，未必適合自己"
    },
    {
      icon: <Coins className="w-5 h-5" />,
      title: "預算分配",
      pro: "精打細算：保障夠用就好，錢留給生活",
      con: "人情壓力：買了一堆用不到的高額保費"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "理賠防線",
      pro: "阿蓉在線：白話解說，申請理賠有依靠",
      con: "孤兒保單：業務員流動，出事沒人理"
    },
    {
      icon: <Headphones className="w-5 h-5" />,
      title: "溝通感受",
      pro: "像朋友一樣：不推銷，只幫你解決問題",
      con: "強大壓力：一見面就推儲蓄險，讓人想逃"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-24">
          <h2 className="text-sm font-bold tracking-[0.4em] text-morandi-blue uppercase mb-4">Why Choose A-Rong?</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-morandi-darkBlue">聰明小資的選擇差別</h3>
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
