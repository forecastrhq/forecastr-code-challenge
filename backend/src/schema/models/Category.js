import { objectType } from 'nexus'

const Category = objectType({
  name: 'Category',
  definition(t) {
    t.string('id', { description: 'Category id string (uuid)' }),
    t.string('name', { description: 'Category name string' }),
    t.nullable.list.field('products', { type: 'Product', description: 'Category category' })
  }
})

export default Category