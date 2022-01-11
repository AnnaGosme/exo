import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFavoriteDTO } from './DTO/create/favorite.dto';
import { Favorite } from './favorite.entity';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectRepository(Favorite)
    private favoriteRepository: Repository<Favorite>,
  ) {}

  create(createFavoriteDTO: CreateFavoriteDTO): Promise<Favorite> {
    const favorite = new Favorite();
    favorite.id = createFavoriteDTO.id;
    favorite.title = createFavoriteDTO.title;
    favorite.poster_path = createFavoriteDTO.poster_path;
    favorite.vote_average = createFavoriteDTO.vote_average;
    favorite.release_date = createFavoriteDTO.release_date;
    favorite.overview = createFavoriteDTO.overview;
    favorite.favorite = createFavoriteDTO.favorite;

    if(favorite)
    
    return this.favoriteRepository.save(favorite);
  }

  async findAll(): Promise<Favorite[]> {
      return await this.favoriteRepository.find();
  }

  async remove(id: number): Promise<void> {
      await this.favoriteRepository.delete(id);
  }
}
