import { Controller, Post, Body, Get, Param, Delete} from '@nestjs/common';
import { CreateFavoriteDTO } from './DTO/create/favorite.dto';
import {FavoritesService} from './favorites.service';
import { Favorite } from './interface/favorite.interface';


@Controller('favorites')
export class FavoritesController {
    constructor(private readonly favoritesService: FavoritesService) {}
        @Get()
        findAll(): Promise<Favorite[]>{
            return this.favoritesService.findAll()
        }

        @Post()
        create(@Body() createFavoriteDTO: CreateFavoriteDTO): Promise<Favorite> {
            return this.favoritesService.create(createFavoriteDTO);
        }

        @Delete(':id')
        delete(@Param('id') id): Promise<void> {
            return this.favoritesService.remove(id);
        }
    }

