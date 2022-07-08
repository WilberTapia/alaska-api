import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Objectivo_GA_Producto_Periodo } from 'src/ga_objectivo/ga.models';
import { Obj_Dist_Periodo } from 'src/obj_dist/objetivoDist.models';
import { PROYECCION_COSTOS } from 'src/presupuesto_costos/pc.models';
import { PROYECCION_VENTAS } from 'src/proyeccion_ventas/pv.models';
import { Proyeccion_Ventas_Periodo } from 'src/proyeccion_ventas_periodo/pvp.models';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          dialect: 'mssql',
          host: config.get('DB_HOST'),
          port: config.get('DB_PORT'),
          username: config.get('DB_USER'),
          password: config.get('DB_PASSWORD'),
          database: config.get('DB_NAME'),
          synchronize: true,
          // models: [__dirname + "/**/*.models{.ts,.js}"],
          models:[Obj_Dist_Periodo, Proyeccion_Ventas_Periodo, PROYECCION_VENTAS, PROYECCION_COSTOS,Objectivo_GA_Producto_Periodo],
          // logging: config.get('DB_LOGGING'),
          autoLoadEntities: false,
          // migrations: ["src/database/migrations/*{.ts,.js}"],
          // cli:{
          //   migrationsDir: ["src/database/migrations"]
          // },
          dialectOptions:{
            authentication: {
              type: 'ntlm',
              options: {
                domain: 'ITARAMACA',
                userName: 'wilber.tapia',
                password: 'WT68357199'
              }
            },
            options: {
              cryptoCredentialsDetails: {
                minVersion: 'TLSv1',
                // instanceName: 'SQLSERVER2008ti'
              },
            },
          }
        };
      },
    }),
  ],
})
export class DatabaseModule {}
