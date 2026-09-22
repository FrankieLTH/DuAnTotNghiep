import React from 'react';

export interface FeaturedRoom {
  id: number;
  title: string;
  badge: string;
  overlayNote?: string;
  tagline?: string;
  rating: number;
  reviewCount: number;
  branch: string;
  features: string[];
  oldPrice?: string;
  price: string;
  imageUrl: string;
}

interface FeaturedRoomCardProps {
  room: FeaturedRoom;
  onSelect?: (id: number) => void;
}

export const FeaturedRoomCard: React.FC<FeaturedRoomCardProps> = ({ room, onSelect }) => {
  return (
    <div className="bg-white rounded-3xl border border-[#E8DFD1] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      
      {/* Top Image Section */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={room.imageUrl}
          alt={room.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

        {/* Top Left Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-[#FFF8E7] text-[#9A7210] border border-[#F7E5A9] text-[11px] font-sans font-bold px-3 py-1 rounded-full shadow-xs">
            {room.badge}
          </span>
        </div>

        {/* Top Right Tagline */}
        {room.tagline && (
          <div className="absolute top-3 right-3 z-10">
            <span className="bg-[#C85A32] text-white text-[10px] font-sans font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
              {room.tagline}
            </span>
          </div>
        )}

        {/* Overlay Note Bottom Left */}
        {room.overlayNote && (
          <div className="absolute bottom-3 left-3 right-3 z-10">
            <span className="bg-black/60 backdrop-blur-md text-white/90 text-xs font-sans px-3 py-1.5 rounded-xl block text-ellipsis overflow-hidden whitespace-nowrap">
              ✨ {room.overlayNote}
            </span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Rating & Branch Header */}
          <div className="flex items-center justify-between text-xs font-sans mb-2">
            <div className="flex items-center gap-1 text-amber-500 font-bold">
              <span>★</span>
              <span className="text-[#3E2C23] font-bold">{room.rating.toFixed(2)}</span>
              <span className="text-[#3E2C23]/50">({room.reviewCount})</span>
            </div>
            <span className="bg-[#E8DFD1]/50 text-[#3E2C23] font-semibold px-2.5 py-1 rounded-md text-[11px]">
              {room.branch}
            </span>
          </div>

          {/* Room Title */}
          <h3 className="font-serif font-bold text-lg text-[#3E2C23] group-hover:text-[#C85A32] transition-colors leading-snug">
            {room.title}
          </h3>

          {/* Features Attributes Chips */}
          <div className="grid grid-cols-2 gap-2 mt-3 text-xs font-sans text-[#3E2C23]/70">
            {room.features.map((feat, idx) => (
              <span key={idx} className="flex items-center gap-1">
                • {feat}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing & CTA Button Footer */}
        <div className="pt-4 border-t border-[#E8DFD1]/60 flex items-center justify-between">
          <div>
            {room.oldPrice && (
              <span className="text-xs text-[#3E2C23]/40 line-through block font-sans">
                {room.oldPrice}
              </span>
            )}
            <div className="flex items-baseline gap-1">
              <span className="font-sans font-bold text-lg text-[#C85A32]">
                {room.price}
              </span>
              <span className="text-xs font-sans text-[#3E2C23]/60">/đêm</span>
            </div>
            <span className="text-[10px] font-sans text-emerald-600 block mt-0.5 font-medium">
              🔒 PIN Smart Lock 24/7
            </span>
          </div>

          <button
            onClick={() => onSelect && onSelect(room.id)}
            className="bg-[#C85A32] hover:bg-[#b04a25] text-white font-sans font-semibold text-xs px-4 py-2.5 rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer flex items-center gap-1"
          >
            <span>Chi tiết</span>
            <span>➔</span>
          </button>
        </div>

      </div>

    </div>
  );
};
