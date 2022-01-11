import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Favorite {
  @PrimaryColumn()
  id: number;

  @Column({ length: 500 })
  title: string;

  @Column({ length: 500 })
  poster_path: string;

  @Column()
  vote_average: number;

  @Column()
  release_date: string;

  @Column({ length: 5000 })
  overview: string;

  @Column()
  favorite: boolean;
}
