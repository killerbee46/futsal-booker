import { allModules } from '../models';
import { decodeAuthHeader, AuthTokenPayload } from '../utils/auth';

export interface Context {
  userId?: number;
  allModules: any; //tTODO type definition of all modules
}
export const context = async ({ req, res }) => {
  const token =
    req && req.headers.authorization
      ? decodeAuthHeader(req.headers.authorization)
      : null;

  return {
    models: allModules,
    userId: token?.userId
  };
};
