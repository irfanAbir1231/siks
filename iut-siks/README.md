## Backend Integration Guide

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
