# Repository Guidelines

## Project Structure & Module Organization

This repository is an Astro 5 personal portfolio. Page entry points live in `src/pages/`; `src/pages/index.astro` composes the home page. Reusable page sections belong in `src/components/`, shared document structure belongs in `src/layouts/`, and site-wide CSS is in `src/styles/global.css`. Static files are served unchanged from `public/`: keep project screenshots under `public/assets/images/`, technology and social icons in their existing asset subdirectories, and standalone files such as the resume at the `public/` root. Build output (`dist/`), Astro-generated files (`.astro/`), and dependencies are not committed.

## Build, Test, and Development Commands

- `npm install` installs the locked dependencies from `package-lock.json`.
- `npm run dev` starts Astro's local development server with hot reload.
- `npm run build` creates the production site in `dist/` and is the primary validation command.
- `npm run preview` serves the production build locally for final inspection.
- `npm run astro -- <command>` exposes Astro CLI utilities when needed.

Use the Node.js version supported by Astro 5. Commit lockfile updates whenever dependencies change.

## Coding Style & Naming Conventions

Follow the existing Astro and TypeScript style: two-space indentation, double quotes in `.astro` imports, and semicolons in frontmatter or JavaScript. Use PascalCase for components and layouts (`Techstack.astro`, `BaseLayout.astro`) and lowercase route filenames (`index.astro`). Keep page files focused on composition; place reusable sections in components. Prefer Tailwind utility classes for layout and visual changes, reserving `global.css` for shared rules. Use descriptive asset names and meaningful image `alt` text.

## Testing Guidelines

There is currently no automated test framework or coverage requirement. For every change, run `npm run build`, then use `npm run preview` to check navigation, responsive layouts, image paths, and external links. If tests are introduced, place them beside the feature or in a top-level `tests/` directory and add the corresponding npm script.

## Commit & Pull Request Guidelines

Recent history mixes short imperative messages with Conventional Commit prefixes. Prefer concise, scoped messages such as `feat: add project card` or `fix: correct resume link`. Pull requests should explain the user-visible change, list validation performed, and link relevant issues. Include before/after screenshots for layout, styling, or asset changes, and keep unrelated refactors out of the same PR.
