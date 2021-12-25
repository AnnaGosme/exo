import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoritesController } from './favorites/favorites.controller';
import { FavoritesModule } from './favorites/favorites.module';
import {Favorite} from './favorites/favorite.entity';


@Module({
  imports: [FavoritesModule, TypeOrmModule.forRoot({
    type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'smartch_exo',
      entities: [Favorite],
      synchronize: true,
  })],
  controllers: [AppController, FavoritesController],
  providers: [AppService],
})
export class AppModule {}
