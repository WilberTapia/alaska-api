import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { objetivoDistController } from './objetivoDist.controller';
import { Obj_Dist_Periodo } from './objetivoDist.entity';
import { objetivoDistService } from './objetivoDist.services';

@Module({
  imports: [TypeOrmModule.forFeature([Obj_Dist_Periodo])],
  providers: [ objetivoDistService],
  exports: [objetivoDistService],
  controllers: [objetivoDistController],
})
export class objetivoDistModule {}
