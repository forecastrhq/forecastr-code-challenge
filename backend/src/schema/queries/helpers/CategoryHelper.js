class CategoryHelper {
  static async listCategories(ctx) {
    const allCategories = await ctx.prisma.category.findMany({
      include: {
        products: true
      }
    })

    return allCategories
  }
}

export default CategoryHelper