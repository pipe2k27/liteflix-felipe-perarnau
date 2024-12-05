# Getting setup

1. Fork the project and run it locally
2. [Here](https://www.figma.com/design/8IrWHW2aUQZN6ILycX6ug7/Liteflix-Challenge?node-id=0-1&node-type=canvas)
Before starting this challenge, please ensure you have forked this repository and can run it locally.

To run the project:

```bash
npm install
npm run dev
```

## Webflix - Live Coding Challenge

### UI Section
In this challenge, you will implement the desktop main landing page showing "La Casa de Papel" at [Figma design](https://www.figma.com/design/8IrWHW2aUQZN6ILycX6ug7/Liteflix-Challenge?node-id=0-1&node-type=canvas).

You will be using pure css (the `index.css` file).

Buttons and links are to be implemented visually with no effects (no redirects or behaviors).

To handle the endpoint's images correctly, please refer to the developer documentation: https://developer.themoviedb.org/docs/image-basics

### API
To fetch the current movies in the apis, you will need to implement the api endpoints `api/featured` & `api/popular` to populate the landing page.
You are also expected to store all movies fetched from the api into the database, which uses Prisma and sqlite to store data. (Prisma knowledge not required)

#### Tips & Tricks
- We want to see an implementation as pixel perfect as possible.
- The project uses Next.js Pages & Prisma. Leveraging its specific features is available but not required
- You may consult outside sources like documentation, web search or AI but absolutely cannot copy-paste code of any sort.

This project uses next.js pages, prisma & sqlite.

You can view the database with
```
npx prisma studio
```
Documentation for Prisma is viewable at https://www.prisma.io/docs
