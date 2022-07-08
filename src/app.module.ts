import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { gaModule } from './ga_objectivo/ga.module';
import { objetivoDistModule } from './obj_dist/objetivoDist.module';
import { pcModule } from './presupuesto_costos/pc.module';
import { pvModule } from './proyeccion_ventas/pv.module';
import { pvpModule } from './proyeccion_ventas_periodo/pvp.module';

@Module({
  imports: [DatabaseModule, ConfigModule, objetivoDistModule, pvpModule, pvModule, pcModule, gaModule],
})
export class AppModule {}
