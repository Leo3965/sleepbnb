import { Test, TestingModule } from '@nestjs/testing';
import { ReservationsController } from './reservations.controller';
import { ReservationsService } from './reservations.service';
import { CreateChargeDto, JwtAuthGuard, UserDto } from '@app/common';
import { CardDto } from '@app/common/dto/card.dto';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { ReservationDocument } from './models/reservation.schema';

describe('ReservationsController', () => {
  let controller: ReservationsController;

  const reservationDoc: ReservationDocument = {
    _id: null,
    endDate: new Date(),
    userId: '1',
    timestamp: new Date(),
    startDate: new Date(),
    invoiceId: '1',
  };

  const mockService = {
    create: jest.fn((dto: CreateReservationDto) => {
      reservationDoc.startDate = dto.startDate;
      return Promise.resolve(reservationDoc);
    }),
  };

  const mockGuard = {
    canActivate: jest.fn(() => Promise.resolve(true)),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservationsController],
      providers: [ReservationsService],
    })
      .overrideProvider(ReservationsService)
      .useValue(mockService)
      .overrideGuard(JwtAuthGuard)
      .useValue(mockGuard)
      .compile();

    controller = module.get<ReservationsController>(ReservationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('it should create a reservation', async () => {
    const user: UserDto = {
      email: 'test@test.com',
      password: 'test123',
      _id: '123',
      roles: null,
    };
    const card: CardDto = {
      cvc: '123',
      exp_month: 11,
      exp_year: 12,
      number: '123',
    };

    const charge: CreateChargeDto = {
      card,
      amount: 100,
    };

    const reservation: CreateReservationDto = {
      charge,
      endDate: new Date(),
      startDate: new Date(),
    };

    expect(await controller.create(reservation, user)).toEqual({
      ...reservationDoc,
      startDate: reservation.startDate,
    });
    expect(mockService.create).toHaveBeenCalled();
  });
});
