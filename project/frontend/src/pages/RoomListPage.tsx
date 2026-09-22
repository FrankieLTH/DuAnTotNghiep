import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

interface RoomListPageProps {
  onSelectRoom: (roomId: number) => void;
  onGoHome: () => void;
}

const ROOMS_DATA = [
  {
    id: 1,
    title: 'Sunset Penthouse & Jacuzzi 270°',
    branch: 'CN 2 - Lưng Chừng Biển Hải Đăng',
    badgeText: 'Hạng Sang Trọng',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    occupancy: '2 - 4 Khách',
    bedType: '1 Giường King + Jacuzzi',
    area: '65m²',
    view: 'View Biển Hoàng Hôn',
    oldPrice: '2.100.000đ',
    price: '1.890.000đ',
    description: 'Bồn tắm Jacuzzi ngoài trời nhìn trọn hoàng hôn biển Hải Đăng, phòng ngủ gác mái riêng tư với thiết bị cao cấp.',
  },
  {
    id: 2,
    title: 'Sea View Balcony Room',
    branch: 'CN 1 - Triển Núi Nhỏ',
    badgeText: 'Bán Chạy Nhất',
    imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    occupancy: '2 Khách',
    bedType: '1 Giường Queen',
    area: '32m²',
    view: 'Ban Công Hướng Biển',
    oldPrice: '1.350.000đ',
    price: '1.150.000đ',
    description: 'Ban công rộng rãi lộng gió biển Bãi Sau, trang bị máy pha cà phê mộc và loa Marshall nghe nhạc cực thư thái.',
  },
  {
    id: 3,
    title: 'The Family Attic & Terrace',
    branch: 'CN 1 - Triển Núi Nhỏ',
    badgeText: 'Dành Cho Gia Đình',
    imageUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
    occupancy: '4 - 6 Khách',
    bedType: '2 Giường King lớn',
    area: '55m²',
    view: 'Sân Hiên Nướng BBQ',
    oldPrice: '1.900.000đ',
    price: '1.650.000đ',
    description: 'Không gian gác mái ấm cúng kèm bếp riêng & sân hiên rộng có sẵn bếp than hoa nướng hải sản ngắm cảnh núi.',
  },
  {
    id: 4,
    title: 'Hillside Studio & Workspace',
    branch: 'CN 2 - Lưng Chừng Biển Hải Đăng',
    badgeText: 'Yên Tĩnh Chill',
    imageUrl: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
    occupancy: '2 Khách',
    bedType: '1 Giường Double',
    area: '28m²',
    view: 'View Rừng Cây & Núi',
    oldPrice: '1.050.000đ',
    price: '890.000đ',
    description: 'Góc làm việc tràn ngập ánh sáng tự nhiên với Wifi 300Mbps riêng biệt, thích hợp cho chuyến đi workation ngơi nghỉ.',
  },
  {
    id: 5,
    title: 'Cozy Wooden Attic Room',
    branch: 'CN 1 - Triển Núi Nhỏ',
    badgeText: 'Tiết Kiệm & Ấm Cúng',
    imageUrl: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
    occupancy: '2 Khách',
    bedType: '1 Giường Mộc 1m6',
    area: '24m²',
    view: 'Cửa Sổ Tròn Nhìn Đồi',
    oldPrice: '950.000đ',
    price: '790.000đ',
    description: 'Thiết kế ốp gỗ tràm mộc mạc, cửa sổ tròn đón ban mai và hệ thống Smart Lock tự động nhận phòng 24/7.',
  },
  {
    id: 6,
    title: 'Garden View Glass House',
    branch: 'CN 2 - Lưng Chừng Biển Hải Đăng',
    badgeText: 'Mới Ra Mắt',
    imageUrl: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
    occupancy: '2 Khách',
    bedType: '1 Giường King',
    area: '36m²',
    view: 'Kính Vòm Vườn Hoa',
    oldPrice: '1.200.000đ',
    price: '1.050.000đ',
    description: 'Vách kính vòm bao trọn vườn hoa đồi bông gòn, bồn tắm nằm sát cửa kính chill trọn vẹn từng khoảnh khắc.',
  },
];

export const RoomListPage: React.FC<RoomListPageProps> = ({ onSelectRoom, onGoHome }) => {
  const [selectedBranch, setSelectedBranch] = useState<string>('all');
  const [selectedBookingType, setSelectedBookingType] = useState<string>('overnight');
  const [priceRange, setPriceRange] = useState<string>('all');

  const filteredRooms = ROOMS_DATA.filter((room) => {
    if (selectedBranch !== 'all' && !room.branch.includes(selectedBranch)) return false;
    if (priceRange === 'under800' && parseInt(room.price.replace(/\D/g, '')) >= 800000) return false;
    if (priceRange === '800to1200') {
      const val = parseInt(room.price.replace(/\D/g, ''));
      if (val < 800000 || val > 1200000) return false;
    }
    if (priceRange === 'over1200' && parseInt(room.price.replace(/\D/g, '')) <= 1200000) return false;
    return true;
  });

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-16 font-sans">
      {/* Breadcrumb & Header section */}
      <div className="bg-[#FAF7F2] border-b border-secondary-sand/70 pt-6 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-xs font-sans text-brand-earth/60 space-x-2 mb-4">
            <button onClick={onGoHome} className="hover:text-brand-terracotta transition-colors">Trang chủ</button>
            <span>/</span>
            <span className="text-brand-earth font-semibold">Danh sách phòng</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-brand-terracotta bg-brand-tint px-3 py-1 rounded-full inline-block mb-2">
                BOUTIQUE SANCTUARY ROOMS
              </span>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-earth">
                Danh Sách Hạng Phòng Tại Đồi Bông Gòn
              </h1>
              <p className="text-sm font-sans text-brand-earth/80 mt-2 max-w-2xl leading-relaxed">
                Mọi không gian đều mang đậm phong cách mộc mạc, chan hòa ánh nắng và trọn vẹn sự riêng tư với khóa số PIN Smart Lock 24/7.
              </p>
            </div>
            <div className="text-xs font-sans text-brand-earth/70 bg-white p-3 rounded-xl border border-secondary-sand flex items-center gap-2 shrink-0">
              <span className="text-brand-terracotta font-bold text-base">✨ 6</span> Hạng phòng sẵn sàng đón khách
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Filter Controls Bar */}
        <div className="bg-white p-5 rounded-2xl border border-secondary-sand shadow-xs mb-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-secondary-sand/50 pb-4">
            {/* Booking Type Selector */}
            <div className="flex items-center gap-2 bg-secondary-cream p-1.5 rounded-xl border border-secondary-sand">
              <button
                onClick={() => setSelectedBookingType('overnight')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  selectedBookingType === 'overnight'
                    ? 'bg-brand-earth text-white shadow-xs'
                    : 'text-brand-earth/80 hover:bg-white/60'
                }`}
              >
                🌙 Thuê Theo Đêm
              </button>
              <button
                onClick={() => setSelectedBookingType('hourly')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  selectedBookingType === 'hourly'
                    ? 'bg-brand-earth text-white shadow-xs'
                    : 'text-brand-earth/80 hover:bg-white/60'
                }`}
              >
                ⏱️ Thuê Theo Giờ (3h)
              </button>
              <button
                onClick={() => setSelectedBookingType('longstay')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  selectedBookingType === 'longstay'
                    ? 'bg-brand-earth text-white shadow-xs'
                    : 'text-brand-earth/80 hover:bg-white/60'
                }`}
              >
                🏡 Thuê Dài Hạn
              </button>
            </div>

            {/* Branch Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-brand-earth/70">Chi nhánh:</span>
              <select
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
                className="bg-secondary-cream border border-secondary-sand text-brand-earth text-xs font-medium rounded-xl px-3 py-2 outline-none focus:border-brand-terracotta"
              >
                <option value="all">Tất cả chi nhánh</option>
                <option value="Triển Núi">CN 1 - Triển Núi Nhỏ</option>
                <option value="Hải Đăng">CN 2 - Lưng Chừng Biển Hải Đăng</option>
              </select>
            </div>
          </div>

          {/* Price Range Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-brand-earth/70 mr-2">Khoảng giá:</span>
            <button
              onClick={() => setPriceRange('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all ${
                priceRange === 'all'
                  ? 'bg-brand-terracotta text-white shadow-xs font-semibold'
                  : 'bg-secondary-cream border border-secondary-sand text-brand-earth hover:bg-secondary-sand'
              }`}
            >
              Tất cả mức giá
            </button>
            <button
              onClick={() => setPriceRange('under800')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all ${
                priceRange === 'under800'
                  ? 'bg-brand-terracotta text-white shadow-xs font-semibold'
                  : 'bg-secondary-cream border border-secondary-sand text-brand-earth hover:bg-secondary-sand'
              }`}
            >
              Dưới 800k / đêm
            </button>
            <button
              onClick={() => setPriceRange('800to1200')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all ${
                priceRange === '800to1200'
                  ? 'bg-brand-terracotta text-white shadow-xs font-semibold'
                  : 'bg-secondary-cream border border-secondary-sand text-brand-earth hover:bg-secondary-sand'
              }`}
            >
              800k - 1.2M / đêm
            </button>
            <button
              onClick={() => setPriceRange('over1200')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all ${
                priceRange === 'over1200'
                  ? 'bg-brand-terracotta text-white shadow-xs font-semibold'
                  : 'bg-secondary-cream border border-secondary-sand text-brand-earth hover:bg-secondary-sand'
              }`}
            >
              Trên 1.2M / đêm
            </button>
          </div>
        </div>

        {/* Room List Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl border border-secondary-sand overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container with Badge */}
                <div className="relative h-52 bg-brand-earth overflow-hidden">
                  <img
                    src={room.imageUrl}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-earth/80 via-transparent to-black/20" />
                  <div className="absolute top-3 left-3">
                    <Badge variant="signature">{room.badgeText}</Badge>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-sans font-medium uppercase tracking-wider bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md">
                      📍 {room.branch}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3
                    onClick={() => onSelectRoom(room.id)}
                    className="text-lg font-serif font-bold text-brand-earth hover:text-brand-terracotta transition-colors cursor-pointer line-clamp-1"
                  >
                    {room.title}
                  </h3>

                  <p className="text-xs font-sans text-brand-earth/70 mt-2 line-clamp-2 leading-relaxed">
                    {room.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-brand-earth/80 bg-secondary-cream p-3 rounded-xl border border-secondary-sand/60">
                    <span className="flex items-center gap-1.5">
                      👥 <strong className="font-semibold">{room.occupancy}</strong>
                    </span>
                    <span className="flex items-center gap-1.5">
                      📐 <strong className="font-semibold">{room.area}</strong>
                    </span>
                    <span className="flex items-center gap-1.5 col-span-2">
                      🌅 <span className="truncate">{room.view}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer Price & Button */}
              <div className="p-5 pt-0 border-t border-secondary-sand/40 flex items-center justify-between mt-2">
                <div>
                  <span className="text-[11px] text-brand-earth/50 line-through block">
                    {room.oldPrice}
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-bold font-sans text-brand-terracotta">
                      {room.price}
                    </span>
                    <span className="text-xs text-brand-earth/70">/đêm</span>
                  </div>
                </div>

                <Button variant="primary" size="sm" onClick={() => onSelectRoom(room.id)}>
                  Xem phòng
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Promo Banner inside Room List */}
        <div className="mt-12 bg-gradient-to-r from-brand-earth via-[#4A382E] to-brand-earth text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-brand-earth/20">
          <div>
            <span className="bg-brand-amber/20 text-brand-amber font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              ƯU ĐÃI ĐẶC QUYỀN WEBSITE
            </span>
            <h2 className="text-2xl font-serif font-bold text-white mt-2">
              Giảm ngay 15% khi đặt từ 2 đêm trực tiếp
            </h2>
            <p className="text-xs font-sans text-secondary-sand/90 mt-1">
              Nhập mã <strong className="text-brand-amber font-mono font-bold">BONGGON15</strong> tại bước thanh toán để tự động trừ trực tiếp vào hóa đơn.
            </p>
          </div>
          <Button
            variant="outline"
            className="!border-brand-amber !text-brand-amber hover:!bg-brand-amber hover:!text-brand-earth shrink-0"
            onClick={() => alert('Mã BONGGON15 đã được lưu! Bạn có thể sử dụng khi thanh toán.')}
          >
            Sao Chép Mã Ưu Đãi
          </Button>
        </div>
      </div>
    </div>
  );
};
