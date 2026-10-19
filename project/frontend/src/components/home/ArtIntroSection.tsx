import React from 'react';

export const ArtIntroSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2] text-[#3E2C23] text-center px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Nhánh trang trí / họa tiết nhẹ */}
        <div className="flex items-center justify-center gap-3 mb-5 text-[#C85A32]/70">
          <span className="w-8 h-px bg-[#C85A32]/40"></span>
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C85A32]">
            Khởi nguồn cảm xúc
          </span>
          <span className="w-8 h-px bg-[#C85A32]/40"></span>
        </div>

        {/* Tiêu đề chính Serif */}
        <h2 className="font-serif font-bold text-2xl sm:text-4xl md:text-5xl tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#3E2C23] mb-8 leading-tight">
          HOMESTAY NGHỆ THUẬT
        </h2>

        {/* Đoạn văn bản giới thiệu sâu sắc, nghệ thuật */}
        <p className="font-sans text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose text-[#5C4D44] max-w-3xl mx-auto font-light">
          Một chốn an trú giữa thiên nhiên hoang sơ của thành phố biển, nơi hội tụ trọn vẹn giữa hơi thở mộc mạc bản địa và phong cách kiến trúc nghệ thuật đương đại. Từng góc nhỏ tại Đồi Bông Gòn được chăm chút tỉ mỉ, đem đến cho bạn những ngày nghỉ bình yên, thư thái và ngập tràn cảm hứng sống.
        </p>

        {/* Dấu chấm trang trí cuối đoạn */}
        <div className="mt-8 flex justify-center items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#E07A5F]/40"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#C85A32]"></span>
          <span className="w-2 h-2 rounded-full bg-[#E07A5F]/40"></span>
        </div>
      </div>
    </section>
  );
};
