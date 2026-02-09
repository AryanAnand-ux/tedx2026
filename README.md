# TEDx2026 JUET

A modern, dynamic single-page application for the TEDxJUET event, built to showcase speakers, partners, and event details with a premium user experience.

## ✨ Features

-   **Dynamic Animations**: Powered by Framer Motion for smooth page transitions and interactive elements.
-   **Responsive Design**: Fully responsive layout optimized for all devices.
-   **Modern UI**: Built with Shadcn UI and Tailwind CSS for a sleek, consistent look.
-   **SEO Optimized**: Integrated with `react-helmet-async` for better search engine visibility.
-   **Performance**: Optimized build using Vite.

## 🛠️ Tech Stack

-   **Core**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: 
    -   [Tailwind CSS](https://tailwindcss.com/)
    -   [Shadcn UI](https://ui.shadcn.com/) (Radix UI primitives)
    -   `class-variance-authority` (CVA)
-   **Routing**: [React Router v6](https://reactrouter.com/)
-   **State Management**: [TanStack Query](https://tanstack.com/query/latest)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Forms**: `react-hook-form` + `zod` validation

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v18 or higher recommended)
-   npm or yarn or pnpm or bun

### Installation

1.  **Clone the valid repo**
    ```sh
    git clone https://github.com/AryanAnand-ux/tedx2026.git
    cd tedx2026
    ```

2.  **Install dependencies**
    ```sh
    npm install
    ```

3.  **Start the development server**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:8080` (or similar).

4.  **Build for production**
    ```sh
    npm run build
    ```

## 📂 Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── ui/         # Shadcn UI primitives
├── pages/          # Application page views (Home, About, etc.)
├── hooks/          # Custom React hooks
├── lib/            # Utilities (utils.ts)
├── App.tsx         # Main application component with routing
└── main.tsx        # Entry point
```

## 📄 License

- Distributed under the MIT License. See `LICENSE` for more information.
