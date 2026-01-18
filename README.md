# Mayank Sharma - Personal Portfolio

Welcome to my personal portfolio website! This project is a digital showcase of my work, skills, and professional journey as a developer. It features a modern, space-themed design with smooth animations and interactivity to provide an immersive user experience.

## 🚀 Live Demo

You can view the live demo here: [Portfolio Link](https://mayank-sharma-personal-portfolio.vercel.app/)

## 🛠️ Tech Stack

This project is built using the latest web technologies to ensure superior performance, scalability, and a premium aesthetic.

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Fonts**: [Geist](https://vercel.com/font) (Optimized with `next/font`)
- **Package Manager**: pnpm (recommended) / npm

## ✨ Key Features

- **Dynamic Project Pages**: Comprehensive detail pages for each project (e.g., `/project/cosmoshop`) with simplified routing.
- **Infinite Scroll Projects**: Optimized project grid with lazy loading and memoization for high performance.
- **Interactive "Universe"**: A central hub navigating to Education, Skills, Projects, and Experience sections.
- **Immersive Animations**:
  - Particle effects and floating elements.
  - Smooth typing effects.
  - Page transitions and scroll animations.
- **Resume Download**: Easily accessible resume download button.
- **Contact Form**: Functional contact form powered by Web3Forms with toast notifications.
- **Responsive & Modern**: Fully responsive glassmorphism design optimized for all devices.

## 📂 Project Structure

```bash
.
├── public/               # Static assets (images, videos, resume)
└── src/
    ├── app/              # App Router directory
    │   ├── project/      # Dynamic project details ([slug])
    │   ├── universe/     # Universe section routes
    │   ├── globals.css   # Global styles
    │   ├── layout.jsx    # Root layout
    │   └── page.jsx      # Main entry point
    ├── components/       # UI Components (Navbar, Footer, etc.)
    ├── data/             # Data components (SkillsData, ProjectsData)
    ├── lib/              # Centralized data libraries (allProjectData)
    ├── pages/            # Pages Router (About page)
    └── sections/         # Feature sections (Home, Contact, Universe)
```

## ⚡ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18.17 or later)
- pnpm (recommended) or npm

### Installation

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/MAYANKSHARMA01010/portfolio_new.git
    cd portfolio_new
    ```

2.  **Install dependencies**:

    ```bash
    pnpm install
    # or
    npm install
    ```

3.  **Environment Setup**:
    Create a `.env` file in the root directory and add your Web3Forms key:

    ```env
    NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
    ```

4.  **Run the development server**:

    ```bash
    pnpm run dev
    # or
    npm run dev
    ```

5.  **Open in Browser**:
    Visit [http://localhost:3000](http://localhost:3000) to view the application.

## 🚀 Deployment

The project is optimized for deployment on [Vercel](https://vercel.com/).

1.  Push your code to a GitHub repository.
2.  Import the project into Vercel.
3.  Add the `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` environment variable in Vercel settings.
4.  Deploy!

## 📬 Contact

Feel free to reach out to me!

- **Email**: mayanksharma01010@gmail.com
- **LinkedIn**: [mayanksharma3369](https://linkedin.com/in/mayanksharma3369)
- **GitHub**: [MAYANKSHARMA01010](https://github.com/MAYANKSHARMA01010)

---

_Built with ❤️ by Mayank Sharma_
