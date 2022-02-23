import { rand, randBetweenDate, randEmail, randFirstName } from '@ngneat/falso';
import { PrismaClient } from '@prisma/client'

const SALES_COUNT = 500

const prisma = new PrismaClient();

const startSeeding = async () => {
  const adminName = randFirstName({ withAccents: false })
  const admin = await prisma.user.create({
    data: {
      name: adminName,
      email: randEmail({ firstName: adminName }),
      role: 'ADMIN'
    }
  })

  const clientName = randFirstName({ withAccents: false })
  const client = await prisma.user.create({
    data: {
      name: clientName,
      email: randEmail({ firstName: clientName })
    }
  })

  const processedProducts = await prisma.category.create({
    data: {
      name: "Processed Product",
      products: {
        create: [{
          name: 'Lemonade Juice',
          description: 'Lemonade Juice in a Jar - 22oz',
          price: 5.50,
          cost: 1.50,
        },
        {
          name: 'Orange Juice',
          description: 'Orange Juice in a Jar - 22oz',
          price: 6.50,
          cost: 1.75
        }]
      }
    }
  })

  const rawCategory = await prisma.category.create({
    data: {
      name: 'Raw Product'
    }
  })

  const allProducts = await prisma.product.findMany()

  const productsIds = allProducts.map(({ id }) => id)

  const sales = Array(500)

  for(let i = 0; i < SALES_COUNT; i++) {
    sales.push(
      {
        productId: productsIds[rand([0, 1])],
        salesDate: randBetweenDate({ from: new Date('01/01/2020'), to: new Date('03/01/2022')}).toISOString()
      }
    )
  }

  const productsAdded = await prisma.sales.createMany({
    data: sales
  })

  console.info('Seeded!', admin, client, processedProducts, rawCategory, productsAdded)
}

startSeeding()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })