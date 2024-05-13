import { GraphQLError } from 'graphql';
import { Dummy } from '../../models';

const DummyResolvers = {
  Mutation: {
    createDummy: async (_parent, args, ctx) => {
      const { userId } = ctx;
      if (!userId) {
        throw new GraphQLError('CANNOT POST WITHOUT LOGGING IN.', {
          extensions: {
            code: 'NOT FOUND'
          }
        });
      }
      console.log(userId);
      const returnValues = await Dummy.create(args?.input);

      return returnValues;
    },

    updateDummy: async (_parent, args, ctx) => {
      const id1 = args.input.id;
      const updatedValues = await Dummy.update(
        { ...args?.input },
        { where: { id: id1 } }
      );

      return updatedValues;
    }
  }
};

export default DummyResolvers;
