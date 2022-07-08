import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { pcController } from './pc.controller';
import { PROYECCION_COSTOS } from './pc.models';
import { pcService } from './pc.services';

@Module({
  imports: [SequelizeModule.forFeature([PROYECCION_COSTOS])],
  providers: [ pcService],
  exports: [pcService, SequelizeModule],
  controllers: [pcController],
})
export class pcModule {}
