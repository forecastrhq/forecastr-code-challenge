# Forecastr Code Challenge

Welcome to the Forecastr Code Challenge.
In this challenge, you'll help Lucy with her vending point.

## Installation

Before starting the project, be sure to have docker installed and create your postgres database.

```bash
docker run --name takehome -e POSTGRES_PASSWORD=takehome -p 5432:5432 -d postgres
```

## Before Starting

After installing the Docker Image, you should start the project setup. That part we got it covered!

Go to the backend folder and install it's dependencies. After that, run in your terminal:

**NPM**
```bash
npm run setup
```

**Yarn**
```bash
yarn setup
```
This command will setup your database and seed with some initial data!

## Resources

This project uses the following technologies:
- [React](https://reactjs.org)
- [Chakra UI](https://chakra-ui.com/)
- [GraphQL](https://graphql.org/)
- [Apollo GraphQL](https://www.apollographql.com/)
- [Prisma](https://www.prisma.io/)

Feel free to add any other library that will help you achieve your goal.

Always remember to check the package.json file for extra scripts and libraries.


## Challenge

It was summer, Lucy (our protagonist) saw a beautiful toy, but she had no money to buy it.
At that moment, Lucy remembered that her neighbors were talking with each other how thirsty they become during the hot summer days.

With that idea in mind, she decided to build a Juice Vending Stop.
As you can imagine, it became a hit on her street, everyone wanted to buy Lucy's products. Her business grew so much that she wasn't expecting that and now she has some problems organizing it.

Your goal is to help Lucy organize her business.
She asked her older brother, who is on the tech school, to build her a dashboard so she could check information about her vending, but he didn't have much time, so he delivered only basic funcionalities to his little sister. Since she needs more, she's asking for you help!

### Context
Lucy needs help building her Juice Vending Stop website, so she can control everything that goes in and out of the shop.
Every product has a different cost of production. The local store that provides Lucy with her fruit needs will give her a discount based on the quantity of Juice she sells. If she sells more than 100, the vendor will give her a discount of 10%, if she sells more than 200, the discount will be 20%, up to 30% at 300+.

### What Lucy needs?
- She needs a way to add new products to her store. [Add a functionality to add new products]
- Also, she want to have a place to register the sales. [Add a functionality to add new sales]
- And if a price changes? Lucy would love to have a place where she can edit the items. [Add a functionality to edit actual products]
- But if she did a mistake? An undo will be great! [Add a remove functionality to both products and sales]
- Is there a way to forecast what profit Lucy will have? [Add a functionality to forecast Lucy's profit based on quantity sold]

### Optional
- The actual layout is not good, give your touch to it!
- Lucy: "Is there a way that I can see a graph about the sales and my profit?"
- What else you find that Lucy will be happy to have?
