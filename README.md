# Bekti Goto College Website

This project is now a complete multi-page institute portal built with Next.js App Router and Tailwind CSS.

## Available pages

- `/` Home
- `/about`
- `/administration`
- `/academics`
- `/departments`
- `/admission`
- `/notice`
- `/gallery`
- `/contact`
- `/innovation-lab` (includes WebXR + Three.js AR preview component)

## Scripts

Use `npm.cmd` in PowerShell if execution policy blocks `npm`.

```bash
npm.cmd run dev
npm.cmd run dev:https
npm.cmd run lint
npm.cmd run build
```

## Project structure highlights

- Shared navbar and footer: `src/components/site-header.tsx`, `src/components/site-footer.tsx`
- Site navigation/data config: `src/data/site.ts`
- Home page: `src/app/page.tsx`
- Inner pages shared styling: `src/app/inner-page.module.css`
- AR lab component: `src/components/ar-viewport.tsx`
- Tailwind config: `postcss.config.mjs` and `@import "tailwindcss"` in `src/app/globals.css`
