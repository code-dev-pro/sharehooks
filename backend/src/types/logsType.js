import { GraphQLObjectType, GraphQLString } from 'graphql';

const logsType = new GraphQLObjectType({
  name: 'logs',
  description: 'logs data',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: obj => obj.id,
    },
    response: {
      type: GraphQLString,
      resolve: obj => obj.response,
    },
    status: {
      type: GraphQLString,
      resolve: obj => obj.status,
    },
    request: {
      type: GraphQLString,
      resolve: obj => obj.request,
    },
    timeTaken: {
      type: GraphQLString,
      resolve: obj => obj.timeTaken,
    },
    createdAt: {
      type: GraphQLString,
      resolve: obj => obj.createdAt && new Date(obj.createdAt).toISOString(),
    },
    updatedAt: {
      type: GraphQLString,
      resolve: obj => obj.updatedAt && new Date(obj.updatedAt).toISOString(),
    },
    deletedAt: {
      type: GraphQLString,
      resolve: obj => obj.deletedAt && new Date(obj.deletedAt).toISOString(),
    },
  }),
});

export default logsType;
