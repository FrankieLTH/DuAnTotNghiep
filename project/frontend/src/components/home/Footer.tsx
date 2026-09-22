import React from 'react';
import logoImg from '../../assets/logo.jpg';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3E2C23] text-white pt-16 pb-8 border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Cột 1: Logo & Giới thiệu */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="Đồi Bông Gòn Homestay Logo"
                className="h-20 md:h-24 w-auto object-contain rounded-xl bg-white/95 p-1.5 shadow-md"
              />
            </div>

            <p className="text-xs text-[#E8DFD1]/80 font-light leading-relaxed max-w-md pt-2">
              Chốn nghỉ dưỡng homestay trên triền Núi Nhỏ ôm trọn hoàng hôn biển Vũng Tàu. Trải nghiệm tự do, riêng tư và thư thái tuyệt đối với công nghệ khóa số Smart Lock 24/7.
            </p>

            <div className="pt-2">
              <button className="inline-flex items-center gap-2 bg-white text-[#3E2C23] hover:bg-[#FAF7F2] px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer">
                <span>🌐 Website chính thức — Đảm bảo giá tốt nhất</span>
              </button>
            </div>
          </div>

          {/* Cột 2: Hạng phòng & Tiện ích */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-amber-200 tracking-wide uppercase">
              Hạng phòng & Tiện ích
            </h4>
            <ul className="space-y-2 text-xs text-[#E8DFD1]/80 font-light">
              <li><a href="#rooms" className="hover:text-white transition-colors">The Garden Suite (Trệt & Sân hiên đá)</a></li>
              <li><a href="#rooms" className="hover:text-white transition-colors">Sea View Balcony Room (Ban công biển)</a></li>
              <li><a href="#rooms" className="hover:text-white transition-colors">The Cotton Cloud Suite (Áp mái cặp đôi)</a></li>
              <li><a href="#rooms" className="hover:text-white transition-colors">The Family Attic & Terrace (Căn hộ gia đình)</a></li>
              <li><a href="#rooms" className="hover:text-white transition-colors">Sunset Penthouse & Jacuzzi 270°</a></li>
              <li><a href="#rooms" className="hover:text-white transition-colors">Hillside Studio & Workspace (Healing)</a></li>
              <li><a href="#rooms" className="hover:text-white transition-colors">Khóa số Smart Lock tự động 24/7</a></li>
            </ul>
          </div>

          {/* Cột 3: Hệ thống chi nhánh & Liên hệ */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-sm text-amber-200 tracking-wide uppercase">
              Hệ thống chi nhánh
            </h4>
            <div className="space-y-2.5 text-xs text-[#E8DFD1]/80 font-light">
              <div className="flex items-start gap-2">
                <span>📍</span>
                <span><strong>CN 1:</strong> Triển Núi Nhỏ, P. 2, Vũng Tàu (Cách Bãi Sau 300m)</span>
              </div>
              <div className="flex items-start gap-2">
                <span>📍</span>
                <span><strong>CN 2:</strong> Đường Hải Đăng, P. 2, Vũng Tàu (Gần Bãi Trước)</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <span>📞</span>
                <span>Hotline: <a href="tel:0908868888" className="text-amber-400 font-bold hover:underline">0908.868.888</a> (hỗ trợ 24/7)</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <span><a href="mailto:booking@doibonggon.vn" className="hover:underline">booking@doibonggon.vn</a></span>
              </div>
            </div>
          </div>

        </div>

        {/* Dòng Copyright & Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#E8DFD1]/60 font-light">
          <div>
            © 2026 Đồi Bông Gòn Homestay Vũng Tàu. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Chính sách đặt phòng & hủy phòng</a>
            <a href="#terms" className="hover:text-white transition-colors">Quy định lưu trú</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
