import React, { useEffect, useState } from 'react';
import { getRooms, getApartments, RoomItem, ApartmentItem } from '../../services/dataService';

interface RoomSelectionSectionProps {
  onSelectRoom?: (roomId: number) => void;
}

export const RoomSelectionSection: React.FC<RoomSelectionSectionProps> = ({ onSelectRoom }) => {
  const [rooms, setRooms] = useState<RoomItem[]>([]);
  const [apartments, setApartments] = useState<ApartmentItem[]>([]);
  const [selectedApartmentId, setSelectedApartmentId] = useState<number | 'all'>('all');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const [roomsData, aptData] = await Promise.all([
          getRooms(),
          getApartments(),
        ]);
        setRooms(roomsData);
        setApartments(aptData);
      } catch (e) {
        console.error('Error loading rooms for homepage:', e);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const filteredRooms = selectedApartmentId === 'all'
    ? rooms
    : rooms.filter((r) => r.apartment_id === selectedApartmentId);

  return (
    <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto" id="room-selection">
      {/* Tiêu đề & Giới thiệu */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C85A32] block mb-2">
            Hạng phòng lưu trú chính thức
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-[#3E2C23] tracking-[0.12em] uppercase">
            TÌM PHÒNG PHÙ HỢP VỚI BẠN
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#7A6B63] max-w-xl font-light mt-2 leading-relaxed">
            Dữ liệu phòng nghỉ thực tế tại 3 chi nhánh Hà Nội, Đà Nẵng và Đà Lạt. Tích hợp sẵn khóa thông minh TTLock tự kích hoạt khi khách thanh toán thành công.
          </p>
        </div>

        {/* Filter Tabs theo Chi Nhánh (Bảng Apartments từ DB) */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedApartmentId('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              selectedApartmentId === 'all'
                ? 'bg-[#C85A32] text-white shadow-sm'
                : 'bg-white text-[#5C4D44] border border-[#E8DFD1] hover:bg-[#FAF7F2]'
            }`}
          >
            Tất cả chi nhánh
          </button>
          {apartments.map((apt) => (
            <button
              key={apt.id}
              onClick={() => setSelectedApartmentId(apt.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedApartmentId === apt.id
                  ? 'bg-[#C85A32] text-white shadow-sm'
                  : 'bg-white text-[#5C4D44] border border-[#E8DFD1] hover:bg-[#FAF7F2]'
              }`}
            >
              📍 {apt.city} ({apt.name.split(' ')[0]})
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-3xl h-96 animate-pulse border border-[#E8DFD1]/60 p-4" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredRooms.map((room) => {
            const isAvailable = room.status === 'available';
            const statusLabel =
              room.status === 'available'
                ? 'Có sẵn'
                : room.status === 'occupied'
                ? 'Đang có khách'
                : 'Đang bảo dưỡng';

            const statusColor =
              room.status === 'available'
                ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
                : room.status === 'occupied'
                ? 'bg-amber-100 text-amber-800 border-amber-200'
                : 'bg-gray-100 text-gray-700 border-gray-200';

            return (
              <div
                key={room.id}
                onClick={() => onSelectRoom && onSelectRoom(room.id)}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-[#E8DFD1]/60 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Ảnh phòng */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#2D1D16]">
                    <img
                      src={room.images[0] || 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80'}
                      alt={`${room.room_number} - ${room.room_type_name}`}
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />

                    {/* Badge Diện tích */}
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-[#3E2C23] shadow-xs">
                      {room.area}
                    </div>

                    {/* Badge Trạng thái phòng */}
                    <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold border ${statusColor} shadow-xs flex items-center gap-1.5`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${isAvailable ? 'bg-emerald-600' : room.status === 'occupied' ? 'bg-amber-600' : 'bg-gray-500'}`} />
                      <span>{statusLabel}</span>
                    </div>

                    {/* Chi nhánh overlay ở chân ảnh */}
                    <div className="absolute bottom-2 left-3 right-3">
                      <span className="text-[11px] font-medium text-white bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-lg truncate block">
                        📍 {room.apartment_name}
                      </span>
                    </div>
                  </div>

                  {/* Thông tin phòng */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] uppercase tracking-wider font-mono font-bold text-[#C85A32]">
                        Phòng {room.room_number}
                      </span>
                      <span className="text-[11px] text-[#8C7A70]">
                        Tối đa {room.max_occupancy} khách
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-lg text-[#3E2C23] group-hover:text-[#C85A32] transition-colors mb-2 line-clamp-1">
                      {room.room_type_name}
                    </h3>

                    <p className="font-sans text-xs text-[#7A6B63] mb-4 line-clamp-2 leading-relaxed">
                      {room.description}
                    </p>

                    {/* Tiện ích nổi bật từ DB */}
                    <div className="space-y-1.5 mb-2">
                      {room.amenities.slice(0, 3).map((amenity) => (
                        <div key={amenity.id} className="flex items-center gap-2 text-xs text-[#5C4D44]">
                          <span className="text-sm shrink-0">{amenity.icon || '✓'}</span>
                          <span className="truncate">{amenity.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Chân thẻ: Giá & Nút Đặt phòng */}
                <div className="p-5 sm:p-6 pt-0">
                  <div className="pt-4 border-t border-[#F2ECE1] flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] text-[#8C7A70] uppercase font-bold tracking-wider">
                        Giá niêm yết
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif font-bold text-lg sm:text-xl text-[#C85A32]">
                          {room.base_price.toLocaleString('vi-VN')}đ
                        </span>
                        <span className="text-[11px] text-[#8C7A70]">/đêm</span>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onSelectRoom) onSelectRoom(room.id);
                      }}
                      className="bg-[#C85A32] hover:bg-[#b04b27] text-white px-4 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all transform active:scale-95 cursor-pointer shadow-sm hover:shadow-md uppercase font-sans"
                    >
                      {isAvailable ? 'Đặt ngay' : 'Chi tiết'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
