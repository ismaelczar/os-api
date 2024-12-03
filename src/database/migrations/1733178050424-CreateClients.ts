import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClients1733178050424 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'clients', //nome da tabela
        columns: [
          {
            name: 'id',
            type: 'varchar', //usado para id's como uuidv4
            isPrimary: true,
            generationStrategy: 'uuid' //gera id de forma automatica sendo uuid.
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false, // não será possível ter este campo como false "obrigatório"
          },
          {
            name: 'createDate',
            type: 'timestamp if time zone',
            isNullable: false
          }
        ]

      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('clients')
  }

}
