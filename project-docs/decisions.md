# Decision Log

## 2026-05-07 - Use AGENTS.md as the main project rule file

- Decision: `AGENTS.md` is the primary rule file for AI-assisted development in this working tree.
- Reason: The workflow needs a stable first-read file for all future agent threads.
- Outcome: `AGENTS.md` now defines the development workflow and points upstream contribution work to `CLAUDE.md`.

## 2026-05-07 - Use project-docs/ as project memory

- Decision: `project-docs/` stores status, progress, handover notes, decisions, and bug knowledge.
- Reason: Future main, frontend, backend, and bug-fixing threads need a shared memory folder.
- Outcome: Added initial memory files and update expectations.

## 2026-05-07 - Keep this setup docs-only

- Decision: Do not add workflow scripts or full automation for this setup.
- Reason: The requested first version is a lightweight documentation workflow.
- Outcome: No dependencies, scripts, or automation files were added.

## 2026-05-07 - Build scam detection frontend as a static prototype

- Decision: Add the first scam detection frontend under `scam-detection-web/` using plain HTML, CSS, and JavaScript.
- Reason: The provided zip contains UI source files but no runnable manifest, and `node`/`npm` are unavailable in the current environment.
- Outcome: The prototype can be opened directly in a browser and demonstrates the core user flow without a build step.

## 2026-06-17 - Migrate scam detection frontend to React + Vite

- Decision: Move `scam-detection-web/` to React + Vite + JavaScript while preserving the existing visual design and CSS class names.
- Reason: Future frontend work will be easier to maintain with state-driven components instead of direct DOM manipulation.
- Outcome: The UI is now mounted through Vite and React, with the original styling and browser-side prototype logic kept intact.

## 2026-06-19 - Modularize React App and Integrate React Router

- Decision: Split the single-file React App into structured components (`src/components/`, `src/views/`, `src/sections/`, `src/utils/`, `src/data/`) and configure React Router (v8) nested routing.
- Reason: As the project scope increases, keeping all code inside a single `App.jsx` makes maintenance difficult and hinders collaborative feature additions. A routing library is required to replace custom hash-based route state triggers.
- Outcome: Completed components split and configured the RouterProvider in `main.jsx`. Dynamic components inherit state securely via React Router's standard `Outlet` context, and compile validation passed with `npm run build`.
