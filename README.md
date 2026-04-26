# Revlio Support

A customer support ticketing system for tracking user inquiries, agent assignments, and resolution metrics.

## What this project does

simplify your support requests, track agent performance, and keep your customers happy with a clean ticketing system.

## Project goal

A support queue for triaging tickets, monitoring agents, and response times.

## Main features

- Ticket queue management
- Priority tagging
- Agent assignment
- Response time analytics

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide React
- Supabase client setup with safe fallback

## Folder structure

```text
app/
components/
data/
lib/
public/
types/
```

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

## Deploy to Vercel

1. Push this folder to its own GitHub repository.
2. Import that repository in Vercel as a Next.js project.
3. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` when the backend is ready.
4. Deploy. The app still works without those variables because it falls back to local dummy data.

## Supabase-ready notes

This project currently reads from `data/dummy.ts` through `lib/data-source.ts`.
The Supabase client in `lib/supabase.ts` only initializes when both public environment
variables are present, so the app does not crash when `.env` is missing.

## Credit

Developed by @balrev
