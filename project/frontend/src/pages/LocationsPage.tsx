import React, { useState } from 'react';
import { Button } from '../components/ui/Button';

interface LocationsPageProps {
  onGoHome: () => void;
  onSelectBranchRooms?: (branch: string) => void;
}

const LOCATIONS_DATA = [
  {
    id: 1,
    title: 'Bãi Sau (Thùy Vân)',
    branch: 'CN 1 • Triển Núi Nhỏ',
    distance: '300m',
    tag: 'TẮM BIỂN & BÌNH MINH',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Đường Ven Biển Hạ Long',
    branch: 'CN 2 • Lưng Chừng Biển',
    distance: '150m',
    tag: 'CUNG ĐƯỜNG ĐẸP NHẤT',
    imageUrl: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Vịnh Biển Bãi Trước',
    branch: 'CN 2 • Lưng Chừng Biển',
    distance: '200m',
    tag: 'HOÀNG HÔN RỰC RỠ',
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Cáp Treo Núi Lớn',
    branch: 'CN 2 • Lưng Chừng Biển',
    distance: '1.2km',
    tag: 'CHECK-IN TOÀN CẢNH',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Đồi Con Heo',
    branch: 'CN 1 • Triển Núi Nhỏ',
    distance: '500m',
    tag: 'GÓC NHÌN ĐỒI CỎ',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Đảo Hòn Bà',
    branch: 'CN 1 • Triển Núi Nhỏ',
    distance: '800m',
    tag: 'CON ĐƯỜNG DƯỚI BIỂN',
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    title: 'Hẻm Cây Biển Hạ Long',
    branch: 'GÓC THƠ MỘNG',
    distance: '100m',
    tag: 'SỐNG ẢO VINTAGE',
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    title: 'Bạch Dinh Vũng Tàu',
    branch: 'CN 2 • Lưng Chừng Biển',
    distance: '1.5km',
    tag: 'KIẾN TRÚC PHÁP CỔ',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 9,
    title: 'Bãi Trước Hoàng Hôn',
    branch: 'VŨNG TÀU',
    distance: '300m',
    tag: 'NGẮM MẶT TRỜI LẶN',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 10,
    title: 'Mũi Nghinh Phong',
    branch: 'CN 1 • Triển Núi Nhỏ',
    distance: '1km',
    tag: 'CỔNG TRỜI VŨNG TÀU',
    imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 11,
    title: 'Vịnh Núi Lớn',
    branch: 'CN 2 • Lưng Chừng Biển',
    distance: '1.8km',
    tag: 'MỘC MẠC YÊN BÌNH',
    imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 12,
    title: 'Kè Đá Bãi Trước',
    branch: 'CN 2 • ĐI DẠO THONG DONG',
    distance: '250m',
    tag: 'Gió BIỂN CHIỀU LỘNG',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
];

export const LocationsPage: React.FC<LocationsPageProps> = ({ onGoHome, onSelectBranchRooms }) => {
  const [selectedBranchFilter, setSelectedBranchFilter] = useState<string>('all');

  const filteredLocations = LOCATIONS_DATA.filter((item) => {
    if (selectedBranchFilter === 'cn1' && !item.branch.includes('CN 1')) return false;
    if (selectedBranchFilter === 'cn2' && !item.branch.includes('CN 2')) return false;
    return true;
  });

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-16 font-sans">
      {/* Header section */}
      <div className="bg-[#FAF7F2] border-b border-secondary-sand/70 pt-6 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-xs font-sans text-brand-earth/60 space-x-2 mb-4">
            <button onClick={onGoHome} className="hover:text-brand-terracotta">Trang chủ</button>
            <span>/</span>
            <span className="text-brand-earth font-semibold">Địa điểm nổi bật</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-brand-terracotta bg-brand-tint px-3 py-1 rounded-full inline-block mb-2">
                TỌA ĐỘ KẾT NỐI • VŨNG TÀU
              </span>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-earth">
                Khám Phá Địa Điểm Nổi Bật Quanh Đồi Bông Gòn
              </h1>
              <p className="text-sm font-sans text-brand-earth/80 mt-2 max-w-2xl leading-relaxed">
                Bộ sưu tập những tọa độ biển thơ mộng, góc phố bình yên và phong vị bản địa chỉ cách homestay ít phút thong dong.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 bg-white p-1.5 rounded-xl border border-secondary-sand shrink-0">
              <button
                onClick={() => setSelectedBranchFilter('all')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  selectedBranchFilter === 'all'
                    ? 'bg-brand-earth text-white shadow-xs'
                    : 'text-brand-earth/80 hover:bg-secondary-cream'
                }`}
              >
                Tất cả chi nhánh
              </button>
              <button
                onClick={() => setSelectedBranchFilter('cn1')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  selectedBranchFilter === 'cn1'
                    ? 'bg-brand-earth text-white shadow-xs'
                    : 'text-brand-earth/80 hover:bg-secondary-cream'
                }`}
              >
                CN 1 - Triển Núi Nhỏ
              </button>
              <button
                onClick={() => setSelectedBranchFilter('cn2')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  selectedBranchFilter === 'cn2'
                    ? 'bg-brand-earth text-white shadow-xs'
                    : 'text-brand-earth/80 hover:bg-secondary-cream'
                }`}
              >
                CN 2 - Lưng Chừng Biển
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredLocations.map((loc) => (
            <div
              key={loc.id}
              className="bg-white rounded-2xl border border-secondary-sand overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="relative h-56 bg-brand-earth overflow-hidden">
                <img
                  src={loc.imageUrl}
                  alt={loc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-earth/90 via-black/20 to-transparent" />

                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold text-brand-amber bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-md tracking-wider">
                    {loc.tag}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-sans text-secondary-sand/90 block">
                    📍 {loc.branch}
                  </span>
                  <h3 className="text-base font-serif font-bold text-white mt-0.5 group-hover:text-brand-amber transition-colors">
                    {loc.title}
                  </h3>
                </div>
              </div>

              <div className="p-3 bg-secondary-cream/50 flex items-center justify-between text-xs text-brand-earth/80">
                <span>Cách homestay:</span>
                <strong className="text-brand-terracotta font-mono font-bold">{loc.distance}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
