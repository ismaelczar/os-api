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
            generationStrategy: 'uuid', //gera id de forma automatica sendo uuid.
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false, // não será possível ter este campo como false "obrigatório"
          },
          {
            name: 'cgc',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'fantasy',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'cep',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'address',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'streetNumber',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'district',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'city',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'phone',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'observations',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'createDate',
            type: 'timestamp with time zone',
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
