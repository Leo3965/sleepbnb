import { Injectable } from '@nestjs/common'
import { CreateReservationDto } from '../dto/create-reservation.dto'
import { UpdateReservationDto } from '../dto/update-reservation.dto'
import { ReservationRepository } from '../repositories/reservation.repository'
import { ReservationDocument } from '../schema/reservation.schema'

@Injectable()
export class ReservationsService {
  constructor(private readonly repository: ReservationRepository) {}

  async create(
    createReservationDto: CreateReservationDto
  ): Promise<ReservationDocument> {
    return await this.repository.create({
      userId: '',
      ...createReservationDto,
      timestamp: new Date()
    })
  }

  async findAll() {
    return await this.repository.find({})
  }

  async findOne(id: string) {
    return await this.repository.find({ _id: id })
  }

  async update(id: string, updateReservationDto: UpdateReservationDto) {
    return await this.repository.update(
      { _id: id },
      { $set: updateReservationDto }
    )
  }

  async remove(id: string) {
    await this.repository.delete({ _id: id })
  }
}
