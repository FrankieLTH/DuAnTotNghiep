import React from 'react';

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: 'Nguyễn Minh Anh',
      location: 'Hà Nội',
      time: 'Tháng 9, 2024',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      comment:
        'Không gian tuyệt vời hơn cả mong đợi! Tự check-in bằng mã PIN rất tiện lợi, không phải chờ đợi ai. Phòng sạch bong, view nhìn ra triền đồi ngắm hoàng hôn cực kỳ lãng mạn.',
      stars: 5,
    },
    {
      id: 2,
      name: 'Trần Hoàng Nam',
      location: 'TP. Hồ Chí Minh',
      time: 'Tháng 10, 2024',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      comment:
        'Một nơi trốn bình yên thực sự giữa Vũng Tàu nhộn nhịp. Thiết kế mộc mạc mang đầy tính nghệ thuật. Bữa sáng rất ngon miệng và chu đáo, chắc chắn mình sẽ quay lại nhiều lần nữa!',
      stars: 5,
    },
    {
      id: 3,
      name: 'Lê Thu Trang',
      location: 'Đà Nẵng',
      time: 'Tháng 10, 2024',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
      comment:
        'Cả gia đình mình đã có kỳ nghỉ trọn vẹn ở căn Villa nguyên căn. Hồ bơi sạch sẽ, khu BBQ rộng rãi. Không khí trong lành và yên tĩnh tuyệt đối, rất đáng từng đồng bỏ ra.',
      stars: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-[#F5EFE6]/60 border-t border-[#E8DFD1]/60">
      <div className="max-w-7xl mx-auto">
        {/* Tiêu đề Đánh Giá */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C85A32] block mb-2">
            Cảm nhận từ du khách
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-[#3E2C23] tracking-[0.15em] uppercase">
            ĐÁNH GIÁ
          </h2>
        </div>

        {/* 3 Thẻ Đánh Giá Chuẩn Mẫu Hình Ảnh */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-[#E8DFD1]/70 flex flex-col justify-between"
            >
              <div>
                {/* 5 Sao Vàng */}
                <div className="flex items-center gap-1 text-[#E07A5F] mb-4">
                  {[...Array(rev.stars)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Nội dung đánh giá */}
                <p className="font-sans text-xs sm:text-sm text-[#5C4D44] leading-relaxed italic mb-6">
                  “{rev.comment}”
                </p>
              </div>

              {/* Thông tin khách hàng */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#F2ECE1]">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#E8DFD1]"
                />
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#3E2C23]">
                    {rev.name}
                  </h4>
                  <p className="text-[11px] text-[#8C7A70]">
                    {rev.location} • {rev.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
