# AI Agent Guide — ZuhorBooks Backend

This file helps AI coding agents understand the Express.js backend quickly.

## What is this?

An Express.js + TypeScript REST API for a book platform. Uses MongoDB + Mongoose for data, EJS for server-rendered views, and multer for file uploads. No NestJS, no GraphQL.

## Quick orientation

| What | Where |
|---|---|
| Route handlers | `src/controllers/` |
| Mongoose models | `src/models/` |
| EJS templates | `src/views/` |
| Shared schema | `src/schema/` |
| Enums | `src/libs/enums/` |
| Types | `src/libs/types/` |
| Helper functions | `src/libs/utils/` |
| Uploaded files | `uploads/` |
| Static assets | `src/public/` |

## Architecture decisions

- Plain Express.js — no NestJS decorators, modules, or dependency injection
- Controllers are thin: parse request, call model, return response
- EJS templates for all server-rendered pages (admin views, public pages)
- multer middleware for file uploads — files go to `uploads/{type}/`
- JWT middleware applied manually per route group

## Key patterns to follow

- New feature: add controller to `src/controllers/`, model to `src/models/`, register route in the main app file
- New view: add EJS template to `src/views/`, use `includes/` for shared partials
- File upload: use multer middleware, store in `uploads/{type}/`
- Validation: validate input at the controller level before touching the model

## Auth flow

1. POST `/auth/login` — controller validates credentials against model
2. On success: `jwt.sign()` creates token, returned in response body
3. Protected routes: JWT middleware reads `Authorization: Bearer` header, attaches `req.user`

## Build and verify

```bash
npm run build   # TypeScript compile — catches type errors
npm start       # Run production build
npm run dev     # Dev server with auto-restart
```

## Things to avoid

- Using NestJS patterns (decorators, `@Injectable`, modules)
- Using `console.log` — use Morgan for request logging, Winston for app logs
- Storing files outside `uploads/` directory
- Hardcoding MongoDB URI or JWT secret — always use environment variables
