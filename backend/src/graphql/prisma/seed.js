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

  const preparedSnacks = await prisma.category.create({
    data: {
      name: "Prepared Snacks",
      products: {
        create: [
          {
            name: 'Orange Juice',
            description: 'Orange Juice in a Jar - 22oz',
            price: 6.50,
            cost: 3.50
          },
          {
            name: 'Chips',
            description: 'Small bag of generic potato chips',
            price: 3.50,
            cost: 1.00,
          }
        ]
      }
    }
  })

  const handmadeBeverages = await prisma.category.create({
    data: {
      name: 'Handmade Beverages',
      products: {
        create: [
          {
            name: 'Lemonade',
            description: 'Handmade Lemonade',
            price: 5.50,
            cost: 1.50,
          },
        ]
      }
    }
  })

  const allProducts = await prisma.product.findMany()

  const productsIds = allProducts.map(({ id }) => id)

  const sales = []

  for(let i = 0; i < SALES_COUNT; i++) {
    sales.push(
      {
        productId: productsIds[rand([0, 1, 2])],
        count: rand([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
        salesDate: randBetweenDate({ from: new Date('01/01/2020'), to: new Date('03/01/2022')}).toISOString()
      }
    )
  }

  const productsAdded = await prisma.sales.createMany({
    data: sales
  })

  console.info('Seeded!', admin, client, preparedSnacks, handmadeBeverages, productsAdded)
}

startSeeding()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
