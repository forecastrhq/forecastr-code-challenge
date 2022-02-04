import { mutationField, stringArg } from "nexus";
import UserHelper from "./helpers/UserHelper";

const UserMutation = mutationField(t => {
  t.field('createUser', {
    type: 'User',
    args: {
      name: stringArg(),
      email: stringArg(),
    },
    resolve: async (_, args, ctx) => {
      return await UserHelper.createUser(ctx, args)
    }
  })
})

export default UserMutation