import React from 'react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'DỌN PHÒNG HẰNG NGÀY',
      subtitle: 'Phòng ốc luôn tinh tươm, sạch sẽ và ngát hương thơm mỗi ngày bạn trở về.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
      tag: 'Tiêu chuẩn 5★',
    },
    {
      id: 2,
      title: 'BỮA SÁNG ĐẶC SẢN',
      subtitle: 'Thưởng thức phong vị ẩm thực địa phương tươi ngon, giàu dinh dưỡng mỗi sáng.',
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
      tag: 'Ẩm thực mộc',
    },
    {
      id: 3,
      title: 'TIỆC BBQ & GIAO LƯU',
      subtitle: 'Khu tiệc nướng ngoài trời lộng gió đồi, gắn kết người thân & bạn bè bên ly rượu.',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
      tag: 'Không gian mở',
    },
    {
      id: 4,
      title: 'GIẶT SẤY TỰ ĐỘNG',
      subtitle: 'Khu vực máy giặt, máy sấy thông minh hoạt động 24/7 tiện lợi cho mọi hành trình.',
      image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=800&q=80',
      tag: 'Tiện ích 24/7',
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
      {/* Tiêu đề & Giới thiệu dịch vụ */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C85A32] block mb-2">
            Tiện ích lưu trú
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-[#3E2C23] tracking-[0.15em] uppercase">
            DỊCH VỤ
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-[#7A6B63] max-w-md font-light leading-relaxed">
          Tận hưởng kỳ nghỉ không chút âu lo với hệ sinh thái tiện ích chu đáo, được chuẩn bị bằng cả sự chân thành của con người bản địa.
        </p>
      </div>

      {/* 4 Thẻ Dịch Vụ Dọc Chuẩn Mẫu Hình Ảnh */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {services.map((svc) => (
          <div
            key={svc.id}
            className="group relative rounded-3xl overflow-hidden shadow-lg h-[380px] sm:h-[430px] cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Ảnh nền */}
            <img
              src={svc.image}
              alt={svc.title}
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
            />

            {/* Gradient Overlay tối chân thẻ để làm bật chữ */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

            {/* Tag nhỏ góc trên */}
            <div className="absolute top-4 left-4">
              <span className="inline-block px-3 py-1 bg-black/40 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-wider text-white">
                {svc.tag}
              </span>
            </div>

            {/* Nội dung bên dưới */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="font-serif font-bold text-lg sm:text-xl text-white tracking-wide uppercase mb-2 group-hover:text-amber-200 transition-colors">
                {svc.title}
              </h3>
              <p className="font-sans text-xs text-white/80 leading-relaxed font-light">
                {svc.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
