import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddingRelationColumns1736202693405 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('tickets', new TableColumn({
      name: 'company',
      type: 'uuid',
      isNullable: true
    }))

    await queryRunner.addColumn('clients', new TableColumn({
      name: 'tickets',
      type: 'json',
      isNullable: true
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.dropColumn('clients', 'tickets')

    await queryRunner.dropColumn('tickets', 'company')
  }

}
