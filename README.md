# HateMyPDF

Fast, privacy-first, 100% in-browser PDF manipulation, file conversion, and developer utilities.

Every tool executes locally inside your web browser using HTML5 Canvas, WebAssembly (WASM), and `pdf-lib`. Your documents, images, and data never leave your device.

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/7802c60e-3538-47aa-b747-14f002e1eb07" />

---

## Features

- **100% In-Browser & Private**: Zero server uploads, zero accounts, zero analytics trackers on your files.
- **110+ Tools**: Complete catalog covering PDF management, image conversion, developer utilities, SEO helpers, audio/video tools, and calculators.
- **Clean Pipeline UI**: Streamlined 3-step workflow (Upload &rarr; Configure &rarr; Verify & Download) with zero cluttered text.
- **Minimal Theme**: Cohesive Black, Green & White palette with crisp SVG icons.
- **Fast Static Delivery**: Pre-rendered with Astro for sub-second page loads and optimal Core Web Vitals.

---

## Tool Categories

| Suite | Tools | Highlights |
| :--- | :--- | :--- |
| **PDF Suite** | 25 tools | Compress, Merge, Split, Protect, Unlock, Rotate, Watermark, Grayscale, OCR & Conversion |
| **Format Conversion** | 25 tools | JPG, PNG, WebP, AVIF, HEIC, SVG, ICO, and Base64 format converters |
| **Developer & Security** | 20 tools | JSON Formatter, Base64, JWT Inspector, Diff Checker, Hashes, UUID, Bcrypt, RSA Key Gen |
| **Web & SEO** | 5 tools | Sitemap Generator, Robots.txt Generator, Open Graph Preview, Meta Tag Analyzer |
| **Math & Calculations** | 5 tools | Percentage, Matrix, Binary/Bitwise, Random Generator, EMI Loan Calculator |
| **Audio & Video** | 5 tools | Audio Converter, Audio Trimmer, Video Compressor, Video to GIF, Audio Ripper |
| **Daily Utilities** | 15 tools | IP Lookup, QR Code Generator, Color Picker, Unit Converter, Timezone Comparison |
| **Text & Data** | 10 tools | Word Counter, Markdown Previewer, CSV to JSON, Slug Generator, Line Sorter |

---

## Tech Stack

- **Framework**: [Astro 7](https://astro.build/) (Static Site Generation)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **PDF Engine**: [`pdf-lib`](https://pdf-lib.js.org/) + client-side WebAssembly
- **Bundler**: [Vite](https://vitejs.dev/)

---

## Getting Started

### Prerequisites

- Node.js `>=22.12.0`
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/hatemypdf.git
cd hatemypdf

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:4321` in your browser.

### Production Build

```bash
# Build static site to ./dist
npm run build

# Preview production build locally
npm run preview
```

---

## Project Structure

```text
/
├── public/               # Static assets (favicons, site manifest)
├── src/
│   ├── components/       # Reusable Astro UI components (Header, Footer, DashedCard)
│   ├── content/          # Markdown content collections (blog articles, guides)
│   ├── layouts/          # Base Layout with SEO & schema metadata
│   ├── pages/            # Astro routes & category hubs (/pdf, /convert, /dev, etc.)
│   │   ├── tools/
│   │   │   ├── [slug].astro   # Universal client-side execution engine
│   │   │   └── index.astro    # All Tools catalog with live search
│   └── styles/
│       └── globals.css   # Tailwind CSS tokens & base styles
├── astro.config.mjs      # Astro configuration
└── package.json
```

---

## Privacy Architecture

1. **Zero Uploads**: File operations use `FileReader`, `ArrayBuffer`, and in-memory WebAssembly buffers.
2. **Offline-Capable**: Once loaded, tools work even without an internet connection.
3. **No Telemetry on Data**: File contents, file names, and processed outputs are never sent to external servers or logged.

---

## License

MIT License. Free for personal and commercial use.
