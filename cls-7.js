import colors from "colors";
import dotenv, { config } from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./graphql/typeDefs.js";
import { resolvers } from "./graphql/resolvers.js";
import { devs } from "./data/data.js";

// config dotenv
dotenv.config();

// init apollo server
const server = new ApolloServer({ typeDefs, resolvers });

// run server
const { url } = await startStandaloneServer(server, {
  listen: { port: 5000 },
});

console.log("GrapQL Marque Language APIs is ", url.bgMagenta);
