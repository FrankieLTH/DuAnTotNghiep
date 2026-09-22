import React from 'react';

interface VoucherPromoBannerProps {
  onApplyVoucher?: (code: string) => void;
}

export const VoucherPromoBanner: React.FC<VoucherPromoBannerProps> = ({ onApplyVoucher }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
      <div className="bg-[#3E2C23] text-white p-6 md:p-10 rounded-3xl shadow-xl border border-[#E8DFD1]/20 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        
        {/* Bên trái: Thông điệp ưu đãi */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1 rounded-full border border-white/20 text-xs font-sans font-bold tracking-wider text-amber-200 uppercase">
            🏷️ ƯU ĐÃI ĐẶT PHÒNG TRỰC TIẾP
          </div>
          <h2 className="font-serif font-bold text-2xl sm:text-4xl text-white tracking-wide">
            Giảm 15% khi đặt từ 2 đêm
          </h2>
          <p className="font-sans text-sm text-[#E8DFD1]/80 font-light max-w-xl">
            Áp dụng cho tất cả các chi nhánh và hạng phòng khi đặt qua website / Hotline.
          </p>
        </div>

        {/* Bên phải: Mã Voucher & Button */}
        <div className="bg-[#2C1E18] p-5 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center gap-4 lg:min-w-[420px] justify-between">
          <div>
            <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#E8DFD1]/60 block mb-1">
              MÃ ƯU ĐÃI CHÍNH THỨC
            </span>
            <span className="text-xl font-mono font-bold text-amber-400 tracking-widest block">
              BONGGON15
            </span>
          </div>

          <button
            onClick={() => onApplyVoucher && onApplyVoucher('BONGGON15')}
            className="w-full sm:w-auto bg-[#C85A32] hover:bg-[#b04a25] text-white font-sans font-semibold text-sm px-6 py-3 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer whitespace-nowrap"
          >
            Áp dụng mã & Giữ phòng
          </button>
        </div>

      </div>
    </section>
  );
};
