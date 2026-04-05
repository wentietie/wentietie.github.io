<!-- Generated: 2026-04-05 | Updated: 2026-04-05 -->

# web-docs

## Purpose
A personal documentation site built with Rspress (Vite-based documentation framework). Contains comprehensive learning notes covering AI/LLM, JavaScript, frontend frameworks, backend technologies, and server administration.

## Key Files

| File | Description |
|------|-------------|
| `package.json` | Project dependencies - Rspress 1.37.4 with API docgen, preview, and typedoc plugins |
| `rspress.config.ts` | Rspress configuration defining site navigation, sidebar structure, and plugin setup |
| `tsconfig.json` | TypeScript configuration |
| `README.md` | Project readme |
| `src/index.tsx` | React component source for API documentation demo |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `src/` | React component source code (see `src/AGENTS.md`) |
| `docs/` | All documentation content in Markdown (see `docs/AGENTS.md`) |
| `.github/workflows/` | GitHub Actions CI/CD workflows for deployment |
| `.omc/` | oh-my-claudecode plugin state and memory |
| `.idea/` | IntelliJ IDEA project configuration |

## For AI Agents

### Working In This Directory

- **Framework**: Rspress v1.37.4 - Vite-based static site generator for documentation
- **Content root**: All docs are in `/docs/` directory (configured as `root` in rspress.config.ts)
- **Commands**: `npm run dev` (dev server), `npm run build` (production build), `npm run preview` (preview build)
- **Language**: Documentation is written in Simplified Chinese (中文)

### Development Notes

- The `docs` directory is the document root (not the project root)
- Navigation sidebar is configured in `rspress.config.ts`
- `pluginApiDocgen` parses `./src/index.tsx` for API documentation
- `pluginPreview` enables live preview for code blocks

## Dependencies

### External
- Rspress 1.37.x - Documentation framework
- React 18.x - UI framework (for src/components)
- TypeScript 5.x - Type safety

<!-- MANUAL: -->
