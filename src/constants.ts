import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Yatharth Mehandiratta",
  title: "Software Developer",
  email: "yatharth0417@gmail.com",
  phone: "+91 87662 88163",
  linkedin: "https://linkedin.com/in/yatharth-mehandiratta",
  github: "https://github.com/yatharth0417",
  education: [
    {
      degree: "Bachelor of Technology (Computer Science & Engineering)",
      institution: "Amity University Uttar Pradesh",
      period: "Sept 2021 – May 2025",
      gpa: "7.52"
    },
    {
      degree: "Analytics for Business Intelligence",
      institution: "Amity Global Institute, Singapore",
      period: "May 2024",
      gpa: "10.0"
    }
  ],
  experience: [
    {
      role: "Software Developer",
      company: "Contemi Trading Solutions (Nova Post Trade Division)",
      period: "Aug 2025 – Jan 2026",
      description: [
        "Spearheaded the creation of the 'Party Invoice Enquiry' screen in Visual Studio Professional, implementing complex logic for data retrieval.",
        "Designed automated Nexus processes to extract, transform, and load (ETL) data between CSV files, Nova tables, and Staging environments.",
        "Enhanced the Nova GUI application by integrating custom controls and modifying database schema lengths.",
        "Developed specialized extraction scripts (e.g., CLTTRNSHIS) to streamline the export of Client Transaction History.",
        "Built dynamic data retrieval processes that filter records by Sub-account and Party ID."
      ]
    },
    {
      role: "Web Developer",
      company: "Locamart Online Services Pvt. Ltd.",
      period: "Jan 2024 – Jan 2025",
      description: [
        "Developed and deployed a full-stack application leveraging the MERN Stack, focusing on high-performance user experiences.",
        "Integrated robust backend APIs to enable real-time interactions and database updates.",
        "Contributed to the implementation of frictionless payment solutions, enhancing user credibility."
      ]
    },
    {
      role: "Web Development Intern",
      company: "Amity Innovation Incubator",
      period: "May 2023 – Jul 2023",
      description: [
        "Designed and built multiple websites utilizing the MEAN stack framework.",
        "Completed the first personal development project: a Restaurant Management website."
      ]
    }
  ],
  projects: [
    {
      title: "Analyzing Video Surveillance to Handle Traffic Occlusion",
      period: "Jan 2025",
      description: [
        "Engineered an AI-based traffic monitoring system leveraging Python and OpenCV for real-time vehicle detection and tracking.",
        "Developed and optimized object detection algorithms achieving 98%+ detection accuracy.",
        "Published a research paper in IEEE Xplorer after presentation at ICETM2025."
      ],
      technologies: ["Python", "OpenCV", "AI/ML", "Research"]
    },
    {
      title: "Restaurant Management System",
      period: "July 2023",
      description: [
        "Built a comprehensive web application using Angular, TypeScript, HTML, and CSS enabling CRUD operations.",
        "Implemented a secure login and authentication system to manage user sessions."
      ],
      technologies: ["Angular", "TypeScript", "Node.js", "Express"],
      link: "https://github.com/yatharth0417"
    },
    {
      title: "Weather App",
      period: "August 2024",
      description: [
        "Developed a real-time Weather App using Angular and TypeScript, integrating third-party weather APIs.",
        "Created interactive data visualizations and dynamic UI components to display weather metrics."
      ],
      technologies: ["Angular", "TypeScript", "API Integration", "Data Viz"],
      link: "https://github.com/yatharth0417"
    }
  ],
  testimonials: [
    {
      name: "Vipin Khatri",
      title: "Senior Software Engineer",
      company: "Contemi Trading Solutions",
      content: "Yatharth is an exceptional developer who brings both technical depth and creative problem-solving to every project. His work on our data pipelines was transformative."
    },
    {
      name: "Rishabh Jain",
      title: "Director",
      company: "Locamart Trading Services Pvt. Ltd.",
      content: "Working with Yatharth was a pleasure. His attention to detail in UI/UX and his ability to handle complex full-stack integrations made him a key asset to our team."
    },
    {
      name: "Dr. Richa Gupta",
      title: "Project Mentor",
      company: "Amity University",
      content: "Yatharth's research on traffic occlusion demonstrated a level of analytical thinking far beyond his years. He is a dedicated researcher and a brilliant engineer."
    }
  ],
  skills: {
    languages: [
      { name: "Python", description: "Primary language for AI/ML and backend automation." },
      { name: "SQL", description: "Expertise in complex queries and database schema design." },
      { name: "Java", description: "Strong foundation in OOP and enterprise applications." },
      { name: "C/C++", description: "Used for high-performance algorithms and system-level tasks." },
      { name: "HTML", description: "Semantic markup for accessible and SEO-friendly web apps." },
      { name: "CSS", description: "Advanced styling with Tailwind and modern CSS features." },
      { name: "TypeScript", description: "Type-safe development for robust frontend applications." },
      { name: "JavaScript", description: "Full-stack development with modern ES6+ features." }
    ],
    frameworks: [
      { name: "Angular", description: "Building scalable enterprise-grade web applications." },
      { name: "React.JS", description: "Creating dynamic and responsive user interfaces." },
      { name: "Node.JS", description: "Server-side development for high-performance APIs." },
      { name: "Express.JS", description: "Minimalist web framework for Node.js backend services." },
      { name: "Pandas", description: "Data manipulation and analysis for research projects." },
      { name: "NumPy", description: "Scientific computing and numerical data processing." },
      { name: "Matplotlib", description: "Data visualization for research and analytics." },
      { name: "MEAN/MERN Stack", description: "Full-stack proficiency in modern web architectures." }
    ],
    tools: [
      { name: "MongoDB", description: "NoSQL database for flexible data modeling." },
      { name: "MySQL", description: "Relational database management and optimization." },
      { name: "Google Cloud", description: "Cloud infrastructure and serverless deployment." },
      { name: "AWS", description: "Scalable cloud services and resource management." },
      { name: "Gemini AI", description: "Integrating advanced LLMs into digital products." },
      { name: "Git/GitHub/BitBucket", description: "Version control and collaborative development." }
    ],
    financial: [
      { name: "Financial Analysis", description: "Interpreting market trends and fiscal data." },
      { name: "Market Research", description: "Gathering insights for business intelligence." },
      { name: "Investor Relations", description: "Managing communication with stakeholders." },
      { name: "Data Interpretation", description: "Turning raw data into actionable business strategies." }
    ]
  },
  resumeUrl: "data:application/pdf;base64,JVBERi0xLjAKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKPj4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovUmVzb3VyY2VzIDw8Pj4KL0NvbnRlbnRzIDQgMCBSCj4+CmVuZG9iago0IDAgb2JqCjw8Ci9MZW5ndGggMAo+PgpzdHJlYW0KZW5kc3RyZWFtCmVuZG9iagp0cmFpbGVyCjw8Ci9TaXplIDUKL1Jvb3QgMSAwIFIKPj4KJSVFT0Y=", // Minimal valid PDF data URI
  publications: [
    {
      title: "Analyzing Video Surveillance to Handle Traffic Occlusion",
      conference: "International Conference on Engineering Technology and Management (ICETM2025)",
      link: "#"
    }
  ],
  certifications: [
    "Meta's Front – End Developer – COURSERA",
    "Java Programming – GREAT_LEARNING",
    "Data Structures in C – GREAT_LEARNING"
  ]
};
