# Ken Audie S. Lucero - Portfolio

Personal developer portfolio built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**. Dark, tech-focused aesthetic with smooth section reveals, a projects showcase, publications, education, and contact details.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```text
src/
  app/          # Next.js App Router files
  components/   # Portfolio sections and UI
  context/      # Theme state
  data/         # Centralized portfolio content
  hooks/        # Shared UI hooks
  types/        # TypeScript type definitions
```

## Customization

Most portfolio content is centralized in `src/data/data.ts`.

- **Projects**: edit the `projects` array
- **Skills**: edit the `skillGroups` array
- **Personal info**: edit the `personalInfo` object
- **Publications**: edit the `publications` array

## Contact Form

The contact form uses Formspree through an environment variable. Create `.env.local`:

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

Restart `npm run dev` after changing environment variables. If the variable is missing, the form disables itself and the direct email link remains available.

## Deployment

The project is ready for Vercel deployment.

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Add `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in Vercel Project Settings if you want the contact form enabled.
4. Deploy with the default Next.js settings.

Before deploying, run:

```bash
npm run lint
npm run typecheck
npm run build
npm audit
```

## Useful Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
