import React, { useState } from 'react';
import { Navbar } from './components/home/Navbar';
import { HeroSection } from './components/home/HeroSection';
import { ArtIntroSection } from './components/home/ArtIntroSection';
import { PromoVoucherSection } from './components/home/PromoVoucherSection';
import { SpacesBentoSection } from './components/home/SpacesBentoSection';
import { ServicesSection } from './components/home/ServicesSection';
import { HighlightPlacesSection } from './components/home/HighlightPlacesSection';
import { QuoteStatsSection } from './components/home/QuoteStatsSection';
import { RoomSelectionSection } from './components/home/RoomSelectionSection';
import { TestimonialsSection } from './components/home/TestimonialsSection';
import { Footer } from './components/home/Footer';
import { AIChatWidget } from './components/home/AIChatWidget';

// Client pages
import { RoomListPage } from './pages/RoomListPage';
import { RoomDetailPage } from './pages/RoomDetailPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { MyAccountPage } from './pages/MyAccountPage';
import { SupportPage } from './pages/SupportPage';
import { LocationsPage } from './pages/LocationsPage';
import { VouchersPage } from './pages/VouchersPage';

export type ViewState =
  | 'home'
  | 'room-list'
  | 'room-detail'
  | 'checkout'
  | 'my-account'
  | 'support'
  | 'locations'
  | 'vouchers';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedRoomId, setSelectedRoomId] = useState<number>(1);
  const [bookingData, setBookingData] = useState<any>(null);

  const handleNavigate = (view: string) => {
    setCurrentView(view as ViewState);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectRoom = (roomId: number) => {
    setSelectedRoomId(roomId);
    setCurrentView('room-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (searchParams: any) => {
    console.log('Search params:', searchParams);
    setCurrentView('room-list');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProceedToCheckout = (data: any) => {
    setBookingData(data);
    setCurrentView('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#3E2C23] font-sans antialiased flex flex-col justify-between">
      <div>
        {/* Navbar (Fixed/Transparent across views) */}
        <Navbar
          onOpenBookingModal={() => handleNavigate('room-list')}
          onNavigate={handleNavigate}
          currentView={currentView}
        />

        {/* View Router */}
        {currentView === 'home' && (
          <main>
            {/* 1. Hero & Floating Search Booking */}
            <HeroSection onSearch={handleSearch} />

            {/* 2. Intro: Homestay Nghệ Thuật */}
            <ArtIntroSection />

            {/* 3. Dual Promo Banner */}
            <PromoVoucherSection onApplyVoucher={() => handleNavigate('vouchers')} />

            {/* 4. Bento Grid: Không Gian Lưu Trú */}
            <SpacesBentoSection onExplore={() => handleNavigate('room-list')} />

            {/* 5. Dịch Vụ: 4 Vertical Cards */}
            <ServicesSection />

            {/* 6. Các Địa Điểm Nổi Bật: Filter Tabs + 12 Cards Grid */}
            <HighlightPlacesSection onExploreMore={() => handleNavigate('locations')} />

            {/* 7. Dark Quote & 4 Stats */}
            <QuoteStatsSection />

            {/* 8. Tìm Phòng Phù Hợp: 4 Room Cards */}
            <RoomSelectionSection onSelectRoom={handleSelectRoom} />

            {/* 9. Đánh Giá Khách Hàng */}
            <TestimonialsSection />
          </main>
        )}

        {currentView === 'room-list' && (
          <div className="pt-24">
            <RoomListPage
              onSelectRoom={handleSelectRoom}
              onGoHome={() => handleNavigate('home')}
            />
          </div>
        )}

        {currentView === 'room-detail' && (
          <div className="pt-24">
            <RoomDetailPage
              roomId={selectedRoomId}
              onGoBack={() => handleNavigate('room-list')}
              onProceedToCheckout={handleProceedToCheckout}
            />
          </div>
        )}

        {currentView === 'checkout' && (
          <div className="pt-24">
            <CheckoutPage
              bookingData={bookingData}
              onGoBack={() => handleNavigate('room-detail')}
              onCompleteBooking={() => handleNavigate('my-account')}
            />
          </div>
        )}

        {currentView === 'my-account' && (
          <div className="pt-24">
            <MyAccountPage
              onGoHome={() => handleNavigate('home')}
              onBookRoom={() => handleNavigate('room-list')}
            />
          </div>
        )}

        {currentView === 'support' && (
          <div className="pt-24">
            <SupportPage onGoHome={() => handleNavigate('home')} />
          </div>
        )}

        {currentView === 'locations' && (
          <div className="pt-24">
            <LocationsPage
              onGoHome={() => handleNavigate('home')}
              onSelectBranchRooms={() => handleNavigate('room-list')}
            />
          </div>
        )}

        {currentView === 'vouchers' && (
          <div className="pt-24">
            <VouchersPage
              onGoHome={() => handleNavigate('home')}
              onBookNow={() => handleNavigate('room-list')}
            />
          </div>
        )}
      </div>

      {/* Footer & Chat Widget */}
      <Footer />
      <AIChatWidget />
    </div>
  );
}

export default App;
