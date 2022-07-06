import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'mssql',
          host: config.get('DB_HOST'),
          port: config.get('DB_PORT'),
          username: config.get('DB_USER'),
          password: config.get('DB_PASSWORD'),
          database: config.get('DB_NAME'),
          synchronize: true,
          logging: config.get('DB_LOGGING'),
          autoLoadEntities: false,
          migrations: ["src/database/migrations/*{.ts,.js}"],
          cli:{
            migrationsDir: ["src/database/migrations"]
          },
          options: {
            cryptoCredentialsDetails: {
              minVersion: 'TLSv1',
            },
          },
        };
      },
    }),
  ],
})
export class DatabaseModule {}
