class UserHelper {
  static async createUser(ctx, args) {
    const { name, email } = args
    const user = await ctx.prisma.user.create({
      data: {
        name,
        email,
      },
    })

    return user
  }
}

export default UserHelper