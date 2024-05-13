export const roleTypeDefs = `

type Roles {
    id:ID
    name: String
    description: String
    isActive: Boolean
    users: [User]
}



type Query{
    role(id: ID!): Roles!
    roles: [Roles]


}



input CreateRolesInput{
    
    name: String
    description: String
    isActive: Boolean
}

input UpdateRolesInput{
    id:ID
   name: String
    description: String
    isActive: Boolean

}

input DeleteRolesInput{
    id:ID
}



type Mutation{
    createRoles(input:CreateRolesInput!): Roles
    updateRoles(input:UpdateRolesInput!): Roles
    deleteRoles(input:DeleteRolesInput!): Boolean

}

`;
