import { objectType } from 'nexus'

const User = objectType({
  name: 'User',
  definition(t) {
    t.string('id', { description: 'User id string (uuid)' }),
    t.string('name', { description: 'User name string' }),
    t.string('email', { description: 'User email string (unique)' })
    t.field('role', { type: 'Role', description: 'User role' })
  }
})

export default User