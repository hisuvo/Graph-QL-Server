import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./graphql/typeDefs.js";
import { resolvers } from "./graphql/resolvers.js";

// configeration fo config
dotenv.config();

// init server
const server = new ApolloServer({ typeDefs, resolvers });

//run server
const { url } = await startStandaloneServer(server, {
  listen: { port: 4600 },
});

console.log("Devs Data server post locatio Link is -->", url);
