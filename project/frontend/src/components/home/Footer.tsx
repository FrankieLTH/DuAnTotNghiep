import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#1C120C] text-[#FDF9F3] overflow-hidden">
      {/* Banner Ảnh Gallery Decor Sang Trọng Ngang Chân Trang */}
      <div className="w-full h-44 sm:h-64 md:h-80 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=85"
          alt="Đồi Bông Gòn Decor Tủ Gỗ Nghệ Thuật"
          className="w-full h-full object-cover object-center filter brightness-95"
        />
        {/* Lớp chuyển màu mờ êm dịu */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C120C] via-black/20 to-transparent" />
      </div>

      {/* Nội Dung Footer Chính 4 Cột */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          
          {/* Cột 1 & 2: Logo & Giới thiệu & Mạng xã hội */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C85A32] flex items-center justify-center text-white shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                </svg>
              </div>
              <div>
                <span className="font-serif tracking-[0.2em] text-white font-bold text-lg block uppercase leading-tight">
                  ĐỒI BÔNG GÒN
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#E07A5F] uppercase font-mono block">
                  HOMESTAY & ART SANCTUARY
                </span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-white/70 max-w-sm leading-relaxed font-light">
              Nơi tìm về sự an yên giữa biển trời và thiên nhiên Vũng Tàu. Trải nghiệm hệ thống tự nhận phòng thông minh 24/7 và dịch vụ mộc mạc tận tâm.
            </p>

            {/* Icon Mạng Xã Hội */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C85A32] flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C85A32] flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#tiktok"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C85A32] flex items-center justify-center text-white transition-colors text-xs font-bold"
              >
                TT
              </a>
            </div>
          </div>

          {/* Cột 3: Về Chúng Tôi */}
          <div>
            <h4 className="font-serif font-bold text-sm tracking-wider uppercase text-white mb-4">
              Về Chúng Tôi
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <a href="#about" className="hover:text-[#E07A5F] transition-colors">
                  Giới thiệu Homestay
                </a>
              </li>
              <li>
                <a href="#spaces" className="hover:text-[#E07A5F] transition-colors">
                  Không gian nghệ thuật
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-[#E07A5F] transition-colors">
                  Hệ thống phòng nghỉ
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#E07A5F] transition-colors">
                  Dịch vụ & Tiện ích
                </a>
              </li>
            </ul>
          </div>

          {/* Cột 4: Thông Tin Liên Hệ & Địa Chỉ */}
          <div>
            <h4 className="font-serif font-bold text-sm tracking-wider uppercase text-white mb-4">
              Liên Hệ & Tọa Độ
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70 font-light">
              <li className="flex items-start gap-2">
                <span className="text-[#E07A5F]">📍</span>
                <span>Đường Hải Đăng, Phường 2, TP. Vũng Tàu</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#E07A5F]">📞</span>
                <span className="font-medium text-white">0938 123 456</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#E07A5F]">✉️</span>
                <span>booking@doibonggon.vn</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#E07A5F]">⏰</span>
                <span>Hỗ trợ tự check-in 24/7</span>
              </li>
            </ul>
          </div>

          {/* Cột 5: Hỗ Trợ & Chính Sách */}
          <div>
            <h4 className="font-serif font-bold text-sm tracking-wider uppercase text-white mb-4">
              Hỗ Trợ
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <a href="#rules" className="hover:text-[#E07A5F] transition-colors">
                  Chính sách đặt & hủy phòng
                </a>
              </li>
              <li>
                <a href="#checkin-guide" className="hover:text-[#E07A5F] transition-colors">
                  Hướng dẫn mở khóa Smart Lock
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#E07A5F] transition-colors">
                  Câu hỏi thường gặp (FAQ)
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-[#E07A5F] transition-colors">
                  Chính sách bảo mật
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Dòng Bản Quyền Cuối Trang */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 gap-3">
          <p>© 2026 Đồi Bông Gòn Homestay. All rights reserved.</p>
          <p className="flex items-center gap-4">
            <span className="hover:text-white transition-colors cursor-pointer">Bảo mật</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">Điều khoản</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">Sơ đồ website</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
