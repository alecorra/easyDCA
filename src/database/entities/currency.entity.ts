import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('currency')
export class Currency {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  id: number;

  @Column('varchar', {
    nullable: false,
    length: 10,
    name: 'asset_id'
  })
  assetId: string;

  @Column('varchar', {
    nullable: false,
    length: 50,
    name: 'name'
  })
  name: string;

  @Column("tinyint", {
    nullable: false,
    default: 0,
    width: 1,
    name: "is_crypto"
  })
  isCrypto: boolean;

  @Column("date", {
    nullable: false,
    name: "date_start"
  })
  dateStart: Date;
}