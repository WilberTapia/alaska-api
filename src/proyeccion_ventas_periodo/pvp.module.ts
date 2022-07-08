import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { pvpController } from './pvp.controller';
import { Proyeccion_Ventas_Periodo } from './pvp.models';
import { pvpService } from './pvp.services';

@Module({
  imports: [SequelizeModule.forFeature([Proyeccion_Ventas_Periodo])],
  providers: [ pvpService],
  exports: [pvpService, SequelizeModule],
  controllers: [pvpController],
})
export class pvpModule {}
