import { Project, Experience, SkillCategory, ContactInfo } from '../types';

export const contactInfo: ContactInfo = {
  name: 'Ganesh Reddy Katla',
  role: 'Senior Frontend Engineer & AI Enthusiast',
  company: 'Cybersoft Technologies',
  primaryEmail: 'kganeshreddy1993@gmail.com',
  personalEmail: 'ganeshreddykatla321@gmail.com',
  phone: '(+91) 8309226472',
  location: 'Hyderabad, Telangana, India',
  github: 'https://github.com/Ganeshreddykatla',
  linkedin: 'https://linkedin.com',
  availableForWork: true,
  statusMessage: 'Building high-impact enterprise SaaS, design systems & AI developer tooling',
};

export const bioData = {
  headline: 'Senior Frontend Engineer & AI Enthusiast with 8+ years architecting enterprise SaaS platforms, scalable design systems, and AI developer tooling.',
  summary:
    'With over 8 years of engineering leadership across high-scale enterprise SaaS and product ecosystems, I specialize in frontend modernization, component design systems, and developer-enablement tooling. At Cybersoft Technologies, I engineer core web platforms for PrimeroEdge and SchoolCafé—the leading software solutions managing USDA-compliant child nutrition programs, cafeteria point-of-sale, and parent community portals for US school districts. My career also spans leading frontend squads for Sekel Tech (hyperlocal commerce & local SEO SaaS at Coditation) and building consumer FinTech (ZestMoney digital lending) and enterprise healthcare portals (Anthem) at Stridez Solutions.',
  stats: [
    { label: 'Years Experience', value: '8+' },
    { label: 'Enterprise Platforms', value: '5+' },
    { label: 'Custom AI Skills', value: '30+' },
  ],
};

export const projectsData: Project[] = [
  // 1. K-12 Child Nutrition SaaS - PrimeroEdge Insights & Reports
  {
    id: 'insights-workspace',
    title: 'PrimeroEdge Insights & Nutrition Reports Workspace',
    subtitle: 'High-throughput analytics & USDA compliance reporting for US K-12 school districts',
    organization: 'Cybersoft Technologies',
    period: 'Nov 2024 – Present',
    category: 'nutrition',
    featured: true,
    summary:
      'A real-time operational dashboard and compliance reporting engine for school district nutrition directors. Powers mission-critical analytics on Meals Per Labor Hour (MPLH), cafeteria revenue, food waste, inventory burn rates, and state-mandated USDA Child Nutrition Program audit reports across hundreds of US school districts.',
    highlights: [
      'Refactored the monolithic legacy Reports engine into modular, high-performance React components: Starred Reports, Full District Directory, Asynchronous Job Queue, and Automated Email Dispatcher.',
      'Engineered a pooled notification architecture using Zustand that avoids duplicate re-renders and re-fetches during high-frequency morning meal transaction updates.',
      'Implemented TanStack Virtual to smoothly render 10,000+ district inventory items, commodity allocations, and meal count records with zero frame drops.',
      'Integrated client-side PDF preview and export workflows via react-pdf, producing audit-ready USDA nutritional compliance and free/reduced meal claim reports.',
      'Hardened enterprise role-based security, eliminating sensitive access tokens from URLs and enforcing strict district-level data segregation.',
    ],
    metrics: [
      { label: 'Virtual Rows', value: '10,000+' },
      { label: 'Re-render Drop', value: '75%' },
      { label: 'Domain', value: 'US K-12 Nutrition' },
    ],
    tags: ['React 18', 'TypeScript', 'Zustand', 'TanStack Virtual', 'react-pdf', 'USDA Compliance', 'Tailwind CSS'],
    architectureNotes:
      'Modular client architecture: district data feeds stream into normalized Zustand caches; virtualization renders only viewport rows; report generation jobs are offloaded to background web workers with client-side PDF rendering.',
    keyInnovations: [
      'Zero-lag virtualization over massive district food service inventories',
      'Client-side state-audit PDF generation saving heavy server compute',
      'Pooled event bus eliminating multi-tab notification storms',
    ],
  },

  // 2. K-12 Child Nutrition SaaS - SchoolCafé & K-12 Insights
  {
    id: 'schoolcafe-k12-insights',
    title: 'SchoolCafé Community Portal & K-12 Insights Mobile Operations',
    subtitle: 'Contactless cafeteria checkouts, allergen menus, parent payments & mobile pairing',
    organization: 'Cybersoft Technologies',
    period: 'Nov 2024 – Present',
    category: 'nutrition',
    featured: true,
    summary:
      'Student and parent-facing web portal alongside cafeteria staff mobile applications. Enables millions of parents to deposit meal funds, track daily student nutrition, filter digital menus for food allergens, and submit Free & Reduced Lunch applications, while equipping cafeteria teams with high-speed POS pairing.',
    highlights: [
      'Built app-code generation in the Node.js UI Server enabling instant, secure QR-code device pairing between district administrative consoles and K-12 Insights mobile clients with multi-region tenant routing.',
      'Spearheaded comprehensive WCAG 2.1 AA accessibility remediation: contrast ratio fixes, ARIA tree synchronization, screen reader labels, and keyboard navigation trap elimination across parent forms.',
      'Integrated dynamic Power BI grid APIs with customizable column layouts, saved district views, and export pipelines for district school boards.',
      'Optimized digital interactive menus showing daily nutritional breakdowns (calories, sodium, allergens, USDA meal patterns) for student dietary safety.',
    ],
    metrics: [
      { label: 'Accessibility', value: 'WCAG 2.1 AA' },
      { label: 'Users', value: 'Students & Parents' },
      { label: 'Core Integration', value: 'Power BI & React Native' },
    ],
    tags: ['React', 'React Native', 'WCAG 2.1 AA', 'Node.js', 'Power BI API', 'QR Pairing', 'Nutrition Menus'],
    architectureNotes:
      'Cross-platform sync: Node.js UI Server generates cryptographically signed ephemeral tokens encoded in QR codes; mobile POS devices scan and establish secure WebSockets for real-time meal checkouts.',
    keyInnovations: [
      'Interactive nutrient and allergen filter engine for K-12 school menus',
      'Seamless multi-region QR device pairing for cafeteria serving lines',
      'Strict accessibility compliance for public school district portals',
    ],
  },

  // 3. Platform & Design Systems - Enterprise Shared Components v2.0
  {
    id: 'shared-components',
    title: 'Enterprise Shared Component System & Design System v2.0',
    subtitle: 'Unified UI component architecture powering all PrimeroEdge nutrition modules',
    organization: 'Cybersoft Technologies',
    period: 'Nov 2024 – Present',
    category: 'platform',
    featured: true,
    summary:
      'The foundational UI component library and design system powering all PrimeroEdge enterprise modules (POS, Menu Planning, Eligibility, Inventory, Financials). Unifies 60+ third-party and internal packages behind clean sub-path exports, published to Azure Artifacts.',
    highlights: [
      'Spearheaded major upgrade to v2.0.0 targeting React 19 and Node 24 runtime, orchestrating build bundling with tsup and bunchee with strict TypeScript declaration generation.',
      'Architected bundle splitting so icons and heavy components export as isolated sub-paths, enabling granular tree-shaking and shrinking consuming app bundle sizes by up to 40%.',
      'Upgraded Material UI to v7 and Kendo React to v13 while achieving complete visual and theme parity with legacy applications across sidebars, grids, charts, and date pickers.',
      'Integrated comprehensive Storybook component documentation, interactive live sandboxes, Jest test coverage, and automated context documentation pipelines.',
    ],
    metrics: [
      { label: 'Packages Unified', value: '60+' },
      { label: 'React Target', value: 'v19.0' },
      { label: 'Bundle Reduction', value: '~40%' },
    ],
    tags: ['React 19', 'Material UI v7', 'Kendo React v13', 'TypeScript', 'tsup', 'Storybook', 'Azure Artifacts'],
    architectureNotes:
      'Multi-entry sub-path exports configured in package.json. Consuming nutrition apps import strictly what they need (e.g. enterprise-components/grid) without carrying unused charting or iconography code.',
  },

  // 4. Hyperlocal Commerce - Sekel Tech Platform (Coditation Systems - Lead Engineer)
  {
    id: 'sekel-tech-saas',
    title: 'Sekel Tech Hyperlocal Discovery & Retail SaaS Platform',
    subtitle: 'Dynamic engagement commerce engine connecting physical retail stores to local buyers',
    organization: 'Coditation Systems Pvt Ltd',
    period: 'Dec 2021 – Sep 2024',
    category: 'hyperlocal',
    featured: true,
    summary:
      'As Lead Engineer, directed the frontend team building Sekel Tech, an enterprise Hyperlocal SaaS platform helping national and global retail brands (automotive, banking, retail chains) drive local discovery, dynamic store locators, real-time inventory visibility, and automated Google Business Profile synchronization.',
    highlights: [
      'Served as Lead Engineer mentoring a team of developers, leading sprint architecture, code reviews, and establishing engineering standards across Vue.js and Nuxt.js codebases.',
      'Architected Server-Side Rendering (SSR) and automated Schema.org JSON-LD structured data generation at the code level, drastically lifting organic local search rankings for tens of thousands of merchant storefronts.',
      'Engineered dynamic store locator maps with real-time in-store inventory lookups, store operating hours, local promotions, and localized review management.',
      'Spearheaded resilient Redux state management machines that unified multi-store data feeds, eliminating redundant API calls and boosting mobile catalog loading speeds.',
      'Collaborated closely with product managers and enterprise clients to translate business requirements into clean, maintainable, modular frontend components.',
    ],
    metrics: [
      { label: 'Tenure', value: '2 yrs 10 mos' },
      { label: 'Role', value: 'Lead Engineer' },
      { label: 'Core Architecture', value: 'Nuxt.js SSR & Schema.org' },
    ],
    tags: ['Vue.js', 'Nuxt.js', 'SSR', 'SEO Structured Data', 'Redux', 'Team Leadership', 'Google Business Sync'],
    architectureNotes:
      'Isomorphic SSR pipeline: Nuxt.js handles server rendering on edge nodes with dynamic Schema.org JSON-LD injection for Google spiders, followed by client hydration with optimized Redux store slices.',
    keyInnovations: [
      'Automated local SEO structured schema injection per physical store location',
      'High-speed local inventory caching for multi-store retail brands',
      'Engineering mentorship program elevating junior developers to module owners',
    ],
  },

  // 5. FinTech - ZestMoney Digital Lending (Stridez Solutions)
  {
    id: 'zestmoney-onboarding',
    title: 'ZestMoney Consumer Lending & Digital EMI Onboarding Portal',
    subtitle: 'Instant credit underwriting, Aadhaar/PAN KYC & checkout integration for millions',
    organization: 'Stridez Solutions India Pvt Ltd',
    period: '2020 – 2021',
    category: 'fintech',
    featured: true,
    summary:
      'Engineered core responsive customer onboarding modules for ZestMoney, one of India\'s largest consumer lending and digital EMI platforms. Built seamless checkout funnels, instant digital KYC verification, automated credit limit approval screens, and mandate setups for major merchant partners (Amazon, Flipkart, MakeMyTrip).',
    highlights: [
      'Developed responsive, high-converting multi-step customer onboarding flows: phone OTP verification, PAN/Aadhaar instant KYC capture, document upload, and bank statement verification.',
      'Engineered interactive real-time EMI repayment schedule calculators, displaying interest rates, processing fees, and monthly amortizations with clear visual breakdowns.',
      'Integrated digital auto-debit mandate setup flows (e-NACH / Net Banking) with strict error recovery for failed payment authorizations.',
      'Authored Jira user stories, estimated engineering story points, and led frontend-backend API contract reviews to guarantee sub-second checkout response times.',
    ],
    metrics: [
      { label: 'Domain', value: 'Consumer FinTech' },
      { label: 'Core Tech', value: 'React & Redux' },
      { label: 'Conversion Lift', value: '+18% Funnel Speed' },
    ],
    tags: ['React.js', 'Redux', 'FinTech', 'KYC Verification', 'e-NACH Mandates', 'REST APIs', 'Form State'],
    architectureNotes:
      'Step-wise finite state machine for KYC onboarding: user progress persisted in local and encrypted session storage to allow seamless recovery from network drops during document verification.',
    keyInnovations: [
      'Zero-drop multi-step KYC verification funnel with client-side image compression',
      'Dynamic EMI calculator with instant amortization schedule updates',
    ],
  },

  // 6. Healthcare - Anthem Insurance Management (Stridez Solutions)
  {
    id: 'anthem-insurance',
    title: 'Anthem Healthcare Enterprise Insurance & Payer Portal',
    subtitle: 'HIPAA-compliant policy administration, claims processing & provider directory search',
    organization: 'Stridez Solutions India Pvt Ltd',
    period: '2019 – 2020',
    category: 'fintech',
    featured: true,
    summary:
      'Built and maintained enterprise insurance plan administration, agent management, and member policyholder interfaces for Anthem, a leading US healthcare benefits company. Ensured strict HIPAA compliance, date-wise claims audit logging, and accessible provider lookup.',
    highlights: [
      'Developed responsive, accessible web portals adhering to corporate healthcare design systems using React, Bootstrap, and CSS3.',
      'Engineered date-wise claims processing views, member benefit eligibility verification, and deductible accumulation progress charts.',
      'Built provider directory search interfaces with multi-criteria filtering (specialty, hospital affiliation, network tier, geolocation) and accessibility compliance.',
      'Participated in daily Agile Scrum ceremonies, sprint retrospectives, and cross-functional defect triage with US-based product managers.',
    ],
    metrics: [
      { label: 'Domain', value: 'Healthcare Payer' },
      { label: 'Compliance', value: 'HIPAA & WCAG' },
      { label: 'Methodology', value: 'Agile Scrum' },
    ],
    tags: ['React.js', 'Healthcare', 'HIPAA Compliance', 'Bootstrap', 'REST APIs', 'Audit Trails'],
    architectureNotes:
      'Strict client-side data hygiene: member health data and insurance identifiers rendered via sanitized, session-only tokens with automatic timeout logouts for HIPAA compliance.',
  },

  // 7. Cloud E-Commerce - GCP Grocery & Global Books (Stridez Solutions)
  {
    id: 'grocery-books-portals',
    title: 'GCP Retail Grocery Delivery & Global Books E-Commerce Platforms',
    subtitle: 'Dual enterprise e-commerce portals deployed on Google Cloud Platform App Engine',
    organization: 'Stridez Solutions India Pvt Ltd',
    period: '2018 – 2019',
    category: 'fintech',
    summary:
      'Developed delivery logistics management and checkout payment gateways for a wholesale grocery platform, alongside an international book publishing e-commerce marketplace deployed on Google Cloud Platform App Engine.',
    highlights: [
      'Designed, developed, and tested accessible HTML5, CSS3, Bootstrap, and React web interfaces meeting modern web performance benchmarks.',
      'Integrated secure REST APIs created with Node.js, validating payload structures and error handling using Postman and React DevTools.',
      'Implemented shopping cart persistence, coupon code calculation engines, and payment gateway webhooks.',
      'Configured automated build and deployment pipelines within the Google Cloud Platform (GCP) App Engine serverless environment.',
    ],
    tags: ['React.js', 'Node.js REST', 'GCP App Engine', 'Bootstrap', 'E-Commerce', 'Payment Gateways'],
  },

  // 8. AI Developer Tooling - Cybersoft Claude ToolKit
  {
    id: 'claude-toolkit',
    title: 'Cybersoft Claude ToolKit & Codebase Knowledge Graphs',
    subtitle: 'Enterprise AI developer workflow & static analysis engine for UI engineering squads',
    organization: 'Cybersoft Technologies',
    period: 'Nov 2024 – Present',
    category: 'ai-platform',
    featured: true,
    summary:
      'A proprietary Claude Code developer toolkit engineered for Cybersoft repositories. Provides AI assistants with a compact, always-current semantic picture of codebases using per-file summaries and knowledge graphs, significantly decreasing token costs while maximizing context accuracy.',
    highlights: [
      'Engineered Git pre-commit hooks and CI steps that maintain per-file context summaries on every commit, steering Claude to read compact indexes before raw source.',
      'Developed an AST-driven codebase knowledge graph powering impact analysis, cross-file refactoring, and automated developer onboarding across large-scale K-12 nutrition repositories.',
      'Authored 30 production skills spanning Intelligence, Development, Quality, DevOps, Utility, and Meta workflows (PR reviewer with context, Jira implementer, accessibility auditor).',
      'Automated Webpack to Vite migrations including breaking change fixes for React Router, MUI, and Redux Toolkit across older nutrition modules.',
    ],
    metrics: [
      { label: 'Custom Skills', value: '30' },
      { label: 'Adoption Rate', value: '100% UI Repos' },
      { label: 'Token Reduction', value: '~65%' },
    ],
    tags: ['Claude Code', 'MCP', 'AST Analysis', 'Git Hooks', 'Node.js', 'Python', 'Developer Tooling'],
  },

  // 9. AI Developer Tooling - Internal Operations Portal
  {
    id: 'internal-portal',
    title: 'Cybersoft Internal Operations Portal & AI Telemetry',
    subtitle: 'Role-aware developer portal, telemetry dashboard & automated cloud test runner',
    organization: 'Cybersoft Technologies',
    period: 'Nov 2024 – Present',
    category: 'ai-platform',
    summary:
      'A unified developer operations portal where engineering, devops, product, and QA sign in with Entra ID to monitor AI model telemetry, inspect custom skills, and execute automated cloud test suites on Azure Container Apps.',
    highlights: [
      'Built an interactive Claude Code usage analytics dashboard tracking token usage by model, cache ratios, active engineers, session times, and git contributions.',
      'Integrated an OpenTelemetry collector pipeline deployed on internal Azure infrastructure for real-time observability.',
      'Engineered an on-demand QA runner for SchoolCafé Playwright and Selenium test suites hosted via Azure Container Apps without persistent credentials.',
    ],
    tags: ['React', 'TypeScript', '.NET 9', 'OpenTelemetry', 'Azure Container Apps', 'Entra ID'],
  },

  // 10. Platform Delivery - Vite Migrations & Dockerization
  {
    id: 'platform-migrations',
    title: 'Vite Migrations, CDN Content-Hashing & Dockerized Builds',
    subtitle: 'DevOps & platform build modernization across legacy enterprise modules',
    organization: 'Cybersoft Technologies',
    period: 'Nov 2024 – Present',
    category: 'ai-platform',
    summary:
      'Multi-phase infrastructure revamp transitioning legacy Webpack module builds to Vite, deploying high-speed CDN asset delivery with content hashing, and standardizing Docker production containers.',
    highlights: [
      'Migrated SchoolCafé Custom Reports and the System module from Webpack to Vite, resolving duplicate React singleton traps and development condition bundling quirks.',
      'Engineered CDN asset distribution with build-hash validation across System UI and UI Server with automated fallback to local assets.',
      'Packaged all UI modules into lightweight Docker images served via tuned nginx configurations with automated health check endpoints.',
    ],
    metrics: [
      { label: 'Build Time', value: '5x Faster' },
      { label: 'HMR Latency', value: '<50ms' },
    ],
    tags: ['Vite', 'Webpack', 'CDN', 'Docker', 'nginx', 'Azure DevOps', 'CI/CD'],
  },
];

export const experienceData: Experience[] = [
  {
    id: 'cybersoft',
    role: 'Senior Frontend Engineer',
    company: 'Cybersoft Technologies',
    period: 'Nov 2024 – Present',
    location: 'Hyderabad, India',
    duration: 'Current Role',
    type: 'Full-time',
    description:
      'Driving frontend modernization, design systems, and developer AI enablement for PrimeroEdge and SchoolCafé—the industry-standard child nutrition management ERP platforms serving hundreds of K-12 school districts across the United States.',
    responsibilities: [
      'Architect the PrimeroEdge Insights dashboard and nutrition compliance reports workspace, utilizing TanStack Virtual and Zustand pooled state to render massive district inventory and claims data with zero lag.',
      'Upgrade and maintain Enterprise Shared Components v2.0 on React 19, MUI v7, and Kendo React v13, reducing consumer application bundle sizes by ~40% via sub-path tree shaking.',
      'Contribute to SchoolCafé parent portal accessibility (WCAG 2.1 AA) and K-12 Insights cafeteria mobile POS QR-pairing workflows.',
      'Pioneer company-wide AI developer enablement: authored the Cybersoft Claude ToolKit with 30 skills, AST knowledge graphs, and pre-commit context summaries installed across 100% of UI repositories.',
      'Architect the Cybersoft Internal Operations Portal in React and .NET 9 with OpenTelemetry telemetry dashboards and on-demand Azure automated test runners.',
      'Execute Webpack to Vite transitions, content-hashed CDN asset delivery, and lightweight Docker/nginx containerization.',
    ],
    achievements: [
      'Delivered virtualized reports workspace serving US school districts with 75% fewer re-renders.',
      'Cut enterprise app bundle sizes by 40% with the React 19 design system upgrade.',
      'Saved 10+ developer-hours weekly through 30 custom Claude Code skills and 65% token cost reduction.',
    ],
    skills: ['React 19', 'TypeScript', 'Zustand', 'TanStack Virtual', 'Claude Code MCP', 'Vite', 'Material UI v7', 'Kendo React', 'Docker', 'Azure DevOps'],
  },
  {
    id: 'coditation',
    role: 'Lead Engineer',
    company: 'Coditation Systems Pvt Ltd',
    period: 'Dec 2021 – Sep 2024',
    location: 'Hyderabad / Pune, India',
    duration: '2 yrs 10 mos',
    type: 'Full-time',
    description:
      'Led the frontend engineering team on the Sekel Tech Hyperlocal SaaS platform, empowering global and national retail enterprises to connect physical brick-and-mortar storefronts with online local consumers.',
    responsibilities: [
      'Managed, guided, and mentored a team of frontend developers, establishing best-in-class coding guidelines, sprint planning, and rigorous code reviews.',
      'Architected high-performance Server-Side Rendering (SSR) and code-level Schema.org structured data SEO pipelines for tens of thousands of merchant storefronts.',
      'Engineered dynamic store locators with real-time in-store inventory availability, local reviews, and automated Google Business Profile sync.',
      'Formulated Redux state architectures, eliminating duplicate network fetches and boosting catalog browsing responsiveness on mobile devices.',
      'Partnered with product managers and enterprise clients to translate business requirements into clean, reusable, accessible UI components.',
    ],
    achievements: [
      'Drove significant organic search discovery growth for retail brands through Schema.org local SEO automation.',
      'Elevated junior engineers into autonomous module owners through systematic mentorship and architecture workshops.',
      'Successfully sustained 99.9% uptime and high performance across peak holiday retail shopping traffic.',
    ],
    skills: ['Vue.js', 'Nuxt.js', 'React.js', 'Next.js', 'Redux', 'SSR', 'Schema.org SEO', 'Team Mentorship', 'Agile Leadership'],
  },
  {
    id: 'stridez',
    role: 'Front End Developer',
    company: 'Stridez Solutions India Pvt Ltd',
    period: 'Sep 2018 – Sep 2021',
    location: 'Hyderabad, India',
    duration: '3 yrs',
    type: 'Full-time',
    description:
      'Engineered responsive web applications and portals across consumer FinTech, healthcare insurance, and e-commerce domains for prominent enterprise clients.',
    responsibilities: [
      'ZestMoney Consumer Lending: Developed multi-step digital EMI onboarding modules, KYC document capture (Aadhaar/PAN), real-time repayment calculators, and e-NACH mandate authorizations.',
      'Anthem Healthcare Insurance: Built and maintained insurance policy management portals, date-wise claims audit logging, and accessible provider directory lookup.',
      'GCP Cloud E-Commerce: Developed retail grocery delivery platforms and global books marketplaces hosted on Google Cloud Platform App Engine with Node.js REST APIs.',
      'Collaborated in Agile Scrum teams: active participant in sprint estimations, retrospectives, user story refinements, and cross-browser testing.',
    ],
    achievements: [
      'Accelerated ZestMoney customer KYC onboarding completion rate by 18% through friction-free client validation.',
      'Delivered HIPAA-compliant healthcare claims interfaces with complete audit trails.',
      'Maintained clean, accessible code bases across 4 separate client production deployments.',
    ],
    skills: ['React.js', 'Redux', 'JavaScript (ESNext)', 'Bootstrap', 'CSS3', 'REST APIs', 'GCP App Engine', 'FinTech', 'Healthcare HIPAA'],
  },
];

export const educationData = [
  {
    degree: 'Master of Technology (M.Tech) in Power Electronics & Electrical Drives',
    institution: 'Jawaharlal Nehru Technological University (JNTU), Hyderabad',
    year: '2017',
    location: 'Hyderabad, India',
    description: 'Specialization in Power Electronics, Electrical Drives, Microcontroller Systems, Digital Control & Computational Modeling.',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Architecture & Frameworks',
    description: 'Modern component architectures, state machines, virtualization & micro-frontends',
    skills: [
      { name: 'React 18/19', level: 'Core', highlight: true },
      { name: 'TypeScript', level: 'Core', highlight: true },
      { name: 'Vue.js & Nuxt.js', level: 'Core', highlight: true },
      { name: 'Next.js', level: 'Advanced' },
      { name: 'Zustand', level: 'Core', highlight: true },
      { name: 'Redux Toolkit', level: 'Core' },
      { name: 'TanStack Virtual', level: 'Advanced', highlight: true },
      { name: 'React Native', level: 'Proficient' },
      { name: 'JavaScript (ESNext)', level: 'Core' },
    ],
  },
  {
    title: 'Domain & Business Expertise',
    description: 'Proven technical leadership across specialized enterprise business verticals',
    skills: [
      { name: 'K-12 Child Nutrition SaaS (USDA)', level: 'Core', highlight: true },
      { name: 'Hyperlocal Commerce & Local SEO', level: 'Core', highlight: true },
      { name: 'FinTech Consumer Lending & EMI', level: 'Core', highlight: true },
      { name: 'Healthcare Insurance (HIPAA)', level: 'Advanced', highlight: true },
      { name: 'Parent & Community Portals', level: 'Core' },
      { name: 'Enterprise Role-Based Access Control', level: 'Core' },
    ],
  },
  {
    title: 'Enterprise Design Systems & UI',
    description: 'Scalable component foundations, accessibility & design token pipelines',
    skills: [
      { name: 'Design System Architecture', level: 'Core', highlight: true },
      { name: 'WCAG 2.1 AA Accessibility', level: 'Core', highlight: true },
      { name: 'Material UI (MUI v7)', level: 'Core', highlight: true },
      { name: 'Kendo React (v13)', level: 'Core' },
      { name: 'Tailwind CSS', level: 'Core', highlight: true },
      { name: 'Storybook', level: 'Advanced' },
      { name: 'Sub-path Tree Shaking', level: 'Advanced' },
    ],
  },
  {
    title: 'AI Engineering & Developer Velocity',
    description: 'AI-assisted developer workflows, custom tooling & code knowledge graphs',
    skills: [
      { name: 'Claude Code MCP Tooling', level: 'Core', highlight: true },
      { name: 'AST Codebase Knowledge Graphs', level: 'Core', highlight: true },
      { name: 'Custom Skills Engineering (30+ skills)', level: 'Core', highlight: true },
      { name: 'Pre-commit Context Generators', level: 'Core', highlight: true },
      { name: 'OpenTelemetry Observability', level: 'Advanced' },
      { name: 'Prompt Engineering & RAG', level: 'Advanced' },
    ],
  },
  {
    title: 'Build, Cloud & DevOps Infrastructure',
    description: 'High-speed compilation, containerization & CI/CD deployment pipelines',
    skills: [
      { name: 'Vite', level: 'Core', highlight: true },
      { name: 'Webpack', level: 'Core' },
      { name: 'Docker & nginx', level: 'Core', highlight: true },
      { name: 'Azure DevOps CI/CD', level: 'Advanced' },
      { name: 'Azure Artifacts & Container Apps', level: 'Advanced' },
      { name: 'Content-Hashed CDN Delivery', level: 'Advanced' },
      { name: 'Google Cloud Platform (GCP)', level: 'Proficient' },
    ],
  },
];
