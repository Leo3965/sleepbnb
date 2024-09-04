import { AbstractSchema } from '@app/common/database/schemas/abstract.schema'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({ versionKey: false })
export class Reservation extends AbstractSchema {
  @Prop()
  timestamp: Date

  @Prop()
  startDate: Date

  @Prop()
  endDate: Date

  @Prop()
  userId: string

  @Prop()
  invoiceId: string
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation)
