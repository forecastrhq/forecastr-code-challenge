class ProductHelper {
  static async listProducts(ctx) {
    const listProducts = await ctx.prisma.product.findMany()

    return listProducts
  }
}

export default ProductHelper