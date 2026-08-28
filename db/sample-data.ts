const sampleData = {
    projects: [
        {
            num: 1,
            tag: "E-COMMERCE",
            title: "LiebStore",
            subtitle: "Full-Stack E-commer Platform",
            description: "A production-grade e-commerce platform with complete auth, product management, shopping cart, order payments, and admin analytics. Built with a security-first mindset.",
            demo: "https://lieb-store.vercel.app",
            accent: "#6366f1",
            featured: true,

            features: [
                "Authentication via Email/Password, Google, GitHub, and LinkedIn",
                "Product catalog with search, filters, and sorting",
                "Cart management & checkout flow",
                "Admin dashboard with analytics",
                "Integration with PayPal and Stripe",
                "Checkout and order management"
            ],

            technologies: [
                {
                    name: "Next.js",
                    slug: "nextjs",
                },
                {
                    name: "React.js",
                    slug: "reactjs"
                },
                {
                    name: "TypeScript",
                    slug: "typescript",
                },
                {
                    name: "Shadcn/UI",
                    slug: "shadcn-ui"
                },
                {
                    name: "PostgreSQL",
                    slug: "postgresql",
                },
                {
                    name: "Zod",
                    slug: "zod",
                },
                {
                    name: "Prisma",
                    slug: "prisma",
                },
                {
                    name: "React Hook Form",
                    slug: "react-hook-form"
                },
                {
                    name: "Stripe & PayPal API",
                    slug: "stripe-paypal-api"
                },
                {
                    name: "NextAuth",
                    slug: "nextauth"
                },
                {
                    name: "Tailwind CSS",
                    slug: "tailwind-css"
                },
                {
                    name: "SMTP",
                    slug: "smtp",
                },
                {
                    name: "Jest",
                    slug: 'jest'
                },
                {
                    name: "UploadThing",
                    slug: "uploadthing"
                },
                {
                    name: "Recharts",
                    slug: "recharts",
                },
                {
                    name: "Git & GitHub",
                    slug: "git-github"
                },
            ]
        },

        {
            num: 2,
            tag: "SUSTAINABILITY",
            title: "GreenFlow",
            subtitle: "Sustainability Monitoring Platform",
            description: "Real-time environmental KPI dashboard enabling organizations to track, visualize, and report on sustainability metrics with interactive charts.",
            github: "https://github.com/Lieberr/Sistema-de-Sustentabilidade",
            demo: null,
            accent: "#22c55e",
            featured: false,

            features: [
                "Calculation of the sustainability index",
                "Reports and charts",
                "Analysis of patterns and trends",
                "Personalized alerts and recommendations",
                "Consumption monitoring",
            ],

            technologies: [
                {
                    name: "Python",
                    slug: "python"
                },
                {
                    name: "Flask",
                    slug: "flask",
                },
                {
                    name: "HTML & CSS",
                    slug: "html-css"
                },
                {
                    name: "JavaScript",
                    slug: "javascript"
                },
                {
                    name: "MySQL",
                    slug: "mysql",
                },
                {
                    name :"NumPy",
                    slug: "numpy",
                },
                {
                    name: "SymPy",
                    slug: "sympy"
                },
                {
                    name: "Matplotlib",
                    slug: "matplotlib"
                },
                {
                    name: "SMTP",
                    slug: "smtp"
                },
                {
                    name: "Git & Github",
                    slug: "git-github"
                }
            ]

        },

        {
            num: 3,
            tag: "SECURITY",
            title: "Secure Messenger",
            subtitle: "Secure Messaging Application",
            description: "A messaging application focused on secure communication and user authentication.",
            github: "https://github.com/Lieberr/Secure-Messenger",
            demo: null,
            accent: "#8b5cf6",
            featured: false,

            features: [
                "User registration and authentication",
                "Sending encrypted messages using a shared text key",
                "Local-only decryption",
                "Secure communication",
            ],

            technologies: [
                {
                    name: "Python",
                    slug: "python",
                },
                {
                    name: "PyMongo",
                    slug: "py-mongo"
                },
                {
                    name: "Cryptography",
                    slug: "cryptography",
                },
                {   
                    name: "Bcrypt",
                    slug: "bcrypt"
                },
                {
                    name: "MongoDB",
                    slug: "mongodb",
                },
                {
                    name: "Git & GitHub",
                    slug: "git-github"
                }
            ]
        },

        {
            num: 4,
            tag: "Full-Stack",
            title: "Idea Drop Sharing Platform",
            subtitle: "Idea creation and management platform",
            description: "A full-stack application for creating, viewing, editing, and deleting ideas, featuring a React frontend and a Node.js/Express REST API backend. It includes JWT authentication with access and refresh tokens, route protection, user authorization, and data persistence using MongoDB Atlas.",
            github: "https://github.com/Lieberr/Idea-Drop-Api",
            demo: "https://ideadrop-glf.vercel.app/",
            accent: "#f97316",
            featured: false,

            features: [
                "Full CRUD for ideas",
                "Access Token and Refresh Token",
                "Creation, editing, and deletion of ideas",
                "Listing and visualization of ideas",
                "Authentication with JWT",
            ],

            technologies: [
                {
                    name: "React.js",
                    slug: "reactjs"
                },
                {
                    name: "Vite",
                    slug: "vite",
                },
                {
                    name: "TanStack Router",
                    slug: "tanstack-router"
                },
                {
                    name: "TanStack Query",
                    slug: "tanstack-query"
                },
                {
                    name: "Node.js",
                    slug: "nodejs",
                },
                {
                    name: "Express.js",
                    slug: "expressjs",
                },
                {
                    name: "JWT",
                    slug: "jwt",
                },
                {
                    name: "Bcrypt",
                    slug: "bcrypt",
                },
                {
                    name: "Git & GitHub",
                    slug: "git-github"
                }
            ],
        },

        {
            num: 5,
            tag: "SUSTAINABILITY",
            title: "Sentinela",
            subtitle: "Tree Monitoring System",
            description: "A RESTful system developed for tree monitoring and management, featuring secure registration for individual and corporate users, project management, and tree identification via QR code. It includes JWT authentication, MySQL persistence, QR code generation, and a socket-based communication module.",
            github: "https://github.com/NathaliaAlecio22/PI_IV_ES_TIME14-",
            demo: null,
            accent: "#06b6d4",
            featured: false,

            features: [
                "Registration of individual and corporate users",
                "Registration of phytosanitary information on the trees",
                "Client-Server Chatbot Module",
                "Tree identification via QR code",
                "Ownership control between individual and corporate users",
                "Full project CRUD",
                "Full tree CRUD",
            ],

             technologies: [
                {
                    name: "React.js",
                    slug: "reactjs"
                },
                {
                    name: "Java",
                    slug: "java",
                },
                {
                    name: "Spring Boot",
                    slug: 'spring-boot'
                },
                {
                    name: "Spring Data JPA",
                    slug: "spring-data-jpa"
                },
                {
                    name: "MySQL",
                    slug: 'mysql'
                },
                {
                    name: "MongoDB",
                    slug: "mongodb",
                },
                {
                    name: "Java Sockets",
                    slug: "java-sockets",
                },
                {
                    name: "JWT",
                    slug: "jwt",
                },
                {
                    name: "Bcrypt",
                    slug: "bcrypt",
                },
                {
                    name: "Google ZXing",
                    slug: "google-zxing"
                },
                {
                    name: "Git & GitHub",
                    slug: "git-github"
                }
             ]
             

        }
    ]
}

export default sampleData;