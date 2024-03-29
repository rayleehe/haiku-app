This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

PocketBase setup:
1. Download pocketbase from [pocketbase.io](https://pocketbase.io/)
2. Copy pocketbase executable into this project directory, start serve with ./pocketbase serve
3. Open AdminUI, create a new collection with Name: ```responses``` and two text fields: ```prompt``` and ```response```

App setup:
1. Create a ```.env``` file with one line ```API_KEY=...``` and replace this with an OpenAI chatGPT key.
2. With pocketbase running simply ```npm run dev```

## Design Choices
1. page.js and PromptForm.js contain the primary business logic.
2. CSS modules are used for styling.
3. PocketBase used as an easily created local sql-like database. User queries can be viewed at your created collection through ```http://127.0.0.1:8090/_/```
