import * as optGenerator from 'otp-generator';

// interface OtpNew {
//   OTP_LENGTH: number;
//   OTP_CONFIG: JSON;
// }

export const generateOtp = async (OTP_LENGTH, OTP_CONFIG) => {
  const otpNumber: number = await optGenerator.generate(OTP_LENGTH, OTP_CONFIG);
  return otpNumber;
};
