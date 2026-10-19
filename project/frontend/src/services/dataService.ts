import api from './api';

export interface AmenityItem {
  id: number;
  name: string;
  category?: string;
  icon?: string;
}

export interface ApartmentItem {
  id: number;
  name: string;
  address: string;
  city: string;
  status: string;
}

export interface RoomItem {
  id: number;
  apartment_id: number;
  apartment_name: string;
  address: string;
  city: string;
  room_type_id: number;
  room_type_name: string;
  room_number: string;
  status: 'available' | 'occupied' | 'maintenance' | 'inactive';
  base_price: number;
  max_occupancy: number;
  area: string;
  bed_type: string;
  last_maintenance_date?: string;
  images: string[];
  amenities: AmenityItem[];
  lock?: {
    id: number;
    cloud_lock_id: string;
    lock_name: string;
    lock_type: string;
    status: string;
  };
  description: string;
  badge?: string;
}

export interface ServiceItem {
  id: number;
  name: string;
  description: string;
  price: number;
  is_compensation?: boolean;
  is_active?: boolean;
}

export interface VoucherItem {
  id: number;
  code: string;
  title: string;
  discount_type: 'percentage' | 'fixed_amount';
  discount_value: number;
  max_discount_amount: number;
  min_order_value: number;
  description: string;
}

// 1. DỮ LIỆU TỪ BẢNG APARTMENTS (seed_data.sql & datn1.sql)
export const SEED_APARTMENTS: ApartmentItem[] = [
  {
    id: 1,
    name: 'Sunshine Villa Phố Cổ',
    address: '123 Phố Hàng Bạc, Hoàn Kiếm, Hà Nội',
    city: 'Hà Nội',
    status: 'active',
  },
  {
    id: 2,
    name: 'Ocean Breeze View Biển',
    address: '45 Đường Võ Nguyên Giáp, Sơn Trà, Đà Nẵng',
    city: 'Đà Nẵng',
    status: 'active',
  },
  {
    id: 3,
    name: 'Pine Hill Studio Đà Lạt',
    address: '12 Đường Hoàng Hoa Thám, Phường 10, Đà Lạt',
    city: 'Đà Lạt',
    status: 'active',
  },
];

// 2. DỮ LIỆU TỪ BẢNG AMENITIES (seed_data.sql & datn1.sql)
export const SEED_AMENITIES: Record<number, AmenityItem> = {
  1: { id: 1, name: 'Wi-Fi 5G tốc độ cao', category: 'Công nghệ', icon: '📶' },
  2: { id: 2, name: 'Điều hòa 2 chiều', category: 'Thiết bị', icon: '❄️' },
  3: { id: 3, name: 'Smart Lock tự động (TTLock)', category: 'An ninh', icon: '🔑' },
  4: { id: 4, name: 'Smart TV 55 inch 4K', category: 'Giải trí', icon: '📺' },
  5: { id: 5, name: 'Tủ lạnh Mini & Nước miễn phí', category: 'Ẩm thực', icon: '🧊' },
  6: { id: 6, name: 'Bếp điện & Dụng cụ nấu ăn', category: 'Nội thất', icon: '🍳' },
  7: { id: 7, name: 'Bồn tắm ngâm thư giãn', category: 'Phòng tắm', icon: '🛁' },
  8: { id: 8, name: 'Ban công ngắm thành phố', category: 'Tầm nhìn', icon: '🌇' },
  9: { id: 9, name: 'Máy sấy tóc & Bàn ủi', category: 'Cá nhân', icon: '👔' },
  10: { id: 10, name: 'Máy pha Cà phê Espresso', category: 'Ẩm thực', icon: '☕' },
};

// 3. DỮ LIỆU TỪ BẢNG ROOMS, ROOM_TYPES, ROOM_IMAGES, ROOM_AMENITIES, LOCKS (seed_data.sql & datn1.sql)
export const SEED_ROOMS: RoomItem[] = [
  {
    id: 1,
    apartment_id: 1,
    apartment_name: 'Sunshine Villa Phố Cổ',
    address: '123 Phố Hàng Bạc, Hoàn Kiếm, Hà Nội',
    city: 'Hà Nội',
    room_type_id: 1,
    room_type_name: 'Studio Cozy Standard',
    room_number: 'P101',
    status: 'available',
    base_price: 550000,
    max_occupancy: 2,
    area: '28m²',
    bed_type: '1 Giường đôi King',
    last_maintenance_date: '2026-09-01',
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    ],
    amenities: [
      SEED_AMENITIES[1],
      SEED_AMENITIES[2],
      SEED_AMENITIES[3],
      SEED_AMENITIES[4],
      SEED_AMENITIES[5],
      SEED_AMENITIES[9],
    ],
    lock: {
      id: 1,
      cloud_lock_id: 'LOCK_TTL_101',
      lock_name: 'Smart Lock P101',
      lock_type: 'ttlock',
      status: 'online',
    },
    description: 'Không gian studio đậm chất mộc giữa lòng phố cổ Hoàn Kiếm Hà Nội. Trang bị khóa số điện tử thông minh TTLock tự kích hoạt khi nhận phòng.',
    badge: 'Phố Cổ Hà Nội',
  },
  {
    id: 2,
    apartment_id: 1,
    apartment_name: 'Sunshine Villa Phố Cổ',
    address: '123 Phố Hàng Bạc, Hoàn Kiếm, Hà Nội',
    city: 'Hà Nội',
    room_type_id: 1,
    room_type_name: 'Studio Cozy Standard',
    room_number: 'P102',
    status: 'occupied',
    base_price: 550000,
    max_occupancy: 2,
    area: '30m²',
    bed_type: '1 Giường đôi King',
    last_maintenance_date: '2026-09-02',
    images: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    ],
    amenities: [
      SEED_AMENITIES[1],
      SEED_AMENITIES[2],
      SEED_AMENITIES[3],
      SEED_AMENITIES[4],
      SEED_AMENITIES[5],
      SEED_AMENITIES[6],
    ],
    lock: {
      id: 2,
      cloud_lock_id: 'LOCK_TTL_102',
      lock_name: 'Smart Lock P102',
      lock_type: 'ttlock',
      status: 'online',
    },
    description: 'Căn phòng ấm cúng trang bị bếp từ tiện nghi nấu bữa sáng nhẹ nhàng, cửa sổ ngắm nhịp sống phố phường Hà Nội.',
    badge: 'Đang Có Khách',
  },
  {
    id: 3,
    apartment_id: 1,
    apartment_name: 'Sunshine Villa Phố Cổ',
    address: '123 Phố Hàng Bạc, Hoàn Kiếm, Hà Nội',
    city: 'Hà Nội',
    room_type_id: 3,
    room_type_name: 'Family Suite Balcony',
    room_number: 'P201',
    status: 'available',
    base_price: 1400000,
    max_occupancy: 4,
    area: '58m²',
    bed_type: '2 Giường King lớn',
    last_maintenance_date: '2026-08-25',
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    ],
    amenities: [
      SEED_AMENITIES[1],
      SEED_AMENITIES[2],
      SEED_AMENITIES[3],
      SEED_AMENITIES[4],
      SEED_AMENITIES[6],
      SEED_AMENITIES[7],
      SEED_AMENITIES[8],
    ],
    lock: {
      id: 3,
      cloud_lock_id: 'LOCK_TTL_201',
      lock_name: 'Smart Lock P201',
      lock_type: 'ttlock',
      status: 'online',
    },
    description: 'Căn hộ Suite gia đình rộng rãi có ban công riêng nhìn phố cổ, bồn tắm ngâm thảo mộc thư giãn và gian bếp ấm cúng.',
    badge: 'Dành Cho Gia Đình',
  },
  {
    id: 4,
    apartment_id: 2,
    apartment_name: 'Ocean Breeze View Biển',
    address: '45 Đường Võ Nguyên Giáp, Sơn Trà, Đà Nẵng',
    city: 'Đà Nẵng',
    room_type_id: 2,
    room_type_name: 'Deluxe Ocean View',
    room_number: 'P301',
    status: 'available',
    base_price: 850000,
    max_occupancy: 2,
    area: '38m²',
    bed_type: '1 Giường Queen hướng biển',
    last_maintenance_date: '2026-09-05',
    images: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    ],
    amenities: [
      SEED_AMENITIES[1],
      SEED_AMENITIES[2],
      SEED_AMENITIES[3],
      SEED_AMENITIES[4],
      SEED_AMENITIES[5],
      SEED_AMENITIES[8],
      SEED_AMENITIES[10],
    ],
    lock: {
      id: 4,
      cloud_lock_id: 'LOCK_TTL_301',
      lock_name: 'Smart Lock P301',
      lock_type: 'ttlock',
      status: 'online',
    },
    description: 'Ban công hướng thẳng biển Mỹ Khê lộng gió, trang bị máy pha cà phê Espresso và hệ thống smart check-in tiện lợi.',
    badge: 'View Biển Mỹ Khê',
  },
  {
    id: 5,
    apartment_id: 2,
    apartment_name: 'Ocean Breeze View Biển',
    address: '45 Đường Võ Nguyên Giáp, Sơn Trà, Đà Nẵng',
    city: 'Đà Nẵng',
    room_type_id: 2,
    room_type_name: 'Deluxe Ocean View',
    room_number: 'P302',
    status: 'maintenance',
    base_price: 850000,
    max_occupancy: 2,
    area: '38m²',
    bed_type: '1 Giường Queen',
    last_maintenance_date: '2026-09-10',
    images: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
    ],
    amenities: [
      SEED_AMENITIES[1],
      SEED_AMENITIES[2],
      SEED_AMENITIES[3],
      SEED_AMENITIES[4],
      SEED_AMENITIES[5],
    ],
    lock: {
      id: 5,
      cloud_lock_id: 'LOCK_TTL_302',
      lock_name: 'Smart Lock P302',
      lock_type: 'ttlock',
      status: 'offline',
    },
    description: 'Phòng Deluxe nhìn ra biển Sơn Trà Đà Nẵng (Đang trong lịch bảo dưỡng nâng cấp trang thiết bị).',
    badge: 'Bảo Dưỡng Định Kỳ',
  },
  {
    id: 6,
    apartment_id: 2,
    apartment_name: 'Ocean Breeze View Biển',
    address: '45 Đường Võ Nguyên Giáp, Sơn Trà, Đà Nẵng',
    city: 'Đà Nẵng',
    room_type_id: 4,
    room_type_name: 'Penthouse Luxury Garden',
    room_number: 'P401',
    status: 'available',
    base_price: 2200000,
    max_occupancy: 6,
    area: '95m²',
    bed_type: '3 Giường King lớn',
    last_maintenance_date: '2026-09-08',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    ],
    amenities: [
      SEED_AMENITIES[1],
      SEED_AMENITIES[2],
      SEED_AMENITIES[3],
      SEED_AMENITIES[4],
      SEED_AMENITIES[6],
      SEED_AMENITIES[7],
      SEED_AMENITIES[8],
      SEED_AMENITIES[10],
    ],
    lock: {
      id: 6,
      cloud_lock_id: 'LOCK_TTL_401',
      lock_name: 'Smart Lock P401',
      lock_type: 'ttlock',
      status: 'online',
    },
    description: 'Căn Penthouse đỉnh cao trên tầng thượng với vườn ngắm biển 270 độ, bồn tắm sục thủy lực ngoài trời và không gian cực kỳ sang trọng.',
    badge: 'Penthouse Hoàng Hôn',
  },
  {
    id: 7,
    apartment_id: 3,
    apartment_name: 'Pine Hill Studio Đà Lạt',
    address: '12 Đường Hoàng Hoa Thám, Phường 10, Đà Lạt',
    city: 'Đà Lạt',
    room_type_id: 1,
    room_type_name: 'Studio Cozy Standard',
    room_number: 'P501',
    status: 'available',
    base_price: 550000,
    max_occupancy: 2,
    area: '28m²',
    bed_type: '1 Giường Double',
    last_maintenance_date: '2026-08-30',
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
    ],
    amenities: [
      SEED_AMENITIES[1],
      SEED_AMENITIES[2],
      SEED_AMENITIES[3],
      SEED_AMENITIES[4],
      SEED_AMENITIES[5],
      SEED_AMENITIES[9],
    ],
    lock: {
      id: 7,
      cloud_lock_id: 'LOCK_TTL_501',
      lock_name: 'Smart Lock P501',
      lock_type: 'ttlock',
      status: 'online',
    },
    description: 'Studio nhỏ xinh ẩn mình giữa rừng thông xanh mát Hoàng Hoa Thám Đà Lạt, không khí se lạnh trong lành.',
    badge: 'Đồi Thông Đà Lạt',
  },
  {
    id: 8,
    apartment_id: 3,
    apartment_name: 'Pine Hill Studio Đà Lạt',
    address: '12 Đường Hoàng Hoa Thám, Phường 10, Đà Lạt',
    city: 'Đà Lạt',
    room_type_id: 3,
    room_type_name: 'Family Suite Balcony',
    room_number: 'P502',
    status: 'available',
    base_price: 1400000,
    max_occupancy: 4,
    area: '62m²',
    bed_type: '2 Giường King lớn',
    last_maintenance_date: '2026-09-03',
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    ],
    amenities: [
      SEED_AMENITIES[1],
      SEED_AMENITIES[2],
      SEED_AMENITIES[3],
      SEED_AMENITIES[4],
      SEED_AMENITIES[6],
      SEED_AMENITIES[7],
      SEED_AMENITIES[8],
    ],
    lock: {
      id: 8,
      cloud_lock_id: 'LOCK_TTL_502',
      lock_name: 'Smart Lock P502',
      lock_type: 'ttlock',
      status: 'online',
    },
    description: 'Căn hộ Suite gia đình nhìn trọn thung lũng thông reo Đà Lạt, ban công thưởng trà sớm và bếp ấm cúng quây quần.',
    badge: 'View Thung Lũng Sương',
  },
];

// 4. DỮ LIỆU TỪ BẢNG SERVICES (seed_data.sql & datn1.sql)
export const SEED_SERVICES: ServiceItem[] = [
  {
    id: 1,
    name: 'Thuê xe máy tay ga (1 ngày)',
    description: 'Xe Honda Vision/AirBlade đời mới đầy bình xăng',
    price: 150000,
    is_active: true,
  },
  {
    id: 2,
    name: 'Đưa đón sân bay (4 chỗ)',
    description: 'Đưa tiễn sân bay Nội Bài / Đà Nẵng / Liên Khương tận nơi',
    price: 300000,
    is_active: true,
  },
  {
    id: 3,
    name: 'Set tiệc nướng BBQ ngoài trời',
    description: 'Bao gồm bếp nướng, than & dụng cụ ướp thịt',
    price: 450000,
    is_active: true,
  },
  {
    id: 4,
    name: 'Dịch vụ giặt ủi sấy lấy ngay',
    description: 'Giặt sạch sấy khô thơm tho trong 4 tiếng',
    price: 60000,
    is_active: true,
  },
];

// 5. DỮ LIỆU TỪ BẢNG VOUCHERS (seed_data.sql & datn1.sql)
export const SEED_VOUCHERS: VoucherItem[] = [
  {
    id: 1,
    code: 'WELCOME2026',
    title: 'Giảm 10% cho khách hàng mới',
    discount_type: 'percentage',
    discount_value: 10,
    max_discount_amount: 100000,
    min_order_value: 500000,
    description: 'Áp dụng cho mọi đơn đặt phòng trực tiếp đầu tiên trên hệ thống.',
  },
  {
    id: 2,
    code: 'SUMMERVIP',
    title: 'Giảm ngay 200K đơn từ 1.5 triệu',
    discount_type: 'fixed_amount',
    discount_value: 200000,
    max_discount_amount: 200000,
    min_order_value: 1500000,
    description: 'Áp dụng cho đơn đặt phòng gia đình hoặc nhóm từ 1.500.000đ.',
  },
];

/**
 * Service lấy danh sách phòng (kết nối API Backend hoặc dự phòng seed_data chuẩn DB)
 */
export async function getRooms(params?: {
  apartment_id?: number;
  status?: string;
  min_price?: number;
  max_price?: number;
}): Promise<RoomItem[]> {
  try {
    const res = await api.get('/rooms', { params, timeout: 3000 });
    if (res.data && Array.isArray(res.data) && res.data.length > 0) {
      // Map API result with seed enhancements
      return res.data.map((r: any) => {
        const seedMatch = SEED_ROOMS.find((sr) => sr.id === r.id);
        return {
          id: r.id,
          apartment_id: r.apartment_id || seedMatch?.apartment_id || 1,
          apartment_name: r.apartment_name || seedMatch?.apartment_name || 'Homestay',
          address: r.address || seedMatch?.address || '',
          city: seedMatch?.city || 'Việt Nam',
          room_type_id: r.room_type_id || seedMatch?.room_type_id || 1,
          room_type_name: r.room_type_name || seedMatch?.room_type_name || 'Studio',
          room_number: r.room_number || seedMatch?.room_number || 'P101',
          status: r.status || seedMatch?.status || 'available',
          base_price: Number(r.base_price) || seedMatch?.base_price || 550000,
          max_occupancy: r.max_occupancy || seedMatch?.max_occupancy || 2,
          area: seedMatch?.area || '30m²',
          bed_type: seedMatch?.bed_type || '1 Giường đôi King',
          last_maintenance_date: r.last_maintenance_date || seedMatch?.last_maintenance_date,
          images: (r.images && r.images.length > 0) ? r.images : (seedMatch?.images || []),
          amenities: (r.amenities && r.amenities.length > 0) ? r.amenities : (seedMatch?.amenities || []),
          lock: seedMatch?.lock,
          description: seedMatch?.description || 'Phòng nghỉ tiện nghi hiện đại.',
          badge: seedMatch?.badge,
        };
      });
    }
  } catch (err) {
    // Backend offline / connecting error: fallback seamlessly to seed data
  }

  // Fallback lọc từ dữ liệu seed của database
  let list = [...SEED_ROOMS];
  if (params?.apartment_id) {
    list = list.filter((r) => r.apartment_id === params.apartment_id);
  }
  if (params?.status) {
    list = list.filter((r) => r.status === params.status);
  }
  if (params?.min_price) {
    list = list.filter((r) => r.base_price >= params.min_price!);
  }
  if (params?.max_price) {
    list = list.filter((r) => r.base_price <= params.max_price!);
  }
  return list;
}

/**
 * Service lấy chi tiết 1 phòng theo ID
 */
export async function getRoomById(id: number): Promise<RoomItem> {
  const seedFallback = SEED_ROOMS.find((r) => r.id === id) || SEED_ROOMS[0];

  try {
    const res = await api.get(`/rooms/${id}`, { timeout: 3000 });
    if (res.data) {
      const r = res.data;
      return {
        id: r.id,
        apartment_id: r.apartment_id || seedFallback.apartment_id,
        apartment_name: r.apartment_name || seedFallback.apartment_name,
        address: r.address || seedFallback.address,
        city: seedFallback.city,
        room_type_id: r.room_type_id || seedFallback.room_type_id,
        room_type_name: r.room_type_name || seedFallback.room_type_name,
        room_number: r.room_number || seedFallback.room_number,
        status: r.status || seedFallback.status,
        base_price: Number(r.base_price) || seedFallback.base_price,
        max_occupancy: r.max_occupancy || seedFallback.max_occupancy,
        area: seedFallback.area,
        bed_type: seedFallback.bed_type,
        last_maintenance_date: r.last_maintenance_date || seedFallback.last_maintenance_date,
        images: (r.images && r.images.length > 0) ? r.images : seedFallback.images,
        amenities: (r.amenities && r.amenities.length > 0) ? r.amenities : seedFallback.amenities,
        lock: seedFallback.lock,
        description: seedFallback.description,
        badge: seedFallback.badge,
      };
    }
  } catch (err) {
    // Fallback to seed data
  }

  return seedFallback;
}

/**
 * Service lấy danh sách chi nhánh (apartments)
 */
export async function getApartments(): Promise<ApartmentItem[]> {
  try {
    const res = await api.get('/apartments', { timeout: 3000 });
    if (res.data && Array.isArray(res.data) && res.data.length > 0) {
      return res.data.map((item: any) => {
        const match = SEED_APARTMENTS.find((sa) => sa.id === item.id);
        return {
          id: item.id,
          name: item.name,
          address: item.address,
          city: match?.city || 'Việt Nam',
          status: item.status || 'active',
        };
      });
    }
  } catch (err) {
    // Fallback
  }
  return SEED_APARTMENTS;
}

/**
 * Service lấy danh sách dịch vụ (services)
 */
export async function getServices(): Promise<ServiceItem[]> {
  try {
    const res = await api.get('/services', { timeout: 3000 });
    if (res.data && Array.isArray(res.data) && res.data.length > 0) {
      return res.data;
    }
  } catch (err) {
    // Fallback
  }
  return SEED_SERVICES;
}

/**
 * Service lấy danh sách vouchers
 */
export async function getVouchers(): Promise<VoucherItem[]> {
  try {
    const res = await api.get('/vouchers', { timeout: 3000 });
    if (res.data && Array.isArray(res.data) && res.data.length > 0) {
      return res.data;
    }
  } catch (err) {
    // Fallback
  }
  return SEED_VOUCHERS;
}
