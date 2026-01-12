
import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const allReviews = [
    {
      name: "王小姐",
      role: "24歲 行銷新鮮人",
      text: "剛出社會根本看不懂保險，問了幾個業務都叫我買好幾萬的儲蓄險。後來找阿蓉，她幫我規畫月繳不到 2000 的高 CP 值醫療組合，剩下的錢我能存下來出國，超感謝她的！",
      avatar: "王",
      color: "bg-morandi-blue/10 text-morandi-blue border-morandi-blue/20"
    },
    {
      name: "李先生",
      role: "28歲 工程師",
      text: "阿蓉真的很不像業務，比較像鄰家大姊姊。她花了一個多小時教我怎麼看收據、怎麼申請理賠，而不是一直叫我買。現在我身邊的朋友要買保險我都直接叫他們找阿蓉。",
      avatar: "李",
      color: "bg-morandi-clay/10 text-morandi-clay border-morandi-clay/20"
    },
    {
      name: "林小姐",
      role: "職場上班族",
      text: "非常專業的顧問！幫我釐清了以前混亂的保單，現在每個月省下不少保費，保障反而更高了。",
      avatar: "林",
      color: "bg-morandi-coral/10 text-morandi-coral border-morandi-coral/20"
    },
    {
      name: "陳先生",
      role: "家庭支柱",
      text: "對於資產傳承的建議非常客觀且實用，讓我能安心地規劃給孩子的未來教育基金。",
      avatar: "陳",
      color: "bg-morandi-gold/10 text-morandi-gold border-morandi-gold/20"
    },
    {
      name: "張女士",
      role: "職場菁英",
      text: "顧問很有耐心，解釋複雜的金融工具都很白話易懂，真心推薦給需要財務健檢的朋友。",
      avatar: "張",
      color: "bg-morandi-darkBlue/10 text-morandi-darkBlue border-morandi-darkBlue/20"
    }
  ];

  return (
    <section className="py-32 bg-morandi-oat/10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-[0.4em] text-morandi-blue uppercase mb-4">Success Stories</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-morandi-darkBlue mb-6">學員真實回饋</h3>
          <p className="text-morandi-blue text-xl md:text-2xl font-light tracking-wide">找對阿蓉，存錢跟保障原來不衝突</p>
          <div className="flex items-center justify-center gap-1 text-morandi-gold mt-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
            <span className="text-morandi-darkBlue font-bold ml-3 text-xl">5.0 滿分推薦</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allReviews.map((review, idx) => (
            <div 
              key={idx} 
              className={`bg-white p-10 rounded-[2.5rem] shadow-xl shadow-morandi-blue/5 border border-morandi-oat/50 flex flex-col transition-all duration-500 hover:-translate-y-2 ${idx === 0 || idx === 1 ? 'lg:col-span-1.5' : ''}`}
            >
              <Quote className="w-10 h-10 text-morandi-gold/20 mb-6" />
              <p className="text-morandi-darkBlue italic mb-10 leading-relaxed text-xl md:text-2xl font-light flex-grow">
                「{review.text}」
              </p>
              <div className="flex items-center gap-5 mt-auto pt-8 border-t border-morandi-oat/30">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl border ${review.color}`}>
                  {review.avatar}
                </div>
                <div>
                  <div className="font-bold text-morandi-darkBlue text-lg">{review.name}</div>
                  <div className="text-xs text-morandi-blue/60 tracking-widest uppercase font-medium">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
