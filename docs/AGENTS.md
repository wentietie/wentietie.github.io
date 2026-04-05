<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-04-05 | Updated: 2026-04-05 -->

# docs

## Purpose
Root directory for all documentation content. This is the Rspress document root (configured as `root` in rspress.config.ts). Contains learning notes organized by technology topic, all written in Simplified Chinese.

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `ai/` | AI and LLM documentation (see `ai/AGENTS.md`) |
| `JavaScript/` | JavaScript/TypeScript learning notes (see `JavaScript/AGENTS.md`) |
| `formwork/` | Frontend framework notes - Vue2, Vue3, Spring5, Spring6 (see `formwork/AGENTS.md`) |
| `notes/` | Quick reference notes - JS, CSS, Browser, Node (see `notes/AGENTS.md`) |
| `tang/` | Comprehensive learning notes - Docker, ES, MySQL, K8s, Java, etc. (see `tang/AGENTS.md`) |
| `gongjushu/` | Engineering tools - Git, Webpack (see `gongjushu/AGENTS.md`) |
| `harmony/` | HarmonyOS development documentation (see `harmony/AGENTS.md`) |

## For AI Agents

### Content Structure

- All documentation is in Simplified Chinese (中文)
- Uses Markdown format with images stored in local `images/` subdirectories
- Navigation is defined in `rspress.config.ts` sidebar and nav sections
- `docs/index.md` is typically the landing page

### Naming Conventions

- Files often named with part numbers (part1.md, part2.md)
- Chinese filenames used throughout the tang/ section
- Images stored in sibling `images/` directories

## Dependencies

### Internal
- All subdirectories contain cross-references to each other via navigation

<!-- MANUAL: -->
