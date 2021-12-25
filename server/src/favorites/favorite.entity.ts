import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Favorite {
  @PrimaryColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  poster_path: string;

  @Column()
  vote_average: number;

  @Column()
  release_date: string;

  @Column()
  overview: string;
}
