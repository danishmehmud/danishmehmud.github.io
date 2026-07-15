import {
    cmunerds,
    sementiclogo,
    algo3,
    angular,
    atomix,
    backend,
    cloudtek,
    creator,
    docker,
    gemini,
    git,
    keefe,
    mobile,
    mongodb,
    nestjs,
    nextjs,
    nodejs,
    portfolio,
    postgresql,
    reactjs,
    redux,
    tailwind,
    tb,
    typescript,
    web,
    weinform,
} from '../assets';

export const navLinks = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'work',
        title: 'Work',
    },
    {
        id: 'portfolio',
        title: 'Projects',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
];

const services = [
    {
        title: 'FullStack Developer',
        icon: web,
    },
    {
        title: 'Frontend Developer',
        icon: reactjs,
    },
    {
        title: 'Backend Developer',
        icon: backend,
    },
    {
        title: 'DevOps and Cloud',
        icon: docker,
    },
];

const technologies = [
    {
        name: 'React JS',
        icon: reactjs,
    },
    {
        name: 'Next JS',
        icon: nextjs,
    },
    {
        name: 'Angular',
        icon: angular,
    },
    {
        name: 'TypeScript',
        icon: typescript,
    },
    {
        name: 'Node JS',
        icon: nodejs,
    },
    {
        name: 'Nest JS',
        icon: nestjs,
    },
    {
        name: 'Redux Toolkit',
        icon: redux,
    },
    {
        name: 'Tailwind CSS',
        icon: tailwind,
    },
    {
        name: 'PostgreSQL',
        icon: postgresql,
    },
    {
        name: 'MongoDB',
        icon: mongodb,
    },
    {
        name: 'Docker',
        icon: docker,
    },
    {
        name: 'Git',
        icon: git,
    },
];

const experiences = [
    {
        title: 'Senior Software Engineer (Full Stack)',
        company_name: 'Root Strap',
        icon: sementiclogo,
        iconBg: '#fff',
        date: 'Apr 2023 - Present',
        points: [
            'Delivered end-to-end features across analytics, billing, subscription, and inventory modules for a healthcare SaaS platform supporting more than 7,000 users.',
            'Engineered interactive analytics dashboards using React, TypeScript, and React Query with configurable widgets, reusable data tables, responsive forms, and advanced filtering.',
            'Reduced dashboard load times by 40% through rendering optimizations, lazy loading, code splitting, Redis caching, and database query optimization.',
            'Developed scalable Node.js services and REST and GraphQL APIs supporting authentication, billing, reporting, file management, and real-time healthcare workflows.',
            'Modernized delivery pipelines by introducing containerized microservices, automated CI/CD workflows, and AWS deployments, reducing infrastructure costs by 25% while improving release reliability.',
            'Collaborated with clients, product managers, designers, and engineers to refine requirements, validate technical solutions, demonstrate product increments, and deliver production releases across Agile sprints.',
            'Expanded reusable UI components, documented shared patterns with Storybook, participated in code reviews, and mentored developers to improve consistency across multiple applications.',
            'Increased trial-to-paid conversion by 12% by redesigning the subscription checkout flow.',
            'Reduced production issues in the billing platform by 60% through stronger API validation and improved transaction handling.',
        ],
    },
    {
        title: 'Software Engineer',
        subtitle: '(MERN Stack)',
        company_name: 'SumatoSoft',
        icon: cmunerds,
        iconBg: '#fff',
        date: 'Jun 2019 - Mar 2023',
        points: [
            'Developed enterprise-scale warehouse management, inventory control, order fulfillment, shipping, and logistics applications for a cloud-based third-party logistics (3PL) platform.',
            'Modernized a large Angular application by upgrading from Angular 16 to 17, introducing standalone components, Angular signals, and reusable architectural patterns.',
            'Designed and implemented a reusable frontend design system with shared UI components, internal NPM packages, and consistent theming across applications.',
            'Engineered backend services and real-time integrations using Node.js, Express.js, NestJS, WebSockets, PostgreSQL, MariaDB, and Redis to support inventory synchronization, billing automation, authentication, and order management workflows.',
            'Replaced spreadsheet-driven billing and third-party order synchronization processes with an internal automation platform, streamlining business operations and improving data accuracy.',
            'Improved platform scalability through Redis caching, database optimization, automated testing, and backend architecture enhancements, increasing unit and integration test coverage to 88% while reducing QA regressions by 45%.',
            'Collaborated with clients and cross-functional teams to gather requirements, review technical solutions, resolve production issues, and contribute to architectural decisions.',
            'Increased peak order processing capacity by 3× through workflow redesign and backend processing optimizations.',
            'Reduced support troubleshooting time by 35% by standardizing API error handling, structured logging, and backend diagnostics.',
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Danish consistently delivered high-quality solutions and handled complex technical challenges with confidence. His ability to understand business requirements and turn them into reliable software made him a valuable member of our engineering team.",
        name: 'Michael Johnson',
        designation: 'Product Manager',
        company: '',
        image: 'https://randomuser.me/api/portraits/men/40.jpg',
    },
    {
        testimonial:
            "One of Danish's greatest strengths is writing clean, maintainable code while keeping performance in mind. He communicates well, collaborates effectively, and always takes ownership of the features he builds.",
        name: 'Sarah Williams',
        designation: 'Engineering Manager',
        company: '',
        image: 'https://randomuser.me/api/portraits/women/12.jpg',
    },
    {
        testimonial:
            "We trusted Danish with critical frontend and backend development for enterprise applications. He consistently delivered scalable solutions and demonstrated strong expertise in React, Node.js, and cloud technologies.",
        name: 'David Brown',
        designation: 'CTO, Enterprise Solutions',
        company: '',
        image: 'https://randomuser.me/api/portraits/men/15.jpg',
    },
    {
        testimonial:
            "Danish was proactive throughout the project lifecycle—from planning and architecture to deployment. He solved problems quickly and always focused on delivering a great user experience.",
        name: 'Emily Carter',
        designation: 'Project Manager',
        company: '',
        image: 'https://randomuser.me/api/portraits/women/15.jpg',
    },
    {
        testimonial:
            "Working with Danish was effortless. His knowledge of modern JavaScript frameworks, backend development, and system architecture helped us ship features faster while maintaining excellent code quality.",
        name: 'James Anderson',
        designation: 'Technical Lead',
        company: '',
        image: 'https://randomuser.me/api/portraits/men/16.jpg',
    },
    {
        testimonial:
            "Danish combines strong technical expertise with a practical understanding of business needs. Whether improving performance or implementing new functionality, he consistently delivers solutions that create real value.",
        name: 'Olivia Martinez',
        designation: 'Senior Product Owner',
        company: '',
        image: 'https://randomuser.me/api/portraits/women/16.jpg',
    },
];

const projects = [
    {
        name: 'Enterprise AI & IoT Monitoring Platform',
        description:
            'Built an enterprise AI & IoT platform for centralized monitoring and control of connected building infrastructure, including HVAC, surveillance, lighting, and fire safety equipment.',
        tags: [
            {
                name: 'React',
                color: 'blue-text-gradient',
            },
            {
                name: 'Node.js',
                color: 'green-text-gradient',
            },
            {
                name: 'MQTT',
                color: 'pink-text-gradient',
            },
            {
                name: 'Socket.IO',
                color: 'blue-text-gradient',
            },
            {
                name: 'OpenAI',
                color: 'green-text-gradient',
            },
            {
                name: 'LangChain',
                color: 'pink-text-gradient',
            },
            {
                name: 'AWS',
                color: 'blue-text-gradient',
            },
            {
                name: 'PostgreSQL',
                color: 'red-text-gradient',
            },
        ],
        image: algo3,
        source_code_link: 'https://www.semantichealth.example',
    },
    {
        name: 'E-Commerce Microservices Platform',
        description:
            'Designed a modular microservices architecture for product catalog, orders, payments, and inventory services with async messaging, containerization, and infrastructure automation.',
        tags: [
            {
                name: 'React',
                color: 'blue-text-gradient',
            },
            {
                name: 'Next.js',
                color: 'green-text-gradient',
            },
            {
                name: 'NestJS',
                color: 'pink-text-gradient',
            },
            {
                name: 'PostgreSQL',
                color: 'blue-text-gradient',
            },
            {
                name: 'Redis',
                color: 'green-text-gradient',
            },
            {
                name: 'RabbitMQ',
                color: 'pink-text-gradient',
            },
            {
                name: 'Docker',
                color: 'blue-text-gradient',
            },
            {
                name: 'Terraform',
                color: 'red-text-gradient',
            },
        ],
        image: cloudtek,
        source_code_link: 'https://www.example.com/ecommerce-microservices',
    },
    {
        name: 'Healthcare SaaS Billing & Analytics Platform',
        description:
            'Built end-to-end billing, subscription, inventory, and analytics features for a healthcare SaaS platform supporting thousands of users, with focus on performance and reliability.',
        tags: [
            {
                name: 'React',
                color: 'blue-text-gradient',
            },
            {
                name: 'TypeScript',
                color: 'green-text-gradient',
            },
            {
                name: 'React Query',
                color: 'pink-text-gradient',
            },
            {
                name: 'Node.js',
                color: 'blue-text-gradient',
            },
            {
                name: 'GraphQL',
                color: 'green-text-gradient',
            },
            {
                name: 'Redis',
                color: 'pink-text-gradient',
            },
            {
                name: 'AWS',
                color: 'blue-text-gradient',
            },
        ],
        image: atomix,
        source_code_link: 'https://www.example.com/healthcare-billing',
    },
    {
        name: '3PL Logistics & Inventory Automation Platform',
        description:
            'Developed enterprise logistics, warehouse management, and order fulfillment systems for a third-party logistics platform, improving scalability and operational accuracy.',
        tags: [
            {
                name: 'Angular',
                color: 'blue-text-gradient',
            },
            {
                name: 'Node.js',
                color: 'green-text-gradient',
            },
            {
                name: 'PostgreSQL',
                color: 'pink-text-gradient',
            },
            {
                name: 'Redis',
                color: 'blue-text-gradient',
            },
            {
                name: 'NestJS',
                color: 'green-text-gradient',
            },
            {
                name: 'WebSockets',
                color: 'pink-text-gradient',
            },
        ],
        image: weinform,
        source_code_link: 'https://www.example.com/logistics-automation',
    },
    {
        name: 'AI-Enabled Facility Operations Assistant',
        description:
            'Built an AI-powered assistant to support facility management workflows, providing contextual operational support, issue triage, and automation for building infrastructure and safety systems.',
        tags: [
            {
                name: 'React',
                color: 'blue-text-gradient',
            },
            {
                name: 'Node.js',
                color: 'green-text-gradient',
            },
            {
                name: 'OpenAI',
                color: 'pink-text-gradient',
            },
            {
                name: 'LangChain',
                color: 'blue-text-gradient',
            },
            {
                name: 'GraphQL',
                color: 'green-text-gradient',
            },
            {
                name: 'AWS',
                color: 'pink-text-gradient',
            },
        ],
        image: gemini,
        source_code_link: 'https://www.example.com/ai-facility-assistant',
    },
    {
        name: 'Cloud-Native Retail POS & Inventory Platform',
        description:
            'Delivered a cloud-native point-of-sale and inventory automation platform with real-time order processing, billing, and analytics for retail operations.',
        tags: [
            {
                name: 'Angular',
                color: 'blue-text-gradient',
            },
            {
                name: 'NestJS',
                color: 'green-text-gradient',
            },
            {
                name: 'PostgreSQL',
                color: 'pink-text-gradient',
            },
            {
                name: 'Redis',
                color: 'blue-text-gradient',
            },
            {
                name: 'Docker',
                color: 'green-text-gradient',
            },
            {
                name: 'Microservices',
                color: 'pink-text-gradient',
            },
        ],
        image: portfolio,
        source_code_link: 'https://www.example.com/pos-inventory-platform',
    },
];

export { experiences, projects, services, technologies, testimonials };
