import { AbstractRepository } from '@app/common/database/repositories/abstract.repository'
import { ReservationDocument } from '../schema/reservation.schema'
import { Logger } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

export class ReservationRepository extends AbstractRepository<ReservationDocument> {
  protected readonly logger = new Logger(ReservationRepository.name)

  constructor(
    @InjectModel(ReservationDocument.name)
    private readonly reservationModel: Model<ReservationDocument>
  ) {
    super(reservationModel)
  }
}
