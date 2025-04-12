import colors from "colors";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// config dotenv
dotenv.config();

const typeDefs = `#grapql
  type Query {
    checkFunc: String,
    caleAge: Int,
    getDevInfo: String
  }

  type Mutation {
    mutNumber : Int,
    myName : String
  }
`;

const resolvers = {
  // Query use for get fetch data from server
  Query: {
    getDevInfo: () => {
      return `suvo book writer name is datta`;
    },
  },

  // Mutation use for post put patch update and delete
  Mutation: {
    mutNumber: () => {
      return 5000;
    },

    myName: () => {
      return `My name is suvo datta`;
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

// use for unique id number
// const uui = Date.now().toString();
