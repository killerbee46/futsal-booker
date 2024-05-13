import { User } from '../models';

export const isAdmin = async ctx => {
  const user = await User.findByPk(ctx.userId);

  if (user == null) return false;

  const adminRoleCheck = user?.roles?.filter(
    x => x.name == 'admin' || x.name == 'superadmin'
  );

  return adminRoleCheck.length > 0;
};
