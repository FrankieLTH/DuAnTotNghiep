import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { getRooms, getApartments, RoomItem, ApartmentItem } from '../services/dataService';

interface RoomListPageProps {
  onSelectRoom: (roomId: number) => void;
  onGoHome: () => void;
}

export const RoomListPage: React.FC<RoomListPageProps> = ({ onSelectRoom, onGoHome }) => {
  const [rooms, setRooms] = useState<RoomItem[]>([]);
  const [apartments, setApartments] = useState<ApartmentItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [selectedBranchId, setSelectedBranchId] = useState<string>('all');
  const [selectedBookingType, setSelectedBookingType] = useState<string>('overnight');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const [rData, aData] = await Promise.all([
          getRooms(),
          getApartments(),
        ]);
        setRooms(rData);
        setApartments(aData);
      } catch (err) {
        console.error('Error fetching rooms:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const filteredRooms = rooms.filter((room) => {
    // Branch filter
    if (selectedBranchId !== 'all' && room.apartment_id.toString() !== selectedBranchId) {
      return false;
    }
    // Status filter
    if (selectedStatus !== 'all' && room.status !== selectedStatus) {
      return false;
    }
    // Price range filter
    if (priceRange === 'under800' && room.base_price >= 800000) return false;
    if (priceRange === '800to1500') {
      if (room.base_price < 800000 || room.base_price > 1500000) return false;
    }
    if (priceRange === 'over1500' && room.base_price <= 1500000) return false;

    return true;
  });

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-16 font-sans">
      {/* Breadcrumb & Header section */}
      <div className="bg-[#FAF7F2] border-b border-[#E8DFD1]/70 pt-6 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-xs font-sans text-[#3E2C23]/60 space-x-2 mb-4">
            <button onClick={onGoHome} className="hover:text-[#C85A32] transition-colors">
              Trang chủ
            </button>
            <span>/</span>
            <span className="text-[#3E2C23] font-semibold">Danh sách phòng</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#C85A32] bg-[#C85A32]/10 px-3 py-1 rounded-full inline-block mb-2">
                HỆ THỐNG HOMESTAY TỰ ĐỘNG HÓA
              </span>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#3E2C23]">
                Danh Sách Hạng Phòng Tại Hệ Thống
              </h1>
              <p className="text-sm font-sans text-[#7A6B63] mt-2 max-w-2xl leading-relaxed">
                Tất cả phòng nghỉ được đồng bộ từ cơ sở dữ liệu hệ thống, trang bị hệ thống Smart Lock TTLock mở cửa tự động bằng mã PIN 24/7.
              </p>
            </div>
            <div className="text-xs font-sans text-[#3E2C23]/80 bg-white p-3 rounded-2xl border border-[#E8DFD1] flex items-center gap-2 shrink-0 shadow-xs">
              <span className="text-[#C85A32] font-bold text-base">✨ {rooms.length}</span>
              Phòng trong cơ sở dữ liệu
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Filter Controls Bar */}
        <div className="bg-white p-5 rounded-3xl border border-[#E8DFD1] shadow-xs mb-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#F2ECE1] pb-4">
            {/* Booking Type Selector */}
            <div className="flex items-center gap-2 bg-[#FAF7F2] p-1.5 rounded-2xl border border-[#E8DFD1]">
              <button
                onClick={() => setSelectedBookingType('overnight')}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  selectedBookingType === 'overnight'
                    ? 'bg-[#3E2C23] text-white shadow-xs'
                    : 'text-[#3E2C23]/80 hover:bg-white/60'
                }`}
              >
                🌙 Thuê Theo Đêm
              </button>
              <button
                onClick={() => setSelectedBookingType('hourly')}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  selectedBookingType === 'hourly'
                    ? 'bg-[#3E2C23] text-white shadow-xs'
                    : 'text-[#3E2C23]/80 hover:bg-white/60'
                }`}
              >
                ⏱️ Thuê Theo Giờ (3h)
              </button>
              <button
                onClick={() => setSelectedBookingType('longstay')}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  selectedBookingType === 'longstay'
                    ? 'bg-[#3E2C23] text-white shadow-xs'
                    : 'text-[#3E2C23]/80 hover:bg-white/60'
                }`}
              >
                🏡 Thuê Dài Hạn
              </button>
            </div>

            {/* Branch Selector from Database apartments */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#7A6B63]">Chi nhánh:</span>
              <select
                value={selectedBranchId}
                onChange={(e) => setSelectedBranchId(e.target.value)}
                className="bg-[#FAF7F2] border border-[#E8DFD1] text-[#3E2C23] text-xs font-medium rounded-xl px-3 py-2 outline-none focus:border-[#C85A32]"
              >
                <option value="all">Tất cả chi nhánh</option>
                {apartments.map((apt) => (
                  <option key={apt.id} value={apt.id.toString()}>
                    {apt.city}: {apt.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#7A6B63]">Trạng thái:</span>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="bg-[#FAF7F2] border border-[#E8DFD1] text-[#3E2C23] text-xs font-medium rounded-xl px-3 py-2 outline-none focus:border-[#C85A32]"
              >
                <option value="all">Tất cả trạng thái</option>
                <option value="available">Phòng trống (Available)</option>
                <option value="occupied">Đang có khách (Occupied)</option>
                <option value="maintenance">Đang bảo dưỡng (Maintenance)</option>
              </select>
            </div>
          </div>

          {/* Price Range Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-[#7A6B63] mr-2">Khoảng giá:</span>
            <button
              onClick={() => setPriceRange('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                priceRange === 'all'
                  ? 'bg-[#C85A32] text-white shadow-xs'
                  : 'bg-[#FAF7F2] border border-[#E8DFD1] text-[#3E2C23] hover:bg-white'
              }`}
            >
              Tất cả mức giá
            </button>
            <button
              onClick={() => setPriceRange('under800')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                priceRange === 'under800'
                  ? 'bg-[#C85A32] text-white shadow-xs'
                  : 'bg-[#FAF7F2] border border-[#E8DFD1] text-[#3E2C23] hover:bg-white'
              }`}
            >
              Dưới 800.000đ
            </button>
            <button
              onClick={() => setPriceRange('800to1500')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                priceRange === '800to1500'
                  ? 'bg-[#C85A32] text-white shadow-xs'
                  : 'bg-[#FAF7F2] border border-[#E8DFD1] text-[#3E2C23] hover:bg-white'
              }`}
            >
              800.000đ - 1.500.000đ
            </button>
            <button
              onClick={() => setPriceRange('over1500')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                priceRange === 'over1500'
                  ? 'bg-[#C85A32] text-white shadow-xs'
                  : 'bg-[#FAF7F2] border border-[#E8DFD1] text-[#3E2C23] hover:bg-white'
              }`}
            >
              Trên 1.500.000đ
            </button>
          </div>
        </div>

        {/* Room Cards Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-3xl h-96 animate-pulse border border-[#E8DFD1]" />
            ))}
          </div>
        ) : filteredRooms.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#E8DFD1]">
            <p className="text-[#3E2C23] font-semibold text-lg">Không có phòng nào phù hợp với bộ lọc đã chọn.</p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4"
              onClick={() => {
                setSelectedBranchId('all');
                setPriceRange('all');
                setSelectedStatus('all');
              }}
            >
              Đặt lại bộ lọc
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRooms.map((room) => {
              const statusVariant =
                room.status === 'available'
                  ? 'feature-green'
                  : room.status === 'occupied'
                  ? 'warning'
                  : 'error';

              const statusText =
                room.status === 'available'
                  ? 'Có sẵn'
                  : room.status === 'occupied'
                  ? 'Đang có khách'
                  : 'Đang bảo dưỡng';

              return (
                <div
                  key={room.id}
                  className="bg-white rounded-3xl overflow-hidden border border-[#E8DFD1] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Container with Badges */}
                    <div className="relative h-56 bg-[#2D1D16] overflow-hidden">
                      <img
                        src={room.images[0] || 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80'}
                        alt={`Phòng ${room.room_number}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                      <div className="absolute top-3 left-3 flex gap-2">
                        <Badge variant="signature">{room.badge || `Phòng ${room.room_number}`}</Badge>
                        <Badge variant={statusVariant}>● {statusText}</Badge>
                      </div>

                      <div className="absolute top-3 right-3">
                        <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-[#3E2C23]">
                          {room.area}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[11px] font-sans font-medium uppercase tracking-wider bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-lg block truncate">
                          📍 {room.apartment_name} ({room.city})
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-mono font-bold text-[#C85A32]">
                          PHÒNG {room.room_number}
                        </span>
                        <span className="text-xs text-[#8C7A70]">
                          Sức chứa {room.max_occupancy} khách
                        </span>
                      </div>

                      <h3
                        onClick={() => onSelectRoom(room.id)}
                        className="text-lg font-serif font-bold text-[#3E2C23] hover:text-[#C85A32] transition-colors cursor-pointer line-clamp-1"
                      >
                        {room.room_type_name}
                      </h3>

                      <p className="text-xs font-sans text-[#7A6B63] mt-2 line-clamp-2 leading-relaxed">
                        {room.description}
                      </p>

                      {/* Highlights Grid */}
                      <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-[#3E2C23]/80 bg-[#FAF7F2] p-3 rounded-2xl border border-[#E8DFD1]/70">
                        <span className="flex items-center gap-1.5 truncate">
                          👥 <strong className="font-semibold">{room.max_occupancy} Khách</strong>
                        </span>
                        <span className="flex items-center gap-1.5 truncate">
                          📐 <strong className="font-semibold">{room.area}</strong>
                        </span>
                        <span className="flex items-center gap-1.5 col-span-2 truncate">
                          🔑 <span className="truncate">{room.lock?.lock_name || 'Khóa TTLock Smart PIN'}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Footer Price & Button */}
                  <div className="p-5 pt-0 border-t border-[#F2ECE1] flex items-center justify-between mt-2">
                    <div>
                      <span className="text-[10px] text-[#8C7A70] uppercase font-bold tracking-wider block">
                        Giá niêm yết
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold font-serif text-[#C85A32]">
                          {room.base_price.toLocaleString('vi-VN')}đ
                        </span>
                        <span className="text-xs text-[#8C7A70]">/đêm</span>
                      </div>
                    </div>

                    <Button variant="primary" size="sm" onClick={() => onSelectRoom(room.id)}>
                      Xem phòng
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Promo Banner inside Room List */}
        <div className="mt-12 bg-gradient-to-r from-[#2D1D16] via-[#3E2C23] to-[#2D1D16] text-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-[#483327]">
          <div>
            <span className="text-xs font-bold text-[#E07A5F] uppercase tracking-widest block mb-1">
              ĐẶC QUYỀN ĐẶT PHÒNG TRỰC TIẾP
            </span>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-white">
              Nhập mã WELCOME2026 nhận ngay ưu đãi giảm 10%
            </h3>
            <p className="text-xs text-white/70 mt-1 max-w-xl font-light">
              Áp dụng cho mọi khách hàng mới khi đặt phòng tại các chi nhánh Hà Nội, Đà Nẵng và Đà Lạt.
            </p>
          </div>
          <button
            onClick={() => onSelectRoom(1)}
            className="bg-[#C85A32] hover:bg-[#b04b27] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shrink-0 transition-transform active:scale-95 cursor-pointer shadow-md"
          >
            Đặt Phòng Ngay
          </button>
        </div>
      </div>
    </div>
  );
};
