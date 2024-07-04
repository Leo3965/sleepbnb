import { Test, TestingModule } from '@nestjs/testing'
import { ReservationsController } from './reservations.controller'
import { ReservationsService } from './reservations.service'

describe('ReservationsController', () => {
  let controller: ReservationsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservationsController],
      providers: [ReservationsService]
    }).compile()

    controller = module.get<ReservationsController>(ReservationsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(controller.findAll()).toBe('This action returns all reservations!')
    })
  })
})
