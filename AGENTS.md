# AGENTS.md — HateMyPDF

Instructions for autonomous coding agents (GitHub Copilot coding agent, Gemini CLI, Reticle, and others) working in this repository.

## Project Overview

HateMyPDF is an Astro-based platform offering 110+ fast, browser-based file tools (PDF editing, format conversion, developer utilities, text tools). Client-side processing is the core product differentiator: files are manipulated locally in browser memory using HTML5 APIs, WebAssembly, and `pdf-lib`. No files are uploaded to any server.

SEO, Core Web Vitals, accessibility, and strict privacy are treated as first-class requirements.

## Dev Environment Setup

- **Package Manager**: npm
- **Install Dependencies**: `npm install`
- **Start Local Dev Server**: `npm run dev`
- **Build for Production**: `npm run build`
- **Preview Production Build**: `npm run preview`

## Build & Verification Instructions

- Always run the production build before finishing: `npm run build`
- Verify the build generates static HTML pages (e.g., 131+ routes in `dist/`).
- Inspect tool routes (`/tools/[slug]`) and catalog routes (`/tools`, `/pdf`, `/convert`, `/dev`, `/daily`) to confirm zero rendering errors or client script breakages.
- Never open a PR or commit changes with known build errors.

## Design & UI System Conventions

- **Color Palette**: Strictly Black, Green, and White color combo:
  - Backgrounds: `#0E0F10` (primary dark), `#121315` (card bg), `#181819` (elevated elements)
  - Borders: `#3a3a3b` (dashed/subtle), `#2a2b2e`
  - Accents: `#22c55e` (primary green), `#0d6e38` (button green), `#168a4a` (button border)
  - Typography: `#ffffff`, `#E5E5E5` (primary white), `#a3a3a3` / `#737373` (neutral grays)
  - **No multi-colored accents**: Do not introduce amber, blue, red, purple, or orange colors into tool UIs unless strictly necessary for syntax highlighters.
- **Icons & Symbols**:
  - **No emojis**: Never use emojis (e.g. ⚖️, 🗜️, 🪶, 🔒) in the UI or tool copy.
  - **No unicode symbols**: Do not use raw character symbols like `&rarr;`, `&darr;`, `→`, `↓`, `✓`, or `✕`.
  - **Proper SVG icons**: Use clean Lucide icons or inline SVGs with standard 2px stroke width.
- **Pipeline Tool UX**:
  - Present file tools in a clean, sequential pipeline:
    1. **Upload**: Minimal dropzone with computer file picker (`for="file-uploader-input"`).
    2. **Configure**: Compact settings and options without walls of text.
    3. **Download**: Explicit verification step (showing before/after metrics) before downloading. Never auto-download without user confirmation.

## Project Structure

- `src/pages/` — Astro pages, hubs (`/tools`, `/pdf`, `/convert`, `/dev`, `/daily`), and routes
- `src/pages/tools/[slug].astro` — Universal client-side execution engine for all 110 tools
- `src/components/` — Shared UI components (`Header.astro`, `Footer.astro`, `DashedCard.astro`, `PillBadge.astro`, etc.)
- `src/layouts/Layout.astro` — Main page shell with SEO, JSON-LD, and OpenGraph metadata
- `src/content/blog/` — Content collection markdown guides and technical articles
- `src/styles/globals.css` — Tailwind CSS v4 design tokens and base styles

## Core Conventions the Agent Must Follow

- **Client-Side First**: Never introduce server round-trips for operations that can run in-browser. All processing must happen in local browser memory.
- **Brand Consistency**: The brand name is **HateMyPDF** (never append `.com` in display titles, logos, or UI text).
- **Search Layout**: On the `/tools` page, search results must display in a unified responsive grid side-by-side (`grid gap-4 sm:grid-cols-2 lg:grid-cols-3`), not stacked vertically in disjointed category sections.
- **Performance**: Keep initial bundle sizes light. Dynamic import heavy libraries (`pdf-lib`, `heic2any`, etc.) only when requested.
