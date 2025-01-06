import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTickes1736104180573 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tickets',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'type',
            type: 'varchar'
          },
          {
            name: 'request_name',
            type: 'varchar'
          },
          {
            name: 'company_name',
            type: 'varchar'
          },
          {
            name: 'complaint',
            type: 'text'
          },
          {
            name: 'attendant',
            type: 'varchar'
          },
          {
            name: 'status',
            type: 'varchar'
          },
          {
            name: 'position',
            type: 'varchar'
          },
          {
            name: 'solution',
            type: 'text'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          },
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tickets')
  }
}
