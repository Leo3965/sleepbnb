import { Injectable, Logger } from '@nestjs/common'
import { AbstractRepository } from '@app/common/database/repositories/abstract.repository'
import { Reservation } from '../../entities/reservation.entity'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class ReservationRepository extends AbstractRepository<Reservation> {
  protected readonly logger = new Logger(ReservationRepository.name)

  constructor(
    @InjectModel(Reservation.name)
    private readonly reservationModel: Model<Reservation>
  ) {
    super(reservationModel)
  }
}
