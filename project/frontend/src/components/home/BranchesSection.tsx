import React from 'react';

export const BranchesSection: React.FC = () => {
  return (
    <section id="branches" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#3E2C23]">
          Hệ thống chi nhánh
        </h2>
        <span className="inline-flex items-center gap-1.5 bg-[#FFF8E7] text-[#9A7210] border border-[#F7E5A9] text-xs font-sans font-semibold px-3.5 py-1.5 rounded-full shadow-xs w-fit">
          ✨ Tự do nhận phòng 24/7 cả 2 cơ sở
        </span>
      </div>

      {/* Grid 2 Chi Nhánh */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* CHI NHÁNH 1 */}
        <div className="bg-white rounded-3xl border border-[#E8DFD1] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
          <div className="relative h-64 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80"
              alt="CN 1 • Triển Núi Nhỏ"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-[#3E2C23] text-white text-xs font-sans font-bold px-3 py-1 rounded-full">
                Cơ sở 1
              </span>
              <span className="bg-white/90 text-[#3E2C23] text-xs font-sans font-semibold px-3 py-1 rounded-full backdrop-blur-xs">
                📍 Cách Bãi Sau 300m
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="font-serif font-bold text-2xl drop-shadow-md">
                CN 1 • Triển Núi Nhỏ
              </h3>
              <p className="font-sans text-xs text-white/90 font-light mt-1">
                Triền dốc thoải mái, rợp bóng cây xanh & gió biển Bãi Sau
              </p>
            </div>
          </div>

          <div className="p-6 space-y-5 font-sans text-sm text-[#3E2C23]/80">
            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8DFD1]/60">
              <span className="text-[11px] font-bold text-[#3E2C23] uppercase tracking-wider block mb-1">
                ĐỊNH VỊ & CẢM HỨNG
              </span>
              <p className="text-xs leading-relaxed">
                Ẩn mình bên triền dốc thoải, view bao trọn hoàng hôn Bãi Sau, không gian yên tĩnh chữa lành, ngập tràn cây xanh và tiếng chim hót mỗi ban mai.
              </p>
            </div>

            <div>
              <span className="text-[11px] font-bold text-[#3E2C23] uppercase tracking-wider block mb-2">
                TIỆN ÍCH & TRẢI NGHIỆM NỔI BẬT
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <span className="flex items-center gap-1.5">🅿️ 1 Ô tô 7 chỗ đỗ tận sân</span>
                <span className="flex items-center gap-1.5">♨️ Bồn ngâm thảo mộc đá</span>
                <span className="flex items-center gap-1.5">🍳 Bếp BBQ sân vườn riêng</span>
                <span className="flex items-center gap-1.5">🚲 Xe đạp dạo biển miễn phí</span>
              </div>
            </div>

            <div className="text-xs text-[#3E2C23]/70">
              💡 <strong>Phù hợp:</strong> Cặp đôi tìm kiếm sự tĩnh lặng lãng mạn & gia đình nhỏ cần không gian mộc mạc thư thái.
            </div>

            <div className="pt-4 border-t border-[#E8DFD1]/60 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#3E2C23]">
                Quy mô: <strong>4 Hạng phòng mộc mạc</strong>
              </span>
              <button className="bg-[#3E2C23] hover:bg-[#2c1e18] text-white font-sans font-semibold text-xs px-5 py-2.5 rounded-xl shadow-xs transition-all cursor-pointer">
                Xem 4 hạng phòng tại CN 1 ➔
              </button>
            </div>
          </div>
        </div>

        {/* CHI NHÁNH 2 */}
        <div className="bg-white rounded-3xl border border-[#E8DFD1] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
          <div className="relative h-64 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80"
              alt="CN 2 • Hải Đăng Retreat"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-[#C85A32] text-white text-xs font-sans font-bold px-3 py-1 rounded-full">
                Cơ sở 2
              </span>
              <span className="bg-white/90 text-[#3E2C23] text-xs font-sans font-semibold px-3 py-1 rounded-full backdrop-blur-xs">
                📍 Đường Hải Đăng • Gần Bãi Trước
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="font-serif font-bold text-2xl drop-shadow-md">
                CN 2 • Hải Đăng Retreat
              </h3>
              <p className="font-sans text-xs text-white/90 font-light mt-1">
                Tầm nhìn panorama 270° ngắm trọn vịnh biển và ngọn hải đăng
              </p>
            </div>
          </div>

          <div className="p-6 space-y-5 font-sans text-sm text-[#3E2C23]/80">
            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8DFD1]/60">
              <span className="text-[11px] font-bold text-[#3E2C23] uppercase tracking-wider block mb-1">
                ĐỊNH VỊ & CẢM HỨNG
              </span>
              <p className="text-xs leading-relaxed">
                Tọa lạc trên cung đường Hải Đăng thơ mộng, view biển panorama 270° ngắm trọn thành phố và vịnh biển Bãi Trước lung linh về đêm.
              </p>
            </div>

            <div>
              <span className="text-[11px] font-bold text-[#3E2C23] uppercase tracking-wider block mb-2">
                TIỆN ÍCH & TRẢI NGHIỆM NỔI BẬT
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <span className="flex items-center gap-1.5">🏊 Hồ bơi vô cực ngắm biển</span>
                <span className="flex items-center gap-1.5">♨️ Bồn sục Jacuzzi nóng đỉnh đồi</span>
                <span className="flex items-center gap-1.5">☕ Specialty Coffee pha thủ công</span>
                <span className="flex items-center gap-1.5">🍸 Sunset Cocktail theo yêu cầu</span>
              </div>
            </div>

            <div className="text-xs text-[#3E2C23]/70">
              💡 <strong>Phù hợp:</strong> Nhóm bạn săn hoàng hôn, tiệc kỷ niệm lãng mạn & kỳ nghỉ dưỡng cao cấp signature.
            </div>

            <div className="pt-4 border-t border-[#E8DFD1]/60 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#3E2C23]">
                Quy mô: <strong>2 Hạng phòng Signature</strong>
              </span>
              <button className="bg-[#C85A32] hover:bg-[#b04a25] text-white font-sans font-semibold text-xs px-5 py-2.5 rounded-xl shadow-xs transition-all cursor-pointer">
                Xem 2 hạng phòng tại CN 2 ➔
              </button>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
