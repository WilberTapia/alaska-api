import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { gaController } from './ga.controller';
import { Objectivo_GA_Producto_Periodo } from './ga.models';
import { gaService } from './ga.services';

@Module({
  imports: [SequelizeModule.forFeature([Objectivo_GA_Producto_Periodo])],
  providers: [ gaService],
  exports: [gaService, SequelizeModule],
  controllers: [gaController],
})
export class gaModule {}
