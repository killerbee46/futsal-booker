import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  AutoIncrement,
  AllowNull,
  ForeignKey
} from 'sequelize-typescript';
import { User } from './users.model';
import { Roles } from './roles.model';

@Table({
  tableName: 'user-roles',
  timestamps: true,
  paranoid: true
})
export class UserRoles extends Model {
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

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId!: number;

  @AllowNull(false)
  @ForeignKey(() => Roles)
  @Column(DataType.INTEGER)
  roleId!: number;
}
