
import React from 'react';
import { Shield, Coins, Search, Headphones, Check } from 'lucide-react';

const ComparisonGrid: React.FC = () => {
  const items = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "規劃方式",
      pro: "阿蓉懂妳：量身打造高 CP 值組合",
      con: "亂跟風：看網路熱門就買，未必適合自己"
    },
    {
      icon: <Coins className="w-6 h-6" />,
      title: "預算分配",
      pro: "精打細算：保障夠用就好，錢留給生活",
      con: "人情壓力：買了一堆用不到的高額保費"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "理賠防線",
      pro: "阿蓉在線：白話解說，申請理賠有依靠",
      con: "孤兒保單：業務員流動，出事沒人理"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "溝通感受",
      pro: "像朋友一樣：不推銷，只幫妳解決問題",
      con: "強大壓力：一見面就推儲蓄險，讓人想逃"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-24">
          <h2 className="text-sm font-bold tracking-[0.4em] text-morandi-blue uppercase mb-4">Why Choose A-Rong?</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-morandi-darkBlue">聰明規劃的選擇差別</h3>
          <div className="w-16 h-1 bg-morandi-blue/20 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              {/* 類別標題 */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-morandi-oat/50 flex items-center justify-center text-morandi-darkBlue shadow-sm">
                  {item.icon}
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-morandi-darkBlue">{item.title}</h4>
              </div>
              
              <div className="space-y-6">
                {/* Pro Card */}
                <div className="bg-morandi-cream/40 p-8 rounded-[2rem] border-l-[10px] border-morandi-blue relative overflow-hidden flex items-center shadow-sm">
                  <p className="text-xl md:text-2xl font-bold text-morandi-darkBlue relative z-10 pr-10">
                    {item.pro}
                  </p>
                  <div className="absolute top-1/2 right-6 -translate-y-1/2 opacity-10">
                    <Check className="w-12 h-12 text-morandi-dark" />
                  </div>
                </div>
                
                {/* Con Card */}
                <div className="bg-gray-50/50 p-8 rounded-[2rem] border-l-[10px] border-gray-200 flex items-center">
                  <p className="text-lg md:text-xl text-gray-400 italic font-light">
                    {item.con}
                  </p>
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
