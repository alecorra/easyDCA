import {MigrationInterface, QueryRunner} from "typeorm";

export class AddCurrency1651613029952 implements MigrationInterface {
    name = 'AddCurrency1651613029952'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`currency\` (\`id\` int NOT NULL AUTO_INCREMENT, \`asset_id\` varchar(10) NOT NULL, \`name\` varchar(50) NOT NULL, \`is_crypto\` tinyint(1) NOT NULL DEFAULT '0', \`date_start\` date NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`currency\``);
    }

}
