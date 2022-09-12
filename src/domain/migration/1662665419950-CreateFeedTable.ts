import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateFeedTable1662665419950 implements MigrationInterface {
  name = "CreateFeedTable1662665419950"

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "feeds" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "photo" character varying NOT NULL, "description" character varying NOT NULL, "userId" integer, CONSTRAINT "PK_3dafbf766ecbb1eb2017732153f" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `ALTER TABLE "feeds" ADD CONSTRAINT "FK_1dc57d1b6372d3089fce2848191" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "feeds" DROP CONSTRAINT "FK_1dc57d1b6372d3089fce2848191"`)
    await queryRunner.query(`DROP TABLE "feeds"`)
  }
}
