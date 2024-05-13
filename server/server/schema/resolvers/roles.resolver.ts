import { Roles, User } from '../../models';

const RolesResolvers = {
  Query: {
    roles: async (data, data1, ctx) => {
      return await Roles.scope('withRelations').findAll({
        // include: [User]
      });
    },
    role: async (parent, args: { id }, ctx) => {
      const id = args.id;

      return await Roles.scope('withRelations').findByPk(id);
    }
  },

  Mutation: {
    createRoles: async (_parent, args, ctx) => {
      const returnValues = await Roles.create(args?.input);
      return returnValues;
    },

    updateRoles: async (_parent, args, ctx) => {
      const id1 = args.input.id;
      await Roles.update({ ...args?.input }, { where: { id: id1 } });

      return { Roles: await Roles.findByPk(id1) };
    },

    deleteRoles: async (_parent, args, ctx) => {
      const id = args.input?.id;
      const roles = await Roles.findByPk(id);
      await roles.destroy();

      return true;
    }
  }
  //We can fetch foreign key by special methods below
  // Roles: {
  //   async users(roles) {
  //     return roles.getUsers();
  //   }
  // }
};

export default RolesResolvers;
