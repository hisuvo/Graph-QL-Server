export const resolvers = {
  Query: {
    testFile: (_, { name }) => {
      return `My name is ${name}`;
    },
    introductionMyself: (_, { name, age, study, job }) => {
      return `Hello Everyone,I am ${name}! and ${age} year old.I am study in ${study} and it with work as ${job} developer`;
    },
  },
};
