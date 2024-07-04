import { Module } from '@nestjs/common'
import { ReservationsService } from './reservations.service'
import { ReservationsController } from './reservations.controller'
import { ReservationRepository } from './reservations/repositories/reservation.repository'
import { DatabaseModule } from '@app/common/database/database.module'
import {
  ReservationDocument,
  ReservationSchema
} from './reservations/schema/reservation.schema'

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: ReservationDocument.name, schema: ReservationSchema }
    ])
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationRepository] // inject in services
})
export class ReservationsModule {}
