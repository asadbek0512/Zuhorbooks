# ZuhorBooks

Backend for zuhorbooks.uz — an online book platform. REST API built with Express.js, MongoDB, and server-rendered admin views via EJS templates.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Express.js + TypeScript |
| Database | MongoDB + Mongoose ODM |
| Views | EJS templates (server-side rendering) |
| Auth | JWT middleware |
| Uploads | multer (member photos, book covers) |
| Deploy | Docker + VPS + Nginx |

## Getting Started

**Prerequisites:** Node.js 18+, npm, MongoDB

```bash
git clone <repo-url>
cd Zuhorbooks

npm install

cp .env.example .env
# Fill in: MONGO_URI, JWT_SECRET, PORT

npm run dev
```

## Docker

```bash
docker compose up -d
```

## Features

**REST API**
- **Members** — signup, login, logout, profile update with photo upload, top members list
- **Products (Books)** — full catalog, filtering by category and collection, individual book detail, view tracking
- **Orders** — create orders, status management (PAUSE / PROCESS / FINISH), order history per member

**Server-Rendered Views (EJS)**
- Public pages — homepage with popular books, new arrivals, active users, events
- Login and signup pages
- Admin panel pages — book management, order management, member management
- All rendered server-side via EJS templates

**Auth**
- JWT-based — signup/login returns token, stored client-side
- `verifyAuth` middleware for protected routes (full auth required)
- `retrieveAuth` middleware for optional auth (enhances response with user context)

## Project Structure

```
src/
├── controllers/       # Route handlers (member, product, order, restaurant)
├── models/            # Mongoose models (Member, Product, Order)
├── views/             # EJS templates
│   ├── home.ejs       # Homepage
│   ├── products.ejs   # Products page
│   ├── users.ejs      # Users management (admin)
│   ├── login.ejs
│   ├── signup.ejs
│   └── includes/      # Shared partials (header, footer, nav)
├── libs/
│   ├── enums/         # Shared enums
│   ├── types/         # TypeScript types
│   └── utils/         # multer uploader, auth helpers
├── router.ts          # Public API routes
├── router-admin.ts    # Admin routes
└── server.ts          # App entry point
uploads/
├── members/           # Profile photos
└── products/          # Book cover images
```

## Deployment

VPS: Docker container behind Nginx with SSL. Deployed via `deploy.sh`.

## Live

[https://zuhorbooks.uz](https://zuhorbooks.uz)
