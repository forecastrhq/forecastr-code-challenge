import path from "path";
import { applyMiddleware } from "graphql-middleware";
import { declarativeWrappingPlugin, makeSchema } from "nexus";

import User from './models/User'
import Product from './models/Product'
import Category from './models/Category'
import Role from './enums/Role'
import UserMutation from "./mutations/UserMutation";
import ProductQuery from "./queries/ProductQuery";
import CategoryQuery from "./queries/CategoryQuery";

const schema = applyMiddleware(
	makeSchema({
		types: [
      User,
			Product,
			Category,
			Role,
			UserMutation,
			ProductQuery,
			CategoryQuery,
    ],
		plugins: [declarativeWrappingPlugin({ disable: true })],
		outputs: {
			schema: path.join(__dirname, "../graphql/schema.generated.graphql"),
		},
		contextType: {
			module: require.resolve("./context"),
			alias: "Context",
			export: "Context",
		},
		nonNullDefaults: {
			output: true,
		},
	})
);

export default schema