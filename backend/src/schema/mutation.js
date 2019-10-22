import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';


export default new GraphQLObjectType({
  name: 'mutations',
  description: '...',
  fields: () => ({
    testMutation: {
      type: GraphQLString,
      args: {
        name: {
          type: GraphQLString,
        },
      },
      resolve: (obj, args) => {
        return `Mutation working ${args.name}`;
      },
    },
  }),
});
