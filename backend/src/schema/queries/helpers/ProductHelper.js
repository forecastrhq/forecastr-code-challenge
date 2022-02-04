class ProductHelper {
  static async listProducts(ctx) {
    const listProducts = await ctx.prisma.product.findMany()

    console.log(listProducts)

    return listProducts
  }
}

export default ProductHelper