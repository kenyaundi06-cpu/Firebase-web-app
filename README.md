# Modern Rollup Firebase App

A streamlined, high-performance web application compiled with **Rollup** and powered by the **Firebase JS SDK v10+**. This configuration uses advanced scope-level tree-shaking to deliver optimized production bundles.

## 🛠️ Project Architecture

- `src/index.js` - Application entry point containing core logic and configuration.
- `rollup.config.mjs` - Advanced native ES Module bundler compiler configurations.
- `dist/` - Automatically generated production distribution assets (ignored by Git).

## 🚀 Local Installation & Execution

### 1. Install Dependencies
Clone the repository, navigate into the project directory, and initialize development tools:
```bash
npm install
```

### 2. Build Your Production Assets
Compile, optimize, and minify your script assets via Rollup:
```bash
npx rollup -c rollup.config.mjs
```

### 3. Watch for Changes (Development Mode)
Automatically trigger instant incremental build passes upon saving local source files:
```bash
npx rollup -c rollup.config.mjs --watch
```
