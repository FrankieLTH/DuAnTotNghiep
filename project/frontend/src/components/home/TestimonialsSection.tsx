import React from 'react';

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: 'Minh Trang',
      role: 'Khách lưu trú • Đi cặp đôi',
      room: 'The Garden Suite',
      avatar: 'MT',
      comment: 'Không gian thơm mùi gỗ mộc, check-in bằng mã Smart Lock riêng tư và tiện lợi tuyệt đối.',
    },
    {
      id: 2,
      name: 'Quốc Bảo',
      role: 'Khách lưu trú • Gia đình 5 người',
      room: 'The Family Attic',
      avatar: 'QB',
      comment: 'Căn hộ rộng rãi, bếp nấu BBQ lồng gió biển, tự do ra vào không vướng bận chìa khóa.',
    },
    {
      id: 3,
      name: 'Thảo Linh',
      role: 'Khách lưu trú • Penthouse 270°',
      room: 'Sunset Penthouse',
      avatar: 'TL',
      comment: 'Jacuzzi ngắm hoàng hôn đỉnh nhất Vũng Tàu. Nhận mã PIN tự động mở phòng rất ưng ý.',
    },
  ];

  return (
    <section id="reviews" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      
      {/* Header & Rating Summary */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div>
          <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#C85A32] block mb-1">
            — TRẢI NGHIỆM THỰC TẾ TỪ KHÁCH LƯU TRÚ
          </span>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#3E2C23] max-w-xl">
            Những khoảnh khắc an yên tại Đồi Bông Gòn
          </h2>
          <p className="font-sans text-sm text-[#3E2C23]/70 font-light mt-2 max-w-lg">
            Điểm đánh giá 4.95/5 từ hơn 250+ lượt khách ghé thăm, tìm kiếm sự tĩnh lặng và nét mộc mạc bên triền Núi Nhỏ.
          </p>
        </div>

        {/* Khung tổng hợp điểm đánh giá */}
        <div className="bg-white p-4 px-6 rounded-2xl border border-[#E8DFD1] shadow-sm flex items-center gap-6">
          <div className="flex items-center gap-3 border-r border-[#E8DFD1] pr-6">
            <span className="font-serif font-bold text-3xl text-[#3E2C23]">4.95</span>
            <div>
              <div className="text-amber-500 text-xs">★★★★★</div>
              <span className="text-[10px] font-sans text-[#3E2C23]/60 block mt-0.5">250+ lượt đánh giá</span>
            </div>
          </div>
          <div>
            <span className="font-sans font-bold text-lg text-[#C85A32] block">99.2% Hài lòng</span>
            <span className="text-[10px] font-sans text-[#3E2C23]/60 block">Về độ riêng tư & Smart Lock</span>
          </div>
        </div>
      </div>

      {/* Cards Nhận xét khách hàng */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-white p-6 rounded-3xl border border-[#E8DFD1] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="text-amber-500 text-sm">★★★★★</div>
                <span className="text-[11px] font-sans text-[#3E2C23]/50 bg-[#FAF7F2] px-2.5 py-1 rounded-md">
                  {rev.room}
                </span>
              </div>
              <p className="font-sans text-sm text-[#3E2C23]/90 italic leading-relaxed mb-6">
                "{rev.comment}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-[#E8DFD1]/60">
              <div className="w-10 h-10 rounded-full bg-[#E8DFD1] text-[#3E2C23] font-sans font-bold text-xs flex items-center justify-center">
                {rev.avatar}
              </div>
              <div>
                <h4 className="font-sans font-bold text-sm text-[#3E2C23]">{rev.name}</h4>
                <span className="text-[10px] font-sans text-[#3E2C23]/60 block">{rev.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button CTA xem tất cả đánh giá */}
      <div className="text-center">
        <button className="inline-flex items-center gap-2 bg-white border border-[#E8DFD1] hover:border-[#C85A32] text-[#3E2C23] hover:text-[#C85A32] font-sans font-bold text-sm px-6 py-3 rounded-2xl shadow-xs transition-all cursor-pointer">
          <span>📷 Xem tất cả 250+ đánh giá</span>
          <span>↗</span>
        </button>
      </div>

    </section>
  );
};
