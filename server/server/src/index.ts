// import { init } from './tracer';

// init('BPA-BE', 'development');
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { sequelize } from '../config';
import {
  AuthResolvers,
  UserResolvers,
  DummyResolvers,
  dateScalar,
  RolesResolvers,
  AppSettingResolvers
} from '../schema/resolvers';

import {
  appSettingTypeDefs,
  authTypeDefs,
  dummyTypeDefs,
  roleTypeDefs,
  userTypeDefs
} from '../schema/type-defs';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { context } from './context';

import _ from 'lodash';

const p: any = process.env.PORT || 8000;

const resolvers = mergeResolvers([
  UserResolvers,
  AuthResolvers,
  DummyResolvers,
  AppSettingResolvers,
  RolesResolvers
]) as any;

const typeDefs = mergeTypeDefs([
  userTypeDefs,
  authTypeDefs,
  dummyTypeDefs,
  roleTypeDefs,
  appSettingTypeDefs
]) as any;
const server = new ApolloServer({
  typeDefs,
  resolvers: { ...resolvers, Date: dateScalar }
});
let serverUrl;

await sequelize
  .sync({ alter: true, force: false })
  .then(async (data: any) => {
    const { url } = await startStandaloneServer(server, {
      context,
      listen: { port: p }
    });
    serverUrl = url;
  })
  .catch(err => {
    console.log('error', err);
  });
console.log(`Server listening at: ${serverUrl}`);
