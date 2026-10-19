import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenBookingModal?: () => void;
  onNavigate?: (view: string) => void;
  currentView?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBookingModal,
  onNavigate,
  currentView = 'home',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (view: string) => {
    setMenuOpen(false);
    if (onNavigate) {
      onNavigate(view);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#2A1D17]/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Menu Button bên trái */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="group flex items-center gap-2.5 px-3 py-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-all cursor-pointer focus:outline-hidden"
              aria-label="Mở Menu"
            >
              {/* Icon 2 vạch ngang + chấm cam giống thiết kế */}
              <div className="flex flex-col gap-1.5 w-6">
                <span className="w-full h-0.5 bg-white rounded-full group-hover:bg-[#E07A5F] transition-colors"></span>
                <div className="flex items-center gap-1">
                  <span className="w-4 h-0.5 bg-white rounded-full group-hover:bg-[#E07A5F] transition-colors"></span>
                  <span className="w-1.5 h-1.5 bg-[#C85A32] rounded-full shrink-0"></span>
                </div>
              </div>
              <span className="hidden sm:inline font-sans text-xs tracking-widest uppercase font-semibold text-white/80 group-hover:text-white">
                Menu
              </span>
            </button>
          </div>

          {/* Logo Đồi Bông Gòn chính giữa */}
          <button
            onClick={() => handleNav('home')}
            className="flex flex-col items-center justify-center text-center cursor-pointer group"
          >
            {/* Biểu tượng logo đỉnh đồi & ngọn núi nghệ thuật */}
            <div className="flex items-center justify-center text-white/90 group-hover:text-[#E07A5F] transition-colors mb-0.5">
              <svg
                className="w-7 h-7 sm:w-8 sm:h-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                <path d="M4.14 15.08A2 2 0 0 0 4 16v4" />
                <circle cx="12" cy="7" r="1.2" fill="currentColor" />
              </svg>
            </div>
            <span className="font-serif tracking-[0.25em] text-white font-bold text-sm sm:text-base leading-none group-hover:text-amber-100 transition-colors uppercase">
              ĐỒI BÔNG GÒN
            </span>
            <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.3em] text-white/70 uppercase font-light mt-0.5">
              HOMESTAY
            </span>
          </button>

          {/* Nút ĐẶT PHÒNG góc phải bo tròn chuẩn thiết kế */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNav('my-account')}
              className="hidden md:inline-flex items-center text-white/80 hover:text-white text-xs font-medium tracking-wider px-3 py-1.5 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            >
              Tra cứu phòng
            </button>
            <button
              onClick={onOpenBookingModal || (() => handleNav('room-list'))}
              className="bg-[#C85A32] hover:bg-[#b04b27] text-white text-xs sm:text-sm font-semibold tracking-wider px-5 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-md hover:shadow-lg transition-all transform active:scale-95 cursor-pointer uppercase font-sans"
            >
              Đặt phòng
            </button>
          </div>
        </div>
      </header>

      {/* Drawer Menu khi mở */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMenuOpen(false)}
          />
          <div className="relative w-full max-w-sm bg-[#221610] text-[#FDF9F3] h-full shadow-2xl p-6 sm:p-8 flex flex-col justify-between z-10 animate-in slide-in-from-left duration-300">
            <div>
              {/* Header drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex flex-col">
                  <span className="font-serif tracking-widest text-lg font-bold text-white uppercase">
                    ĐỒI BÔNG GÒN
                  </span>
                  <span className="text-[10px] tracking-widest text-[#E07A5F] uppercase font-mono">
                    Boutique Sanctuary
                  </span>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 text-white/60 hover:text-white rounded-full hover:bg-white/10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Menu links */}
              <nav className="mt-8 space-y-4 font-serif">
                <button
                  onClick={() => handleNav('home')}
                  className={`block w-full text-left text-lg py-2 transition-colors ${
                    currentView === 'home' ? 'text-[#E07A5F] font-bold' : 'text-white/80 hover:text-white'
                  }`}
                >
                  Trang chủ
                </button>
                <button
                  onClick={() => handleNav('room-list')}
                  className={`block w-full text-left text-lg py-2 transition-colors ${
                    currentView === 'room-list' ? 'text-[#E07A5F] font-bold' : 'text-white/80 hover:text-white'
                  }`}
                >
                  Không gian lưu trú & Giá phòng
                </button>
                <button
                  onClick={() => handleNav('vouchers')}
                  className={`block w-full text-left text-lg py-2 transition-colors ${
                    currentView === 'vouchers' ? 'text-[#E07A5F] font-bold' : 'text-white/80 hover:text-white'
                  }`}
                >
                  Ưu đãi & Voucher
                </button>
                <button
                  onClick={() => handleNav('locations')}
                  className={`block w-full text-left text-lg py-2 transition-colors ${
                    currentView === 'locations' ? 'text-[#E07A5F] font-bold' : 'text-white/80 hover:text-white'
                  }`}
                >
                  Địa điểm tham quan quanh Homestay
                </button>
                <button
                  onClick={() => handleNav('support')}
                  className={`block w-full text-left text-lg py-2 transition-colors ${
                    currentView === 'support' ? 'text-[#E07A5F] font-bold' : 'text-white/80 hover:text-white'
                  }`}
                >
                  Dịch vụ & Trung tâm hỗ trợ
                </button>
                <button
                  onClick={() => handleNav('my-account')}
                  className={`block w-full text-left text-lg py-2 transition-colors ${
                    currentView === 'my-account' ? 'text-[#E07A5F] font-bold' : 'text-white/80 hover:text-white'
                  }`}
                >
                  Mã PIN & Quản lý đặt phòng
                </button>
              </nav>
            </div>

            {/* Bottom info drawer */}
            <div className="pt-6 border-t border-white/10 text-xs text-white/60 font-sans space-y-2">
              <p>Hotline: <span className="text-white font-medium">0938 123 456</span></p>
              <p>Địa chỉ: Đường Hải Đăng, Phường 2, TP. Vũng Tàu</p>
              <div className="pt-3">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    if (onOpenBookingModal) onOpenBookingModal();
                    else handleNav('room-list');
                  }}
                  className="w-full bg-[#C85A32] text-white py-3 rounded-xl font-bold uppercase tracking-wider text-center text-xs hover:bg-[#b04b27]"
                >
                  Đặt phòng ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
