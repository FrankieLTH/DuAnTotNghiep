import React from 'react';
import { SearchBookingBar } from './SearchBookingBar';

interface HeroSectionProps {
  onSearch?: (params: any) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSearch }) => {
  return (
    <section id="hero" className="relative min-h-[580px] md:min-h-[640px] flex items-end justify-center pb-12 overflow-hidden">
      {/* Background Image with Dark Overlay Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1920&q=80"
          alt="Đồi Bông Gòn Homestay Vũng Tàu"
          className="w-full h-full object-cover object-center transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        
        {/* Sub-header tag */}
        <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/30 text-xs font-sans font-bold tracking-[0.2em] uppercase mb-4 text-amber-100">
          ĐỒI BÔNG GÒN HOMESTAY • VŨNG TÀU
        </div>

        {/* Hero Title (Playfair Display) */}
        <h1 className="font-serif font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4 tracking-tight drop-shadow-lg">
          Kỳ nghỉ bình yên <br className="hidden sm:inline" />
          trên Đồi Bông Gòn
        </h1>

        {/* Hero Subtitle */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light drop-shadow-md">
          Tự do trải nghiệm với hệ thống tự check-in 24/7 riêng tư tuyệt đối.
        </p>

        {/* Search Booking Bar Widget */}
        <SearchBookingBar onSearch={onSearch} />

      </div>
    </section>
  );
};
