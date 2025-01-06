import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddingForeignKeyToTicketsTable1736198299858 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('tickets', new TableColumn({
      name: 'company_name_id',
      type: 'uuid',
      isNullable: true
    }))

    await queryRunner.createForeignKey('tickets', new TableForeignKey({
      name: 'CompanyTickets',
      columnNames: ['company_name_id'], // tem referencia com a coluna ID da tabela tickets
      referencedColumnNames: ['id'],
      referencedTableName: 'tickets'
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('tickets', 'CompanyTickets')

    await queryRunner.dropColumn('tickets', 'company_name_id')
  }

}
