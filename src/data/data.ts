import type { PersonalInfo, Project, SkillGroup, Publication, Certification } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Ken Audie S. Lucero",
  title: "Backend-Focused Software Engineer",
  tagline: "Building APIs, compilers, and real-time systems.",
  email: "kenaudielucero@gmail.com",
  phone: "(+63) 9690570577",
  location: "Quezon City, Metro Manila",
  github: "https://github.com/kndlcero",
  linkedin: "https://linkedin.com/in/kenaudielucero",
  summary:
    "Backend-focused Computer Science junior at Polytechnic University of the Philippines with consistent academic distinction (President's List & Dean's List every semester). Experienced in building APIs, compilers, database systems, and real-time applications across team and solo projects. Special contributor to a paper presented at WCTP 2025, an international academic workshop on computation.",
};

export const projects: Project[] = [
  {
    slug: "pup-school-enrollment-system",
    title: "PUP School Enrollment System",
    role: "Backend / Full-Stack Developer",
    stack: ["Laravel", "Supabase", "PostgreSQL", "Sanctum"],
    description: [
      "Built role-based enrollment workflows using Laravel 13, Laravel Sanctum, Blade Templates, Bootstrap, and Supabase PostgreSQL.",
      "Modeled a 17-table database covering users, roles, academic years, semesters, colleges, programs, sections, subjects, applications, and enrollments.",
      "Implemented registrar/admin approval flows for section assignment, automatic subject enrollment, rejection remarks, and semester-scoped student records.",
    ],
    overview:
      "PUP School Enrollment System is a full-stack Laravel application that digitizes the enrollment lifecycle from student registration and application submission to registrar review, section assignment, subject enrollment, and semester-based record keeping.",
    contributions: [
      "Implemented Laravel backend flows for enrollment applications, approval/rejection states, and role-protected API endpoints.",
      "Worked with Supabase PostgreSQL schema design covering 17 tables across users, academic structure, subjects, and enrollment records.",
      "Built registrar/admin workflows for assigning sections and automatically enrolling approved students into section subject offerings.",
      "Supported a deployment-ready stack using Laravel Sanctum, Vite, Bootstrap, and Docker configuration.",
    ],
    gallery: [
      { src: "/images/enrollment/login.webp", alt: "PUP School Enrollment System login screen", caption: "Login screen for role-based access across students, faculty, registrar, and admin users." },
      { src: "/images/enrollment/register.webp", alt: "PUP School Enrollment System registration screen", caption: "Student registration flow that starts the enrollment application lifecycle." },
      { src: "/images/enrollment/student_dashboard.webp", alt: "PUP School Enrollment System student dashboard", caption: "Student dashboard for profile access, enrollment status, and semester records." },
      { src: "/images/enrollment/enrollment_page.webp", alt: "PUP School Enrollment System enrollment form", caption: "Enrollment form capturing semester, program, year level, and student type." },
      { src: "/images/enrollment/registrar_dashboard.webp", alt: "PUP School Enrollment System registrar dashboard", caption: "Registrar dashboard for reviewing applications and managing enrollment decisions." },
      { src: "/images/enrollment/registrar_faculty_management.webp", alt: "PUP School Enrollment System registrar faculty management", caption: "Registrar tooling for managing faculty assignments and enrollment-related records." },
      { src: "/images/enrollment/admin_dashboard.webp", alt: "PUP School Enrollment System admin dashboard", caption: "Admin dashboard for high-level system management and monitoring." },
      { src: "/images/enrollment/admin_users_management.webp", alt: "PUP School Enrollment System user management", caption: "Admin user management for roles, accounts, and access control." },
      { src: "/images/enrollment/faculty_dashboard.webp", alt: "PUP School Enrollment System faculty dashboard", caption: "Faculty dashboard for assigned sections and academic records." },
      { src: "/images/enrollment/records_page.webp", alt: "PUP School Enrollment System records page", caption: "Semester-scoped records page for tracking enrollment history and subject records." },
      { src: "/images/enrollment/profile.webp", alt: "PUP School Enrollment System profile page", caption: "Profile page for managing student and account information." },
    ],
    facts: [
      { label: "Project Type", value: "Full-stack enrollment system" },
      { label: "Team", value: "4-person team" },
      { label: "Database", value: "17 PostgreSQL tables" },
      { label: "Scope", value: "14 colleges, 59 programs" },
    ],
    github: "https://github.com/tzuyu10/G8-School-Enrollment-System",
    featured: true,
    tag: "Laravel / Enrollment System",
    image: "/images/enrollment/student_dashboard.webp",
  },
  {
    slug: "bantay",
    title: "Bantay",
    role: "Full-Stack Developer",
    stack: ["React", "Python", "FastAPI"],
    description: [
      "Built a real-time flood propagation monitoring system integrating DOST/PAGASA data via FastAPI.",
      "Implemented BFS and Dijkstra algorithms for flood simulation and evacuation route optimization.",
      "Delivered with a 9-person team; work presented at WCTP 2025 international workshop.",
    ],
    overview:
      "Bantay is a disaster-response platform focused on flood monitoring, water-level visibility, and evacuation support. My work centered on connecting real-time environmental data to backend services and supporting algorithmic route planning for safer community response.",
    contributions: [
      "Integrated DOST/PAGASA-related flood data through FastAPI service endpoints.",
      "Implemented graph-based BFS and Dijkstra flows for evacuation and route optimization use cases.",
      "Helped prepare the project for WCTP 2025 presentation and publication support materials.",
    ],
    gallery: [
      { src: "/images/bantay/water-monitor.webp", alt: "Bantay water monitoring dashboard", caption: "Water monitoring dashboard for tracking flood-related conditions." },
      { src: "/images/bantay/water-level.webp", alt: "Bantay water level view", caption: "Water-level visualization used for flood awareness." },
      { src: "/images/bantay/evacuation.png", alt: "Bantay evacuation route result", caption: "Evacuation route output powered by graph traversal logic." },
      { src: "/images/bantay/published_paper.png", alt: "Bantay published paper screenshot", caption: "Publication/presentation artifact for the WCTP 2025 contribution." },
    ],
    facts: [
      { label: "Project Type", value: "Academic / Research" },
      { label: "Team", value: "9-person team" },
      { label: "Focus", value: "Flood monitoring, routing, APIs" },
      { label: "Status", value: "Presented at WCTP 2025" },
    ],
    github: "https://github.com/PMT-BANTAY/bantay-demo",
    featured: true,
    tag: "Real-time / WCTP 2025",
    image: "/images/bantay.webp",
  },
  {
    slug: "eac-compiler",
    title: "EAC Compiler",
    role: "Backend Developer",
    stack: ["C"],
    description: [
      "Built a compiler for a custom Python-derived language (.eac files) covering the full front-end pipeline.",
      "Solely built the parser component; assisted with lexer development and grammar rule definitions.",
      "Pipeline covers: source input -> lexer (token output) -> parser (grammar validation).",
    ],
    overview:
      "EAC Compiler is a C-based compiler front end for a custom Python-derived language. The project focused on lexical analysis, grammar validation, and parser error reporting for .eac source files.",
    contributions: [
      "Owned the parser implementation and grammar-validation behavior.",
      "Contributed to lexer rule definitions and token output validation.",
      "Improved syntax error detection to make invalid source files easier to diagnose.",
    ],
    gallery: [
      { src: "/images/eac/eac_lexer_output.png", alt: "EAC lexer token output", caption: "Lexer output showing tokenized source input." },
      { src: "/images/eac/eac_parser_output_with_correct_error_findings.png", alt: "EAC parser error output", caption: "Parser validation output with detected grammar errors." },
    ],
    facts: [
      { label: "Project Type", value: "Compiler front end" },
      { label: "Language", value: "C" },
      { label: "Focus", value: "Lexer, parser, grammar validation" },
      { label: "Ownership", value: "Parser lead" },
    ],
    github: "https://github.com/eac-language/eac",
    featured: true,
    tag: "Compiler",
    image: "/images/eac.png",
  },
  {
    slug: "iskonnect",
    title: "Iskonnect",
    role: "Backend Developer",
    stack: ["Java", "PostgreSQL", "MVC"],
    description: [
      "Engineered backend infrastructure for a desktop educational resource-sharing app using Java.",
      "Implemented secure user authentication and data validation using MVC architecture.",
      "Collaborated with a 7-person team to optimize database queries and improve system performance.",
    ],
    overview:
      "Iskonnect is an educational resource-sharing desktop application. It separates student and admin workflows while using Java, PostgreSQL, and an MVC structure to manage authentication, resources, and user access.",
    contributions: [
      "Built backend flows for authentication, data validation, and resource management.",
      "Structured application logic around MVC responsibilities for maintainability.",
      "Collaborated on query optimization and role-aware views for students and admins.",
    ],
    gallery: [
      { src: "/images/iskonnect/auth_page.jpg", alt: "Iskonnect authentication page", caption: "Authentication screen for controlled access to the platform." },
      { src: "/images/iskonnect/student_view.jpg", alt: "Iskonnect student view", caption: "Student-facing resource browsing experience." },
      { src: "/images/iskonnect/admin_view.jpg", alt: "Iskonnect admin view", caption: "Admin-facing view for managing resources and platform data." },
    ],
    facts: [
      { label: "Project Type", value: "Desktop app" },
      { label: "Team", value: "7-person team" },
      { label: "Focus", value: "Auth, validation, database flows" },
      { label: "Architecture", value: "Java MVC" },
    ],
    github: "https://github.com/JpCurada/iskonnect",
    featured: true,
    tag: "Document Sharing Platform",
    image: "/images/iskonnect.webp",
  },
  {
    slug: "birthcertify",
    title: "BirthCertify",
    role: "Full-Stack Developer",
    stack: ["React.js", "Supabase"],
    description: [
      "Developed a birth certificate request platform with real-time status updates, improving on PSA Serbilis.",
      "Designed and implemented backend logic and database architecture using Supabase.",
      "Delivered a functional government platform alternative with a 5-person team.",
    ],
    overview:
      "BirthCertify is a government-service concept for birth certificate requests, status tracking, voucher generation, and admin processing. The system models a clearer request lifecycle for regular users and administrators.",
    contributions: [
      "Designed Supabase-backed data flows for certificate requests and status updates.",
      "Implemented user-facing request screens and admin management workflows.",
      "Connected form progression, draft behavior, and voucher download states into a cohesive flow.",
    ],
    gallery: [
      { src: "/images/birthcertify/auth.png", alt: "BirthCertify authentication screen", caption: "Authentication flow for regular and admin users." },
      { src: "/images/birthcertify/regular_user_dashboard.png", alt: "BirthCertify regular user dashboard", caption: "Regular user dashboard for managing certificate requests." },
      { src: "/images/birthcertify/request_sub1.png", alt: "BirthCertify request form", caption: "Request submission step for certificate details." },
      { src: "/images/birthcertify/owner_info.png", alt: "BirthCertify owner information form", caption: "Owner information capture as part of the request workflow." },
      { src: "/images/birthcertify/status_tracking.png", alt: "BirthCertify status tracking", caption: "Request status tracking for users." },
      { src: "/images/birthcertify/voucher_download.png", alt: "BirthCertify voucher download", caption: "Voucher download state after request processing." },
      { src: "/images/birthcertify/admin_user_dashboard.png", alt: "BirthCertify admin user dashboard", caption: "Admin dashboard for reviewing users and requests." },
      { src: "/images/birthcertify/admin_functions.png", alt: "BirthCertify admin functions", caption: "Admin controls for processing request records." },
      { src: "/images/birthcertify/draft.png", alt: "BirthCertify draft view", caption: "Draft handling for incomplete request submissions." },
    ],
    facts: [
      { label: "Project Type", value: "GovTech workflow" },
      { label: "Team", value: "5-person team" },
      { label: "Focus", value: "Requests, status tracking, admin tools" },
      { label: "Backend", value: "Supabase" },
    ],
    github: "https://github.com/tzuyu10/BirthCertify-G9",
    tag: "GovTech",
    image: "/images/birthcertify.png",
  },
  {
    slug: "scamsentry",
    title: "ScamSentry",
    role: "Backend Developer",
    stack: ["TypeScript", "FSA"],
    description: [
      "Contributed to a web-based scam detection system using Finite State Automata.",
      "Added scam patterns to the matching engine and optimized the probability scoring model.",
      "Detects scam messages from user-pasted text with pattern matching.",
    ],
    overview:
      "ScamSentry detects suspicious text patterns using finite-state automata and probability scoring. The project focuses on making scam detection explainable through rule-based matching instead of treating the model as a black box.",
    contributions: [
      "Added scam patterns to the finite-state matching engine.",
      "Worked on probability scoring logic for more useful detection output.",
      "Helped shape the pasted-text workflow from input to flagged result.",
    ],
    gallery: [
      { src: "/images/scamsentry/scam_sentry1.png", alt: "ScamSentry input screen", caption: "Text input workflow for scanning potential scam messages." },
      { src: "/images/scamsentry/scam_sentry2.png", alt: "ScamSentry detection result", caption: "Detection output showing matched scam indicators and result state." },
    ],
    facts: [
      { label: "Project Type", value: "Security tool" },
      { label: "Core Logic", value: "Finite State Automata" },
      { label: "Focus", value: "Pattern matching, probability scoring" },
      { label: "Input", value: "User-pasted text" },
    ],
    github: "https://github.com/tzuyu10/scam-sentry",
    tag: "Security",
    image: "/images/scamsentry.webp",
  },
  {
    slug: "microaggression-detector",
    title: "Microaggression Detector",
    role: "Backend Developer / ML",
    stack: ["Python", "XLM-RoBERTa", "NLP"],
    description: [
      "Fine-tuned XLM-RoBERTa to classify Taglish text into microaggression categories based on Sue's taxonomy.",
      "Categories: micro assault, insult, invalidation, and non-microaggression.",
      "Built a CLI inference pipeline returning per-class probability scores.",
    ],
    overview:
      "Microaggression Detector is an NLP experiment for Taglish text classification. It uses XLM-RoBERTa to classify text into microassault, microinsult, microinvalidation, and non-microaggression categories.",
    contributions: [
      "Fine-tuned and evaluated an XLM-RoBERTa classification pipeline.",
      "Built CLI inference output that reports per-class probabilities.",
      "Mapped prediction categories to Sue's taxonomy for clearer interpretation.",
    ],
    gallery: [
      { src: "/images/microaggression/output1.png", alt: "Microaggression detector first CLI output", caption: "CLI inference output with class probability results." },
      { src: "/images/microaggression/output2.png", alt: "Microaggression detector second CLI output", caption: "Additional classification sample from the inference pipeline." },
    ],
    facts: [
      { label: "Project Type", value: "NLP classifier" },
      { label: "Model", value: "XLM-RoBERTa" },
      { label: "Focus", value: "Taglish classification" },
      { label: "Interface", value: "CLI inference" },
    ],
    tag: "ML / NLP",
    image: "/images/microaggression.png",
  },
  {
    slug: "webtoonhub",
    title: "WebtoonHub",
    role: "Full-Stack Developer",
    stack: ["Python", "FastAPI"],
    description: [
      "Built a full-stack webtoon aggregator consolidating content from MangaDex and Comix APIs.",
      "Designed the API integration layer using FastAPI with a unified data model for cross-source retrieval.",
    ],
    overview:
      "WebtoonHub is a passion project that aggregates webtoon data across external content APIs. The backend normalizes cross-source responses into a unified model so the frontend can present a consistent browsing experience.",
    contributions: [
      "Designed API integration logic for MangaDex and Comix data sources.",
      "Built FastAPI endpoints around a unified retrieval model.",
      "Created browsing and title-detail flows for exploring aggregated content.",
    ],
    gallery: [
      { src: "/images/webtoonhub/homepage.webp", alt: "WebtoonHub homepage", caption: "Homepage and browsing entry point for aggregated titles." },
      { src: "/images/webtoonhub/sample_title.webp", alt: "WebtoonHub title detail page", caption: "Sample title page showing normalized content details." },
    ],
    facts: [
      { label: "Project Type", value: "Aggregator" },
      { label: "Backend", value: "FastAPI" },
      { label: "Focus", value: "External APIs, unified data model" },
      { label: "Status", value: "Passion project" },
    ],
    tag: "Passion Project / Aggregator",
    image: "/images/webtoonhub.webp",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    icon: "<>",
    skills: ["Java", "C", "PHP", "Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "Backend & APIs",
    icon: "API",
    skills: ["Laravel", "FastAPI", "REST APIs", "Laravel Sanctum", "Supabase", "MVC Architecture"],
  },
  {
    category: "Databases",
    icon: "DB",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    category: "Frontend",
    icon: "UI",
    skills: ["React", "Next.js", "Blade Templates", "Bootstrap", "Tailwind CSS"],
  },
  {
    category: "Tools & Platforms",
    icon: "CLI",
    skills: ["Git", "GitHub", "Maven", "Docker", "Postman", "Vite"],
  },
  {
    category: "ML & Data Science",
    icon: "ML&DS",
    skills: ["PyTorch", "Hugging Face", "Scikit-Learn", "Pandas", "NumPy", "NLP"],
  },
];

export const publications: Publication[] = [
  {
    title:
      "PROJECT BANTAY: Breadth-First Search and Dijkstra Implementation for Community-Accessible Disaster Response",
    role: "Special Contributor",
    event: "WCTP 2025 - 14th Workshop on Computation: Theory and Practice",
    date: "December 3, 2025",
    description:
      "International workshop organized by Institute of Science Tokyo, Chitose Institute of Science and Technology, Kyoto Tachibana University, University of the Philippines-Diliman, and De La Salle University-Manila.",
  },
];

export const certifications: Certification[] = [
  {
    name: "Data Literacy Certification",
    issuer: "DataCamp",
    date: "July 2025",
    url: "https://datacamp.com/skill-verification/DL0036995530047",
  },
  {
    name: "Get Started with Google Workspace Tools",
    issuer: "Google",
    date: "December 2024",
  },
  {
    name: "DataCamp Scholar",
    issuer: "DataCamp",
    date: "2024 - Present",
  },
];
