import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';
import { Booking, Voucher, Refund, LockPin } from '../../entities/booking.entity';
import { Room } from '../../entities/room.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Booking, Voucher, Refund, LockPin, Room]),
  ],
  providers: [BookingsService],
  controllers: [BookingsController],
  exports: [BookingsService],
})
export class BookingsModule {}
