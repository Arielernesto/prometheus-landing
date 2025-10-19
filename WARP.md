# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a **Nuxt.js 4.x** application using Vue 3 and TypeScript. The project follows Nuxt's minimal starter structure and uses pnpm as the package manager.

## Common Commands

### Development
```bash
pnpm dev          # Start development server on http://localhost:3000
pnpm build        # Build for production
pnpm generate     # Generate static site
pnpm preview      # Preview production build locally
pnpm install      # Install dependencies
```

### Project Structure
- `app/` - Main application directory
  - `app.vue` - Root component (currently using NuxtWelcome)
- `nuxt.config.ts` - Nuxt configuration
- `public/` - Static assets served at root
- `.nuxt/` - Generated build files and TypeScript definitions

## Architecture Notes

**Nuxt.js App Router**: This project uses Nuxt 4's file-based routing system. Currently minimal with only the root `app.vue` component.

**TypeScript Configuration**: Uses Nuxt's generated TypeScript config with references to `.nuxt/tsconfig.*.json` files. The main `tsconfig.json` should not be modified directly.

**Development Flow**: 
- Nuxt auto-generates TypeScript definitions in `.nuxt/types/`
- Uses compatibility date `2025-07-15` for Nuxt features
- DevTools are enabled by default

**Key Patterns**:
- Pages should be created in `pages/` directory (not yet present)
- Components go in `components/` directory (not yet present) 
- Composables in `composables/` directory for shared logic
- Server API routes in `server/api/` directory
- Use `~/` alias for project root imports

## Framework-Specific Notes

- This is a **minimal starter** - most Nuxt directories (pages, components, layouts, etc.) don't exist yet
- Adding a `pages/` directory will automatically enable Nuxt's file-based routing
- Auto-imports are enabled for Vue APIs, Nuxt composables, and components
- Use `nuxt prepare` after major config changes to regenerate types
