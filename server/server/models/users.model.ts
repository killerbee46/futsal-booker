import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  AutoIncrement,
  BeforeCreate,
  BeforeUpdate,
  BelongsToMany,
  Scopes
} from 'sequelize-typescript';
import bcrypt from 'bcryptjs';
import { Roles } from './roles.model';
import { UserRoles } from './userRoles.model';

@Scopes(() => ({
  withRelations: {
    include: {
      as: 'roles',
      model: Roles,
      required: false,
      through: { attributes: [] },
      attributes: ['id', 'name']
    }
  }
}))
@Table({
  tableName: 'user-profile',
  timestamps: true,
  paranoid: true
})
export class User extends Model {
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
    field: 'email',
    type: DataType.STRING(80),
    unique: true
  })
  email!: string;

  @Column({
    field: 'address',
    type: DataType.STRING(80)
  })
  address!: string;

  @Column({
    field: 'phoneNo',
    type: DataType.STRING(80)
  })
  phoneNo!: string;

  @Column({
    field: 'dob',
    type: DataType.DATE
  })
  dob!: string;
  @Column({
    field: 'password',
    type: DataType.STRING(80)
  })
  password!: string;

  @Column({
    field: 'userName',
    type: DataType.STRING(80)
  })
  userName!: string;

  @Column({
    field: 'otp',
    type: DataType.STRING(80)
  })
  otp!: string;

  @Column({
    field: 'otpCount',
    type: DataType.STRING(80)
  })
  otpCount!: string;

  @BelongsToMany(() => Roles, () => UserRoles)
  roles: Roles[];

  @BeforeCreate
  @BeforeUpdate
  static beforeCreateHook(user: User): void {
    if (user.password) {
      const salt = bcrypt.genSaltSync(10);
      user.password = bcrypt.hashSync(user.password, salt);
    }
    if (user.otp) {
      const salt = bcrypt.genSaltSync(10);
      user.otp = bcrypt.hashSync(user.otp, salt);
    }
  }

  validPassword = async (password, hash) => {
    return await bcrypt.compareSync(password, hash);
  };
}
