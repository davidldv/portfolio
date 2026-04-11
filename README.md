# David's Developer Portfolio 🚀

A modern, interactive developer portfolio built with [Astro](https://astro.build/) and [React](https://react.dev/). This site leverages 3D rendering, elegant animations, and a dynamic theme system to create a unique and highly performant experience.

## ✨ Features
- **Astro v6.1**: Lightning-fast static site generation.
- **Interactive UI**: Powered by React 19 and Framer Motion.
- **3D Graphics**: Immersive scenes using Three.js and `@react-three/fiber`.
- **Styling**: Tailwind CSS v4.2 integration.
- **Dynamic Theming**: Custom theme system with dual-mode support.
- **Contact Form**: Serverless email integration via Web3Forms API.
- **Typescript**: Full type-safety across `.ts` and `.tsx` files.

## 🛠 Tech Stack

- [Astro](https://astro.build/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) / [Three.js](https://threejs.org/)
- [Web3Forms](https://web3forms.com/) (Contact API)
- **Tooling**: [Bun](https://bun.sh/) 

## 📦 Getting Started

This project uses **Bun** as the primary package manager.

### Prerequisites
- Node.js `>=22.12.0`
- Bun

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root of the project:
   ```bash
   cp .env.example .env
   ```
   - Add your Web3Forms Access Key to the `.env` file:
   ```env
   PUBLIC_WEB3FORMS_ACCESS_KEY="your_access_key_here"
   ```

4. **Start the development server:**
   ```bash
   bun run dev
   ```

## 🏗 Project Structure

```text
/
├── .env.example        # Environment variable template
├── astro.config.mjs    # Astro configuration
├── package.json        # Project metadata and dependencies 
├── src/                
│   ├── assets/         # Static global assets
│   ├── components/     # React & Astro components (Hero, Contact, etc.)
│   ├── layouts/        # Global page layouts
│   ├── lib/            # Utilities and portfolio data
│   ├── pages/          # Astro file-based routing
│   └── styles/         # Global typography and theme CSS
└── docs/               # Architecture docs (like the theme system setup)
```

## 🚢 Deployment

1. Commit your changes.
2. Ensure your host (Vercel, Netlify, Cloudflare Pages, etc.) is configured to run `bun run build`.
3. Set the `PUBLIC_WEB3FORMS_ACCESS_KEY` environment variable in your host's dashboard before deploying.

```bash
# To test the production build locally:
bun run build
bun run preview
```
