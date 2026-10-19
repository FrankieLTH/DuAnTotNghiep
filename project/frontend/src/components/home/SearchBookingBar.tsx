import React, { useState } from 'react';

interface SearchBookingBarProps {
  onSearch?: (params: {
    checkIn: string;
    checkOut: string;
    guests: number;
    roomType: string;
    voucherCode: string;
  }) => void;
}

export const SearchBookingBar: React.FC<SearchBookingBarProps> = ({ onSearch }) => {
  // Format default dates YYYY-MM-DD
  const today = new Date();
  const nextTwoDays = new Date(today);
  nextTwoDays.setDate(today.getDate() + 2);

  const formatDateStr = (d: Date) => d.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(formatDateStr(today));
  const [checkOut, setCheckOut] = useState(formatDateStr(nextTwoDays));
  const [guests, setGuests] = useState(2);
  const [roomType, setRoomType] = useState('all');
  const [voucherCode, setVoucherCode] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({
        checkIn,
        checkOut,
        guests,
        roomType,
        voucherCode,
      });
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <form
        onSubmit={handleSearchSubmit}
        className="bg-white/95 backdrop-blur-md rounded-2xl md:rounded-full shadow-2xl p-3 md:p-2.5 border border-[#E8DFD1]/80 flex flex-col md:flex-row items-center gap-2 md:gap-3 transition-all hover:shadow-3xl"
      >
        {/* Cột 1: Ngày đến */}
        <div className="w-full md:flex-1 px-4 py-2 flex items-center gap-3 border-b md:border-b-0 md:border-r border-[#E8DFD1]/70 group">
          <div className="text-[#C85A32] shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex-1 text-left">
            <span className="block text-[10px] uppercase tracking-wider font-bold text-[#8C7A70]">
              Ngày đến
            </span>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full text-xs sm:text-sm font-semibold text-[#3E2C23] bg-transparent focus:outline-hidden cursor-pointer p-0"
            />
          </div>
        </div>

        {/* Cột 2: Ngày về */}
        <div className="w-full md:flex-1 px-4 py-2 flex items-center gap-3 border-b md:border-b-0 md:border-r border-[#E8DFD1]/70 group">
          <div className="text-[#C85A32] shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex-1 text-left">
            <span className="block text-[10px] uppercase tracking-wider font-bold text-[#8C7A70]">
              Ngày về
            </span>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full text-xs sm:text-sm font-semibold text-[#3E2C23] bg-transparent focus:outline-hidden cursor-pointer p-0"
            />
          </div>
        </div>

        {/* Cột 3: Số khách */}
        <div className="w-full md:w-36 px-4 py-2 flex items-center gap-3 border-b md:border-b-0 md:border-r border-[#E8DFD1]/70 group">
          <div className="text-[#C85A32] shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div className="flex-1 text-left">
            <span className="block text-[10px] uppercase tracking-wider font-bold text-[#8C7A70]">
              Số khách
            </span>
            <select
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full text-xs sm:text-sm font-semibold text-[#3E2C23] bg-transparent focus:outline-hidden cursor-pointer p-0"
            >
              <option value={1}>1 Người lớn</option>
              <option value={2}>2 Người lớn</option>
              <option value={3}>3 Người lớn</option>
              <option value={4}>4 Người lớn</option>
              <option value={6}>Gia đình (5-8 người)</option>
            </select>
          </div>
        </div>

        {/* Cột 4: Hạng phòng */}
        <div className="w-full md:flex-1 px-4 py-2 flex items-center gap-3 border-b md:border-b-0 md:border-r border-[#E8DFD1]/70 group">
          <div className="text-[#C85A32] shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <div className="flex-1 text-left">
            <span className="block text-[10px] uppercase tracking-wider font-bold text-[#8C7A70]">
              Hạng phòng
            </span>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full text-xs sm:text-sm font-semibold text-[#3E2C23] bg-transparent focus:outline-hidden cursor-pointer p-0 truncate"
            >
              <option value="all">Tất cả hạng phòng</option>
              <option value="studio">Studio Cozy Standard (550k)</option>
              <option value="deluxe">Deluxe Ocean View (850k)</option>
              <option value="suite">Family Suite Balcony (1.4tr)</option>
              <option value="penthouse">Penthouse Luxury (2.2tr)</option>
            </select>
          </div>
        </div>

        {/* Cột 5: Mã ưu đãi */}
        <div className="w-full md:w-36 px-4 py-2 flex items-center gap-3 group">
          <div className="text-[#C85A32] shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
          </div>
          <div className="flex-1 text-left">
            <span className="block text-[10px] uppercase tracking-wider font-bold text-[#8C7A70]">
              Mã voucher
            </span>
            <input
              type="text"
              placeholder="WELCOME2026..."
              value={voucherCode}
              onChange={(e) => setVoucherCode(e.target.value)}
              className="w-full text-xs sm:text-sm font-semibold text-[#3E2C23] bg-transparent placeholder-[#B3A49C] focus:outline-hidden p-0 uppercase"
            />
          </div>
        </div>

        {/* Nút Tìm phòng */}
        <div className="w-full md:w-auto p-1 shrink-0">
          <button
            type="submit"
            className="w-full md:w-auto bg-[#C85A32] hover:bg-[#b04b27] text-white px-7 py-3 md:py-3.5 rounded-xl md:rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer font-sans"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>Tìm phòng</span>
          </button>
        </div>
      </form>
    </div>
  );
};
