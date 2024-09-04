import { Injectable } from '@nestjs/common'
import { CreateReservationDto } from './dto/create-reservation.dto'
import { UpdateReservationDto } from './dto/update-reservation.dto'
import { ReservationRepository } from './domain/repositories/reservation.repository'
import { Reservation } from './entities/reservation.entity'

@Injectable()
export class ReservationsService {
  constructor(private readonly repository: ReservationRepository) {}

  create(dto: CreateReservationDto): Promise<Reservation> {
    return this.repository.create({
      ...dto,
      timestamp: new Date(),
      userId: '123'
    })
  }

  async findAll() {
    return this.repository.find({})
  }

  async findOne(id: string) {
    return this.repository.findOne({ _id: id })
  }

  async update(id: string, updateReservationDto: UpdateReservationDto) {
    return this.repository.findOneAndUpdate(
      { _id: id },
      { $set: updateReservationDto }
    )
  }

  async remove(id: string) {
    return this.repository.findOneAndDelete({ _id: id })
  }
}
