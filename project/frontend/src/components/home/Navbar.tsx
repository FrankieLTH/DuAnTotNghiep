import React, { useState } from 'react';
import logoImg from '../../assets/logo.jpg';

interface NavbarProps {
  onOpenBookingModal?: () => void;
  onNavigate?: (view: string) => void;
  currentView?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal, onNavigate, currentView = 'home' }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (view: string) => {
    setMenuOpen(false);
    if (onNavigate) {
      onNavigate(view);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FDF9F3]/95 backdrop-blur-md border-b border-[#E8DFD1]/80 shadow-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 md:h-28 flex items-center justify-between py-2">
        
        {/* Navigation links & Hamburg menu */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-[#3E2C23] hover:bg-[#E8DFD1]/50 transition-colors cursor-pointer font-sans font-medium text-sm"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="font-bold tracking-wider text-xs uppercase">MENU</span>
          </button>

          {/* Quick links header desktop */}
          <nav className="hidden lg:flex items-center space-x-5 text-xs font-bold text-[#3E2C23]/80 font-sans">
            <button
              onClick={() => handleNav('home')}
              className={`hover:text-[#C85A32] transition-colors ${currentView === 'home' ? 'text-[#C85A32] font-extrabold' : ''}`}
            >
              Trang Chủ
            </button>
            <button
              onClick={() => handleNav('room-list')}
              className={`hover:text-[#C85A32] transition-colors ${currentView === 'room-list' ? 'text-[#C85A32] font-extrabold' : ''}`}
            >
              Hạng Phòng
            </button>
            <button
              onClick={() => handleNav('vouchers')}
              className={`hover:text-[#C85A32] transition-colors ${currentView === 'vouchers' ? 'text-[#C85A32] font-extrabold' : ''}`}
            >
              Ưu Đãi
            </button>
            <button
              onClick={() => handleNav('locations')}
              className={`hover:text-[#C85A32] transition-colors ${currentView === 'locations' ? 'text-[#C85A32] font-extrabold' : ''}`}
            >
              Địa Điểm
            </button>
            <button
              onClick={() => handleNav('support')}
              className={`hover:text-[#C85A32] transition-colors ${currentView === 'support' ? 'text-[#C85A32] font-extrabold' : ''}`}
            >
              Hỗ Trợ 24/7
            </button>
          </nav>
        </div>

        {/* Logo Đồi Bông Gòn Homestay ở giữa */}
        <button onClick={() => handleNav('home')} className="flex items-center justify-center cursor-pointer group py-1">
          <img
            src={logoImg}
            alt="Đồi Bông Gòn Homestay Logo"
            className="h-20 md:h-24 w-auto object-contain hover:scale-105 transition-transform duration-300 rounded-xl drop-shadow-sm"
          />
        </button>

        {/* Góc phải: Account & Nút Đặt phòng */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNav('my-account')}
            className={`hidden sm:inline-flex items-center gap-2 border border-[#E8DFD1] bg-white text-[#3E2C23] hover:bg-[#FAF7F2] px-3.5 py-2.5 rounded-xl font-sans font-medium text-xs transition-all shadow-xs ${currentView === 'my-account' ? 'border-[#C85A32] text-[#C85A32] font-bold' : ''}`}
          >
            <span>👤 Tài Khoản / PIN</span>
          </button>

          <button
            onClick={onOpenBookingModal || (() => handleNav('room-list'))}
            className="inline-flex items-center gap-2 bg-[#C85A32] hover:bg-[#b04a25] text-white px-5 py-3 rounded-xl font-sans font-semibold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Đặt phòng</span>
          </button>
        </div>

      </div>

      {/* Menu xổ xuống (Mobile & Navigation Drawer) */}
      {menuOpen && (
        <div className="bg-[#FAF7F2] border-b border-[#E8DFD1] px-6 py-4 space-y-3 font-sans animate-fadeIn">
          <button onClick={() => handleNav('home')} className="block text-sm font-semibold text-[#3E2C23] hover:text-[#C85A32] w-full text-left">🏠 Trang chủ</button>
          <button onClick={() => handleNav('room-list')} className="block text-sm font-semibold text-[#3E2C23] hover:text-[#C85A32] w-full text-left">🛏️ Danh sách hạng phòng</button>
          <button onClick={() => handleNav('vouchers')} className="block text-sm font-semibold text-[#3E2C23] hover:text-[#C85A32] w-full text-left">🎟️ Ưu đãi & Voucher</button>
          <button onClick={() => handleNav('locations')} className="block text-sm font-semibold text-[#3E2C23] hover:text-[#C85A32] w-full text-left">📍 Tọa độ địa điểm quanh Homestay</button>
          <button onClick={() => handleNav('support')} className="block text-sm font-semibold text-[#3E2C23] hover:text-[#C85A32] w-full text-left">🎧 Trung tâm hỗ trợ & Quy định</button>
          <button onClick={() => handleNav('my-account')} className="block text-sm font-semibold text-[#3E2C23] hover:text-[#C85A32] w-full text-left">🔑 Mã PIN Smart Lock & Tài khoản</button>
        </div>
      )}
    </header>
  );
};

