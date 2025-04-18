// cls-7 turoral data
// export const typeDefs = `#grapql

// type devs {
//     id: ID!,
//     name : String!,
//     gender : String!,
//     location : String!,
//     role : String!,
//     skills: String!,
//     experience: Int!,
//     available: Boolean!
// }

//     type Query {
//        getAllDevs : [devs],
//        getSingleDevs (id: Int!) : devs,
//        getDevsLocation (location : String!) : [devs]
//     }

// `;

// devsData.js

export const typeDefs = `#graphql
    type devs {
        id: ID!,
        name : String!,
        gender : String!,
        location : String!,
        role : String!,
        skill: String!,
        experience: Int!,
        available: Boolean!
    }
        
    type Query {
        getSkill (skill: String!) : [devs]
        getGender (gender: String!, location: String!) : [devs]
        
    }
`;
