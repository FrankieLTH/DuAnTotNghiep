import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

interface RoomDetailPageProps {
  roomId?: number;
  onGoBack: () => void;
  onProceedToCheckout: (bookingDetails: any) => void;
}

export const RoomDetailPage: React.FC<RoomDetailPageProps> = ({
  roomId = 1,
  onGoBack,
  onProceedToCheckout,
}) => {
  const [checkInDate, setCheckInDate] = useState('2024-11-15');
  const [checkOutDate, setCheckOutDate] = useState('2024-11-16');
  const [guests, setGuests] = useState('2 Khách');
  const [includeBBQ, setIncludeBBQ] = useState(true);
  const [includeVespa, setIncludeVespa] = useState(false);

  const basePrice = 1890000;
  const bbqPrice = includeBBQ ? 350000 : 0;
  const vespaPrice = includeVespa ? 150000 : 0;
  const discountAmount = 283500; // 15% discount
  const totalPrice = basePrice + bbqPrice + vespaPrice - discountAmount;

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-16 font-sans">
      {/* Header / Breadcrumb */}
      <div className="bg-[#FAF7F2] border-b border-secondary-sand/70 pt-6 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-xs font-sans text-brand-earth/60 space-x-2 mb-4">
            <button onClick={onGoBack} className="hover:text-brand-terracotta transition-colors">Trang chủ</button>
            <span>/</span>
            <button onClick={onGoBack} className="hover:text-brand-terracotta transition-colors">Danh sách phòng</button>
            <span>/</span>
            <span className="text-brand-earth font-semibold">Sunset Penthouse & Jacuzzi 270°</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge variant="signature">CN 2: Hải Đăng Retreat (Triển Biển)</Badge>
                <Badge variant="smartpin">Mã PIN Smart Lock 24/7</Badge>
                <Badge variant="feature-green">Miễn Phí Hủy Trước 05 Ngày</Badge>
              </div>
              <h1 className="text-3xl lg:text-4xl font-serif font-bold text-brand-earth">
                Sunset Penthouse & Jacuzzi 270°
              </h1>
              <p className="text-xs lg:text-sm font-sans text-brand-earth/80 mt-1">
                📍 Hẻm 12 Hạ Long, Phường 2, TP. Vũng Tàu (Cách bờ biển Bãi Trước 100m)
              </p>
            </div>
            <Button variant="ghost" size="sm" onClick={onGoBack}>
              ← Quay lại danh sách
            </Button>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 rounded-2xl overflow-hidden shadow-xs border border-secondary-sand mb-10">
          <div className="md:col-span-8 relative h-[380px] md:h-[480px]">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
              alt="Sunset Penthouse"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-xs text-white text-xs px-3 py-1.5 rounded-lg font-medium">
              📷 Bồn Jacuzzi view hoàng hôn biển 270°
            </span>
          </div>
          <div className="md:col-span-4 grid grid-rows-2 gap-4 h-[380px] md:h-[480px]">
            <div className="relative h-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80"
                alt="Phòng ngủ Penthouse"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=600&q=80"
                alt="Sân hiên ban công"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Content Layout Grid (Left: Details, Right: Sticky Booking Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column - Details */}
          <div className="lg:col-span-7 space-y-10">
            {/* Overview */}
            <section className="bg-white p-6 rounded-2xl border border-secondary-sand space-y-4">
              <h2 className="text-xl font-serif font-bold text-brand-earth flex items-center gap-2">
                🏡 Tổng Quan Không Gian
              </h2>
              <p className="text-sm font-sans text-brand-earth/80 leading-relaxed">
                Căn Penthouse cao nhất chi nhánh Lưng Chừng Biển Hải Đăng với tầm nhìn 270 độ bao trọn biển Bãi Trước và hoàng hôn Vũng Tàu. Được trang bị bồn tắm Jacuzzi ngoài trời sục khí thủy lực massage, gác mái ấm cúng ốp gỗ tràm tự nhiên và hệ thống khóa số PIN Smart Lock hoàn toàn tự động 24/7.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-secondary-sand/60 text-center">
                <div className="bg-secondary-cream p-3 rounded-xl border border-secondary-sand">
                  <span className="text-xs text-brand-earth/60 block">Diện tích</span>
                  <span className="text-sm font-bold text-brand-earth">65m²</span>
                </div>
                <div className="bg-secondary-cream p-3 rounded-xl border border-secondary-sand">
                  <span className="text-xs text-brand-earth/60 block">Sức chứa</span>
                  <span className="text-sm font-bold text-brand-earth">2 - 4 Khách</span>
                </div>
                <div className="bg-secondary-cream p-3 rounded-xl border border-secondary-sand">
                  <span className="text-xs text-brand-earth/60 block">Bãi đỗ xe</span>
                  <span className="text-sm font-bold text-brand-earth">Miễn phí 24/7</span>
                </div>
              </div>
            </section>

            {/* Boutique Amenities */}
            <section className="bg-white p-6 rounded-2xl border border-secondary-sand space-y-4">
              <h2 className="text-xl font-serif font-bold text-brand-earth">
                ✨ Tiện Nghi Boutique Nổi Bật
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-secondary-cream/60 border border-secondary-sand/50">
                  <span className="text-xl">🛁</span>
                  <div>
                    <h4 className="text-xs font-bold text-brand-earth">Bồn Jacuzzi Thủy Lực</h4>
                    <p className="text-[11px] text-brand-earth/70">Massage sục khí ngoài ban công ngắm biển</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-secondary-cream/60 border border-secondary-sand/50">
                  <span className="text-xl">☕</span>
                  <div>
                    <h4 className="text-xs font-bold text-brand-earth">Máy Pha Cà Phê Espresso</h4>
                    <p className="text-[11px] text-brand-earth/70">Kèm hạt cà phê Cầu Đất rang xay mộc</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-secondary-cream/60 border border-secondary-sand/50">
                  <span className="text-xl">🎵</span>
                  <div>
                    <h4 className="text-xs font-bold text-brand-earth">Loa Marshall Stanmore</h4>
                    <p className="text-[11px] text-brand-earth/70">Âm thanh cổ điển ấm áp cho đêm nghỉ</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-secondary-cream/60 border border-secondary-sand/50">
                  <span className="text-xl">📽️</span>
                  <div>
                    <h4 className="text-xs font-bold text-brand-earth">Máy Chiếu Phim 4K</h4>
                    <p className="text-[11px] text-brand-earth/70">Đã cài sẵn Netflix & Youtube Premium</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-secondary-cream/60 border border-secondary-sand/50">
                  <span className="text-xl">📶</span>
                  <div>
                    <h4 className="text-xs font-bold text-brand-earth">Wifi 6 Riêng 300Mbps</h4>
                    <p className="text-[11px] text-brand-earth/70">Tối ưu cho công việc và giải trí</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-secondary-cream/60 border border-secondary-sand/50">
                  <span className="text-xl">🔑</span>
                  <div>
                    <h4 className="text-xs font-bold text-brand-earth">Smart Lock PIN 24/7</h4>
                    <p className="text-[11px] text-brand-earth/70">Tự động gửi mã PIN qua Zalo & SMS</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Smart Check-in Flow */}
            <section className="bg-brand-earth text-white p-6 rounded-2xl space-y-4">
              <span className="text-xs font-bold tracking-widest text-brand-amber uppercase">
                QUY TRÌNH CHECK-IN TỰ ĐỘNG
              </span>
              <h2 className="text-xl font-serif font-bold text-white">
                3 Bước Nhận Phòng Không Chạm Với PIN Smart Lock
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-white/10 p-4 rounded-xl border border-white/10 space-y-2">
                  <span className="text-brand-amber font-mono font-bold text-lg">01.</span>
                  <h4 className="text-xs font-bold text-white">Thanh Toán Trực Tuyến</h4>
                  <p className="text-[11px] text-secondary-sand/80">Hoàn tất đặt phòng & nhận ngay tin nhắn xác nhận.</p>
                </div>

                <div className="bg-white/10 p-4 rounded-xl border border-white/10 space-y-2">
                  <span className="text-brand-amber font-mono font-bold text-lg">02.</span>
                  <h4 className="text-xs font-bold text-white">Nhận Mã PIN 6 Số</h4>
                  <p className="text-[11px] text-secondary-sand/80">Mã PIN cá nhân kích hoạt tự động trước 2 tiếng.</p>
                </div>

                <div className="bg-white/10 p-4 rounded-xl border border-white/10 space-y-2">
                  <span className="text-brand-amber font-mono font-bold text-lg">03.</span>
                  <h4 className="text-xs font-bold text-white">Mở Cửa & Thư Giãn</h4>
                  <p className="text-[11px] text-secondary-sand/80">Chạm màn hình khóa số, bấm PIN + phím # để vào phòng.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Booking Sidebar */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 rounded-2xl border border-secondary-sand shadow-md sticky top-6 space-y-6">
              {/* Header price */}
              <div className="flex items-baseline justify-between border-b border-secondary-sand pb-4">
                <div>
                  <span className="text-xs text-brand-earth/50 line-through block">2.100.000đ</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold font-serif text-brand-terracotta">
                      1.890.000đ
                    </span>
                    <span className="text-xs font-sans text-brand-earth/70">/ đêm</span>
                  </div>
                </div>
                <Badge variant="discount">Giảm 10% Trực Tiếp</Badge>
              </div>

              {/* Form Controls */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-brand-earth/80 block mb-1">
                      Nhận phòng (Check-in)
                    </label>
                    <input
                      type="date"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      className="w-full bg-secondary-cream border border-secondary-sand rounded-xl px-3 py-2 text-xs font-sans outline-none focus:border-brand-terracotta"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-brand-earth/80 block mb-1">
                      Trả phòng (Check-out)
                    </label>
                    <input
                      type="date"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                      className="w-full bg-secondary-cream border border-secondary-sand rounded-xl px-3 py-2 text-xs font-sans outline-none focus:border-brand-terracotta"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-brand-earth/80 block mb-1">
                    Số lượng khách
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-secondary-cream border border-secondary-sand rounded-xl px-3 py-2 text-xs font-sans outline-none focus:border-brand-terracotta"
                  >
                    <option value="2 Khách">2 Người lớn (Tiêu chuẩn)</option>
                    <option value="3 Khách">3 Người lớn (+Phụ thu)</option>
                    <option value="4 Khách">4 Khách (Tối đa)</option>
                  </select>
                </div>
              </div>

              {/* Add-on services */}
              <div className="space-y-2 pt-2 border-t border-secondary-sand/60">
                <span className="text-xs font-bold text-brand-earth block mb-2">
                  🎁 Dịch vụ trải nghiệm đi kèm:
                </span>
                <label className="flex items-center gap-2.5 text-xs text-brand-earth cursor-pointer p-2 rounded-lg hover:bg-secondary-cream">
                  <input type="checkbox" checked readOnly className="accent-brand-terracotta" />
                  <span>Khay trà thảo mộc hoa cúc mừng khách</span>
                  <span className="ml-auto font-semibold text-semantic-success">Miễn phí</span>
                </label>

                <label className="flex items-center gap-2.5 text-xs text-brand-earth cursor-pointer p-2 rounded-lg hover:bg-secondary-cream">
                  <input
                    type="checkbox"
                    checked={includeBBQ}
                    onChange={(e) => setIncludeBBQ(e.target.checked)}
                    className="accent-brand-terracotta"
                  />
                  <span>Set BBQ hải sản tươi Vũng Tàu (2 người)</span>
                  <span className="ml-auto font-semibold text-brand-earth/80">+350.000đ</span>
                </label>

                <label className="flex items-center gap-2.5 text-xs text-brand-earth cursor-pointer p-2 rounded-lg hover:bg-secondary-cream">
                  <input
                    type="checkbox"
                    checked={includeVespa}
                    onChange={(e) => setIncludeVespa(e.target.checked)}
                    className="accent-brand-terracotta"
                  />
                  <span>Thuê xe Vespa / Sh vi vu hải đăng</span>
                  <span className="ml-auto font-semibold text-brand-earth/80">+150.000đ</span>
                </label>
              </div>

              {/* Price Calculation Summary */}
              <div className="bg-secondary-cream p-4 rounded-xl border border-secondary-sand space-y-2 text-xs">
                <div className="flex justify-between text-brand-earth/80">
                  <span>Giá phòng (1 đêm):</span>
                  <span className="font-semibold">{basePrice.toLocaleString('vi-VN')}đ</span>
                </div>
                {includeBBQ && (
                  <div className="flex justify-between text-brand-earth/80">
                    <span>Set BBQ hải sản:</span>
                    <span className="font-semibold">+350.000đ</span>
                  </div>
                )}
                {includeVespa && (
                  <div className="flex justify-between text-brand-earth/80">
                    <span>Thuê xe Vespa:</span>
                    <span className="font-semibold">+150.000đ</span>
                  </div>
                )}
                <div className="flex justify-between text-brand-terracotta font-medium">
                  <span>Mã giảm BONGGON15:</span>
                  <span>-{discountAmount.toLocaleString('vi-VN')}đ</span>
                </div>

                <div className="flex justify-between text-sm font-bold text-brand-earth pt-2 border-t border-secondary-sand">
                  <span>Tổng thanh toán:</span>
                  <span className="text-lg font-serif text-brand-terracotta">
                    {totalPrice.toLocaleString('vi-VN')}đ
                  </span>
                </div>
              </div>

              {/* CTA Action */}
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() =>
                  onProceedToCheckout({
                    roomId,
                    roomTitle: 'Sunset Penthouse & Jacuzzi 270°',
                    branch: 'CN 2: Hải Đăng Retreat',
                    checkInDate,
                    checkOutDate,
                    totalPrice,
                  })
                }
              >
                🔒 Đặt Phòng & Nhận Mã PIN
              </Button>

              <div className="text-[11px] text-center text-brand-earth/60 space-y-1">
                <p>⚡ Xác nhận tức thì - Mã PIN gửi ngay sau thanh toán</p>
                <p>📞 Hotline quản gia 24/7: <strong>0908.868.888</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
