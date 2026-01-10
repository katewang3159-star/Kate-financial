
import React from 'react';
import { Star, Quote } from 'lucide-react';

const GoogleReviews: React.FC = () => {
  const reviews = [
    {
      name: "林小姐",
      date: "2 週前",
      rating: 5,
      text: "非常專業的顧問！幫我釐清了以前混亂的保單，現在每個月省下不少保費，保障反而更高了。",
      avatar: "林"
    },
    {
      name: "陳先生",
      date: "1 個月前",
      rating: 5,
      text: "對於資產傳承的建議非常客觀且實用，讓我能安心地規劃給孩子的未來教育基金。",
      avatar: "陳"
    },
    {
      name: "張女士",
      date: "2 個月前",
      rating: 5,
      text: "顧問很有耐心，解釋複雜的金融工具都很白話易懂，真心推薦給需要財務健檢的朋友。",
      avatar: "張"
    }
  ];

  return (
    <section className="py-32 bg-morandi-oat/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <Quote className="w-16 h-16 text-morandi-gold/20 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-morandi-darkBlue mb-4">客戶真實好評</h2>
          <div className="flex items-center justify-center gap-1 text-morandi-gold mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
            <span className="text-morandi-darkBlue font-bold ml-3 text-lg">5.0 / 5.0</span>
          </div>
          <p className="text-morandi-blue/60 text-sm tracking-widest">GOOGLE 商家五星滿分推薦</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-morandi-blue/5 border border-morandi-oat flex flex-col hover:-translate-y-2 transition-transform duration-500">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 rounded-2xl bg-morandi-blue/10 text-morandi-blue flex items-center justify-center font-bold text-xl mr-5 border border-morandi-blue/20">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-bold text-morandi-darkBlue">{review.name}</div>
                  <div className="text-morandi-blue/40 text-xs tracking-tighter">{review.date}</div>
                </div>
              </div>
              <p className="text-morandi-darkBlue/70 text-base leading-relaxed italic flex-grow font-light">
                「{review.text}」
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
