import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { pvController } from './pv.controller';
import { PROYECCION_VENTAS } from './pv.models';
import { pvService } from './pv.services';

@Module({
  imports: [SequelizeModule.forFeature([PROYECCION_VENTAS])],
  providers: [ pvService],
  exports: [pvService, SequelizeModule],
  controllers: [pvController],
})
export class pvModule {}
