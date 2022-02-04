import { objectType } from 'nexus'

const Product = objectType({
  name: 'Product',
  definition(t) {
    t.nullable.string('id', { description: 'Product id string (uuid)' }),
    t.nullable.string('name', { description: 'Product name string' }),
    t.nullable.string('description', { description: 'Product description string' })
    t.nullable.float('price', { description: 'Product price value' })
    t.nullable.field('category', { type: 'Category', description: 'Product category' })
    t.nullable.string('categoryId', { description: 'Category Id @relation'})
  }
})

export default Product