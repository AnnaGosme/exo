import { MigrationInterface, QueryRunner } from 'typeorm';

export class Favorites1641897329236 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      "INSERT INTO favorite (id, title, poster_path, vote_average, release_date, overview) VALUES (0, 'test title', 'test url', 5, 'test date', 'test overview);",
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query('DELETE FROM favorite;');
  }
}
