export const dummyTypeDefs = `

type Dummy {
    id:ID
    fullName : String 
    data: String

}







input CreateDummyInput{
    
    fullName : String
    data: String

}

input UpdateDummyInput{
    id:ID
    fullName : String
    data: String

}



type Mutation{
    createDummy(input:CreateDummyInput! ): Dummy
    updateDummy(input:UpdateDummyInput!): Dummy
}

`;
