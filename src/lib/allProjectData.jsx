export const projects = [
    {
        slug: "cosmoshop",
        title: "CosmoShop",
        shortDesc: "Full-stack e-commerce platform for futuristic space gear.",
        overview:
            "CosmoShop is a production-ready e-commerce application with secure authentication, Stripe payments, scalable backend APIs, and a smooth shopping experience.",
        media: [{ type: "video", src: "/videos/cosmoshop.mp4", title: "Overview" }],
        techStack: {
            frontend: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
            backend: ["Node.js", "Express"],
            orm: ["Prisma"],
            database: ["PostgreSQL"],
            payments: ["Stripe"],
            deployment: ["Vercel"],
        },
        features: [
            "Authentication & authorization",
            "Product catalog & filtering",
            "Cart & checkout",
            "Stripe payments",
            "Order history",
        ],
        backendArchitecture: {
            pattern: "MVC",
            folders: ["controllers/", "routes/", "services/", "prisma/"],
        },
        apiEndpoints: [
            { method: "POST", endpoint: "/api/auth/login", desc: "User login" },
            { method: "GET", endpoint: "/api/products", desc: "Fetch products" },
        ],
        github: "https://github.com/MAYANKSHARMA01010/CosmoShop",
        live: "https://cosmoshop.vercel.app",
        category: "Web Dev",
    },

    {
        slug: "stellarmap",
        title: "StellarMap",
        shortDesc: "3D interactive star visualization platform.",
        overview:
            "StellarMap renders real-time constellations using WebGL and Three.js, allowing users to explore stars in an interactive 3D environment.",
        media: [{ type: "video", src: "/videos/stellarmap.mp4", title: "Demo" }],
        techStack: {
            frontend: ["React", "Three.js", "WebGL"],
        },
        features: ["3D rendering", "Camera controls", "Constellation data"],
        backendArchitecture: {},
        apiEndpoints: [],
        github: "https://github.com/MAYANKSHARMA01010/StellarMap",
        live: "https://stellarmap.vercel.app",
        category: "Web Dev",
    },

    {
        slug: "portfolio-galaxy",
        title: "Portfolio Galaxy",
        shortDesc: "Animated personal portfolio with smooth transitions.",
        overview:
            "A modern animated portfolio built with Next.js and Framer Motion, focusing on performance, transitions, and clean UI.",
        media: [{ type: "video", src: "/videos/portfolio_galaxy.mp4", title: "Demo" }],
        techStack: {
            frontend: ["Next.js", "Tailwind CSS", "Framer Motion"],
        },
        features: ["Smooth animations", "Responsive layout", "SEO optimized"],
        backendArchitecture: {},
        apiEndpoints: [],
        github: "https://github.com/MAYANKSHARMA01010/Portfolio-Galaxy",
        live: "https://mayanksharma.vercel.app",
        category: "Web Dev",
    },

    {
        slug: "ai-taskflow",
        title: "AI TaskFlow",
        shortDesc: "AI-powered task management system.",
        overview:
            "Task management platform that uses OpenAI to generate smart task suggestions and priorities.",
        media: [{ type: "video", src: "/videos/aitaskflow.mp4", title: "Demo" }],
        techStack: {
            frontend: ["React"],
            backend: ["Node.js", "Express"],
            orm: ["Prisma"],
            database: ["PostgreSQL"],
            services: ["OpenAI API"],
        },
        features: ["AI suggestions", "Task prioritization", "User dashboards"],
        backendArchitecture: {},
        apiEndpoints: [],
        github: "https://github.com/MAYANKSHARMA01010/AI-TaskFlow",
        live: "#",
        category: "Python",
    },

    {
        slug: "spacechat",
        title: "SpaceChat",
        shortDesc: "Real-time chat application.",
        overview:
            "Realtime chat app with Socket.io supporting typing indicators, online presence, and custom avatars.",
        media: [{ type: "video", src: "/videos/spacechat.mp4", title: "Demo" }],
        techStack: {
            frontend: ["React"],
            backend: ["Node.js", "Socket.io"],
        },
        features: ["Realtime messaging", "Typing indicators", "Online status"],
        backendArchitecture: {},
        apiEndpoints: [],
        github: "https://github.com/MAYANKSHARMA01010/SpaceChat",
        live: "#",
        category: "Mobile Dev",
    },

    {
        slug: "figmaflow",
        title: "FigmaFlow",
        shortDesc: "Design system & UI component library.",
        overview:
            "A scalable Figma design system with reusable components, typography rules, and spacing guidelines.",
        media: [{ type: "video", src: "/videos/figmaflow.mp4", title: "Demo" }],
        techStack: {
            frontend: ["Figma", "Design System"],
        },
        features: ["Component library", "Design tokens", "Prototyping"],
        backendArchitecture: {},
        apiEndpoints: [],
        github: "#",
        live: "#",
        category: "Figma",
    },

    {
        slug: "devops-monitor",
        title: "DevOps Monitor",
        shortDesc: "Server & API health monitoring dashboard.",
        overview:
            "Dashboard to monitor API uptime, response times, and server metrics in real time.",
        media: [{ type: "video", src: "/videos/devops.mp4", title: "Dashboard" }],
        techStack: {
            frontend: ["Next.js"],
            backend: ["Node.js"],
            database: ["MongoDB"],
            deployment: ["Docker"],
        },
        features: ["Health checks", "Uptime logs", "Alerts"],
        backendArchitecture: {},
        apiEndpoints: [],
        github: "#",
        live: "#",
        category: "Web Dev",
    },

    {
        slug: "expense-tracker",
        title: "Expense Tracker",
        shortDesc: "Personal finance management app.",
        overview:
            "Tracks daily expenses, generates analytics, and visualizes spending habits.",
        media: [{ type: "video", src: "/videos/expense.mp4", title: "Demo" }],
        techStack: {
            frontend: ["React"],
            backend: ["Node.js"],
            orm: ["Prisma"],
            database: ["PostgreSQL"],
        },
        features: ["Expense tracking", "Charts", "Monthly reports"],
        backendArchitecture: {},
        apiEndpoints: [],
        github: "#",
        live: "#",
        category: "Web Dev",
    },

    {
        slug: "code-judge",
        title: "Code Judge",
        shortDesc: "Online coding judge platform.",
        overview:
            "Platform to run and evaluate code submissions with test cases and scoring.",
        media: [{ type: "video", src: "/videos/judge.mp4", title: "Demo" }],
        techStack: {
            frontend: ["Next.js"],
            backend: ["Node.js"],
            services: ["Docker"],
        },
        features: ["Code execution", "Test cases", "Leaderboard"],
        backendArchitecture: {},
        apiEndpoints: [],
        github: "#",
        live: "#",
        category: "Web Dev",
    },

    {
        slug: "weather-ai",
        title: "Weather AI",
        shortDesc: "AI-enhanced weather forecasting app.",
        overview:
            "Weather application using ML models to improve forecast accuracy.",
        media: [{ type: "video", src: "/videos/weather.mp4", title: "Demo" }],
        techStack: {
            frontend: ["React"],
            backend: ["Python", "FastAPI"],
            services: ["Weather API"],
        },
        features: ["Forecasting", "Alerts", "Analytics"],
        backendArchitecture: {},
        apiEndpoints: [],
        github: "#",
        live: "#",
        category: "Python",
    },
    {
        slug: "auth-system",
        title: "Auth System",
        shortDesc: "Production-ready authentication service.",
        overview:
            "JWT-based authentication system with role-based access control.",
        media: [{ type: "video", src: "/videos/auth.mp4", title: "Flow" }],
        techStack: {
            backend: ["Node.js", "Express"],
            orm: ["Prisma"],
            database: ["PostgreSQL"],
        },
        features: ["JWT auth", "RBAC", "Secure sessions"],
        backendArchitecture: {},
        apiEndpoints: [],
        github: "#",
        live: "#",
        category: "Web Dev",
    },
    {
        slug: "tic-tac-toe",
        title: "Tic-Tac-Toe JS",
        shortDesc: "Classic Tic-Tac-Toe game with theme support.",
        overview:
            "A feature-rich Tic-Tac-Toe game built with vanilla JavaScript. It includes a dark/light theme toggle, sound effects for moves, and specific win/draw animations. The game logic handles win detection and state management efficiently.",
        media: [
            // { type: "video", src: "/ticTacToe/gamePLayVideo.mp4", title: "Gameplay Demo" },
            { type: "image", src: "/ticTacToe/lightMode.png", title: "Light Theme" },
            { type: "image", src: "/ticTacToe/darkMode.png", title: "Dark Theme" },
            { type: "image", src: "/ticTacToe/XWon.png", title: "X Won" },
            { type: "image", src: "/ticTacToe/OWon.png", title: "O Won" },
            { type: "image", src: "/ticTacToe/Draw.png", title: "Draw" }
        ],
        techStack: {
            frontend: ["HTML5", "CSS3", "JavaScript"],
            deployment: ["Vercel"],
        },
        features: [
            "Dark/Light Theme Toggle",
            "Win & Draw Detection",
            "Sound Effects",
            "Responsive Design",
            "Winning Animations",
        ],
        backendArchitecture: {},
        apiEndpoints: [],
        github: "https://github.com/MAYANKSHARMA01010/Tic-Tac-Toe-JS",
        live: "https://tic-tac-toe-js-basic.vercel.app",
        category: "Web Dev",
    },
    {
        slug: "calculator-js",
        title: "Calculator JS",
        shortDesc: "Scientific calculator with dark/light mode.",
        overview:
            "A feature-rich calculator built with HTML, CSS, and JavaScript. It supports standard arithmetic operations and includes a dark/light theme toggle for better user experience.",
        media: [
            // { type: "video", src: "/calculatorJS/demoVideo.mp4", title: "Demo" },
            { type: "image", src: "/calculatorJS/lightMode.png", title: "Light Mode" },
            { type: "image", src: "/calculatorJS/darkMode.png", title: "Dark Mode" },
        ],
        techStack: {
            frontend: ["HTML5", "CSS3", "JavaScript"],
            deployment: ["Vercel"],
        },
        features: [
            "Dark/Light Theme Toggle",
            "Standard Arithmetic Operations",
            "Responsive Design",
            "Clean UI",
        ],
        backendArchitecture: {},
        apiEndpoints: [],
        github: "https://github.com/MAYANKSHARMA01010/Calculator-JS",
        live: "https://calculator-js-basic.vercel.app",
        category: "Web Dev",
    },
    {
        slug: "nextech-solutions",
        title: "NexTech Solutions",
        shortDesc: "Premium technology agency website with modern UI.",
        overview:
            "A high-performance, fully responsive agency website built with semantic HTML and modern CSS. Features include a dynamic light/dark theme toggle, glassmorphism effects, smooth scroll animations, and a polished mobile experience. Designed to showcase a professional, tech-forward aesthetic without relying on heavy frameworks.",
        media: [
            // { type: "video", src: "/nextech/demoVideo.mp4", title: "Site Tour" },
            { type: "image", src: "/nextech/darkMode.png", title: "Dark Theme" },
            { type: "image", src: "/nextech/lightMode.png", title: "Light Theme" }
        ],
        techStack: {
            frontend: ["HTML5", "CSS3", "JavaScript"],
            deployment: ["Vercel"],
        },
        features: [
            "Light/Dark Theme Toggle",
            "Glassmorphism UI",
            "Fully Responsive Layout",
            "Smooth Scroll Animations",
            "Semantic HTML & CSS Grid"
        ],
        backendArchitecture: {},
        apiEndpoints: [],
        github: "https://github.com/MAYANKSHARMA01010/NexTech-Clone",
        live: "https://nex-tech-one.vercel.app",
        category: "Web Dev",
    },
    {
        slug: "groway",
        title: "GroWay",
        shortDesc: "Interactive career growth & personal assessment platform.",
        overview:
            "GroWay is a full-stack assessment platform that evaluates personal and professional goals through dynamic questionnaires. It analyzes user responses to provide targeted insights into professional advantages, potential hurdles, and personalized growth strategies.",
        media: [
            // { type: "video", src: "/groway/groway.mp4", title: "Project Overview" },
            { type: "image", src: "/groway/header.png", title: "Header Section" },
            { type: "image", src: "/groway/contact.png", title: "Contact Section" },
            { type: "image", src: "/groway/pricing.png", title: "Pricing Section" },
            { type: "image", src: "/groway/test.png", title: "Assessment Test" },
            { type: "image", src: "/groway/fields.png", title: "Goal Selection" },
        ],
        techStack: {
            frontend: ["Next.js", "React", "TypeScript", "Vanilla CSS", "Framer Motion"],
            backend: ["Node.js", "Express"],
            orm: ["Prisma"],
            database: ["PostgreSQL"],
            authentication: ["JWT", "bcrypt"],
            deployment: ["Vercel", "Render", "Prisma.io"],
            notifications: ["React Hot Toast"],
            packageManager: ["npm"]
        },
        features: [
            "Dynamic profession-based questionnaires",
            "JWT-based global session management",
            "Automated feedback & growth analysis",
            "Responsive & glassmorphic UI design",
            "Custom toast system with visibility limits"
        ],
        backendArchitecture: {
            pattern: "MVC",
            folders: ["controllers/", "routes/", "middlewares/", "configs/", "prisma/"],
        },
        apiEndpoints: [
            { method: "POST", endpoint: "/api/users/signup", desc: "User registration" },
            { method: "POST", endpoint: "/api/users/login", desc: "User authentication" },
            { method: "GET", endpoint: "/api/users/protected", desc: "Fetch user-specific data" },
        ],
        github: "https://github.com/MAYANKSHARMA01010/GROWAY",
        live: "https://groway.vercel.app",
        category: "Web Dev",
    },
    {
        slug: "campus-connect",
        title: "Campus Connect",
        shortDesc: "Full-stack mobile event management platform for campus communities.",
        overview:
            "Campus Connect is a production-ready mobile application that enables students to discover, host, and manage campus events seamlessly. Built with React Native (Expo) and Node.js, it features role-based access control with separate interfaces for regular users and administrators. The platform includes secure JWT authentication, multi-image upload support, real-time event management, and a comprehensive admin dashboard for event approvals.",
        media: [
            { type: "video", src: "/videos/campus_connect_demo.mp4", title: "Full App Demo" },
            { type: "image", src: "/campusConnect/home_screen.png", title: "Home Screen" },
            { type: "image", src: "/campusConnect/event_detail.png", title: "Event Details" },
            { type: "image", src: "/campusConnect/host_event.png", title: "Host Event Form" },
            { type: "image", src: "/campusConnect/admin_dashboard.png", title: "Admin Dashboard" },
            { type: "image", src: "/campusConnect/my_events.png", title: "My Events" }
        ],
        techStack: {
            frontend: ["React Native", "Expo SDK 54", "React Navigation", "React Native Paper"],
            backend: ["Node.js", "Express"],
            orm: ["Prisma"],
            database: ["PostgreSQL"],
            authentication: ["JWT", "bcrypt"],
            storage: ["Async Storage"],
            imageHandling: ["Expo Image Picker", "Multer"],
            deployment: ["Expo Go", "EAS Build"],
            stateManagement: ["React Context API", "useReducer"],
            notifications: ["React Hot Toast"],
            packageManager: ["npm"]
        },
        features: [
            "JWT-based authentication & authorization",
            "Role-based access (User & Admin)",
            "Event discovery with search & filtering",
            "Multi-image upload for events",
            "Event hosting with approval workflow",
            "Admin dashboard for event management",
            "Real-time status updates (Pending/Approved/Rejected)",
            "Profile management",
            "Dark mode support",
            "Responsive mobile UI"
        ],
        backendArchitecture: {
            pattern: "MVC",
            folders: ["controllers/", "routes/", "middlewares/", "config/", "prisma/", "utils/"],
        },
        apiEndpoints: [
            { method: "POST", endpoint: "/api/user/register", desc: "User registration" },
            { method: "POST", endpoint: "/api/user/login", desc: "User authentication" },
            { method: "GET", endpoint: "/api/user/me", desc: "Get current user" },
            { method: "POST", endpoint: "/api/events/request", desc: "Create event request" },
            { method: "GET", endpoint: "/api/events/", desc: "Get all approved events" },
            { method: "GET", endpoint: "/api/events/home", desc: "Get events for home screen" },
            { method: "GET", endpoint: "/api/events/search", desc: "Search events" },
            { method: "GET", endpoint: "/api/events/me", desc: "Get user's events" },
            { method: "GET", endpoint: "/api/events/admin", desc: "Admin: Get all events" },
            { method: "PATCH", endpoint: "/api/events/admin/:id/status", desc: "Admin: Update event status" },
            { method: "DELETE", endpoint: "/api/events/admin/:id", desc: "Admin: Delete event" },
        ],
        github: "https://github.com/MAYANKSHARMA01010/campus_connect",
        live: "https://drive.google.com/file/d/YOUR_DRIVE_FILE_ID/view",
        category: "Mobile Dev",
    }
];
