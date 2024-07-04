import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { ReservationsModule } from './../src/reservations.module'

describe('ReservationsController (e2e)', () => {
  let app: INestApplication

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ReservationsModule]
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  afterAll(async () => {
    await app.close()
  })

  it('/ Find All', () => {
    return request(app.getHttpServer())
      .get('/reservations')
      .expect(200)
      .expect('This action returns all reservations!')
  })
})
