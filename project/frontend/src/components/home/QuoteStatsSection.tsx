import React from 'react';

export const QuoteStatsSection: React.FC = () => {
  const stats = [
    {
      id: 1,
      value: '10+',
      label: 'Năm gắn bó & phát triển',
      desc: 'Được xây dựng từ tình yêu thiên nhiên Vũng Tàu',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 2,
      value: '5.000+',
      label: 'Lượt khách hài lòng',
      desc: 'Nhận được sự tin yêu từ du khách khắp mọi miền',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
    },
    {
      id: 3,
      value: '100%',
      label: 'Nguyên bản & Mộc mạc',
      desc: 'Vật liệu tự nhiên, thân thiện với môi trường',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      id: 4,
      value: '24/7',
      label: 'Hỗ trợ & Tự check-in',
      desc: 'Khóa thông minh riêng tư, hỗ trợ chu đáo mọi lúc',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#1C120C] text-[#FDF9F3] py-20 md:py-28 px-4 relative overflow-hidden">
      {/* Họa tiết ánh sáng mềm phía góc */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#C85A32]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Khối trích dẫn phong cách triết lý nghệ thuật */}
        <div className="text-center mb-16 md:mb-24">
          <p className="font-serif italic text-3xl sm:text-5xl md:text-6xl text-white tracking-wide leading-tight mb-4">
            “Đến lúc nào, vào lúc đó.”
          </p>
          <p className="font-sans text-xs sm:text-sm md:text-base text-amber-200/80 tracking-[0.25em] uppercase font-light">
            Một trạm dừng cho tâm hồn bình yên
          </p>
        </div>

        {/* Dòng phân cách mỏng vàng đồng */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#E07A5F]/60 to-transparent mx-auto mb-16" />

        {/* 4 Cột Thông Số Uy Tín */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((item) => (
            <div key={item.id} className="text-center group">
              <div className="w-10 h-10 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#E07A5F] mb-4 group-hover:scale-110 group-hover:bg-[#C85A32]/20 transition-all">
                {item.icon}
              </div>
              <div className="font-serif font-bold text-3xl sm:text-4xl text-white tracking-tight mb-1 group-hover:text-amber-200 transition-colors">
                {item.value}
              </div>
              <div className="font-sans text-xs sm:text-sm font-semibold text-white/90 mb-1">
                {item.label}
              </div>
              <div className="font-sans text-[11px] text-white/60 leading-relaxed font-light hidden sm:block">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
