import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  AutoIncrement
} from 'sequelize-typescript';

@Table({
  tableName: 'dummy',
  timestamps: true,
  paranoid: true
})
export class Dummy extends Model {
  @AutoIncrement
  @Column({
    field: 'id',
    primaryKey: true,
    type: DataType.INTEGER
  })
  @Index({
    name: 'PRIMARY',
    using: 'BTREE',
    order: 'ASC',
    unique: true
  })
  id!: number;

  @Column({
    field: 'fullName',
    type: DataType.STRING(80)
  })
  fullName!: string;

  @Column({
    field: 'data',
    type: DataType.STRING(80),
    unique: true
  })
  data!: string;
}
