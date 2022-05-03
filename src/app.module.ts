import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: ['src/database/entities/**/*.ts'],
        migrations: ['src/database/migrations/**/*.ts'],
        seeds: ['src/database/seeds/**/*.seed.ts'],
        factories: ['src/database/seeds/factories/**/*.ts'],
        synchronize: false,
      })
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
