import { AppSetting } from '../../models';

const AppSettingResolvers = {
  Query: {
    appSettings: async (data, data1, ctx) => {
      return await AppSetting.findAll();
    },
    appSetting: async (parent, args: { id }, ctx) => {
      const id = args.id;

      return await ctx.models.AppSetting.findByPk(id);
    }
  },

  Mutation: {
    createAppSetting: async (_parent, args, ctx) => {
      const returnValues = await AppSetting.create(args?.input);
      return returnValues;
    },

    updateAppSetting: async (_parent, args, ctx) => {
      const id1 = args.input.id;
      const updatedValues = await AppSetting.update(
        { ...args?.input },
        { where: { id: id1 } }
      );

      return updatedValues;
    },

    deleteAppSetting: async (_parent, args, ctx) => {
      await ctx.models.AppSetting.delete(args?.input.id);

      return true;
    }
  }
};

export default AppSettingResolvers;
