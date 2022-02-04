import http from "http";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import schema from './schema'
import { createContext } from "./schema/context";

async function startApolloServer() {
	const app = express();
	const httpServer = http.createServer(app);
	
	const server = new ApolloServer({
		schema,
		context: createContext,
		plugins: [
			ApolloServerPluginDrainHttpServer({ httpServer }),
			ApolloServerPluginLandingPageGraphQLPlayground()
		],
	});

	await server.start();

	server.applyMiddleware({ app });

	await new Promise((resolve) => {
		httpServer.listen({ port: 4000 })
		resolve()
  });

	console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer()