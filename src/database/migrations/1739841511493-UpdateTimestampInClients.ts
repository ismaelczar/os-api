import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class UpdateTimestampInClients1739841511493 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.changeColumn('clients', 'updated_at', new TableColumn({
      name: "updated_at",
      type: "timestamp",
      default: "CURRENT_TIMESTAMP",
      isNullable: false,
      onUpdate: "CURRENT_TIMESTAMP",
    }));

    queryRunner.changeColumn('clients', 'created_at', new TableColumn({
      name: "created_at",
      type: "timestamp",
      default: "CURRENT_TIMESTAMP",
      isNullable: false
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "clients",
      "updated_at",
      new TableColumn({
        name: "updated_at",
        type: "timestamp",
        isNullable: true,
        default: null,
      })
    );


    await queryRunner.changeColumn(
      "clients",
      "created_at",
      new TableColumn({
        name: "created_at",
        type: "timestamp",
        isNullable: true,
        default: null,
      })
    );

  }

}
