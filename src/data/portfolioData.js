/**
 * PORTFOLIO DATA CONFIGURATION (JavaScript)
 * 
 * Edit your details easily here! All sections across the website are powered
 * directly from this data structure.
 */

export const PORTFOLIO_DATA = {
  personal: {
    name: "Shravani Kale",
    title: "Third-Year IT Engineering Student & Developer",
    heroHeadline: "I turn curiosity into code, and ideas into experiences.",
    heroSubtitle: "Third-Year Information Technology Engineering student from India passionate about software development, Python, algorithmic problem-solving, and building elegant, impactful digital solutions.",
    statusBadge: {
      status: "Open to Internships & Collaborative Projects",
      isAvailable: true,
    },
    location: "India",
    email: "shravani.kale@example.com", // EDIT: Replace with your actual email address
    githubUrl: "https://github.com/shravanikale", // EDIT: Replace with your actual GitHub username
    linkedinUrl: "https://linkedin.com/in/shravani-kale", // EDIT: Replace with your actual LinkedIn profile
    resumeUrl: "#contact",
    bioIntro: [
      "I am a third-year Information Technology Engineering student with an innate curiosity for how software transforms abstract concepts into tangible, day-to-day tools.",
      "My passion lies in backend development, Python scripting, logic design, and crafting clean user experiences. From building logical utilities like password strength analyzers to exploring web architectures and data structures, I thrive at the intersection of technical rigor and thoughtful design.",
      "I am currently diving deeper into scalable web development, algorithmic complexity, and modern software engineering best practices, always driven by the question: 'How can this be made simpler, faster, and more intuitive?'"
    ],
    educationYear: "Third Year (TE)",
    degree: "Bachelor of Engineering (B.E. / B.Tech)",
    major: "Information Technology",
  },

  skillsData: [
    {
      id: "programming",
      category: "Programming Languages",
      description: "Core languages used for algorithmic foundations, system logic, and software scripting.",
      skills: [
        { name: "Python", level: "Core", featured: true, description: "Primary scripting & problem solving language; used in automation, backend utilities, and logic." },
        { name: "C", level: "Academic", featured: false, description: "Strong grounding in memory allocation, pointers, and foundational computer programming." },
        { name: "C++", level: "Academic", featured: true, description: "Object-oriented programming, standard template library (STL), and algorithmic efficiency." },
        { name: "Java", level: "Academic", featured: false, description: "OOP concepts, classes, inheritance, and core JVM application structures." },
        { name: "JavaScript", level: "Working", featured: true, description: "Modern ES6+ syntax for interactive web frontends and asynchronous API handling." }
      ]
    },
    {
      id: "web-dev",
      category: "Web & Frontend",
      description: "Building responsive, modern user interfaces with attention to aesthetic craft and accessibility.",
      skills: [
        { name: "HTML5", level: "Proficient", featured: false, description: "Semantic markup, modern web standards, and accessible structure." },
        { name: "CSS3 / Modern CSS", level: "Proficient", featured: true, description: "Flexbox, CSS Grid, responsive media queries, and smooth animations." },
        { name: "Tailwind CSS", level: "Working", featured: true, description: "Utility-first design system crafting dark themes and glassmorphic micro-interactions." },
        { name: "React", level: "Exploring / Basic", featured: true, description: "Component-based architecture, hooks, state handling, and dynamic views." }
      ]
    },
    {
      id: "backend-db",
      category: "Backend & Databases",
      description: "Server-side logic and structured data storage.",
      skills: [
        { name: "Flask (Python)", level: "Familiar", featured: true, description: "Lightweight Python micro-framework for building RESTful endpoints and web services." },
        { name: "SQL / MySQL", level: "Familiar", featured: true, description: "Relational database querying, normalization, indexing, and joins." },
        { name: "DBMS Concepts", level: "Academic", featured: false, description: "ACID properties, transactions, entity-relationship diagrams, and schema design." }
      ]
    },
    {
      id: "core-concepts",
      category: "Computer Science Core",
      description: "Theoretical engineering principles underpinning robust software engineering.",
      skills: [
        { name: "Data Structures & Algorithms", level: "Core", featured: true, description: "Arrays, linked lists, trees, sorting, searching, recursion, and time complexity analysis." },
        { name: "Object-Oriented Programming (OOP)", level: "Core", featured: true, description: "Encapsulation, inheritance, polymorphism, and modular class architecture." },
        { name: "Computer Networks", level: "Academic", featured: false, description: "OSI model, TCP/IP protocols, DNS, HTTP/HTTPS, and routing fundamentals." },
        { name: "Operating Systems", level: "Academic", featured: false, description: "Process scheduling, multithreading, synchronization, and memory hierarchy." }
      ]
    },
    {
      id: "tools",
      category: "Tools & Workflow",
      description: "Daily development environments, version control, and productivity tools.",
      skills: [
        { name: "Git", level: "Proficient", featured: true, description: "Version control, branching, committing, merging, and collaboration workflows." },
        { name: "GitHub", level: "Proficient", featured: true, description: "Remote repository hosting, issues, Markdown documentation, and open source tracking." },
        { name: "VS Code", level: "Proficient", featured: true, description: "Primary IDE with debugging tools, linter extensions, and command palette mastery." }
      ]
    }
  ],

  projects: [
    {
      id: "password-strength-checker",
      title: "Python Password Strength & Entropy Analyzer",
      shortDescription: "A security utility evaluating password resilience using entropy calculation, pattern checks, and actionable guidance.",
      problemSolved: "Weak passwords remain the number one vector for credential compromise. Most basic checkers only check string length without verifying character entropy or dictionary vulnerability.",
      implementationDetails: [
        "Constructed in Python utilizing regex heuristics, symbol dispersion algorithms, and Shannon entropy formula.",
        "Detects common keyboard patterns, repeated sequences, and case imbalances.",
        "Outputs instantaneous feedback with security scoring and tips to generate cryptographic passphrases."
      ],
      category: "Python",
      technologies: ["Python", "Regex", "Information Entropy", "Security Heuristics"],
      githubUrl: "https://github.com/shravanikale/password-strength-checker",
      liveUrl: undefined,
      featured: true,
      status: "Completed",
      timeline: "Academic Year 2024",
      isPlaceholder: false
    },
    {
      id: "personal-portfolio-nextgen",
      title: "Creative Developer Portfolio & Digital Journal",
      shortDescription: "An editorial, high-performance web portfolio featuring glassmorphic midnight aesthetics, interactive skill matrix, and fluid motion.",
      problemSolved: "Traditional resume templates fail to convey creative coding ability, motion awareness, and individual identity in a competitive tech landscape.",
      implementationDetails: [
        "Crafted with React and Tailwind CSS for modular components.",
        "Integrated dynamic interactive filtering, modal views, custom SVG constellation canvas, and accessible navigation.",
        "Centralized configuration allows 1-minute updates to projects, academic milestones, and certifications without touching layout code."
      ],
      category: "Web Development",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Framer Motion", "Vite"],
      githubUrl: "https://github.com/shravanikale/portfolio",
      liveUrl: "https://shravani-portfolio.dev",
      featured: true,
      status: "Completed",
      timeline: "Current",
      isPlaceholder: false
    },
    {
      id: "academic-dbms-portal",
      title: "Student Academic Records & Query Management System",
      shortDescription: "A relational database application simulating department grade tracking, course enrollment, and relational query reporting.",
      problemSolved: "Manual record administration often leads to redundant data entry and lack of query optimization across multi-tier academic schemas.",
      implementationDetails: [
        "Engineered normalized 3NF relational schemas for students, courses, attendance, and exam marks.",
        "Wrote complex SQL joins, stored procedures, and aggregate queries for automated GPA computation.",
        "Connected with Python backend interface for user authentication and administrative role access."
      ],
      category: "Academic Projects",
      technologies: ["Python", "MySQL / SQL", "Database Design", "Relational Modeling"],
      githubUrl: "https://github.com/shravanikale/student-management-dbms",
      featured: false,
      status: "Completed",
      timeline: "Academic Coursework",
      isPlaceholder: true
    },
    {
      id: "cli-file-automation",
      title: "Automated Directory Organizer & File Utility",
      shortDescription: "A lightweight Python automation tool that sorts, renames, and catalogs messy download directories based on MIME types and creation timestamps.",
      problemSolved: "Manual digital clutter cleanup wastes time and often causes accidental deletion of critical project files.",
      implementationDetails: [
        "Utilized Python's `os`, `pathlib`, and `shutil` libraries to handle multi-threaded disk operations safely.",
        "Includes audit log generation in JSON/CSV formats so users can inspect or revert automated moves.",
        "Customizable configuration rules defined in a simple YAML/JSON file."
      ],
      category: "Python",
      technologies: ["Python", "Pathlib", "Automation", "CLI"],
      githubUrl: "https://github.com/shravanikale/file-organizer-python",
      featured: false,
      status: "Completed",
      timeline: "Self-driven Project",
      isPlaceholder: true
    }
  ],

  education: [
    {
      degree: "Bachelor of Engineering (B.E. / B.Tech)",
      field: "Information Technology",
      institution: "Your College / University Name",
      yearRange: "2023 – 2026",
      currentYear: "Third Year (TE)",
      isCurrent: true,
      gradeOrStatus: "Pursuing with distinction",
      coursework: [
        "Data Structures and Algorithms",
        "Database Management Systems (DBMS)",
        "Object Oriented Programming (Java / C++)",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering & Architecture",
        "Theory of Computation"
      ],
      highlights: [
        "Focusing on backend software development and core engineering foundations.",
        "Active member of departmental technical associations and student coding clubs."
      ]
    },
    {
      degree: "Diploma in Information Technology / Higher Secondary (HSC)",
      field: "Science / IT Stream",
      institution: "Your School / Polytech Institution",
      yearRange: "2021 – 2023",
      currentYear: "Completed",
      isCurrent: false,
      gradeOrStatus: "Completed with first class",
      coursework: [
        "Foundations of Programming in C/C++",
        "Web Basics (HTML/CSS)",
        "Mathematics & Discrete Logic",
        "Computer Fundamentals"
      ],
      highlights: [
        "Built first foundational programming applications and discovered enthusiasm for coding."
      ]
    }
  ],

  experiencesAndAchievements: [
    {
      id: "hackathon-1",
      role: "Hackathon Participant & Team Developer",
      organization: "College / State Level Technical Hackathon",
      period: "2024",
      type: "Workshop / Hackathon",
      badge: "Team Hackathon",
      description: [
        "Collaborated in a 4-person team to brainstorm and prototype an application within 24 hours.",
        "Implemented backend logic and data validation flows using Python.",
        "Presented solution architecture during the final demonstration round to industry judges."
      ],
      skills: ["Python", "Team Collaboration", "Rapid Prototyping", "Pitch Presentation"]
    },
    {
      id: "workshop-git",
      role: "Hands-on Open Source & Git Workshop",
      organization: "Department of Information Technology",
      period: "2023",
      type: "Technical Event",
      badge: "Skill Workshop",
      description: [
        "Trained on advanced Git branching workflows, rebasing, pull requests, and merge conflict resolution.",
        "Explored open source contribution etiquette and collaborative code review practices."
      ],
      skills: ["Git", "GitHub", "Code Review", "Version Control"]
    }
  ],

  currentlyInLab: [
    {
      id: "lab-1",
      title: "Deep Dive into Fast & Scalable APIs with Flask / FastAPI",
      topic: "Backend Systems",
      currentStatus: "Prototyping",
      whatImLearning: "Structuring modular API routes, database ORM integration (SQLAlchemy), request validation, and JWT token authentication.",
      resourceOrGoal: "Building a functional microservice for authenticated student resource sharing.",
      tags: ["Python", "Flask", "REST APIs", "Backend"]
    },
    {
      id: "lab-2",
      title: "Advanced DSA: Graphs, Dynamic Programming & Trees",
      topic: "Algorithms",
      currentStatus: "Experimenting",
      whatImLearning: "Mastering recursion trees, memoization, breadth-first & depth-first graph traversals for placement interview readiness.",
      resourceOrGoal: "Targeting daily LeetCode / HackerRank problem sets in Python & C++.",
      tags: ["Algorithms", "Problem Solving", "Complexity Analysis"]
    },
    {
      id: "lab-3",
      title: "Modern React & Component State Patterns",
      topic: "Frontend Engineering",
      currentStatus: "Exploring",
      whatImLearning: "Understanding custom hooks, rendering performance, and modern UI component patterns.",
      resourceOrGoal: "Integrating rich micro-interactions into personal projects.",
      tags: ["React", "JavaScript", "UI/UX"]
    }
  ],

  githubSummary: {
    username: "shravanikale",
    profileUrl: "https://github.com/shravanikale",
    tagline: "Exploring code repositories, open-source practices, and academic coursework.",
    repositoriesPreview: [
      {
        name: "password-strength-checker",
        description: "Python security utility computing password entropy and strength metrics.",
        language: "Python",
        stars: 3,
        updated: "Recently updated"
      },
      {
        name: "portfolio",
        description: "Personal portfolio website crafted with React & Tailwind CSS.",
        language: "JavaScript",
        stars: 2,
        updated: "Active"
      },
      {
        name: "dsa-problem-solving",
        description: "Curated solutions to data structures and algorithmic challenges.",
        language: "C++ / Python",
        stars: 1,
        updated: "Ongoing"
      }
    ]
  }
};
