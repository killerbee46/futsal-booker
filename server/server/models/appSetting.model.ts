import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  AutoIncrement,
  Default
} from 'sequelize-typescript';

@Table({
  tableName: 'app-setting',
  timestamps: true,
  paranoid: true
})
export class AppSetting extends Model {
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
    field: 'logo',
    type: DataType.STRING(80)
  })
  logo!: string;

  @Column({
    field: 'name',
    type: DataType.STRING(80)
  })
  name!: string;

  @Column({
    field: 'address',
    type: DataType.STRING(80)
  })
  address!: string;

  @Column({
    field: 'timeZone',
    type: DataType.STRING(80)
  })
  timeZone!: string;

  @Column({
    field: 'timeZoneDetails',
    type: DataType.STRING(80)
  })
  timeZoneDetails!: string;

  @Column({
    field: 'orgEmail',
    type: DataType.STRING(80)
  })
  orgEmail!: string;

  @Column({
    field: 'domain',
    type: DataType.STRING(80)
  })
  domain!: string;

  @Default(true)
  @Column({
    field: 'isInitial',
    type: DataType.BOOLEAN
  })
  isInitial!: boolean;
}
