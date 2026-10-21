import pj2_1 from "../asset/image/pj2_1.png";
import pj2_2 from "../asset/image/pj2_2.png";
import pj2_3 from "../asset/image/pj2_3.png";
import pj2_4 from "../asset/image/pj2_4.png";
import pj2_5 from "../asset/image/pj2_5.png";
import pj2_6 from "../asset/image/pj2_6.png";
import pj2_7 from "../asset/image/pj2_7.png";
import pj2_8 from "../asset/image/pj2_8.png";

import pj5_1 from "../asset/pj5/img1.png";
import pj5_2 from "../asset/pj5/img2.png";
import pj5_3 from "../asset/pj5/img3.png";
import pj5_4 from "../asset/pj5/img4.png";
import pj5_5 from "../asset/pj5/img5.png";
import pj5_6 from "../asset/pj5/img6.png";

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
            "SaaS platform (Stringee) built on a 10+ app Micro Frontend architecture with Module Federation and a shared UI kit. I built the CRM core (dynamic record forms with FormBuilder, object and filter configuration, list views, related-list tables, data import), extended bpmn-js for a BPMN workflow engine with 25+ node types and a real-time WebSocket runtime, and built the AI Agent platform (agent builder, tool configuration forms and an in-app chat box in the context of a CRM record). Covered with unit and integration tests using Vitest, React Testing Library and MSW.",
        technologies:
            "ReactJS, TypeScript, Module Federation, TanStack Query, Redux Toolkit, React Hook Form, bpmn-js, TailwindCSS, Vitest",
        createAt: "November 2025 - Present",
        link: "https://id.cogover.com/",
    },
    {
        name: "Feelex E-commerce",
        description:
            "NextJS 14 App Router (SSR) e-commerce storefront with 40K+ monthly visits (Ozovn). I built the product catalog, category pages with faceted filters, search, flash sale and product-detail pages with variants and reviews, plus the full cart and checkout flow with vouchers, reward points and SePay payment. Handled SEO and performance (metadata, image optimization, lower CLS) and integrated Google Tag Manager and Facebook Pixel.",
        technologies:
            "NextJS 14, TypeScript, TailwindCSS, SWR, React Hook Form, Zod, NextAuth, Docker, GitHub Actions",
        createAt: "April 2025 - October 2025",
        link: "https://feelex.vn",
        images: [
            { image: pj5_1 },
            { image: pj5_2 },
            { image: pj5_3 },
            { image: pj5_4 },
            { image: pj5_5 },
            { image: pj5_6 },
        ],
    },
    {
        name: "Mainichi Nihongo",
        description:
            "Multi-language (VI/EN/JA) SSR website for Japanese learners in Vietnam, Myanmar and Cambodia (OhmidasVN). I built interactive Hiragana, Katakana and number charts, a virtual Japanese keyboard, the N5–N3 course catalog, blog and feedback form, plus email and social sign-in, password recovery and registration with company codes, responsive across mobile, tablet and desktop.",
        technologies: "ReactJS, NextJS, TypeScript, Material UI",
        createAt: "June 2023 - December 2023",
        link: "https://www.mainichi-nihongo.net",
        images: [
            { image: pj6_1 },
            { image: pj6_2 },
            { image: pj6_3 },
            { image: pj6_4 },
            { image: pj6_5 },
            { image: pj6_6 },
        ],
    },
    {
        name: "Shoe Shop E-commerce",
        description:
            "Full-stack e-commerce website. Storefront with product filtering (style, material, price, gender), search, wishlist, a persisted cart and a validated checkout form, backed by an Express/Sequelize REST API on MySQL with JWT access/refresh tokens, role-based authorization and image upload.",
        technologies:
            "ReactJS, Redux Toolkit, Redux Persist, SCSS, Node.js, Express, Sequelize, MySQL, JWT",
        createAt: "November 2022 - June 2023",
        link: "https://ananas-shoes-shop.vercel.app",
        source: "https://github.com/HoaiNam1511/shoe-shop-frontend",
        member: 1,
        images: [
            { image: pj2_1 },
            { image: pj2_2 },
            { image: pj2_3 },
            { image: pj2_4 },
            { image: pj2_5 },
            { image: pj2_6 },
            { image: pj2_7 },
            { image: pj2_8 },
        ],
    },
];
