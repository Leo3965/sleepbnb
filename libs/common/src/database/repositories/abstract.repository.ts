import { Logger, NotFoundException } from '@nestjs/common'
import { FilterQuery, Model, Types, UpdateQuery } from 'mongoose'
import { AbstractSchema } from '@app/common/database/schemas/abstract.schema'

export abstract class AbstractRepository<TDocument extends AbstractSchema> {
  protected abstract readonly logger: Logger

  constructor(protected readonly model: Model<TDocument>) {}

  async create(document: Omit<TDocument, '_id'>): Promise<TDocument> {
    const createdDocument = new this.model({
      ...document,
      _id: new Types.ObjectId()
    })
    return (await createdDocument.save()).toJSON() as unknown as TDocument
  }

  async findOne(filterQuery: FilterQuery<TDocument>): Promise<TDocument> {
    const document = await this.model.findOne(filterQuery).lean<TDocument>(true) // lean remove mongoose fields and methods

    if (!document) {
      this.logger.warn('Document was not found with filterQuery', filterQuery)
      throw new NotFoundException('Document was not found')
    }

    return document
  }

  async findOneAndUpdate(
    filterQuery: FilterQuery<TDocument>,
    update: UpdateQuery<TDocument>
  ): Promise<TDocument> {
    const document = await this.model
      .findOneAndUpdate(filterQuery, update, {
        new: true // make sure will get object after update is applied
      })
      .lean<TDocument>(true)

    if (!document) {
      this.logger.warn('Document was not found with filterQuery', filterQuery)
      throw new NotFoundException('Document was not found')
    }

    return document
  }

  async find(filterQuery: FilterQuery<TDocument>): Promise<TDocument[]> {
    return this.model.find(filterQuery).lean<TDocument[]>(true)
  }

  async findOneAndDelete(
    filterQuery: FilterQuery<TDocument>
  ): Promise<TDocument> {
    return this.model.findOneAndDelete(filterQuery).lean<TDocument>(true)
  }
}
