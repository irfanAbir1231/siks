This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Backend Integration Guide (for teammate)

- **API routes:**

  - Add your API endpoints in `app/api/` (Next.js route handlers).
  - Example: `app/api/blogs/route.ts` for blog CRUD, `app/api/prayer-times/route.ts` for prayer times, etc.
  - Use `export async function GET/POST/PUT/DELETE` as per Next.js docs.

- **Database:**

  - Use any Node.js ORM (Prisma, Mongoose, Drizzle, etc.) or raw SQL.
  - Add your DB connection logic in `lib/` or directly in API route files.
  - Add your `.env` for DB credentials. `.env.example` if you want to share config.

- **Frontend hooks:**

  - Blog submission: see `app/blogs/submit/page.tsx` (`handleSubmit`).
  - Comments/likes: see `app/blogs/[slug]/page.tsx` (`handleComment`, `handleLike`).
  - Prayer times admin: see `app/admin/prayer-times/page.tsx` (`handleSubmit`).
  - All these currently just `console.log`—replace with fetch/axios to your API.

- **Example API usage:**

  ```js
  // In a form handler
  await fetch("/api/blogs", { method: "POST", body: JSON.stringify(data) });
  // or
  await fetch("/api/prayer-times", {
    method: "PUT",
    body: JSON.stringify(times),
  });
  ```

- **Testing:**

  - Use Postman or curl to hit your API endpoints directly.
  - Frontend expects JSON responses.

- **Auth:**

  - Not implemented. Add JWT/session logic in API routes if needed.

- **Questions?**
  - Ping the frontend dev or check the code comments for where to hook up your logic.
