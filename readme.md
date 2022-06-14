# Greenfield

Opinionated full-stack web application starter template

> **NOT PRODUCTION READY! NOT EVEN EXPERIMENTATION READY!**

## Quick start

```sh
pnpm dlx degit rakkasjs/greenfield my-project
cd my-project
git init && git checkout -b main
pnpm install
pnpm run dev
```

## Features

- Batteries included: Start building right away, scale up as needed
- Bleeding edge stack: Use technology from the future
- API layer optional: Use `useServerSideQuery` and `useServerSideMutation` or plain HTML forms
- End-to-end static typing: Strongly typed from database to client
- Lightning fast development server: Get immediate feedback on changes
- Complete code quality tooling: Type checking, linting, testing, commit hooks all set up

## Stack

- [Rakkas](https://rakkasjs.org): Web application framework
  - [React](https://reactjs.org): User interface library
  - [Vite](https://vite.net): Development server and build tool
- [Prisma](https://prisma.io): Type-safe ORM
  - [SQLite](https://sqlite.org): SQL database
- [Mantine](https://mantine.dev): UI component library
  - [Emotion](https://emotion.sh): CSS-in-JS library

## Code quality tools

- [TypeScript](https://www.typescriptlang.org): Strongly typed JavaScript superset
- [ESLint](https://eslint.org): JavaScript/TypeScript linter
- [Husky](https://typicode.github.io/husky): Git hooks manager
- [lint-staged](https://github.com/okonet/lint-staged): Check/format staged files before commit
- [Prettier](https://prettier.io): Opinionated code formatter
- [Vitest](https://vitest.dev): Testing framework

## Missing pieces

- End-to-end testing (Cypress? Playwright? Vitest + Puppeteer?)
- Background jobs (BullMQ? Bee Queue?)
- Web sockets and realtime
- File uploads
- Email (Node Mailer?)
