import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { objetivoDistModule } from './obj_dist/objetivoDist.module';

@Module({
  imports: [DatabaseModule, ConfigModule, objetivoDistModule],
})
export class AppModule {}
