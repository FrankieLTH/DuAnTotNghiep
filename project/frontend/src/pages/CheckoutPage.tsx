import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

interface CheckoutPageProps {
  bookingData?: any;
  onGoBack: () => void;
  onCompleteBooking: () => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({
  bookingData,
  onGoBack,
  onCompleteBooking,
}) => {
  const [fullName, setFullName] = useState('Nguyễn Văn An');
  const [phone, setPhone] = useState('0908.123.456');
  const [email, setEmail] = useState('an.nguyen@email.com');
  const [checkInTime, setCheckInTime] = useState('15:00 - 16:00 (Buổi chiều)');
  const [note, setNote] = useState('Nhận phòng khoảng 15:00, cần chuẩn bị thêm đá lạnh BBQ ngoài ban công.');

  const [paymentMethod, setPaymentMethod] = useState<'vietqr' | 'card' | 'e-wallet'>('vietqr');
  const [isUploadingFront, setIsUploadingFront] = useState(false);
  const [isUploadingBack, setIsUploadingBack] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleFinishPayment = () => {
    setBookingSuccess(true);
  };

  if (bookingSuccess) {
    return (
      <div className="bg-[#FAF7F2] min-h-screen py-16 flex items-center justify-center font-sans">
        <div className="max-w-xl w-full mx-4 bg-white p-8 rounded-3xl border border-secondary-sand shadow-lg text-center space-y-6">
          <div className="w-16 h-16 bg-semantic-successBg text-semantic-success rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
            ✓
          </div>

          <div>
            <Badge variant="success" className="mb-2">Thanh Toán Thành Công</Badge>
            <h1 className="text-3xl font-serif font-bold text-brand-earth">
              Đặt Phòng & Kích Hoạt Mã PIN Thành Công!
            </h1>
            <p className="text-xs font-sans text-brand-earth/80 mt-2">
              Mã đơn hàng: <strong className="font-mono text-brand-earth">#DBG-89241</strong> • Chi nhánh 2: Lưng Chừng Biển
            </p>
          </div>

          {/* Smartlock PIN Box */}
          <div className="bg-brand-earth text-white p-6 rounded-2xl shadow-inner space-y-3">
            <span className="text-xs font-bold text-brand-amber uppercase tracking-widest block">
              MÃ PIN SMART LOCK MỞ CỬA CỦA BẠN (CÓ HIỆU LỰC TỪ 14:00)
            </span>
            <div className="flex items-center justify-center gap-2 text-3xl md:text-4xl font-mono font-bold text-brand-amber tracking-widest my-2">
              <span className="bg-white/10 px-3 py-2 rounded-xl">8</span>
              <span className="bg-white/10 px-3 py-2 rounded-xl">2</span>
              <span className="bg-white/10 px-3 py-2 rounded-xl">9</span>
              <span className="bg-white/10 px-3 py-2 rounded-xl">4</span>
              <span className="bg-white/10 px-3 py-2 rounded-xl">1</span>
              <span className="bg-white/10 px-3 py-2 rounded-xl">5</span>
            </div>
            <p className="text-[11px] text-secondary-sand/90">
              Cách mở: Chạm lòng bàn tay bật sáng bàn phím số ➔ Nhập <strong className="text-white">829415</strong> ➔ Nhấn phím <strong className="text-white">#</strong>
            </p>
          </div>

          <div className="bg-secondary-cream p-4 rounded-xl border border-secondary-sand text-xs text-brand-earth/80 text-left space-y-1">
            <p>📲 Mã PIN và hướng dẫn đường đi đã được tự động gửi qua tin nhắn <strong>Zalo / SMS (0908.123.456)</strong>.</p>
            <p>🕒 Giờ nhận phòng: <strong>14:00 15/11/2024</strong> | Giờ trả phòng: <strong>12:00 16/11/2024</strong></p>
          </div>

          <div className="flex items-center justify-center gap-4 pt-2">
            <Button variant="primary" onClick={onCompleteBooking}>
              Xem Trong Tài Khoản Cá Nhân
            </Button>
            <Button variant="ghost" onClick={onGoBack}>
              Trở Về Trang Chủ
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-16 font-sans">
      {/* Header & Step progress */}
      <div className="bg-[#FAF7F2] border-b border-secondary-sand/70 pt-6 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-xs font-sans text-brand-earth/60 space-x-2 mb-4">
            <button onClick={onGoBack} className="hover:text-brand-terracotta">Trang chủ</button>
            <span>/</span>
            <span className="text-brand-earth font-semibold">Thanh toán & Xác nhận</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-brand-earth">
                Thanh Toán & Xác Nhận Đặt Phòng
              </h1>
              <p className="text-xs text-brand-earth/70 mt-1">
                Hoàn tất thủ tục lưu trú để nhận ngay mã PIN Smart Lock 24/7
              </p>
            </div>

            {/* Steps pills */}
            <div className="flex items-center gap-3 text-xs bg-white p-2 rounded-xl border border-secondary-sand shrink-0">
              <span className="flex items-center gap-1 text-semantic-success font-semibold">
                <span className="w-5 h-5 rounded-full bg-semantic-successBg text-semantic-success flex items-center justify-center text-[10px]">✓</span> 1. Chọn phòng
              </span>
              <span className="text-brand-earth/40">—</span>
              <span className="flex items-center gap-1 text-semantic-success font-semibold">
                <span className="w-5 h-5 rounded-full bg-semantic-successBg text-semantic-success flex items-center justify-center text-[10px]">✓</span> 2. Tiện ích
              </span>
              <span className="text-brand-earth/40">—</span>
              <span className="flex items-center gap-1 text-brand-earth font-bold">
                <span className="w-5 h-5 rounded-full bg-brand-terracotta text-white flex items-center justify-center text-[10px]">3</span> 3. Xác nhận
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Form & Identification & Payment */}
          <div className="lg:col-span-7 space-y-8">
            {/* Section 1: Thông tin khách lưu trú */}
            <section className="bg-white p-6 rounded-2xl border border-secondary-sand space-y-5">
              <div className="flex items-center justify-between border-b border-secondary-sand/60 pb-3">
                <h2 className="text-lg font-serif font-bold text-brand-earth flex items-center gap-2">
                  👤 Thông Tin Khách Lưu Trú
                </h2>
                <span className="text-[11px] bg-secondary-sand/50 text-brand-earth/80 px-2.5 py-1 rounded-md">
                  Đã tự điền từ tài khoản Nguyễn Văn An
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-brand-earth/80 block mb-1">
                    Họ và tên người đại diện *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-secondary-cream border border-secondary-sand rounded-xl px-3.5 py-2.5 text-xs outline-none focus:border-brand-terracotta"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-brand-earth/80 block mb-1">
                    Số điện thoại / Zalo nhận PIN *
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-secondary-cream border border-secondary-sand rounded-xl px-3.5 py-2.5 text-xs outline-none focus:border-brand-terracotta"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-brand-earth/80 block mb-1">
                    Địa chỉ Email nhận hóa đơn *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-secondary-cream border border-secondary-sand rounded-xl px-3.5 py-2.5 text-xs outline-none focus:border-brand-terracotta"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-brand-earth/80 block mb-1">
                    Thời gian dự kiến nhận phòng *
                  </label>
                  <input
                    type="text"
                    value={checkInTime}
                    onChange={(e) => setCheckInTime(e.target.value)}
                    className="w-full bg-secondary-cream border border-secondary-sand rounded-xl px-3.5 py-2.5 text-xs outline-none focus:border-brand-terracotta"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-xs font-semibold text-brand-earth/80 block mb-1">
                    Ghi chú lưu trú & Yêu cầu đặc biệt (tùy chọn)
                  </label>
                  <textarea
                    rows={2}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="w-full bg-secondary-cream border border-secondary-sand rounded-xl px-3.5 py-2.5 text-xs outline-none focus:border-brand-terracotta"
                  />
                </div>
              </div>
            </section>

            {/* Section 2: Căn cước công dân upload */}
            <section className="bg-white p-6 rounded-2xl border border-secondary-sand space-y-4">
              <div className="flex items-center justify-between border-b border-secondary-sand/60 pb-3">
                <h2 className="text-lg font-serif font-bold text-brand-earth flex items-center gap-2">
                  🪪 Căn Cước Công Dân (CCCD / Passport)
                </h2>
                <Badge variant="discount">BẮT BUỘC CHECK-IN 24/7</Badge>
              </div>

              <p className="text-xs text-brand-earth/70">
                Hệ thống Smart Lock tự động mã hóa thông tin cư trú khai báo tạm trú và đồng bộ mã PIN mở cửa phòng qua tin nhắn SMS & Zalo.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {/* Front CCCD Box */}
                <div className="bg-secondary-cream p-4 rounded-xl border border-dashed border-secondary-sand text-center space-y-2">
                  <span className="text-xs font-semibold text-brand-earth block">1. Mặt trước CCCD</span>
                  <div className="h-32 bg-white rounded-lg border border-secondary-sand flex flex-col items-center justify-center p-2">
                    <span className="text-2xl mb-1">🖼️</span>
                    <span className="text-[11px] font-mono text-brand-earth/70">Mat_truoc_CCCD_An.jpg</span>
                    <span className="text-[10px] text-semantic-success font-semibold mt-1">✓ Đã tải lên (1.8 MB)</span>
                  </div>
                  <button
                    onClick={() => setIsUploadingFront(true)}
                    className="text-[11px] font-semibold text-brand-terracotta hover:underline"
                  >
                    🔄 Thay ảnh khác
                  </button>
                </div>

                {/* Back CCCD Box */}
                <div className="bg-secondary-cream p-4 rounded-xl border border-dashed border-secondary-sand text-center space-y-2">
                  <span className="text-xs font-semibold text-brand-earth block">2. Mặt sau CCCD</span>
                  <div className="h-32 bg-white rounded-lg border border-secondary-sand flex flex-col items-center justify-center p-2">
                    <span className="text-2xl mb-1">🖼️</span>
                    <span className="text-[11px] font-mono text-brand-earth/70">Mat_sau_CCCD_An.jpg</span>
                    <span className="text-[10px] text-semantic-success font-semibold mt-1">✓ Đã tải lên (2.1 MB)</span>
                  </div>
                  <button
                    onClick={() => setIsUploadingBack(true)}
                    className="text-[11px] font-semibold text-brand-terracotta hover:underline"
                  >
                    🔄 Thay ảnh khác
                  </button>
                </div>
              </div>

              <div className="bg-[#FFF9F2] p-3 rounded-xl border border-[#F5E2C8] text-[11px] text-brand-earth/80 flex items-center gap-2">
                <span>🛡️</span>
                <span><strong>Bảo mật 256-bit:</strong> Hình ảnh căn cước được truyền qua giao thức mã hóa quân sự cấp cao, chỉ mở khóa kích hoạt mã PIN Smart Lock cho đúng căn phòng của bạn.</span>
              </div>
            </section>

            {/* Section 3: Phương thức thanh toán */}
            <section className="bg-white p-6 rounded-2xl border border-secondary-sand space-y-5">
              <h2 className="text-lg font-serif font-bold text-brand-earth flex items-center gap-2 border-b border-secondary-sand/60 pb-3">
                💳 Phương Thức Thanh Toán
              </h2>

              <div className="space-y-3">
                {/* Option 1: VietQR */}
                <div
                  onClick={() => setPaymentMethod('vietqr')}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    paymentMethod === 'vietqr'
                      ? 'border-brand-terracotta bg-brand-tint/30 shadow-xs'
                      : 'border-secondary-sand bg-white hover:bg-secondary-cream/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        checked={paymentMethod === 'vietqr'}
                        onChange={() => setPaymentMethod('vietqr')}
                        className="accent-brand-terracotta"
                      />
                      <span className="text-xs font-bold text-brand-earth">
                        Chuyển khoản VietQR tức thì
                      </span>
                    </div>
                    <Badge variant="discount">Khuyên Dùng</Badge>
                  </div>

                  {paymentMethod === 'vietqr' && (
                    <div className="mt-4 pt-4 border-t border-brand-terracotta/20 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                      <div className="md:col-span-5 flex flex-col items-center justify-center bg-white p-3 rounded-xl border border-secondary-sand">
                        {/* Mock QR Code representation */}
                        <div className="w-36 h-36 bg-brand-earth text-white flex flex-col items-center justify-center rounded-lg p-2 text-center">
                          <span className="text-3xl">📱</span>
                          <span className="text-[10px] font-mono mt-1">VIETQR SMART PAY</span>
                          <span className="text-[9px] text-brand-amber mt-1">1.956.500 VNĐ</span>
                        </div>
                        <span className="text-[10px] text-brand-earth/60 mt-2">Đang chờ tín hiệu...</span>
                      </div>

                      <div className="md:col-span-7 space-y-2 text-xs">
                        <div className="flex justify-between py-1 border-b border-secondary-sand/40">
                          <span className="text-brand-earth/70">Ngân hàng:</span>
                          <strong className="text-brand-earth">Vietcombank (VCB)</strong>
                        </div>
                        <div className="flex justify-between py-1 border-b border-secondary-sand/40">
                          <span className="text-brand-earth/70">Số tài khoản:</span>
                          <strong className="text-brand-earth font-mono text-sm">1028 988 888</strong>
                        </div>
                        <div className="flex justify-between py-1 border-b border-secondary-sand/40">
                          <span className="text-brand-earth/70">Chủ tài khoản:</span>
                          <strong className="text-brand-earth">HOMESTAY DOI BONG GON</strong>
                        </div>
                        <div className="flex justify-between py-1 border-b border-secondary-sand/40">
                          <span className="text-brand-earth/70">Nội dung chuyển khoản:</span>
                          <strong className="text-brand-terracotta font-mono font-bold bg-brand-tint px-1.5 py-0.5 rounded">
                            DBG PENTHOUSE 1511
                          </strong>
                        </div>
                        <p className="text-[11px] text-brand-earth/60 italic pt-1">
                          ⏱️ Thời gian giữ phòng cho mã QR: <strong className="text-brand-terracotta">14:52</strong>
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Option 2: Thẻ quốc tế */}
                <div
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    paymentMethod === 'card'
                      ? 'border-brand-terracotta bg-brand-tint/30 shadow-xs'
                      : 'border-secondary-sand bg-white hover:bg-secondary-cream/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        checked={paymentMethod === 'card'}
                        onChange={() => setPaymentMethod('card')}
                        className="accent-brand-terracotta"
                      />
                      <span className="text-xs font-bold text-brand-earth">
                        Thẻ Quốc Tế (Visa / Mastercard / JCB)
                      </span>
                    </div>
                    <span className="text-xs text-brand-earth/60">OnePay Gateway</span>
                  </div>
                </div>

                {/* Option 3: E-wallet */}
                <div
                  onClick={() => setPaymentMethod('e-wallet')}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    paymentMethod === 'e-wallet'
                      ? 'border-brand-terracotta bg-brand-tint/30 shadow-xs'
                      : 'border-secondary-sand bg-white hover:bg-secondary-cream/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        checked={paymentMethod === 'e-wallet'}
                        onChange={() => setPaymentMethod('e-wallet')}
                        className="accent-brand-terracotta"
                      />
                      <span className="text-xs font-bold text-brand-earth">
                        Ví Điện Tử (MoMo / ZaloPay / Apple Pay)
                      </span>
                    </div>
                    <span className="text-xs text-brand-earth/60">Mở ứng dụng ví</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 rounded-2xl border border-secondary-sand shadow-md sticky top-6 space-y-6">
              <div className="flex items-center justify-between border-b border-secondary-sand pb-4">
                <h3 className="text-lg font-serif font-bold text-brand-earth">
                  Tóm Tắt Chuyến Đi
                </h3>
                <Badge variant="smartpin">ĐANG GIỮ PHÒNG</Badge>
              </div>

              {/* Room Card Preview */}
              <div className="flex items-center gap-3 p-3 bg-secondary-cream rounded-xl border border-secondary-sand">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=200&q=80"
                  alt="Sunset Penthouse"
                  className="w-16 h-16 object-cover rounded-lg shrink-0"
                />
                <div>
                  <span className="text-[10px] font-semibold text-brand-terracotta uppercase block">
                    HẠNG SANG TRỌNG
                  </span>
                  <h4 className="text-xs font-serif font-bold text-brand-earth">
                    Sunset Penthouse & Jacuzzi 270°
                  </h4>
                  <span className="text-[11px] text-brand-earth/70 block mt-0.5">
                    📍 CN 2: Hải Đăng Retreat (Triển Biển)
                  </span>
                </div>
              </div>

              {/* Date & Guest Summary */}
              <div className="grid grid-cols-2 gap-2 bg-white p-3 rounded-xl border border-secondary-sand text-xs">
                <div>
                  <span className="text-[10px] text-brand-earth/60 block">NHẬN PHÒNG (CHECK-IN)</span>
                  <strong className="text-brand-earth block">14:00, 15 Thg 11, 2024</strong>
                  <span className="text-[10px] text-semantic-success">Tự do nhận phòng Smart Lock</span>
                </div>
                <div>
                  <span className="text-[10px] text-brand-earth/60 block">TRẢ PHÒNG (CHECK-OUT)</span>
                  <strong className="text-brand-earth block">12:00, 16 Thg 11, 2024</strong>
                  <span className="text-[10px] text-brand-earth/70">1 Đêm • 2 Người lớn</span>
                </div>
              </div>

              {/* Itemized list */}
              <div className="space-y-2 text-xs text-brand-earth/80 border-t border-secondary-sand/60 pt-4">
                <div className="flex justify-between">
                  <span>Giá phòng tiêu chuẩn (1 đêm):</span>
                  <span>1.890.000đ</span>
                </div>
                <div className="flex justify-between">
                  <span>Khay trà thảo mộc chào mừng:</span>
                  <span className="text-semantic-success font-semibold">Miễn phí (0đ)</span>
                </div>
                <div className="flex justify-between">
                  <span>Set BBQ hải sản Vũng Tàu (2 người):</span>
                  <span>+350.000đ</span>
                </div>
                <div className="flex justify-between text-brand-terracotta">
                  <span>Mã giảm giá BONGGON15:</span>
                  <span>-283.500đ</span>
                </div>
                <div className="flex justify-between">
                  <span>Phí dọn dẹp & Kích hoạt mã Smart Lock:</span>
                  <span className="text-semantic-success font-semibold">0đ (Tài trợ)</span>
                </div>
              </div>

              {/* Total Price Box */}
              <div className="bg-brand-tint/60 p-4 rounded-xl border border-brand-terracotta/30 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-brand-earth block">Tổng thanh toán:</span>
                  <span className="text-[11px] text-brand-earth/70 block">Đã bao gồm 8% VAT & phí dịch vụ</span>
                </div>
                <span className="text-2xl font-serif font-bold text-brand-terracotta">
                  1.956.500đ
                </span>
              </div>

              {/* Submit CTA */}
              <Button
                variant="primary"
                size="lg"
                className="w-full shadow-md"
                onClick={handleFinishPayment}
              >
                🔒 Xác Nhận & Hoàn Tất (1.956.500đ)
              </Button>

              {/* Assurance badges */}
              <div className="space-y-2 text-[11px] text-brand-earth/70 pt-2 border-t border-secondary-sand/50">
                <p className="flex items-center gap-2">
                  <span>📩</span> Gửi mã số mở cửa của Smart Lock qua Zalo/SMS ngay sau thanh toán.
                </p>
                <p className="flex items-center gap-2">
                  <span>⏰</span> Hỗ trợ miễn phí đổi lịch hoặc hoàn cọc trước 05 ngày.
                </p>
                <p className="flex items-center gap-2">
                  <span>📞</span> Hotline quản gia 24/7 giải đáp trực tiếp: <strong>0908.868.888</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
