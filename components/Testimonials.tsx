
import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-morandi-oat/10">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-morandi-darkBlue mb-4">學員真實改變</h2>
          <p className="text-morandi-blue text-lg font-light tracking-wide">規劃之後，心安了，生活更自由</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-12 rounded-[2.5rem] shadow-xl shadow-morandi-blue/5 border border-morandi-oat/50">
            <Quote className="w-12 h-12 text-morandi-gold/20 mb-8" />
            <p className="text-morandi-darkBlue italic mb-10 leading-relaxed text-lg font-light">
              「以前總覺得買保險是浪費錢，直到去年生了一場大病。還好有顧問當時堅持幫我做的實支實付規劃，讓我能選擇最好的治療而不必擔心存款歸零。這不只是保險，是救命錢。」
            </p>
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-morandi-blue/10 flex items-center justify-center font-bold text-morandi-blue border border-morandi-blue/20">
                林
              </div>
              <div>
                <div className="font-bold text-morandi-darkBlue text-lg">林先生</div>
                <div className="text-xs text-morandi-blue/60 tracking-widest uppercase">科技業工程師</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 rounded-[2.5rem] shadow-xl shadow-morandi-blue/5 border border-morandi-oat/50">
            <Quote className="w-12 h-12 text-morandi-gold/20 mb-8" />
            <p className="text-morandi-darkBlue italic mb-10 leading-relaxed text-lg font-light">
              「身為單親媽媽，我最怕自己倒下孩子沒人顧。透過顧問的規劃，我用負擔得起的保費，買到了高額的保障，並透過信託確保這筆錢會專款專用於孩子的教育。現在我睡得很安穩。」
            </p>
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-morandi-clay/10 flex items-center justify-center font-bold text-morandi-clay border border-morandi-clay/20">
                陳
              </div>
              <div>
                <div className="font-bold text-morandi-darkBlue text-lg">陳小姐</div>
                <div className="text-xs text-morandi-blue/60 tracking-widest uppercase">自由職業者</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
