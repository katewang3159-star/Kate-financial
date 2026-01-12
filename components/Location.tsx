
import React from 'react';
import { MapPin, Navigation, Clock } from 'lucide-react';

const Location: React.FC = () => {
  const lineUrl = "https://lin.ee/jMoDY4z";
  
  return (
    <section id="location" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row bg-morandi-cream/50 rounded-[4rem] overflow-hidden max-w-6xl mx-auto shadow-2xl shadow-morandi-blue/5 border border-morandi-oat">
          {/* Map */}
          <div className="w-full lg:w-3/5 h-[450px] lg:h-auto opacity-90 hover:opacity-100 transition-opacity duration-1000">
             <iframe 
               src="https://maps.google.com/maps?q=高雄市鼓山區南屏路527號3樓&z=17&output=embed" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen={true} 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Office Location"
               className="grayscale-[30%] hover:grayscale-0 transition-all duration-700"
             ></iframe>
          </div>

          {/* Info */}
          <div className="w-full lg:w-2/5 p-16 flex flex-col justify-center bg-white/40 backdrop-blur-md">
            <div className="mb-12">
              <div className="flex items-center mb-6 text-morandi-gold font-bold text-xl tracking-widest uppercase">
                <MapPin className="w-6 h-6 mr-3" />
                <span>諮詢地點</span>
              </div>
              <h3 className="text-3xl font-serif font-bold text-morandi-darkBlue leading-tight mb-6">
                專業財務規劃中心<br/>
                <span className="text-xl font-light text-morandi-blue">巨蛋商務館</span>
              </h3>
              <p className="text-morandi-darkBlue/70 leading-relaxed border-l-4 border-morandi-gold/30 pl-6 text-lg font-light">
                804高雄市鼓山區南屏路527號3樓<br/>
                <span className="text-sm text-morandi-blue/50">(鄰近瑞豐夜市、漢神巨蛋商圈)</span>
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-2xl bg-morandi-blue/10 flex items-center justify-center mr-5 flex-shrink-0 border border-morandi-blue/20">
                  <Clock className="w-6 h-6 text-morandi-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-morandi-darkBlue mb-2 text-base">服務時間</h4>
                  <p className="text-sm text-morandi-darkBlue/60 font-light leading-loose">
                    週一至週五 09:30 - 20:00<br/>
                    週六 10:00 - 17:00<br/>
                    <span className="italic">(採全預約制，提供深度諮詢)</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-2xl bg-morandi-clay/10 flex items-center justify-center mr-5 flex-shrink-0 border border-morandi-clay/20">
                  <Navigation className="w-6 h-6 text-morandi-clay" />
                </div>
                <div>
                  <h4 className="font-bold text-morandi-darkBlue mb-2 text-base">如何預約</h4>
                  <p className="text-sm text-morandi-darkBlue/60 font-light leading-relaxed">
                    請務必事先透過官方 LINE 預約時段，我們將為您安排專屬諮詢空間，提供最完整的財務健檢服務。
                  </p>
                </div>
              </div>
            </div>
            
            <a 
              href={lineUrl} 
              target="_blank" 
              rel="noreferrer"
              className="mt-16 block w-full bg-morandi-darkBlue text-white text-center font-bold py-5 rounded-2xl hover:bg-morandi-blue transition-all duration-500 shadow-xl"
            >
              立刻預約免費財務健檢
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
