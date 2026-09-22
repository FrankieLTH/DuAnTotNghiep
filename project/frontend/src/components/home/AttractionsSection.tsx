import React from 'react';

export const AttractionsSection: React.FC = () => {
  return (
    <section id="attractions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      
      {/* Header Section */}
      <div className="mb-8">
        <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#C85A32] block mb-1">
          📍 TỌA ĐỘ KẾT NỐI
        </span>
        <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#3E2C23]">
          Từ Đồi Bông Gòn đến các điểm đến yêu thích
        </h2>
      </div>

      {/* Bento Grid 5 Thẻ Địa Điểm */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Thẻ 1: Ảnh lớn dọc bên trái */}
        <div className="md:col-span-1 md:row-span-2 relative min-h-[380px] rounded-3xl overflow-hidden group shadow-sm border border-[#E8DFD1]">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
            alt="Con đường hoa bông gòn"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="bg-white/20 backdrop-blur-md text-amber-200 text-[10px] font-sans font-bold px-3 py-1 rounded-full uppercase tracking-wider block w-fit mb-2">
              TOÀN CẢNH VŨNG TÀU
            </span>
            <h3 className="font-serif font-bold text-2xl drop-shadow-md">
              Con Đường Hoa Bông Gòn
            </h3>
            <p className="font-sans text-xs text-white/80 font-light mt-1">
              Rợp bóng sắc hoa trắng muốt dọc sườn núi Nhỏ mỗi mùa hoa nở.
            </p>
          </div>
        </div>

        {/* Thẻ 2: Mũi Nghinh Phong */}
        <div className="relative h-56 rounded-3xl overflow-hidden group shadow-sm border border-[#E8DFD1]">
          <img
            src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80"
            alt="Mũi Nghinh Phong"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="bg-[#3E2C23]/90 text-amber-300 text-[10px] font-sans font-bold px-2.5 py-1 rounded-full border border-white/20">
              1.5KM • 4 PHÚT XE MÁY
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="font-serif font-bold text-lg">Mũi Nghinh Phong & Cổng Trời</h3>
            <p className="font-sans text-xs text-white/80 font-light line-clamp-1 mt-0.5">
              Mũi đất đón gió lồng lộng hai mùa biển, biểu tượng check-in của Vũng Tàu.
            </p>
          </div>
        </div>

        {/* Thẻ 3: Hải Đăng Núi Nhỏ */}
        <div className="relative h-56 rounded-3xl overflow-hidden group shadow-sm border border-[#E8DFD1]">
          <img
            src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"
            alt="Hải Đăng Núi Nhỏ"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="bg-[#3E2C23]/90 text-amber-300 text-[10px] font-sans font-bold px-2.5 py-1 rounded-full border border-white/20">
              2.0KM • 5 PHÚT XE MÁY
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="font-serif font-bold text-lg">Hải Đăng Núi Nhỏ Cổ Kính</h3>
            <p className="font-sans text-xs text-white/80 font-light line-clamp-1 mt-0.5">
              Dải quan sát ngắm nhìn trọn vẹn vịnh biển và ngọn hải đăng lâu đời.
            </p>
          </div>
        </div>

        {/* Thẻ 4: Bãi Sau Vũng Tàu */}
        <div className="relative h-56 rounded-3xl overflow-hidden group shadow-sm border border-[#E8DFD1]">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
            alt="Bãi Sau Vũng Tàu"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="bg-[#3E2C23]/90 text-amber-300 text-[10px] font-sans font-bold px-2.5 py-1 rounded-full border border-white/20">
              300M • 3 PHÚT ĐI BỘ
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="font-serif font-bold text-lg">Bãi Sau Vũng Tàu</h3>
            <p className="font-sans text-xs text-white/80 font-light line-clamp-1 mt-0.5">
              Rảo bước xuống con dốc thoải mái là chạm ngay cát trắng và biển xanh.
            </p>
          </div>
        </div>

        {/* Thẻ 5: Đồi Con Heo */}
        <div className="relative h-56 rounded-3xl overflow-hidden group shadow-sm border border-[#E8DFD1]">
          <img
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80"
            alt="Đồi Con Heo"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="bg-[#3E2C23]/90 text-amber-300 text-[10px] font-sans font-bold px-2.5 py-1 rounded-full border border-white/20">
              500M • 2 PHÚT XE MÁY
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="font-serif font-bold text-lg">Đồi Con Heo</h3>
            <p className="font-sans text-xs text-white/80 font-light line-clamp-1 mt-0.5">
              Điểm ngắm trọn vẹn toàn cảnh bãi biển và khoảnh khắc hoàng hôn rực rỡ.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
};
