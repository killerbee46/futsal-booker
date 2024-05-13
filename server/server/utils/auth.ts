import { GraphQLError } from 'graphql';
import * as jwt from 'jsonwebtoken';

export interface AuthTokenPayload {
  userId: number;
}

export function decodeAuthHeader(authHeader: string): AuthTokenPayload {
  const token = authHeader.replace('Bearer ', '');

  if (!token) {
    throw new GraphQLError('NO TOKEN FOUND.', {
      extensions: {
        code: 'NOT FOUND'
      }
    });
  }

  return jwt.verify(token, process.env.APP_SECRET) as AuthTokenPayload;
}
