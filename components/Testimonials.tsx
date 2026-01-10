
import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-morandi-oat/10">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-morandi-darkBlue mb-4">小資同學的真實回饋</h2>
          <p className="text-morandi-blue text-lg font-light tracking-wide">找對阿蓉，存錢跟保障原來不衝突</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-12 rounded-[2.5rem] shadow-xl shadow-morandi-blue/5 border border-morandi-oat/50">
            <Quote className="w-12 h-12 text-morandi-gold/20 mb-8" />
            <p className="text-morandi-darkBlue italic mb-10 leading-relaxed text-lg font-light">
              「剛出社會根本看不懂保險，問了幾個業務都叫我買好幾萬的儲蓄險。後來找阿蓉，她幫我規畫月繳不到 2000 的高 CP 值醫療組合，剩下的錢我能存下來出國，超感謝她的！」
            </p>
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-morandi-blue/10 flex items-center justify-center font-bold text-morandi-blue border border-morandi-blue/20">
                王
              </div>
              <div>
                <div className="font-bold text-morandi-darkBlue text-lg">王小姐</div>
                <div className="text-xs text-morandi-blue/60 tracking-widest uppercase">24歲 行銷新鮮人</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 rounded-[2.5rem] shadow-xl shadow-morandi-blue/5 border border-morandi-oat/50">
            <Quote className="w-12 h-12 text-morandi-gold/20 mb-8" />
            <p className="text-morandi-darkBlue italic mb-10 leading-relaxed text-lg font-light">
              「阿蓉真的很不像業務，比較像鄰家大姊姊。她花了一個多小時教我怎麼看收據、怎麼申請理賠，而不是一直叫我買。現在我身邊的朋友要買保險我都直接叫他們找阿蓉。」
            </p>
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-morandi-clay/10 flex items-center justify-center font-bold text-morandi-clay border border-morandi-clay/20">
                李
              </div>
              <div>
                <div className="font-bold text-morandi-darkBlue text-lg">李先生</div>
                <div className="text-xs text-morandi-blue/60 tracking-widest uppercase">28歲 工程師</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
