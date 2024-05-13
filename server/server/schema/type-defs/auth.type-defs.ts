export const authTypeDefs = `
scalar Date


type AuthPayload {  
  token: String
  user: User
  otp: String
}




type Mutation {
  signup(email: String!,userName:String!,password: String!, name : String!,dob: Date!,phoneNo: String!,address: String!): AuthPayload  
  login(email: String!, password: String!): AuthPayload   
  changePassword(email: String!, oldPassword: String!, newPassword: String! ): Boolean
  forgetPassword(email: String! ): AuthPayload
  verifyOtp(email: String!, otp:String! ):AuthPayload
  changeForget(email: String!, newPassword: String!):Boolean

}

`;
