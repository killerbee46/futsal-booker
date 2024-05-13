import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  AutoIncrement,
  BelongsToMany,
  Scopes
} from 'sequelize-typescript';
import { User } from './users.model';
import { UserRoles } from './userRoles.model';

@Scopes(() => ({
  withRelations: {
    include: {
      as: 'users',
      model: User,
      required: false,
      through: { attributes: [] },
      attributes: ['id', 'name']
    }
  }
}))
@Table({
  tableName: 'roles',
  timestamps: true,
  paranoid: true
})
export class Roles extends Model {
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
    field: 'name',
    type: DataType.STRING(80)
  })
  name!: string;

  @Column({
    field: 'description',
    type: DataType.STRING(80)
  })
  description!: string;

  @Column({
    field: 'isActive',
    type: DataType.BOOLEAN
  })
  isActive!: boolean;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
