import { Module } from '@nestjs/common'
import { ConfigModule as NestConfigModule, ConfigService } from '@nestjs/config'

@Module({
  imports: [NestConfigModule.forRoot({})],
  providers: [ConfigService],
  exports: [NestConfigModule],
})
export class ConfigModule {}
