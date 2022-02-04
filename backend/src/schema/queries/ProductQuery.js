import { queryField, list } from "nexus";
import ProductHelper from "./helpers/ProductHelper";

const ProductQuery = queryField(t => {
  t.field('listProducts', {
    type: list('Product'),
    resolve: async (_, _args, ctx) => {
      return await ProductHelper.listProducts(ctx)
    }
  })
})

export default ProductQuery