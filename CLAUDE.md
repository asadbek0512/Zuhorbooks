# ZuhorBooks Backend

Express.js + TypeScript REST API for the ZuhorBooks book platform — catalog management, orders, member auth, and server-rendered admin views.

## Tech Stack

- Framework: Express.js + TypeScript
- Database: MongoDB + Mongoose
- Views: EJS templates (server-side rendered)
- Auth: JWT
- File uploads: multer
- Deploy: Docker + VPS

## Architecture

```
src/
├── controllers/        # Route handlers — receive request, call service, send response
├── models/             # Mongoose models
├── schema/             # Shared schema definitions
├── views/              # EJS templates
│   └── includes/       # Partial views (header, footer, etc.)
├── libs/
│   ├── enums/          # Shared enums
│   ├── types/          # TypeScript types
│   └── utils/          # Helper functions
└── public/             # Static assets
    ├── css/
    ├── img/
    └── js/

uploads/
├── members/            # Profile images
└── products/           # Book cover images
```

## Key Conventions

- Controllers handle routing and call model methods directly (no separate service layer)
- EJS templates in `src/views/` for all server-rendered pages
- File uploads stored in `uploads/` via multer middleware
- No `console.log` in production — use Morgan or Winston logger
- JWT validation middleware applied per-route, not globally

## Auth Flow

1. POST `/auth/login` — validate credentials, return JWT
2. Middleware reads `Authorization: Bearer {token}` header
3. Decoded user data attached to `req.user`

## Commands

```bash
npm run dev     # Dev server with ts-node-dev (auto-restart)
npm run build   # TypeScript compile to dist/
npm start       # Run compiled dist/
```

## Docker

```bash
docker compose up -d    # Dev
```

## Environment Variables

See `.env.example`. Key variables:

- `MONGO_URI` — MongoDB connection string
- `JWT_SECRET` — Token signing key
- `PORT` — Server port

## Deployment

VPS: Docker container behind Nginx. Deployed via `deploy.sh`.
