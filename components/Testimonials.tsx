
import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#F7FAFC]">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-finance-navy mb-4">學員真實改變</h2>
          <p className="text-finance-slate text-lg font-light">規劃之後，心安了，生活更自由</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-10 rounded-2xl shadow-xl shadow-finance-navy/5 border border-finance-navy/5">
            <Quote className="w-10 h-10 text-finance-gold/20 mb-6" />
            <p className="text-finance-navy italic mb-8 leading-relaxed">
              「以前總覺得買保險是浪費錢，直到去年生了一場大病。還好有顧問當時堅持幫我做的實支實付規劃，讓我能選擇最好的治療而不必擔心存款歸零。這不只是保險，是救命錢。」
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-finance-navy/10 flex items-center justify-center font-bold text-finance-navy">
                林
              </div>
              <div>
                <div className="font-bold text-finance-navy">林先生</div>
                <div className="text-xs text-finance-slate">科技業工程師</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-xl shadow-finance-navy/5 border border-finance-navy/5">
            <Quote className="w-10 h-10 text-finance-gold/20 mb-6" />
            <p className="text-finance-navy italic mb-8 leading-relaxed">
              「身為單親媽媽，我最怕自己倒下孩子沒人顧。透過顧問的規劃，我用負擔得起的保費，買到了高額的保障，並透過信託確保這筆錢會專款專用於孩子的教育。現在我睡得很安穩。」
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-finance-navy/10 flex items-center justify-center font-bold text-finance-navy">
                陳
              </div>
              <div>
                <div className="font-bold text-finance-navy">陳小姐</div>
                <div className="text-xs text-finance-slate">自由職業者</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
