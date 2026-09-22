import React, { useState } from 'react';

interface SearchBookingBarProps {
  onSearch?: (searchParams: any) => void;
}

export const SearchBookingBar: React.FC<SearchBookingBarProps> = ({ onSearch }) => {
  const [branch, setBranch] = useState('cn1');
  const [roomType, setRoomType] = useState('all');
  const [checkIn, setCheckIn] = useState('2026-11-15');
  const [checkOut, setCheckOut] = useState('2026-11-17');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ branch, roomType, checkIn, checkOut });
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Khung nổi chính */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 md:p-5 rounded-2xl md:rounded-3xl shadow-2xl border border-[#E8DFD1] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center"
      >
        {/* Ô 1: Chi nhánh */}
        <div className="lg:col-span-3 bg-[#FAF7F2] p-3 rounded-2xl border border-[#E8DFD1]/60">
          <label className="block text-[10px] font-sans font-bold uppercase tracking-wider text-[#3E2C23]/60 mb-1">
            CHI NHÁNH
          </label>
          <select
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="w-full bg-transparent font-sans font-semibold text-sm text-[#3E2C23] focus:outline-none cursor-pointer"
          >
            <option value="cn1">CN 1 • Triển Núi Nhỏ (Bãi Sau)</option>
            <option value="cn2">CN 2 • Hải Đăng Retreat (Bãi Trước)</option>
          </select>
        </div>

        {/* Ô 2: Hạng phòng */}
        <div className="lg:col-span-3 bg-[#FAF7F2] p-3 rounded-2xl border border-[#E8DFD1]/60">
          <label className="block text-[10px] font-sans font-bold uppercase tracking-wider text-[#3E2C23]/60 mb-1">
            HẠNG PHÓNG
          </label>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="w-full bg-transparent font-sans font-semibold text-sm text-[#3E2C23] focus:outline-none cursor-pointer"
          >
            <option value="all">Tất cả 6 hạng phòng</option>
            <option value="penthouse">Signature Penthouse & Jacuzzi</option>
            <option value="balcony">Sea View Balcony Room</option>
            <option value="cotton">The Cotton Cloud Suite</option>
            <option value="family">The Family Attic & Terrace</option>
          </select>
        </div>

        {/* Ô 3: Nhận phòng */}
        <div className="lg:col-span-2 bg-[#FAF7F2] p-3 rounded-2xl border border-[#E8DFD1]/60">
          <label className="block text-[10px] font-sans font-bold uppercase tracking-wider text-[#3E2C23]/60 mb-1">
            NHẬN PHÓNG
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full bg-transparent font-sans font-semibold text-sm text-[#3E2C23] focus:outline-none cursor-pointer"
          />
        </div>

        {/* Ô 4: Trả phòng */}
        <div className="lg:col-span-2 bg-[#FAF7F2] p-3 rounded-2xl border border-[#E8DFD1]/60">
          <label className="block text-[10px] font-sans font-bold uppercase tracking-wider text-[#3E2C23]/60 mb-1">
            TRẢ PHÓNG
          </label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full bg-transparent font-sans font-semibold text-sm text-[#3E2C23] focus:outline-none cursor-pointer"
          />
        </div>

        {/* Nút Tìm phòng */}
        <div className="lg:col-span-2">
          <button
            type="submit"
            className="w-full h-full min-h-[52px] bg-[#C85A32] hover:bg-[#b04a25] text-white font-sans font-bold text-sm rounded-2xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer py-3"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>Tìm phòng</span>
          </button>
        </div>
      </form>

      {/* Dòng cam kết bên dưới */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-4 text-xs font-sans text-white/90 drop-shadow-md">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Đặt phòng trực tiếp • Giữ phòng tuyệt đối 100%</span>
        </div>
        <div className="flex items-center gap-1.5 text-amber-200 font-medium">
          <span>✨ Nhận mã PIN tự động mở khóa Smart Lock 24/7</span>
        </div>
      </div>
    </div>
  );
};
