# Contributing to FM Skin Builder Docs

Thanks for helping improve the FM Skin Builder documentation! This guide will get you set up.

## Quick Start

```bash
# Fork and clone the repo
git clone https://github.com/<your-username>/docs-fm-skin-builder.git
cd docs-fm-skin-builder

# Install dependencies
npm install --legacy-peer-deps

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview your changes.

## Project Structure

Documentation pages live in `src/app/` organised by section:

```
src/app/
├── getting-started/    # Installation, first steps
├── workspace/          # Workspace setup and usage
├── editors/            # Editor guides
├── assets/             # Asset management
├── building/           # Building skins
├── references/         # Reference material
├── troubleshooting/    # Common issues and fixes
├── community/          # Community resources
└── _meta.global.tsx    # Navigation structure
```

Each section contains `.mdx` files (Markdown with JSX support).

## Adding or Editing a Page

1. Find the appropriate section directory under `src/app/`
2. Create or edit a `page.mdx` file
3. If adding a new page, add an entry in `src/app/_meta.global.tsx` so it appears in the sidebar

## Submitting Changes

1. Create a branch from `main` (e.g. `docs/fix-typo-in-installation`)
2. Make your changes
3. Preview locally with `npm run dev`
4. Push and open a pull request

### What to expect

- A CI build check runs automatically on your PR
- A maintainer will review your changes (usually within a few days)
- Once approved, your PR will be merged

## Style Guide

- Write in plain, clear English
- Use second person ("you") when addressing the reader
- Keep paragraphs short
- Include screenshots where they help explain UI steps

## Need Help?

Open an issue if you're unsure about something or want to discuss a larger change before starting work.
