import pj6_1 from "../asset/pj4/img1.png";
import pj6_2 from "../asset/pj4/img2.png";
import pj6_3 from "../asset/pj4/img3.png";
import pj6_4 from "../asset/pj4/img4.png";
import pj6_5 from "../asset/pj4/img5.png";
import pj6_6 from "../asset/pj4/img6.png";

export const dataProject = [
    {
        name: "Cogover Platform",
        description:
            "Low-code business platform for process configuration, workflow modules, and AI Agent configuration. I built ReactJS interfaces with Micro Frontend architecture, worked with structured data, permissions, RESTful API integration, reusable UI components, and state management.",
        technologies:
            "ReactJS, TypeScript, NextJS, Micro Frontend, Context API, TanStack Query, TailwindCSS, React Testing Library",
        createAt: "November 2025 - Present",
        link: "https://cogover.com",
        member: 15,
    },
    {
        name: "EBOND",
        description:
            "Japanese e-commerce management system for products, customers, promotions, and system reports across multiple stores.",
        technologies:
            "NextJS, TypeScript, Redux Toolkit, Ant Design, NodeJS integration",
        createAt: "January 2024 - May 2024",
        member: 8,
    },
    {
        name: "Mainichi Nihongo",
        description:
            "End-user website for Japanese learners and business customers in Vietnam, Myanmar, and Cambodia.",
        technologies: "NextJS, TypeScript, NodeJS, PostgreSQL",
        createAt: "June 2023 - December 2023",
        link: "https://www.mainichi-nihongo.net",
        member: 4,
        images: [
            { image: pj6_1 },
            { image: pj6_2 },
            { image: pj6_3 },
            { image: pj6_4 },
            { image: pj6_5 },
            { image: pj6_6 },
        ],
    },
];
