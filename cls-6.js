import colors from "colors";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// config dotenv
dotenv.config();

const typeDefs = `#grapql
  type Query {
    devInfo(name:String!, age:Int!, skill:String!) : String,
    studentInfo (name:String!, year:Int!, subject: String!) : String,
  },

  type Mutation {
    currencyConveter(amount: Int!, currencyType: String!) : Int,
  }
`;

const resolvers = {
  Query: {
    devInfo: (_, { name, age, skill }) => {
      return `Hello ${name}.You Are ${age} year old and You have a ${skill} Developer`;
    },

    studentInfo: (_, { name, year, subject }) => {
      return `My name is ${name}.I am ${subject} department student of ${year}th year`;
    },
  },

  Mutation: {
    currencyConveter: (_, { amount, currencyType }) => {
      switch (currencyType) {
        case "dollar":
          return amount * 120;
        case "euro":
          return amount * 150;
        case "pound":
          return amount * 180;
      }
    },
  },
};

// init apollo server
const server = new ApolloServer({ typeDefs, resolvers });

// run server
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`GrapQL Apollo Server Link ---> ${url}`.bgGreen);
