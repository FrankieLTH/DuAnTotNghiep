import React, { useState } from 'react';

interface PromoVoucherSectionProps {
  onApplyVoucher?: (code: string) => void;
}

export const PromoVoucherSection: React.FC<PromoVoucherSectionProps> = ({ onApplyVoucher }) => {
  const [copied, setCopied] = useState(false);
  const voucherCode = 'WELCOME2026';

  const handleCopy = () => {
    navigator.clipboard.writeText(voucherCode);
    setCopied(true);
    if (onApplyVoucher) {
      onApplyVoucher(voucherCode);
    }
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-8 sm:py-12 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {/* Card Trái (Chiếm 2 phần): Nâu Trầm Nghệ Thuật */}
        <div className="lg:col-span-2 bg-[#2D1D16] text-[#FDF9F3] rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col justify-between border border-[#483327] relative overflow-hidden group">
          {/* Họa tiết tròn mờ nền background */}
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-[#C85A32]/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#E07A5F] text-[11px] font-semibold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E07A5F]"></span>
              Đặc quyền đặt trực tiếp
            </div>

            <h3 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl tracking-wide uppercase text-white leading-tight mb-6">
              GIỮ PHÒNG TỐT HƠN, <br className="hidden sm:inline" />
              GIÁ NHẸ HƠN
            </h3>

            {/* Danh sách 3 lợi ích với icon tròn */}
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-[#C85A32]/25 border border-[#C85A32]/50 flex items-center justify-center shrink-0 mt-0.5 text-[#E07A5F]">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-sans text-xs sm:text-sm text-white/85 leading-relaxed">
                  Cam kết mức giá ưu đãi nhất khi đặt trực tiếp tại hệ thống website chính thức.
                </p>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-[#C85A32]/25 border border-[#C85A32]/50 flex items-center justify-center shrink-0 mt-0.5 text-[#E07A5F]">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-sans text-xs sm:text-sm text-white/85 leading-relaxed">
                  Chính sách miễn phí hủy phòng trước 48 giờ để chuyến đi của bạn luôn thoải mái, an tâm.
                </p>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-[#C85A32]/25 border border-[#C85A32]/50 flex items-center justify-center shrink-0 mt-0.5 text-[#E07A5F]">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-sans text-xs sm:text-sm text-white/85 leading-relaxed">
                  Hỗ trợ đổi ngày linh hoạt & ưu tiên nhận phòng sớm / trả phòng muộn khi có sẵn phòng.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
            <span>✨ Áp dụng cho mọi kỳ nghỉ trong năm</span>
            <span className="text-[#E07A5F] font-semibold">Tự động áp dụng khi thanh toán</span>
          </div>
        </div>

        {/* Card Phải (Chiếm 1 phần): Thẻ Voucher Trắng Ngà / Viền Đứt Nét */}
        <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-dashed border-[#E8DFD1] flex flex-col justify-between relative group hover:border-[#C85A32]/50 transition-all">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 bg-[#FDF0ED] text-[#C85A32] rounded-md">
                VOUCHER ĐẶC BIỆT
              </span>
              <span className="text-xs text-[#8C7A70] font-mono">HSD: 31/12/2026</span>
            </div>

            <div className="my-4">
              <span className="block font-serif font-extrabold text-3xl sm:text-4xl text-[#C85A32] tracking-tight">
                GIẢM 10%
              </span>
              <span className="text-xs sm:text-sm text-[#3E2C23] font-semibold mt-1 block">
                Khách mới đặt phòng (Đơn từ 500k)
              </span>
            </div>

            <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#E8DFD1] my-4">
              <div className="text-[11px] text-[#8C7A70] uppercase font-bold tracking-wider mb-1">
                Mã ưu đãi
              </div>
              <div className="font-mono font-bold text-lg text-[#3E2C23] tracking-wider">
                {voucherCode}
              </div>
            </div>

            <p className="text-xs text-[#7A6B63] leading-relaxed">
              Nhập mã này tại bước Đặt phòng để được giảm ngay 10% tổng tiền phòng lưu trú.
            </p>
          </div>

          <div className="mt-6">
            <button
              onClick={handleCopy}
              className="w-full bg-[#C85A32] hover:bg-[#b04b27] text-white py-3 rounded-xl font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer font-sans"
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Đã sao chép mã!</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Lấy mã ngay</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
