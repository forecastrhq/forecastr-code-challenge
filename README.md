# Forecastr Code Challenge

Welcome to the Forecastr Code Challenge.
In this challenge, you'll help Lucy with her Juice stand.

## Installation

Before starting the project, be sure to have Docker installed and create your Postgres database.

```bash
docker run --name takehome -e POSTGRES_PASSWORD=takehome -p 5432:5432 -d postgres
```

## Before Starting

After installing the Docker Image, you should begin the project setup.

Go to the backend folder and install it's dependencies. After that, run in your terminal:

**NPM**
```bash
npm run setup
```

**Yarn**
```bash
yarn setup
```
This command will setup your database and seed with some initial data.

## Resources

This project uses the following technologies:
- [React](https://reactjs.org)
- [Chakra UI](https://chakra-ui.com/)
- [GraphQL](https://graphql.org/)
- [Apollo GraphQL](https://www.apollographql.com/)
- [Prisma](https://www.prisma.io/)

These are some key files you should check out:
- Data model: backend/prisma/schema.prisma
- Server endpoints: src/schema/queries and src/schema/mutations
- React app landing page: frontend/src/App.js


This project is made using the context pattern, here are some resources you may find helpful.
- https://kentcdodds.com/blog/how-to-use-react-context-effectively
- https://kentcdodds.com/blog/application-state-management-with-react

Most of the relevant code for the context is in:
- frontend/src/contexts/products_context/context_hook.js
- frontend/src/contexts/products_context/reducer.js

If you have a different preferred method to implement the requested features, feel free to use those instead.

Feel free to add any other libraries (such as charting or table libraries) that will help you achieve your goals.
Always remember to check the package.json file for extra scripts and libraries.


## Challenge

It was summer, and Lucy wanted a new toy, but she had no money to buy it. Lucy overheard her neighbors talking about how hot it was outside and how thirsty they had become.

That conversation gave her the idea to start a Juice stand. Soon, everyone wanted to buy Lucy's products, but her business grew so much that she started having problems organizing it.

Your goal is to help Lucy organize her business. She asked her friend to build her a dashboard so she could analyze her business, but they only had time to make basic funcionality for Lucy. That's where you come in!

### Context
Lucy needs help building her website so she can control everything that goes in and out of the shop.

To start her business, Lucy:
- She borrowed $5,000 from her parents as seed money.
- She pays $200/month to sell at the playground on weekdays.
- She pays $50/day to sell at the farmers market on weekends.

Look up any other business concepts you think will be useful!

### What does Lucy need?
- The historic sales data has been imported, but Lucy would like to move to recording her sales through a web app.
- Lucy would also like to add, delete, and manage her product catalog using the website.
- Build Charts and Tables for Lucy to manage her daily sales.
- Build a dynamic report for Lucy to present her revenue, expenses, and profit to her parents.
- What insight can you give Lucy regarding her business? She's interested in hourly trends, performance over time, profit per day of week.
- A more professional design would inspire confidence in her business, give it any special touches you see fit.
- What else do you think Lucy would be happy to have?

Choose and build solutions for 2 (or more) items on this list, depending on what skills you want to show off. You will have a chance to tell us about additional work that you would do given more time, so don’t feel like you have to do everything. This should be 6-8 hours of total effort.
