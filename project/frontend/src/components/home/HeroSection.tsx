import React from 'react';
import { SearchBookingBar } from './SearchBookingBar';

interface HeroSectionProps {
  onSearch?: (params: any) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSearch }) => {
  return (
    <section className="relative w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-32 pb-8 md:pb-12 overflow-hidden">
      {/* Background Image với hiệu ứng phản chiếu hồ bơi hoàng hôn đúng như thiết kế */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=85"
          alt="Đồi Bông Gòn Homestay Hồ Bơi"
          className="w-full h-full object-cover object-center transform scale-100 filter brightness-90"
        />
        {/* Lớp phủ chuyển màu gradient tối phía trên và phía dưới để làm nổi bật chữ */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/75 pointer-events-none" />
      </div>

      {/* Phần nội dung Tiêu đề chính giữa */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 text-center my-auto pt-8 md:pt-16">
        {/* Biểu tượng / Crest nhỏ tinh tế */}
        <div className="flex justify-center mb-4">
          <div className="h-0.5 w-12 bg-white/40 my-auto"></div>
          <span className="mx-3 text-amber-200/90 text-xs tracking-[0.3em] uppercase font-sans font-medium">
            Sanctuary & Art Resort
          </span>
          <div className="h-0.5 w-12 bg-white/40 my-auto"></div>
        </div>

        {/* Tiêu đề ĐỒI BÔNG GÒN cỡ lớn serif chuẩn mẫu */}
        <h1 className="font-serif font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-[0.18em] uppercase leading-tight drop-shadow-2xl">
          ĐỒI BÔNG GÒN
        </h1>

        {/* Phụ đề nghệ thuật nghỉ dưỡng */}
        <p className="mt-4 sm:mt-6 font-sans text-xs sm:text-sm md:text-base text-white/90 tracking-[0.25em] sm:tracking-[0.35em] uppercase font-light max-w-3xl mx-auto drop-shadow-lg">
          KHÔNG GIAN NGHỆ THUẬT NGHỈ DƯỠNG ĐẬM CHẤT BẢN ĐỊA
        </p>
      </div>

      {/* Thanh Search Booking Bar nổi ở phía dưới chân Hero */}
      <div className="relative z-20 w-full mt-8 md:mt-12">
        <SearchBookingBar onSearch={onSearch} />
      </div>
    </section>
  );
};
