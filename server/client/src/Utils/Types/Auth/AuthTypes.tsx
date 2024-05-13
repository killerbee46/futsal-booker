export interface ForgotPasswordTypes {
  email?: string;
  dob?: string;
}

export interface ResetPasswordTypes {
  oldPassword?: string;
  password?: string;
  confirm_password?: string;
}
