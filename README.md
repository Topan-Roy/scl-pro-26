# TM Engineering College, Dhaka Website

This project is a multi-page institute portal built with Next.js App Router, React, Tailwind CSS v4, and a small amount of CSS Modules for page-specific styling.

It includes a custom homepage, department/program detail pages, shared notice and calendar sections, responsive navigation, custom footer, cursor trail effect, and motion-enhanced UI across the site.

## Main Pages

- `/` Home
- `/about`
- `/administration`
- `/academics`
- `/departments`
- `/departments/computer`
- `/departments/electrical`
- `/departments/civil`
- `/departments/mechanical`
- `/admission`
- `/notice`
- `/gallery`
- `/contact`
- `/innovation-lab`
- `/programs/[slug]` dynamic program detail pages

## Features

- Responsive multi-level navbar
- Shared right sidebar with notice board and calendar
- Animated homepage hero and image sections
- Dedicated technology and program detail pages
- Admission, result, contact, gallery, and about pages
- AR/Three.js preview section in `innovation-lab`
- Custom favicon and branded header logo
- Global cursor light trail effect

## Tech Stack

- Next.js `16.2.2`
- React `19.2.4`
- TypeScript
- Tailwind CSS `4`
- CSS Modules
- Three.js

## Scripts

Use `npm.cmd` in PowerShell if normal `npm` is blocked by execution policy.

```bash
npm.cmd run dev
npm.cmd run dev:https
npm.cmd run build
npm.cmd run start
npm.cmd run lint
```

## Project Structure

- `src/app/layout.tsx`
  Root layout, metadata, favicon hookup, shared header/footer, cursor trail

- `src/app/page.tsx`
  Homepage layout and main institute sections

- `src/app/inner-page-ui.tsx`
  Shared Tailwind-based inner page shell and sidebar helpers

- `src/app/departments/department-ui.tsx`
  Shared UI for department overview and department detail pages

- `src/app/programs/[slug]/page.tsx`
  Dynamic program detail route

- `src/app/programs/program-detail-page.tsx`
  Shared program detail page UI

- `src/components/site-header.tsx`
  Responsive navbar and branded header

- `src/components/site-footer.tsx`
  Footer layout

- `src/components/cursor-trail.tsx`
  Global glowing cursor trail effect

- `src/components/ar-viewport.tsx`
  AR/WebXR preview component

- `src/data/site.ts`
  Navigation, institute identity, notice board, calendar, shared site data

- `src/data/programs.ts`
  Program tiles and dynamic program detail content

- `src/data/departments.ts`
  Department detail content and shared department metadata

## Styling Notes

- Global styles and shared motion utilities live in `src/app/globals.css`
- Tailwind is loaded using `@import "tailwindcss"`
- Some legacy pages still use CSS Modules where it fits better
- Motion is used across header, footer, home, department pages, gallery, about, and program detail views

## Development Notes

- The project uses the App Router structure under `src/app`
- Shared data-driven navigation comes from `src/data/site.ts`
- Many UI sections are intentionally built from reusable shared components so updates reflect across multiple pages
