import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Full stack Developent",
        company_name: "Whatsapp Clone",
        icon: tesla,
        iconBg: "#accbe1",
        date: "March 2024",
        points: [
            "Technologies/Tools used: HTML, Typescript,TailwindCSS, ShadCn UI/UX, Next.js 14, MongoDB, OpenAI.",
            "Implemented third-party authentication and message tracking with Next.js 14.",
            "Enhanced the frontend using TailwindCss, and deployed the app on Vercel Cloud.",
            "Integrated ChatGPT and DALL-E features using the OpenAI API for AI-generated responses and images in the chat.",
        ],
    },
    {
        title: "Full stack Developent",
        company_name: "Yoom: Video Calling App",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "January 2024",
        points: [
            "Technologies/Tools used: HTML, Typescript, TailwindCss, ShadCn UI/UX, Next.js 14, MongoDB.",
            "Implemented third-party authentication with Next.js 14, TailwindCSS, and Shadcn UI.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Added video calling, screen sharing, and scheduling features, deploying on Vercel Cloud.",
        ],
    },
    {
        title: "Frontend Developent",
        company_name: "Brainwave UI/UX",
        icon: tesla,
        iconBg: "#b7e4c7",
        date: "December 2023",
        points: [
            "Technologies/Tools used: HTML, CSS, Javascript, TailwindCss, React.js",
            "Utilized TailwindCSS for responsive frontend design.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Enhanced functionality with HTML, and deployed the web page on Netlify Cloud.",
        ],
    },
    {
        title: "Data Scientist",
        company_name: "Movie Recommendation System",
        icon: tesla,
        iconBg: "#a2d2ff",
        date: "May 2022",
        points: [
            "Technologies/Tools: Python, Machine Learning libraries- Sckit Learn",
            "Developed a content-based movie recommendation system with Python ML libraries.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Using cosine similarity for detection, and deployed on Streamlit Cloud.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Saksham292001',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/saksham-singh-89b827239/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Whatsapp Clone',
        description: 'Implemented third-party authentication, message tracking, and AI-powered chat features with Next.js and OpenAI API.',
        link: 'https://funky-barnacle-67.accounts.dev/sign-in?redirect_url=https%3A%2F%2Fwhatsapp-clone-9bmr.vercel.app%2F',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'VirtualR UI/UX',
        description: 'Designed a responsive frontend with TailwindCSS, integrated videos, and deployed on Netlify Cloud.',
        link: 'https://startling-begonia-67e53d.netlify.app/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Sorting Visualizer',
        description: 'Developed an interactive sorting visualizer web app, showcasing algorithms like Bubble Sort and Quick Sort visually.',
        link: 'https://sv-rust.vercel.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Yoom: Video Calling App',
        description: 'Built a Next.js app with third-party authentication, video calling, and scheduling, deployed on Vercel.',
        link: 'https://zoom-calling-app.vercel.app/sign-in?redirect_url=https%3A%2F%2Fzoom-calling-app.vercel.app%2F',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Movie Recommendation System',
        description: 'Created a content-based movie recommendation system with Python, using cosine similarity, deployed on Streamlit.',
        link: 'https://nsy5biwye8qjryfrdxp83w.streamlit.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Brainwave UI/UX',
        description: 'Created a responsive frontend with TailwindCSS, optimized functionality with HTML, and deployed on Netlify.',
        link: 'https://symphonious-seahorse-727a01.netlify.app/',
    }
];
