import React, { useState } from 'react';
import { FeaturedRoomCard, FeaturedRoom } from './FeaturedRoomCard';

const SAMPLE_ROOMS: FeaturedRoom[] = [
  {
    id: 1,
    title: 'Sunset Penthouse & Jacuzzi',
    badge: '★ SIGNATURE HOMESTAY',
    overlayNote: 'Ưu đãi tặng rượu vang hoàng hôn',
    rating: 5.0,
    reviewCount: 41,
    branch: 'CN 2: Hải Đăng',
    features: ['🛏️ 2 Master', '👥 4 Khách', '🛁 Jacuzzi 270°', '📐 95m²'],
    price: '1.890.000đ',
    imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Sea View Balcony Room',
    badge: '🔥 ĐANG GIẢM GIÁ -15%',
    overlayNote: 'Ban công ôm trọn hoàng hôn biển',
    tagline: 'Hot nhất tuần',
    rating: 4.98,
    reviewCount: 112,
    branch: 'CN 1: Núi Nhỏ',
    features: ['🛏️ 1 Queen', '👥 2 Khách', '🌅 Ban công biển', '📐 42m²'],
    oldPrice: '1.000.000đ',
    price: '850.000đ',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'The Cotton Cloud Suite',
    badge: '🤍 FAVORITE COUPLES',
    overlayNote: 'Giếng trời ngắm sao • Rạp chiếu 4K',
    tagline: 'Cực lãng mạn',
    rating: 4.99,
    reviewCount: 48,
    branch: 'CN 1: Núi Nhỏ',
    features: ['🛏️ 1 King', '👥 2 Khách', '🎬 Rạp chiếu mini', '📐 45m²'],
    price: '920.000đ',
    imageUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'The Family Attic & Terrace',
    badge: '🏷️ BEST SELLER GIA ĐÌNH',
    overlayNote: 'Bếp BBQ riêng • Sân hiên ăn tối',
    tagline: 'Rộng 75m²',
    rating: 4.93,
    reviewCount: 52,
    branch: 'CN 1: Núi Nhỏ',
    features: ['🛏️ 2 Phòng ngủ', '👥 4 - 6 Khách', '🍳 Bếp riêng', '📐 75m²'],
    price: '1.250.000đ',
    imageUrl: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
  },
];

interface FeaturedRoomsSectionProps {
  onSelectRoom?: (id: number) => void;
}

export const FeaturedRoomsSection: React.FC<FeaturedRoomsSectionProps> = ({ onSelectRoom }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: '🔘 Tất cả Signature & Ưu đãi' },
    { id: 'discount', label: '🏷️ Đang giảm giá 15%' },
    { id: 'penthouse', label: '🏰 Signature Penthouse & Jacuzzi' },
    { id: 'couple', label: '🤍 Cặp đôi lãng mạn' },
    { id: 'voucher', label: '🏷️ Áp dụng kèm mã BONGGON15' },
  ];

  return (
    <section id="rooms" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      
      {/* Title Header */}
      <div className="mb-8">
        <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#3E2C23]">
          Phòng Signature & Ưu đãi đặc quyền
        </h2>
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            className={
              activeFilter === f.id
                ? 'bg-[#3E2C23] text-white px-4 py-2 rounded-full font-sans font-semibold text-xs shadow-sm cursor-pointer'
                : 'bg-white border border-[#E8DFD1] text-[#3E2C23] hover:bg-[#FAF7F2] px-4 py-2 rounded-full font-sans font-medium text-xs cursor-pointer transition-colors'
            }
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Room Cards Grid (4 Cột) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {SAMPLE_ROOMS.map((room) => (
          <FeaturedRoomCard key={room.id} room={room} onSelect={onSelectRoom} />
        ))}
      </div>

      {/* Button CTA góc dưới */}
      <div className="text-center">
        <button className="inline-flex items-center gap-2 bg-white border border-[#E8DFD1] hover:border-[#C85A32] text-[#3E2C23] hover:text-[#C85A32] font-sans font-bold text-sm px-6 py-3 rounded-2xl shadow-xs transition-all cursor-pointer">
          <span>📅 Kiểm tra lịch trống & Đặt phòng trực tiếp</span>
          <span>↗</span>
        </button>
      </div>

    </section>
  );
};
