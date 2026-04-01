import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class LiveStreamMigration1775042464950 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
                new Table({
                    name: "liveStreams",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true,
                            generationStrategy: "uuid",
                            default: "uuid_generate_v4()",
                        },
                        {
                            name: "user_Id",
                            type: "uuid",
                            isNullable: false,
                        },
                        {
                            name: "url",
                            type: "varchar",
                            isNullable: false,
                        },
                        {
                            name: 'start_Time',
                            type: 'timestamp',
                            isNullable: false,
                        },
                        {
                            name: "createdAt",
                            type: "timestamp",
                            default: "CURRENT_TIMESTAMP"
                        }
                    ]
                }),
                true
            );
            await queryRunner.createForeignKey(
                "liveStreams",
                new TableForeignKey({
                    columnNames: ["user_Id"],
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    onDelete: "SET NULL"
                })
            );
        }
    
        public async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.dropTable("liveStreams");
        }
    
    }