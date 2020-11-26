import * as express from 'express';
import * as cors from "cors";
import { ApolloServer } from 'apollo-server-express';

import {
  resolver as resolvers,
  schema as typeDefs,
} from './graphql';

(function main() {

  const port = process.env.PORT || 5000;

  const app = express();

  app.use(cors());

  const gqlServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, connection }) => {
      // JWT token 
      return { user: { userId: 1 } };
    },
    playground: {
      settings: {
        "editor.theme": "light", // dark, light
        "editor.fontSize": 18,
      }
    }
  });

  gqlServer.applyMiddleware({ app });

  app.listen({ port }, () => {
    console.log(
      '\x1b[0m\x1b[36m%s\x1b[0m',
      `🚀 Server ready at http://localhost:${port}${gqlServer.graphqlPath} \n`
    );
  });

})();