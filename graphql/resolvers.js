import { devs } from "../data/data.js";

export const resolvers = {
  Query: {
    getAllDevs: () => {
      return devs;
    },

    getSingleDevs: (_, { id }) => {
      return devs.find((data) => data.id === id);
    },

    getDevsLocation: (_, { location }) => {
      return devs.filter((data) => data.location === location);
    },
  },
};
