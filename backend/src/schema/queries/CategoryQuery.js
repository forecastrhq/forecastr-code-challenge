import { list, queryField } from "nexus";
import CategoryHelper from "./helpers/CategoryHelper";

const CategoryQuery = queryField(t => {
  t.field('listCategories', {
    type: list('Category'),
    resolve: async (_, _args, ctx) => {
      return await CategoryHelper.listCategories(ctx)
    }
  })
})

export default CategoryQuery