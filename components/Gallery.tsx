
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1606857521015-7f9fdf423740?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517502884422-41eaace01e29?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <section className="py-32 bg-morandi-cream">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif font-light text-morandi-darkBlue">諮詢環境<span className="font-bold text-morandi-gold">實景拍攝</span></h2>
          <p className="text-morandi-blue/60 font-light mt-4 tracking-widest uppercase text-xs">Elegant & Professional Environment</p>
          <div className="w-12 h-1 bg-morandi-gold/30 mx-auto mt-6 rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="aspect-video rounded-[2rem] overflow-hidden hover:scale-105 transition-transform duration-700 shadow-lg border-4 border-white">
              <img src={img} alt="Office Environment" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
