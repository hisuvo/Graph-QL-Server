export const typeDefs = `#grapql
    type Query {
        testFile(name:String!):String,
        introductionMyself(name: String!, age: Int!, study: String!, job: String!) : String
    }

`;
