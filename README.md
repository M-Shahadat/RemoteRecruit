# RemoteRecruit Home Page

A high-performance and fully responsive landing page.

---

## Tech Stack

*   **Core Framework:** React 19
*   **Build Tool:** Vite 8
*   **Language:** TypeScript 6
*   **Styling:** Tailwind CSS 3 (Utility-first styles with PostCSS and Autoprefixer for vendor prefixing)
*   **Linting:** ESLint 10 

---


##  Project Setup

Must have [Node.js](https://nodejs.org/) installed before proceeding.

### 1. Clone & Install Dependencies
Navigate to root directory and install the required npm packages:
```bash
npm install

```

### 2. Start the Development Server

Launch local development environment:

```bash
npm run dev

```

The application will be accessible at `http://localhost:5173`.

### 3. Production Build

Compile and optimize project for production deployment:

```bash
npm run build

```

### 4. Preview Production Build

Locally inspect the compiled production build to verify production performance and layouts:

```bash
npm run preview

```

---

## ⚠️ Known Limitations

* **Pinned Asymmetrical Vector Assets:** The background canvas (`FOOTER.svg` and various background circles) is designed around a strict `1440px` Figma layout grid. To prevent distortion on ultra-wide screens or odd tablet dimensions, these elements are intentionally absolute-pinned using CSS.
* **Interactive Placeholders:** Form submissions, Call to action buttons, and social media links currently navigate to placeholders (`#`) and require integration with a backend service or state manager for business logic. Or a third party service.
* **React 19 Ecosystem:** As this project makes use of the latest React 19 core, legacy third-party slider or animation packages that rely on older React internals may throw peer dependency warnings unless explicitly run with the `--legacy-peer-deps` flag.

```







