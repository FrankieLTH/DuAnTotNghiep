import React from 'react';

interface SpacesBentoSectionProps {
  onExplore?: () => void;
}

export const SpacesBentoSection: React.FC<SpacesBentoSectionProps> = ({ onExplore }) => {
  return (
    <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
      {/* Tiêu đề phần & Nút Xem tất cả */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 md:mb-12 gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C85A32] block mb-2">
            Trải nghiệm đa giác quan
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-[#3E2C23] tracking-[0.15em] uppercase">
            KHÔNG GIAN LƯU TRÚ
          </h2>
        </div>
        <button
          onClick={onExplore}
          className="inline-flex items-center gap-2 bg-[#C85A32] hover:bg-[#b04b27] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all self-start sm:self-auto cursor-pointer shadow-sm hover:shadow-md font-sans"
        >
          <span>Xem tất cả</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      {/* Bento Grid 4 Khối Chuẩn Mẫu Hình Ảnh */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 min-h-[580px]">
        {/* Khối lớn bên trái: PHÒNG NGHỈ RIÊNG TƯ (md:col-span-6 hoặc 7) */}
        <div
          onClick={onExplore}
          className="md:col-span-7 relative rounded-3xl overflow-hidden shadow-lg group cursor-pointer min-h-[360px] md:min-h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80"
            alt="Phòng nghỉ riêng tư Homestay"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] uppercase font-bold tracking-widest text-amber-200 mb-3">
              Riêng tư tuyệt đối
            </span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white tracking-wide uppercase mb-2">
              PHÒNG NGHỈ RIÊNG TƯ
            </h3>
            <p className="font-sans text-xs sm:text-sm text-white/85 line-clamp-2 max-w-lg font-light">
              Thiết kế mộc mạc kết hợp tiện nghi hiện đại, vách ốp gỗ trầm ấm và ban công đón gió đồi mát mẻ.
            </p>
          </div>
        </div>

        {/* Khối bên phải (md:col-span-5) chia làm 2 tầng */}
        <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6">
          {/* Tầng trên: PHÒNG LÀM VIỆC & NGHỈ NGƠI */}
          <div
            onClick={onExplore}
            className="relative rounded-3xl overflow-hidden shadow-lg group cursor-pointer flex-1 min-h-[220px]"
          >
            <img
              src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1000&q=80"
              alt="Phòng làm việc và nghỉ ngơi"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white">
              <h3 className="font-serif font-bold text-lg sm:text-xl text-white tracking-wide uppercase mb-1">
                PHÒNG LÀM VIỆC & NGHỈ NGƠI
              </h3>
              <p className="font-sans text-xs text-white/80 line-clamp-1 font-light">
                Góc sáng tạo lý tưởng với bàn làm việc rộng rãi, wifi tốc độ cao.
              </p>
            </div>
          </div>

          {/* Tầng dưới: Chia đôi thành 2 ô nhỏ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 flex-1">
            {/* Ô 1: KHÔNG GIAN SINH HOẠT CHUNG */}
            <div
              onClick={onExplore}
              className="relative rounded-3xl overflow-hidden shadow-lg group cursor-pointer min-h-[200px]"
            >
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
                alt="Không gian sinh hoạt chung"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
                <h4 className="font-serif font-bold text-sm sm:text-base text-white tracking-wide uppercase mb-0.5">
                  SINH HOẠT CHUNG
                </h4>
                <p className="font-sans text-[11px] text-white/75 line-clamp-1">
                  Tranh nghệ thuật & trà chiều
                </p>
              </div>
            </div>

            {/* Ô 2: SÂN VƯỜN & NGOẠI CẢNH */}
            <div
              onClick={onExplore}
              className="relative rounded-3xl overflow-hidden shadow-lg group cursor-pointer min-h-[200px]"
            >
              <img
                src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80"
                alt="Sân vườn và ngoại cảnh"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
                <h4 className="font-serif font-bold text-sm sm:text-base text-white tracking-wide uppercase mb-0.5">
                  SÂN VƯỜN & CÂY XANH
                </h4>
                <p className="font-sans text-[11px] text-white/75 line-clamp-1">
                  Gió đồi & thiên nhiên trong lành
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
