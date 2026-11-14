export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "realtime" | "mobile" | "enterprise" | "all";
  badge?: string;
  status: "live" | "in-development" | "case-study";
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  technologies: string[];
  keyHighlights: string[];
  impactMetric?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
    highlight?: boolean;
  }[];
}

export const PERSONAL_INFO = {
  name: "Sivakumar M",
  role: "Frontend Developer",
  specialization: "React.js • React Native • Next.js • Real-time WebSockets",
  location: "Tamil Nadu, India",
  email: "sivakumarmonline@gmail.com",
  phone: "+91 8098680578",
  phoneDisplay: "+91 80986 80578",
  whatsappUrl: "https://wa.me/918098680578",
  linkedinUrl: "https://www.linkedin.com/in/m-sivakumar67",
  githubUrl: "https://github.com/SivakumarMSK",
  resumePath: "/Sivakumar_M_Resume.pdf",
  profilePhoto: "/profile/linkedin-profile-photo.png",
  bio: "Frontend Developer with 1+ year of production experience building high-performance React.js, React Native, and Next.js applications. Specialized in real-time WebSockets, complex REST API orchestration, responsive mobile & web interfaces, and AI-accelerated frontend engineering using Claude, Cursor, and ChatGPT.",
  noticePeriod: "60 Days",
  noticePeriodNote: "Currently employed • 60-Day Notice Period (Open to negotiate / buyout discussions)",
  availability: "Open to Full-time Opportunities (Frontend / React / React Native / Next.js)",
  experienceYears: "1+ Year",
  degree: "Master of Computer Applications (MCA)",
  college: "Ayya Nadar Janaki Ammal College, Sivakasi",
  cgpa: "8.6",
  graduationYear: "Apr 2023 – Apr 2025",
};

export const METRICS = [
  { label: "Production Experience", value: "1+ Year", sub: "React.js & React Native" },
  { label: "Academic CGPA", value: "8.6", sub: "Master of Computer Apps" },
  { label: "APIs & WebSockets", value: "15+", sub: "Real-time Integration" },
  { label: "Notice Period", value: "60 Days", sub: "Negotiable / Ready to Discuss" },
];

export const PROJECTS: Project[] = [
  {
    id: "dreamhouse-auction",
    title: "DreamHouse Auction",
    subtitle: "Real-Time Buyer Portal & Live Auction Mobile Module",
    description:
      "A high-stakes live property auction platform featuring real-time bidding, automatic network reconnection, and mobile/web cross-platform synchronization.",
    category: "realtime",
    badge: "Production Live",
    status: "live",
    liveUrl: "https://agent1.dreamhouseauction.com",
    featured: true,
    technologies: ["React", "React Native", "Expo", "WebSockets", "REST APIs", "Tailwind CSS", "JWT"],
    keyHighlights: [
      "Engineered the React Native live auction module using WebSockets with instant manual & quick-bidding workflows.",
      "Implemented automatic reconnection, live activity feeds, competitor anonymization, and post-auction settlement steps.",
      "Integrated 15+ backend APIs including QR-code based buyer verification at auction check-in.",
      "Developed buyer-facing web features with JWT authentication, protected routing, property listings, inspection booking, and countdown timers."
    ],
    impactMetric: "Real-time WebSocket Bidding Engine"
  },
  {
    id: "spamtight",
    title: "SpamTight",
    subtitle: "Email Security & Verification Platform",
    description:
      "A robust enterprise platform designed to prevent spam, verify domain reputations, and safeguard email deliverability through streamlined UI and verification flows.",
    category: "enterprise",
    badge: "Production Live",
    status: "live",
    liveUrl: "https://spamtight.com",
    featured: true,
    technologies: ["React", "Tailwind CSS", "REST APIs", "Functional Testing", "UI Verification"],
    keyHighlights: [
      "Collaborated on frontend implementation logic, workflow validation, and application state transitions.",
      "Executed functional testing and comprehensive UI verification across browsers to deliver a bug-free experience.",
      "Resolved critical UI bugs and improved user journey flows for email threat analysis and dashboard reporting."
    ],
    impactMetric: "Zero-defect UI Delivery"
  },
  {
    id: "teachers-for-students",
    title: "TeachersForStudents",
    subtitle: "Collaborative EdTech Learning Platform",
    description:
      "A modern education portal connecting teachers and students for interactive classroom management, dynamic assignment reviews, and live academic updates.",
    category: "realtime",
    badge: "Currently Building",
    status: "in-development",
    featured: true,
    technologies: ["Next.js", "React", "Tailwind CSS", "WebSockets", "REST APIs"],
    keyHighlights: [
      "Architecting interactive teacher-student dashboards with real-time assignment and grade notifications.",
      "Implementing responsive classroom modules with mobile-first layout and clean component hierarchies in Next.js.",
      "Integrating real-time WebSocket communication for live question-and-answer sessions and assignment updates."
    ],
    impactMetric: "Active Development Project"
  },
  {
    id: "aqua-blueprint",
    title: "Aqua BluePrint",
    subtitle: "8-Step Water Engineering Wizard & Automated Report Engine",
    description:
      "A specialized technical calculations wizard that guides aquaculture and hydraulic engineers through multi-step sizing algorithms with automated client-side PDF generation.",
    category: "enterprise",
    badge: "Enterprise Case Study",
    status: "case-study",
    featured: true,
    technologies: ["React 19", "Vite", "React Router", "Tailwind CSS", "Fetch API", "jsPDF", "jsPDF-AutoTable"],
    keyHighlights: [
      "Engineered an 8-step wizard for water quality, production, and filtration data with editable and restorable saved forms.",
      "Integrated real-time calculation APIs for hydraulic flow, biofilter sizing, pumping requirements, and limiting-factor analysis.",
      "Built client-side PDF generation using jsPDF & jsPDF-AutoTable producing beautifully formatted engineering reports with custom tables and corporate styling."
    ],
    impactMetric: "8-Step Dynamic Calculation Wizard"
  },
  {
    id: "enterprise-crm",
    title: "Enterprise CRM Platform",
    subtitle: "Project, Feature & Defect Management System",
    description:
      "A scalable customer and task management web application integrated with Django REST APIs, featuring Kanban boards and global search.",
    category: "enterprise",
    badge: "Enterprise Case Study",
    status: "case-study",
    featured: false,
    technologies: ["React", "Django REST API", "JWT", "Tailwind CSS", "Kanban View"],
    keyHighlights: [
      "Built the entire frontend for project, feature, requirement, task, and defect tracking modules.",
      "Designed fluid Kanban and list views, dynamic nested navigation, and high-performance global search.",
      "Integrated secure JWT authentication with token refresh, role-based view permissions, and AI-assisted troubleshooting."
    ],
    impactMetric: "Full Kanban & Defect Workflow"
  },
  {
    id: "finance-management-suite",
    title: "Finance Management Suite",
    subtitle: "Student & Client Accounting Portal",
    description:
      "A financial accounting portal developed during internship at Adroit Firm, handling multi-entity income, expense tracking, and client ledger management.",
    category: "enterprise",
    badge: "Production Client Solution",
    status: "case-study",
    featured: false,
    technologies: ["React.js", "REST APIs", "Component Lifecycle", "CSS3", "State Management"],
    keyHighlights: [
      "Contributed to the core finance system by building income, expense, student, and client accounting modules.",
      "Gained deep hands-on expertise in component lifecycle, state reconciliation, feature integration, testing, and debugging.",
      "Ensured pixel-perfect UI fidelity and validation of balance records."
    ],
    impactMetric: "Production Financial Modules"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Milliontech Pvt Ltd",
    role: "Frontend Developer",
    period: "Aug 2025 – Present",
    location: "Tamil Nadu, India",
    type: "Full-time",
    description:
      "Core frontend developer responsible for architecting and maintaining production web and mobile applications using React.js, React Native, and Next.js.",
    highlights: [
      "Developed and maintained React.js and React Native applications by building reusable UI components, integrating REST APIs, and collaborating with backend engineers.",
      "Architected live auction WebSocket modules with auto-reconnection, bid streaming, and real-time interest updates.",
      "Managed source code with Git/GitHub, feature branches, pull requests, code reviews, functional testing, UI validation, and bug fixing.",
      "Leveraged AI-assisted development tools (Claude, ChatGPT, Cursor) to accelerate feature development velocity, elevate code quality, and solve complex state challenges."
    ],
    technologies: ["React.js", "React Native", "Next.js", "WebSockets", "REST APIs", "Tailwind CSS", "Git/GitHub", "Claude/Cursor"]
  },
  {
    company: "Adroit Firm",
    role: "Frontend Developer Intern",
    period: "Internship",
    location: "Rajapalayam, India",
    type: "Internship",
    description:
      "Intensive frontend engineering internship focusing on production React.js feature delivery, testing, and API integration for client finance tools.",
    highlights: [
      "Contributed to a React.js-based finance management system by implementing income, expense, student, and client modules.",
      "Gained practical experience in UI development, API consumption, testing, responsive debugging, and state validation."
    ],
    technologies: ["React.js", "REST APIs", "JavaScript", "CSS3", "Component Testing"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend & Mobile",
    description: "Core UI engines and cross-platform mobile frameworks",
    skills: [
      { name: "React.js", level: "Production", highlight: true },
      { name: "Next.js", level: "Advanced", highlight: true },
      { name: "React Native", level: "Production (Expo)", highlight: true },
      { name: "JavaScript (ES6+)", level: "Fluent", highlight: true },
      { name: "TypeScript", level: "Proficient" },
      { name: "React Router", level: "Advanced" },
    ]
  },
  {
    title: "Real-Time & Networking",
    description: "Bidirectional streams, state synchronization, and secure APIs",
    skills: [
      { name: "WebSockets", level: "Production Live Streams", highlight: true },
      { name: "REST APIs Integration", level: "Production (15+ Endpoints)", highlight: true },
      { name: "JWT Authentication", level: "Protected Routing" },
      { name: "Fetch API / Axios", level: "Advanced" },
      { name: "Auto-Reconnection Logic", level: "Production Grade" }
    ]
  },
  {
    title: "Styling & Tooling",
    description: "Design systems, bundlers, and dynamic report generation",
    skills: [
      { name: "Tailwind CSS", level: "Expert", highlight: true },
      { name: "Vite", level: "Production Bundler", highlight: true },
      { name: "HTML5 / Modern CSS", level: "Pixel-Perfect" },
      { name: "jsPDF & AutoTable", level: "Client-side PDF Engine" },
      { name: "Responsive UI/UX", level: "Mobile & Desktop" }
    ]
  },
  {
    title: "Workflow & AI-Assisted Dev",
    description: "Modern collaboration, version control, and AI productivity stack",
    skills: [
      { name: "Git & GitHub", level: "PRs, Branches & Reviews", highlight: true },
      { name: "Claude, Cursor, ChatGPT", level: "Accelerated Dev Velocity", highlight: true },
      { name: "Functional Testing", level: "UI Validation" },
      { name: "Debugging & DevTools", level: "Performance Optimization" }
    ]
  }
];

