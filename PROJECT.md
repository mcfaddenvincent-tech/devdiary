# DevDiary.so — Project Bible

## What we're building
A structured build-in-public journaling platform where developers
document their projects publicly as they build them. Each project
gets a public URL. Each entry captures what was built, what was
learned, and what's blocking progress.

This is a PRACTICE PROJECT — the goal is to learn full-stack
development by shipping something real.

---

## Live URLs
- Production: https://devdiary-five.vercel.app
- GitHub repo: https://github.com/mcfaddenvincent-tech/devdiary
- Supabase project URL: https://fbsxfhjupcrbvoigqwav.supabase.co

---

## Tech Stack
- Framework: Next.js 16 (App Router) + TypeScript
- Styling: Tailwind CSS
- Database + Auth: Supabase
- Hosting: Vercel (auto-deploys on every GitHub push)
- Repo: GitHub (mcfaddenvincent-tech/devdiary)

NO payments for MVP. NO AI features for MVP. Keep it simple.

---

## Local project location
/Users/mcfaddenvincent/Projects/Claude/devdiary

---

## Environment Variables
### .env.local (local machine — never commit this)
NEXT_PUBLIC_SUPABASE_URL=https://fbsxfhjupcrbvoigqwav.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[your anon key]

### Vercel Environment Variables (already added to Vercel dashboard)
NEXT_PUBLIC_SUPABASE_URL=https://fbsxfhjupcrbvoigqwav.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[your anon key]

---

## MVP Screens (build in this order)

### Public (no login needed)
1. Landing page — `/`
   - Hero headline, subtitle, CTA button
   - Three feature cards
   - Example project preview

2. Public project page — `/u/[username]/[project-slug]`
   - Project name, description, status, tags
   - All diary entries in reverse chronological order

### Private (logged in)
3. Dashboard — `/dashboard`
   - List of user's projects
   - Create new project button

4. New/Edit project — `/dashboard/projects/new`
   - Fields: name, description, status, tags, public/private toggle

5. Project detail — `/dashboard/projects/[id]`
   - List of entries
   - Add new entry button

6. New/Edit entry — `/dashboard/projects/[id]/entries/new`
   - Fields: title, what I built, what I learned, blockers, links

### Auth
7. Login page — `/login`
8. Signup page — `/signup`

---

## File Structure
```
devdiary/
├── app/
│   ├── page.tsx                           (landing page)
│   ├── login/page.tsx
│   ├── signup/page.tsx
│   ├── dashboard/
│   │   ├── page.tsx                       (projects list)
│   │   └── projects/
│   │       ├── new/page.tsx
│   │       └── [id]/
│   │           ├── page.tsx               (entries list)
│   │           └── entries/
│   │               └── new/page.tsx
│   ├── u/
│   │   └── [username]/
│   │       └── [slug]/page.tsx            (public project page)
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   ├── EntryCard.tsx
│   └── AuthForm.tsx
├── lib/
│   ├── supabase.ts                        (supabase client)
│   └── types.ts                           (typescript types)
├── PROJECT.md                             (this file)
└── .env.local                             (never commit this)
```

---

## Database Schema (already created in Supabase)

### profiles
| column       | type      | notes                        |
|--------------|-----------|------------------------------|
| id           | uuid      | PK, references auth.users.id |
| username     | text      | unique, used in public URLs  |
| display_name | text      |                              |
| bio          | text      | optional                     |
| created_at   | timestamp |                              |

### projects
| column      | type      | notes                                          |
|-------------|-----------|------------------------------------------------|
| id          | uuid      | PK                                             |
| user_id     | uuid      | FK → profiles.id                               |
| name        | text      |                                                |
| slug        | text      | URL-safe version of name                       |
| description | text      |                                                |
| status      | text      | 'building','shipped','paused','abandoned'       |
| tags        | text[]    | array of strings                               |
| is_public   | boolean   | default true                                   |
| created_at  | timestamp |                                                |
| updated_at  | timestamp |                                                |

### entries
| column       | type      | notes            |
|--------------|-----------|------------------|
| id           | uuid      | PK               |
| project_id   | uuid      | FK → projects.id |
| user_id      | uuid      | FK → profiles.id |
| title        | text      |                  |
| what_i_built | text      |                  |
| what_learned | text      |                  |
| blockers     | text      | optional         |
| links        | text[]    | array of URLs    |
| created_at   | timestamp |                  |

### Row Level Security
- profiles: anyone can read, only owner can write
- projects: public projects readable by all, only owner can write
- entries: readable if parent project is public, only owner can write
- Auto-trigger creates a profile row when a new user signs up

---

## Design Direction
- Background: #0a0a0a (near black)
- Accent: #c8f04a (lime green)
- Display font: Instrument Serif (Google Fonts) — headings
- Mono font: DM Mono (Google Fonts) — labels, nav, code
- Body font: DM Sans (Google Fonts)
- Aesthetic: dark, editorial, developer-focused. Clean and minimal.
- No gradients, no purple, no generic AI aesthetics

---

## Build Progress

### Week 1 — Foundation
[x] Scaffold Next.js + Tailwind project
[x] Push to GitHub
[x] Connect GitHub to Vercel (auto-deploy on push)
[x] Supabase project created
[x] .env.local created with Supabase keys
[x] Vercel environment variables added
[x] Database schema created (profiles, projects, entries)
[x] Row Level Security policies added
[x] Auto-profile trigger added
[x] Install Supabase client (npm install @supabase/supabase-js)
[x] Create lib/supabase.ts
[x] Build landing page (replace default Next.js page)
[x] Deploy and confirm live at custom domain

### Week 2 — Auth
[ ] Set up Supabase Auth (email + password)
[ ] Build /login page
[ ] Build /signup page
[ ] Protect /dashboard routes (redirect if not logged in)
[ ] Build dashboard page (empty state first)

### Week 3 — Core Features
[ ] Build new project form + save to Supabase
[ ] Show projects list on dashboard
[ ] Build project detail page (entries list, empty state)
[ ] Build new entry form + save to Supabase
[ ] Show entries on project detail page

### Week 4 — Public Pages + Polish
[ ] Build public project page /u/[username]/[slug]
[ ] Test full user flow start to finish
[ ] Fix bugs, improve mobile layout
[ ] Write first real diary entry
[ ] Share publicly

---

## How to start a Claude Code session
1. Open terminal
2. Run: cd /Users/mcfaddenvincent/Projects/Claude/devdiary
3. Run: claude
4. Paste this entire PROJECT.md as your first message
5. Tell Claude exactly what you're working on today

### Example prompt after pasting PROJECT.md:
"I'm on Week 1. I need to install the Supabase client,
create lib/supabase.ts, and replace app/page.tsx with
the landing page. Walk me through it step by step."

### Key rule for Claude Code sessions
Tell Claude ONE focused goal per session.
Small focused sessions produce better code than asking
it to build everything at once.

---

## Next immediate steps
1. Push to GitHub — Vercel auto-deploys
2. Confirm landing page is live at https://devdiary-five.vercel.app
3. Start Week 2: set up Supabase Auth (email + password)
4. Build /login and /signup pages

---

## Useful links
- Next.js App Router docs: https://nextjs.org/docs
- Supabase Auth docs: https://supabase.com/docs/guides/auth
- Tailwind docs: https://tailwindcss.com/docs
- Supabase + Next.js quickstart: https://supabase.com/docs/guides/getting-started/quickstarts/nextjs
