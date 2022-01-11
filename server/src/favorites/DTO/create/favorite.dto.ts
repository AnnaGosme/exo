export class CreateFavoriteDTO {
  readonly id: number;
  readonly title: string;
  readonly poster_path: string;
  readonly vote_average: number;
  readonly release_date: string;
  readonly overview: string;
  readonly favorite: boolean;
}
