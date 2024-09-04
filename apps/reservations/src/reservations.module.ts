import { Module } from '@nestjs/common'
import { ReservationsController } from './reservations.controller'
import { ReservationsService } from './reservations.service'
import { CommonModule } from '@app/common'
import { ReservationRepository } from './domain/repositories/reservation.repository'
import { DatabaseModule } from '@app/common/database/database.module'
import { Reservation, ReservationSchema } from './entities/reservation.entity'

@Module({
  imports: [
    CommonModule,
    ReservationsModule,
    DatabaseModule.forFeature([
      { name: Reservation.name, schema: ReservationSchema }
    ])
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationRepository]
})
export class ReservationsModule {}
