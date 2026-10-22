import pj1_1 from "../asset/image/pj1_1.png";
import pj1_2 from "../asset/image/pj1_2.png";
import pj1_3 from "../asset/image/pj1_3.png";
import pj1_4 from "../asset/image/pj1_4.png";

import pj3_1 from "../asset/pj1/img1.PNG";
import pj3_2 from "../asset/pj1/img2.PNG";
import pj3_3 from "../asset/pj1/img3.PNG";
import pj3_4 from "../asset/pj1/img4.PNG";
import pj3_5 from "../asset/pj1/img5.PNG";
import pj3_6 from "../asset/pj1/img6.PNG";
import pj3_7 from "../asset/pj1/img7.PNG";
import pj3_8 from "../asset/pj1/img8.PNG";
import pj3_9 from "../asset/pj1/img9.PNG";
import pj3_10 from "../asset/pj1/img10.PNG";

import pj4_1 from "../asset/pj2/img1.PNG";
import pj4_2 from "../asset/pj2/img2.PNG";
import pj4_3 from "../asset/pj2/img3.PNG";
import pj4_4 from "../asset/pj2/img4.PNG";
import pj4_5 from "../asset/pj2/img5.PNG";
import pj4_6 from "../asset/pj2/img6.PNG";
import pj4_7 from "../asset/pj2/img7.PNG";
import pj4_8 from "../asset/pj2/img8.PNG";
import pj4_9 from "../asset/pj2/img9.PNG";
import pj4_10 from "../asset/pj2/img10.PNG";

import pj7_1 from "../asset/pj3/img1.png";
import pj7_2 from "../asset/pj3/img2.png";
import pj7_3 from "../asset/pj3/img3.png";
import pj7_4 from "../asset/pj3/img4.png";
import pj7_5 from "../asset/pj3/img5.png";

import pj2_1 from "../asset/image/pj2_1.png";
import pj2_2 from "../asset/image/pj2_2.png";
import pj2_3 from "../asset/image/pj2_3.png";
import pj2_4 from "../asset/image/pj2_4.png";
import pj2_5 from "../asset/image/pj2_5.png";
import pj2_6 from "../asset/image/pj2_6.png";
import pj2_7 from "../asset/image/pj2_7.png";
import pj2_8 from "../asset/image/pj2_8.png";

import cg_1 from "../asset/cogover/img1.jpg";
import cg_2 from "../asset/cogover/img2.jpg";
import cg_3 from "../asset/cogover/img3.jpg";
import cg_4 from "../asset/cogover/img4.jpg";
import cg_5 from "../asset/cogover/img5.jpg";
import cg_6 from "../asset/cogover/img6.jpg";

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
        images: [
            { image: cg_1 },
            { image: cg_2 },
            { image: cg_3 },
            { image: cg_4 },
            { image: cg_5 },
            { image: cg_6 },
        ],
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
    {
        name: "Pizza Restaurant",
        description:
            "This project is website of a pizza restaurants, project has key features such as: booking, order, send mail, filter product, search, add to card, fully responsive",
        technologies: "ReactJs, Redux, ExpressJs (Sequelize), MySql",
        createAt: "April 11, 2023 - May 18, 2023",
        link: "https://pizza-restaurant-fe.vercel.app",
        source: "https://github.com/HoaiNam1511/pizza-restaurant-frontend",
        member: 1,
        images: [
            { image: pj4_1 },
            { image: pj4_2 },
            { image: pj4_3 },
            { image: pj4_4 },
            { image: pj4_5 },
            { image: pj4_6 },
            { image: pj4_7 },
            { image: pj4_8 },
            { image: pj4_9 },
            { image: pj4_10 },
        ],
    },
    {
        name: "Pizza Restaurant Admin",
        description:
            "This project use for product management, project has key features such as: CRUD (product, category, order, account), login, reset password, sort, filter",
        technologies:
            "ReactJs, Redux, ExpressJs (Sequelize), MySql, JWT, RESTful APIs",
        createAt: "April 21, 2023 - May 25, 2023",
        link: "https://pizza-restaurant-beta.vercel.app",
        source: "https://github.com/HoaiNam1511/pizza-restaurant",
        member: 1,
        images: [
            { image: pj3_1 },
            { image: pj3_2 },
            { image: pj3_3 },
            { image: pj3_4 },
            { image: pj3_5 },
            { image: pj3_6 },
            { image: pj3_7 },
            { image: pj3_8 },
            { image: pj3_9 },
            { image: pj3_10 },
        ],
    },
    {
        name: "Shoes Shop Admin",
        description:
            "This project use for product management, project has key features such as: CRUD (product, category, user), sort, upload image, login, auth",
        technologies:
            "ReactJs, Redux, ExpressJs (Sequelize), MySql, JWT, RESTful APIs",
        createAt: "November 5, 2022 - January 8, 2023",
        link: "https://shoes-shop-admin-ten.vercel.app/login",
        source: "https://github.com/HoaiNam1511/shoes-shop",
        member: 1,
        images: [
            { image: pj1_1 },
            { image: pj1_2 },
            { image: pj1_3 },
            { image: pj1_4 },
        ],
    },
    {
        name: "My kitchen",
        description:
            "This project is cooking guide app, project has key features such as: register, login, add wish-list, search",
        technologies: "React Native, Php, MySql",
        createAt: "September 21, 2021 - November 16, 2021",
        link: "https://github.com/HoaiNam1511/MyKitchen",
        source: "https://github.com/HoaiNam1511/MyKitchen",
        member: 1,
        images: [
            { image: pj7_1 },
            { image: pj7_2 },
            { image: pj7_3 },
            { image: pj7_4 },
            { image: pj7_5 },
        ],
    },
];
