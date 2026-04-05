<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-04-05 | Updated: 2026-04-05 -->

# src

## Purpose
Contains React component source files used by the Rspress API documentation plugin. The components here are parsed to generate live API documentation.

## Key Files

| File | Description |
|------|-------------|
| `index.tsx` | Main entry point - exports components for API doc generation |

## For AI Agents

### Working In This Directory

- Components are parsed by `react-docgen-typescript` via `@rspress/plugin-api-docgen`
- Used for demonstrating component props and API documentation
- Changes here affect the auto-generated API docs site

### Related Configuration

- Entry configured in `rspress.config.ts` under `pluginApiDocgen.entries.button`

## Dependencies

### External
- React 18.x
- TypeScript

<!-- MANUAL: -->
