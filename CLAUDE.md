# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Type-check then bundle for production (dist/)
npm run preview  # Serve the production build locally
npx tsc --noEmit # Type-check only, no emit
```

## Architecture

React + TypeScript + Vite app.

- `index.html` — entry point; mounts `/src/main.tsx`
- `src/main.tsx` — renders `<App>` into `#app` via `createRoot`
- `src/App.tsx` — root React component
- `src/style.css` — global styles
- `vite.config.ts` — Vite config with `@vitejs/plugin-react`
- `tsconfig.json` — TypeScript config (bundler mode, `react-jsx`, strict linting)

New components go in `src/` as `.tsx` files. There is no router or state management library yet.
