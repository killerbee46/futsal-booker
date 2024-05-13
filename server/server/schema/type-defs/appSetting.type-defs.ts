export const appSettingTypeDefs = `

type AppSetting {
    id:ID
    logo : String 
    name: String
    address: String
    timeZone: String
    orgEmail: String
    domain: String
    isInitial: Boolean
}



type Query{
    appSetting(id: ID!): AppSetting!
    appSettings: [AppSetting]


}



input CreateAppSettingInput{
    
   logo : String 
    name: String
    address: String
    timeZone: String
    orgEmail: String
    domain: String
    isInitial: Boolean
}

input UpdateAppSettingInput{
    id:ID
    logo : String 
    name: String
    address: String
    timeZone: String
    orgEmail: String
    domain: String
    isInitial: Boolean

}

input DeleteAppSettingInput{
    id:ID
}



type Mutation{
    createAppSetting(input:CreateAppSettingInput! ): AppSetting
    updateAppSetting(input:CreateAppSettingInput!): AppSetting
    deleteAppSetting(input:DeleteAppSettingInput!): Boolean

}

`;
