import { GraphQLError } from 'graphql';
import jwt from 'jsonwebtoken';
import { generateOtp } from '../../utils/generateOtp';
import { User } from '../../models';

const AuthResolvers = {
  Mutation: {
    signup: async (parent, args, ctx) => {
      const users = await User.findOne({
        where: {
          email: args.email
        }
      });
      if (users) {
        throw new GraphQLError('Email already exists.', {
          extensions: {
            code: 'FORBIDDEN'
          }
        });
      }

      // const password = await bcrypt.hash(args.password, 10);
      const returnValues = await User.create(args);
      const token = jwt.sign(
        { userId: returnValues.id, email: returnValues.email },
        process.env.APP_SECRET,
        { expiresIn: '1y' }
      );
      return { user: returnValues, token };
    },

    login: async (parent, args, ctx) => {
      const user = await User.findOne({
        where: {
          email: args.email
        }
      });
      if (!user) {
        throw new GraphQLError('NO SUCH USER FOUND.', {
          extensions: {
            code: 'NOT FOUND'
          }
        });
      }

      const valid = await user.validPassword(args.password, user.password);
      if (!valid) {
        throw new GraphQLError('INVALID PASSWORD.', {
          extensions: {
            code: 'FORBIDDEN'
          }
        });
      }

      const token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.APP_SECRET
      );

      return { token, user: user };
    },
    changePassword: async (parent, args, ctx) => {
      const { email, oldPassword, newPassword } = args;

      if (!ctx.userId) {
        throw new GraphQLError(
          'You are not authorized to perform this action.',
          {
            extensions: {
              code: 'FORBIDDEN'
            }
          }
        );
      }
      const user = await User.findOne({
        where: {
          email: email
        }
      });
      if (!user) {
        throw new GraphQLError('NO SUCH USER FOUND.', {
          extensions: {
            code: 'NOT FOUND'
          }
        });
      }
      const valid = await user.validPassword(oldPassword, user.password);
      if (!valid) {
        throw new GraphQLError('INVALID PASSWORD.', {
          extensions: {
            code: 'FORBIDDEN'
          }
        });
      }
      if (oldPassword === newPassword) {
        throw new GraphQLError('Password cannot be same.', {
          extensions: {
            code: 'FORBIDDEN'
          }
        });
      }

      const setPassword = await user.update({
        password: newPassword
      });

      return true;
    },

    forgetPassword: async (parent, args, ctx) => {
      const { email } = args;

      const user = await User.findOne({
        where: {
          email: email
        }
      });
      if (!user) {
        throw new GraphQLError('NO SUCH USER FOUND.', {
          extensions: {
            code: 'NOT FOUND'
          }
        });
      }

      if (Number(user.otpCount) > 3) {
        throw new GraphQLError(
          'Count exceeds more than 3, please consult your administrator',
          {
            extensions: {
              code: 'FORBIDDEN'
            }
          }
        );
      }
      const otpGenerate = await generateOtp(6, {});
      await user.update({
        otp: otpGenerate,
        otpCount: Number(user.otpCount) + 1
      });

      return { otp: otpGenerate, user: user };
    },

    verifyOtp: async (parent, args, ctx) => {
      const { email, otp } = args;

      const user = await User.findOne({
        where: {
          email: email
        }
      });
      if (!user) {
        throw new GraphQLError('NO SUCH USER FOUND.', {
          extensions: {
            code: 'NOT FOUND'
          }
        });
      }
      if (otp === null) {
        throw new GraphQLError('NO OTP found.', {
          extensions: {
            code: 'NOT FOUND'
          }
        });
      }
      if (Number(user.otpCount) > 3) {
        throw new GraphQLError(
          'Count exceeds more than 3, please consult your administrator',
          {
            extensions: {
              code: 'FORBIDDEN'
            }
          }
        );
      }
      const valid = await user.validPassword(otp, user.otp);

      if (!valid) {
        throw new GraphQLError('INVALID OTP.', {
          extensions: {
            code: 'FORBIDDEN'
          }
        });
      }
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.APP_SECRET
      );

      return { token: token, user: user };
    },
    changeForget: async (parent, args, ctx) => {
      const { email, newPassword } = args;

      if (!ctx.userId) {
        throw new GraphQLError(
          'You are not authorized to perform this action.',
          {
            extensions: {
              code: 'FORBIDDEN'
            }
          }
        );
      }

      const user = await User.findOne({
        where: {
          email: email
        }
      });
      if (!user) {
        throw new GraphQLError('NO SUCH USER FOUND.', {
          extensions: {
            code: 'NOT FOUND'
          }
        });
      }

      await user.update({
        password: newPassword
      });

      return true;
    }
  }

  // AuthPayload: {
  //   async user(authpayload) {
  //     return authpayload.getUser();
  //   }
  // }
};

export default AuthResolvers;
