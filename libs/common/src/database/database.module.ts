import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://3965:3965@cluster0.ijjaozj.mongodb.net/sleepbnb',
    ),
  ],
})
export class DatabaseModule {}
