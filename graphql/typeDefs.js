export const typeDefs = `#grapql

type devs {
    id: ID!,
    name : String!,
    gender : String!,
    location : String!,
    role : String!,
    skills: String!,
    experience: Int!,
    available: Boolean!
}


    type Query {
       getAllDevs : [devs],
       getSingleDevs (id: Int!) : devs,
       getDevsLocation (location : String!) : [devs]
    }

`;
