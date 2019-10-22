import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
} from 'graphql';
import logsType from '../types/logsType';

import LogResolver from '../resolvers/logs';

export default new GraphQLObjectType({
  name: 'Query',
  description: '...',
  fields: () => ({
    testQuery: {
      type: GraphQLString,
      args: {
        name: {
          type: GraphQLString
        },
      },
      resolve: (obj, args) => {
        return `Query working ${args.name}`;
      },
    },
    logs: {
      type: new GraphQLList(logsType),
      args: {
      },
      resolve: (obj, args) => {
        return LogResolver.loadLogs();
      },
    },
  }),
});