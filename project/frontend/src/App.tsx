import React, { useState } from 'react';
import { Navbar } from './components/home/Navbar';
import { HeroSection } from './components/home/HeroSection';
import { VoucherPromoBanner } from './components/home/VoucherPromoBanner';
import { FeaturedRoomsSection } from './components/home/FeaturedRoomsSection';
import { BranchesSection } from './components/home/BranchesSection';
import { AttractionsSection } from './components/home/AttractionsSection';
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
        {/* Navbar (Stays persistent across views) */}
        <Navbar
          onOpenBookingModal={() => handleNavigate('room-list')}
          onNavigate={handleNavigate}
          currentView={currentView}
        />

        {/* View Router */}
        {currentView === 'home' && (
          <>
            <HeroSection onSearch={handleSearch} />
            <VoucherPromoBanner onApplyVoucher={() => handleNavigate('vouchers')} />
            <FeaturedRoomsSection onSelectRoom={handleSelectRoom} />
            <BranchesSection />
            <AttractionsSection />
            <TestimonialsSection />
          </>
        )}

        {currentView === 'room-list' && (
          <RoomListPage
            onSelectRoom={handleSelectRoom}
            onGoHome={() => handleNavigate('home')}
          />
        )}

        {currentView === 'room-detail' && (
          <RoomDetailPage
            roomId={selectedRoomId}
            onGoBack={() => handleNavigate('room-list')}
            onProceedToCheckout={handleProceedToCheckout}
          />
        )}

        {currentView === 'checkout' && (
          <CheckoutPage
            bookingData={bookingData}
            onGoBack={() => handleNavigate('room-detail')}
            onCompleteBooking={() => handleNavigate('my-account')}
          />
        )}

        {currentView === 'my-account' && (
          <MyAccountPage
            onGoHome={() => handleNavigate('home')}
            onBookRoom={() => handleNavigate('room-list')}
          />
        )}

        {currentView === 'support' && (
          <SupportPage onGoHome={() => handleNavigate('home')} />
        )}

        {currentView === 'locations' && (
          <LocationsPage
            onGoHome={() => handleNavigate('home')}
            onSelectBranchRooms={() => handleNavigate('room-list')}
          />
        )}

        {currentView === 'vouchers' && (
          <VouchersPage
            onGoHome={() => handleNavigate('home')}
            onBookNow={() => handleNavigate('room-list')}
          />
        )}
      </div>

      {/* Footer & Chat Widget */}
      <Footer />
      <AIChatWidget />
    </div>
  );
}

export default App;
