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

Feel free to add any other libraries that will help you achieve your goal.

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

To start her business, Lucy:
- She borrowed $5,000 from her parents as seed money.
- She pays $200/month to sell at the playground on weekdays.
- She pays $50/day to sell at the farmers market on weekends.

Look up any other business concepts you think will be useful!


### What does Lucy need?
- The historic sales data has been imported, but Lucy would like to move to recording her sales through a web app.
- Lucy would also like to add, delete, and manage her product catalog using the website.
- Build Charts and Tables for Lucy to manage her daily sales.
- Build a dynamic report for Lucy to present her revenue, expenses, and profit to her investor.
- What insight can you give Lucy regarding her business? She's interested in hourly trends, performance over time, profit per day of week.
- A more professional style and layout would inspire confidence in her investors, give your touch to it!
- What else do you think Lucy will be happy to have?

Choose and build solutions for 2 (or more) items on this list, depending on what strengths you want to show off. You will have a chance to tell us about additional work you would do with more time, so don’t feel like you have to do everything!
