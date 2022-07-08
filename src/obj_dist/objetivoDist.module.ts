import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { objetivoDistController } from './objetivoDist.controller';
import { Obj_Dist_Periodo } from './objetivoDist.models';
import { objetivoDistService } from './objetivoDist.services';

@Module({
  imports: [SequelizeModule.forFeature([Obj_Dist_Periodo])],
  providers: [ objetivoDistService],
  exports: [objetivoDistService, SequelizeModule],
  controllers: [objetivoDistController],
})
export class objetivoDistModule {}
