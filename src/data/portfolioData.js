/**
 * PORTFOLIO DATA CONFIGURATION (JavaScript)
 * 
 * Edit your details easily here! All sections across the website are powered
 * directly from this data structure.
 */

export const PORTFOLIO_DATA = {
  personal: {
    name: "Shravani Kale",
    title: "Third-Year B.Tech IT Engineering Student | Aspiring AI/ML & Software Engineer",
    heroHeadline: "I turn curiosity into code, and ideas into experiences.",
    heroSubtitle: "Third-Year B.Tech Information Technology student (CGPA: 8.98) with hands-on experience building AI/LLM applications, RAG pipelines with LangChain, machine learning systems, and full-stack software.",
    statusBadge: {
      status: "Open to SDE, Python & AI/ML Internships",
      isAvailable: true,
    },
    location: "Latur, Maharashtra, India",
    email: "shravanikale1803@gmail.com",
    githubUrl: "https://github.com/ShravaniKale18",
    linkedinUrl: "https://linkedin.com/in/kale-shravani",
    leetcodeUrl: "https://leetcode.com/u/shravanikale/",
    resumeUrl: "/ResumeShravaniKale.pdf",
    avatarUrl: "/shravanikale_img.jpeg",
    bioIntro: [
      "I am a third-year Information Technology Engineering student with an innate curiosity for how software transforms abstract concepts into tangible, day-to-day tools.",
      "My passion lies in AI/LLM applications, RAG pipelines, machine learning models, and full-stack system architecture. From architecting semantic repository query engines to training predictive ML pipelines, I thrive at the intersection of technical rigor and thoughtful design.",
      "I am actively seeking a Software Development Engineer (SDE), Python Developer, or AI/ML Internship to build production-quality, data-driven software solutions."
    ],
    educationYear: "Third Year (B.Tech)",
    degree: "Bachelor of Technology (B.Tech)",
    major: "Information Technology",
  },

  skillsData: [
    {
      id: "ai-ml",
      category: "AI & Machine Learning",
      description: "Generative AI, Large Language Models, RAG pipelines, and predictive analytics.",
      skills: [
        { name: "LangChain", level: "Core", featured: true, description: "Chains, retrieval pipelines, custom prompt orchestrations, and LLM integrations." },
        { name: "Retrieval-Augmented Generation (RAG)", level: "Core", featured: true, description: "Document chunking, vector indexing, context injection, and semantic search." },
        { name: "ChromaDB & Vector Stores", level: "Proficient", featured: true, description: "Vector embeddings storage, similarity indexing, and semantic retrieval." },
        { name: "Hugging Face", level: "Proficient", featured: true, description: "Pretrained models, embeddings, transformers, and open-source LLM inference." },
        { name: "Scikit-learn", level: "Proficient", featured: true, description: "Supervised ML algorithms, regression, classification, and model evaluation metrics." },
        { name: "Pandas & NumPy", level: "Core", featured: true, description: "Data wrangling, matrix manipulations, and exploratory feature engineering." }
      ]
    },
    {
      id: "programming",
      category: "Programming Languages",
      description: "Core languages used for algorithmic foundations, system logic, and software scripting.",
      skills: [
        { name: "Python", level: "Core", featured: true, description: "Primary language for AI/ML, data pipelines, automation scripting, and backend services." },
        { name: "Java", level: "Academic", featured: true, description: "Object-oriented programming, class design, and enterprise foundations." },
        { name: "C++", level: "Academic", featured: true, description: "Algorithmic problem-solving, STL data structures, and LeetCode challenges." },
        { name: "C", level: "Academic", featured: false, description: "Memory management, pointers, and foundational system-level programming." },
        { name: "JavaScript", level: "Working", featured: true, description: "Modern ES6+ syntax for interactive web frontends and asynchronous API handling." }
      ]
    },
    {
      id: "web-dev",
      category: "Web & Full-Stack",
      description: "Building responsive, modern user interfaces and server APIs.",
      skills: [
        { name: "Streamlit", level: "Proficient", featured: true, description: "Rapid AI/ML web application prototyping, interactive data apps, and dashboards." },
        { name: "Node.js & Express.js", level: "Working", featured: true, description: "RESTful server endpoints, routing, middleware, and backend CRUD architectures." },
        { name: "React", level: "Working", featured: true, description: "Component-based architecture, hooks, state handling, and dynamic views." },
        { name: "Tailwind CSS", level: "Working", featured: true, description: "Utility-first design system crafting dark themes and glassmorphic micro-interactions." },
        { name: "HTML5 / CSS3", level: "Proficient", featured: false, description: "Semantic markup, responsive media queries, and modern CSS layouts." }
      ]
    },
    {
      id: "backend-db",
      category: "Backend & Databases",
      description: "Server-side logic and structured relational and local data storage.",
      skills: [
        { name: "MySQL / SQL", level: "Proficient", featured: true, description: "Relational queries, complex joins, indexing, normalization, and ACID compliance." },
        { name: "SQLite", level: "Proficient", featured: true, description: "Embedded lightweight relational database management for full-stack apps." },
        { name: "REST APIs", level: "Proficient", featured: true, description: "Endpoint design, JSON serialization, HTTP status conventions, and API consumption." },
        { name: "Database Design", level: "Proficient", featured: false, description: "Schema normalization (3NF), ER diagramming, and data integrity constraints." }
      ]
    },
    {
      id: "core-concepts",
      category: "Computer Science Core",
      description: "Theoretical engineering principles underpinning robust software engineering.",
      skills: [
        { name: "Data Structures & Algorithms", level: "Core", featured: true, description: "Arrays, linked lists, trees, sorting, searching, recursion, and time complexity analysis." },
        { name: "Object-Oriented Programming (OOP)", level: "Core", featured: true, description: "Encapsulation, inheritance, polymorphism, and modular class architecture." },
        { name: "Operating Systems", level: "Academic", featured: false, description: "Process scheduling, multithreading, synchronization, and memory hierarchy." },
        { name: "Computer Networks & DBMS", level: "Academic", featured: false, description: "OSI model, TCP/IP, HTTP/HTTPS, transactions, and relational algebra." }
      ]
    },
    {
      id: "tools",
      category: "Tools & Platforms",
      description: "Daily development environments, version control, and data science notebooks.",
      skills: [
        { name: "Git & GitHub", level: "Proficient", featured: true, description: "Version control, branching, committing, pull requests, and collaborative tracking." },
        { name: "VS Code", level: "Proficient", featured: true, description: "Primary IDE with debugging tools, linter extensions, and command palette mastery." },
        { name: "Jupyter Notebook & Google Colab", level: "Proficient", featured: true, description: "Data science experiments, model training, visualization, and reproducible analysis." }
      ]
    }
  ],

  projects: [
    {
      id: "phishguard-ai-analyzer",
      title: "PhishGuard — AI Phishing Message & URL Analyzer",
      shortDescription: "AI-powered defensive cybersecurity system detecting, analyzing, and explaining phishing and social-engineering attacks using rule-based heuristics, LangChain, RAG with FAISS, and Hugging Face LLMs.",
      problemSolved: "Traditional spam filters only output opaque binary flags or scores without explaining the psychological pressure tactics, urgency cues, or malicious URL anatomy to the user.",
      solution: "Engineered a two-layer defense pipeline: a deterministic rule-based engine scoring risk (0–100) across 7 threat vectors, combined with FAISS semantic retrieval over local cybersecurity knowledge bases and Hugging Face LLMs providing explainable security assessments and defensive actions.",
      keyFeatures: [
        "Multi-vector threat detection: urgency/pressure tactics, credential & OTP theft, financial extortion, and URL anomalies.",
        "Deterministic heuristic scoring engine (0–100) with calibrated LOW / MEDIUM / HIGH risk classifications.",
        "RAG pipeline using Sentence Transformers, FAISS vector index, and cybersecurity knowledge bases.",
        "Contextual AI explanations with structured warning signs and defensive recommendations.",
        "Interactive Streamlit web dashboard with real-time heuristic gauges and live demo deployment."
      ],
      implementationDetails: [
        "Constructed dual-tier analyzer (analyzer.py & llm_analyzer.py) separating deterministic signals from generative contextual reasoning.",
        "Indexed domain knowledge (phishing, social engineering, suspicious URLs) into FAISS with Sentence Transformers embeddings.",
        "Configured LangChain prompt orchestration constraining the LLM to defensive analysis and explicit indicators.",
        "Built for HackDevengers 24-Hour National Hackathon; deployed on Streamlit Cloud with zero external database dependencies."
      ],
      whatILearned: "Mastered defensive cybersecurity engineering, explainable AI architectures, RAG knowledge retrieval with FAISS, and prompt boundary design for security assessment.",
      category: "AI/ML",
      technologies: ["Python", "LangChain", "RAG", "FAISS", "Hugging Face", "Sentence Transformers", "Streamlit", "Cybersecurity"],
      githubUrl: "https://github.com/ShravaniKale18/PhishGaurd---AI-Phishing-Message-Analyzer.git",
      liveUrl: "https://phishgaurd---ai-phishing-message-analyzer-b5aw8qqdualgw83rnvkk.streamlit.app/",
      featured: true,
      stats: { metric: "Hackathon", label: "24-Hr HackDevengers", highlight: "RAG + FAISS" },
      status: "Completed",
      timeline: "HackDevengers 2026",
      isPlaceholder: false
    },
    {
      id: "ecommerce-sales-ml-system",
      title: "E-Commerce ML: Segmentation, Revenue & Purchase Prediction",
      shortDescription: "End-to-end Machine Learning system trained on a 25,000-session e-commerce dataset, featuring a Flask REST API backend, Streamlit dashboard, and 3 ML models for purchase prediction, revenue forecasting, and RFM customer segmentation.",
      problemSolved: "E-commerce retailers struggle to unify visitor behavioral intent, revenue forecasts, and customer lifetime value into a low-latency operational pipeline.",
      solution: "Trained Random Forest (ROC-AUC ~0.90) for binary purchase prediction, XGBoost Regressor for session revenue forecasting, and K-Means (K=4) for RFM customer segmentation, connected via Flask REST endpoints to an interactive multi-tab Streamlit dashboard.",
      keyFeatures: [
        "Random Forest Classifier predicting session conversion with probability confidence gauges (ROC-AUC 0.88–0.93).",
        "XGBoost Regressor forecasting session revenue with engineered interaction features.",
        "K-Means RFM clustering segmenting shoppers into Champions, At-Risk High Value, Recent Low Spend, and Hibernating.",
        "Decoupled Flask REST API backend (/api/predict_purchase, /api/predict_revenue, /api/segment_customer, /api/batch_predict).",
        "Comprehensive Streamlit analytical dashboard featuring KPI cards, Plotly visualizations, and batch prediction."
      ],
      implementationDetails: [
        "Conducted end-to-end data preprocessing on 25K records × 29 columns with feature engineering (price_per_item, potential_revenue).",
        "Built modular model persistence pipeline using joblib across classifiers, regressors, scalers, and encoders.",
        "Engineered production-ready Flask REST endpoints with CORS support, input validation, and health checks.",
        "Constructed responsive Streamlit UI with dynamic input sliders, radar charts, and trend analytics."
      ],
      whatILearned: "Acquired deep experience with multi-model architectures, RFM behavioral clustering, decoupled Flask API microservices, and end-to-end tabular ML workflows.",
      category: "Python",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Flask", "Streamlit", "K-Means (RFM)", "Pandas", "Plotly", "Joblib"],
      githubUrl: "https://github.com/ShravaniKale18/E-Commerce-Sales-Customer-Segmentation-Purchase-Prediction1.git",
      liveUrl: undefined,
      featured: true,
      stats: { metric: "25K Sessions", label: "3 ML Models", highlight: "Flask + Streamlit" },
      status: "Completed",
      timeline: "2026",
      isPlaceholder: false
    },
    {
      id: "github-repository-assistant",
      title: "GitHub Repository Assistant (RAG Pipeline)",
      shortDescription: "AI-powered RAG application that lets you enter any GitHub repo URL and chat with the codebase — retrieving relevant source and docs, then answering in natural language with Qwen 2.5 72B Instruct.",
      problemSolved: "A normal LLM does not know the contents of an unfamiliar or recently changed GitHub repository. Manual file search is slow, and keyword search misses architecture, auth flows, and how a function actually works.",
      solution: "Built a Streamlit RAG pipeline: load files via the GitHub API (PyGithub), chunk documents, embed with Hugging Face, store vectors in ChromaDB, retrieve semantically similar chunks for each question, and ground Qwen/Qwen2.5-72B-Instruct (Hugging Face Router + LangChain ChatOpenAI) on that context.",
      keyFeatures: [
        "Paste any accessible GitHub repository URL and recursively fetch supported source and documentation files.",
        "Intelligent text chunking so large files retrieve efficiently instead of overflowing the context window.",
        "Hugging Face embeddings + ChromaDB for meaning-based search (not keyword matching).",
        "Conversational Streamlit chat: What does this project do? How does authentication work? Explain app.py.",
        "Answers are generated from retrieved repository chunks, not only the model's general knowledge."
      ],
      implementationDetails: [
        "Modular pipeline: github_loader.py (PyGithub + recursive file reads), document_processor.py (LangChain docs + splitter), vector_store.py (ChromaDB + retriever), rag_chain.py (prompt + LLM).",
        "app.py owns the Streamlit UI, URL input, Analyze Repository flow, chat, and session state.",
        "Authenticated GitHub token for higher API rate limits; HF_TOKEN for embeddings and the Hugging Face Router LLM.",
        "Skips binaries and unsupported formats; designed for educational, repository-specific code understanding."
      ],
      whatILearned: "Applied end-to-end RAG: GitHub ingestion, embeddings, vector search, prompt grounding, LangChain orchestration, and API-key hygiene with python-dotenv.",
      category: "AI/ML",
      technologies: ["Python", "Streamlit", "LangChain", "PyGithub", "Hugging Face", "ChromaDB", "Qwen 2.5 72B Instruct", "python-dotenv"],
      githubUrl: "https://github.com/ShravaniKale18/Github-Repository-Assistant.git",
      liveUrl: undefined,
      featured: true,
      stats: { metric: "72B LLM", label: "Qwen 2.5 Instruct", highlight: "RAG Engine" },
      status: "Completed",
      timeline: "2025 – 2026",
      isPlaceholder: false
    },
    {
      id: "multi-agent-research-system",
      title: "Multi-Agent Autonomous Research System",
      shortDescription: "An interactive AI research platform that orchestrates multiple specialized agents in sequence to automate information gathering, synthesis, validation, and comprehensive report generation.",
      problemSolved: "Complex research requires multi-step information collection, fact validation, and synthesis—a workflow prone to single-prompt hallucination when handled naively.",
      solution: "Designed a modular multi-agent pipeline where dedicated agents (Scout, Synthesizer, Fact-Checker) collaborate sequentially, exchanging structured messages and custom tool outputs to deliver rigorous research briefs.",
      keyFeatures: [
        "Autonomous multi-agent execution pipeline with clear separation of duties and roles.",
        "Custom tool integration layer for real-time web search, document parsing, and validation.",
        "Structured intermediate state management ensuring traceability of reasoning steps.",
        "Interactive Streamlit control dashboard to monitor agent thought chains in real-time."
      ],
      implementationDetails: [
        "Architected role-specific agent personas with tailored system prompts and operational constraints.",
        "Built extensible communication channels allowing agents to challenge and refine peer hypotheses.",
        "Integrated error-recovery heuristics for handling unexpected API schema changes and rate limits.",
        "Deployed an end-to-end Streamlit web application providing transparent multi-agent execution logs."
      ],
      whatILearned: "Learned autonomous agent orchestration patterns, state graph transitions, prompt isolation, and mitigating compounding errors in sequential agent workflows.",
      category: "AI/ML",
      technologies: ["Python", "Streamlit", "Multi-Agent Orchestration", "Prompt Engineering", "REST APIs"],
      githubUrl: "https://github.com/ShravaniKale18/Multi-Agent-Research-System.git",
      liveUrl: undefined,
      featured: true,
      stats: { metric: "3+ Agents", label: "Collaborative Pipeline", highlight: "Autonomous" },
      status: "Completed",
      timeline: "2026",
      isPlaceholder: false
    },
    {
      id: "student-performance-prediction",
      title: "Student Performance Prediction ML Pipeline",
      shortDescription: "End-to-end machine learning system predicting student academic outcomes across 15 academic and lifestyle features, achieving R² score of 0.96 with real-time Streamlit deployment.",
      problemSolved: "Educational institutions struggle to identify at-risk students early enough to provide targeted academic interventions before final exam evaluations.",
      solution: "Built a complete ML pipeline on 2,000 student records with rigorous missing-value imputation, categorical encoding, and feature engineering. Evaluated Linear Regression and Random Forest regressors, achieving R² = 0.96 (MAE: 2.53), then serialized with Pickle for real-time web inference.",
      keyFeatures: [
        "Comprehensive EDA and feature engineering over 2,000 academic records with 15 lifestyle variables.",
        "Comparative regression modeling achieving benchmark R² of 0.96 and MAE of 2.53.",
        "Model serialization and caching pipeline utilizing Python Pickle for instantaneous sub-10ms inference.",
        "Interactive Streamlit web GUI with live dynamic sliders and metric visualization."
      ],
      implementationDetails: [
        "Implemented Scikit-learn pipelines with StandardScaler, OneHotEncoder, and iterative feature selection.",
        "Performed cross-validated hyperparameter tuning on Random Forest Regressor to prevent overfitting.",
        "Designed clean metric reports calculating RMSE, MAE, and R² across test and training partitions.",
        "Constructed an intuitive interactive Streamlit interface providing real-time score feedback."
      ],
      whatILearned: "Gained practical experience with data leakage prevention, regression evaluation metrics, serialization best practices, and deploying ML models for non-technical users.",
      category: "Python",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit", "Pickle", "Matplotlib"],
      githubUrl: "https://github.com/ShravaniKale18/Student_Performance_Prediction.git",
      liveUrl: undefined,
      featured: true,
      stats: { metric: "R² = 0.96", label: "Model Accuracy", highlight: "MAE 2.53" },
      status: "Completed",
      timeline: "2025",
      isPlaceholder: false
    },
    {
      id: "imdb-movie-sentiment-analyzer",
      title: "IMDB Movie Review Sentiment Analyzer",
      shortDescription: "A Natural Language Processing (NLP) and Machine Learning system trained on 50,000 IMDB reviews to classify sentiment (Positive 🔥 / Negative ❄️) with 87.04% accuracy, probability confidence scoring, and interactive Streamlit UI.",
      problemSolved: "Analyzing large volumes of unstructured audience reviews manually is slow, error-prone, and lacks objective quantification of viewer sentiment nuances.",
      solution: "Engineered an NLP pipeline featuring HTML tag stripping, regex punctuation cleaning, stopword filtration via NLTK, and CountVectorizer feature extraction (top 5,000 n-grams). Benchmarked Gaussian Naive Bayes (76.42%), Multinomial Naive Bayes (84.56%), and tuned Logistic Regression (87.04%), serializing the best model for real-time Streamlit inference.",
      keyFeatures: [
        "End-to-end NLP text preprocessing: automated regex cleaning, HTML stripping, and NLTK stopword elimination.",
        "Bag-of-Words feature vectorization with fitted CountVectorizer on 5,000 salient linguistic tokens.",
        "Comprehensive model benchmarking across Naive Bayes and Logistic Regression achieving 87.04% test accuracy.",
        "Instantaneous confidence probability score and sentiment polarity prediction (Positive 🔥 / Negative ❄️).",
        "Streamlit interactive web dashboard with robust local NLTK caching and error handling."
      ],
      implementationDetails: [
        "Preprocessed 50,000 IMDB review records (49,582 unique) handling duplicates and class balance.",
        "Engineered CountVectorizer matrix transformations and tuned Logistic Regression with optimal regularization.",
        "Serialized fitted models (best_model_lr.pkl & vectorizer.pkl) for instantaneous sub-10ms response times.",
        "Constructed a clean, user-friendly Streamlit interface with confidence gauges and sample review inputs."
      ],
      whatILearned: "Deepened practical NLP expertise in tokenization, vocabulary matrix sparsity, stopword dynamics, text classification metrics (Precision, Recall, ROC-AUC), and model deployment.",
      category: "Python",
      technologies: ["Python", "NLP", "Scikit-learn", "NLTK", "Logistic Regression", "Streamlit", "CountVectorizer", "Pandas"],
      githubUrl: "https://github.com/ShravaniKale18/Movie-Sentiment-Analysis.git",
      liveUrl: undefined,
      featured: true,
      stats: { metric: "87.04% Acc", label: "50K IMDB Dataset", highlight: "NLP & ML" },
      status: "Completed",
      timeline: "2025",
      isPlaceholder: false
    },
    {
      id: "dsa-practice-repository",
      title: "Data Structures and Algorithms Practice Repository",
      shortDescription: "Personal DSA solutions repository covering core data structures and algorithms used for academic coursework and competitive programming practice.",
      problemSolved: "Interview and coursework problems need a single, version-controlled place to practice implementations, revisit patterns, and track progress beyond scattered notebooks.",
      solution: "Maintained a dedicated GitHub repository of DSA programs — arrays, linked lists, trees, graphs, sorting, searching, recursion, and related problem-solving patterns in C++ and Python.",
      keyFeatures: [
        "Organized solutions for core data structures and algorithmic patterns.",
        "Practice ground aligned with LeetCode-style problem solving (83+ problems tracked separately).",
        "Reusable implementations for searching, sorting, recursion, and graph/tree traversals.",
        "Public GitHub repo for review, revision, and sharing academic work."
      ],
      implementationDetails: [
        "Implemented classic DSA programs and problem solutions in a structured GitHub repository.",
        "Used the repo as a running log of algorithm practice alongside B.Tech IT coursework."
      ],
      whatILearned: "Reinforced time-complexity reasoning, pattern recognition, and clean implementation of foundational data structures.",
      category: "Academic Projects",
      technologies: ["C++", "Python", "Data Structures", "Algorithms", "LeetCode"],
      githubUrl: "https://github.com/ShravaniKale18/Data-Structures-and-algorithms.git",
      liveUrl: undefined,
      featured: false,
      stats: { metric: "DSA", label: "Practice Repo", highlight: "C++ & Python" },
      status: "Ongoing",
      timeline: "2024 – Present",
      isPlaceholder: false
    },
    {
      id: "smart-expense-manager",
      title: "Smart Expense Manager Full-Stack System",
      shortDescription: "A full-stack financial tracking application featuring normalized SQLite relational schemas, RESTful CRUD endpoints, and real-time category-wise balance analytics.",
      problemSolved: "Personal finance spreadsheets are cumbersome on mobile devices and lack transactional integrity, audit safety, and automated categorization.",
      solution: "Constructed a responsive full-stack platform with Node.js and Express.js handling backend transactional APIs, backed by a normalized SQLite database and a clean, dynamic frontend interface.",
      keyFeatures: [
        "Full CRUD functionality for income and expense transaction logs.",
        "Normalized relational database schema ensuring ACID properties and zero data redundancy.",
        "Real-time category breakdown, monthly cash-flow calculations, and visual summaries.",
        "Responsive, mobile-optimized user interface crafted with modern vanilla web standards."
      ],
      implementationDetails: [
        "Engineered RESTful API routes with parameterized SQL queries preventing SQL injection attacks.",
        "Constructed client-side asynchronous fetch calls for live UI updates without full page reloads.",
        "Designed responsive CSS layout with card modules, status pills, and dark mode contrast.",
        "Structured modular Node.js directory hierarchy separating controllers, db helpers, and static assets."
      ],
      whatILearned: "Mastered full-stack request-response lifecycles, relational database schema design, transactional state handling, and secure input sanitization.",
      category: "Web Development",
      technologies: ["Node.js", "Express.js", "SQLite", "JavaScript", "HTML5", "CSS3", "REST APIs"],
      githubUrl: "https://github.com/ShravaniKale18",
      liveUrl: undefined,
      featured: false,
      stats: { metric: "Full-Stack", label: "Node & SQLite", highlight: "CRUD Architecture" },
      status: "Completed",
      timeline: "2024",
      isPlaceholder: false
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Information Technology",
      institution: "Shri Guru Gobind Singhji Institute of Engineering and Technology",
      yearRange: "2025 – 2028",
      currentYear: "Third Year (TE)",
      isCurrent: true,
      gradeOrStatus: "CGPA: 8.98 / 10",
      coursework: [
        "Data Structures and Algorithms",
        "Database Management Systems (DBMS)",
        "Object-Oriented Programming (Java / C++)",
        "Operating Systems",
        "Computer Networks",
        "Machine Learning & AI",
        "Software Engineering"
      ],
      highlights: [
        "Maintaining distinction academic standing with CGPA 8.98 / 10.",
        "Solved 83+ Data Structures and Algorithms problems on LeetCode.",
        "Focusing on AI/ML research, RAG pipelines, and scalable backend engineering."
      ]
    },
    {
      degree: "Diploma in Computer Engineering",
      field: "Computer Engineering",
      institution: "Swami Vivekanand Institute of Polytechnic, Latur, Maharashtra",
      yearRange: "2021 – 2024",
      currentYear: "Completed",
      isCurrent: false,
      gradeOrStatus: "Graduated with 93.65% (Distinction)",
      coursework: [
        "Foundations of Programming in C & C++",
        "Data Structures in C",
        "Relational Database Management (RDBMS)",
        "Web Development Essentials",
        "Applied Mathematics & Logic"
      ],
      highlights: [
        "Graduated at the top of the department with an outstanding 93.65% distinction.",
        "Built solid foundational programming and system logic grounding."
      ]
    }
  ],

  experiencesAndAchievements: [
    {
      id: "exp-codomax",
      role: "AI & ML Intern",
      organization: "Codomax Digital Solutions",
      period: "July 2026",
      type: "Internship",
      badge: "Industry Internship",
      description: [
        "Completed hands-on internship applying core AI/ML algorithms and data pipelines to real-world business tasks.",
        "Evaluated predictive model performances and worked on feature preprocessing workflows.",
        "Awarded official Certificate of Completion (Certificate ID: CDM/CERT/5772)."
      ],
      skills: ["AI/ML", "Python", "Data Preprocessing", "Model Evaluation"]
    },
    {
      id: "exp-codealpha",
      role: "Frontend Development Virtual Intern",
      organization: "CodeAlpha",
      period: "June 2026 – July 2026",
      type: "Virtual Internship",
      badge: "Frontend Internship",
      description: [
        "Engineered responsive user interfaces and interactive web components under structured mentorship.",
        "Refactored styling and layout logic for cross-browser responsiveness and accessibility standards.",
        "Completed all deliverables with Certificate of Completion (Certificate ID: CA/DF1/134703)."
      ],
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
    },
    {
      id: "exp-hackdevengers",
      role: "PhishGuard Developer",
      organization: "Hack Devengers 2.",
      period: "September 2026",
      type: "Hackathon",
      badge: "24-Hr National Hackathon",
      projectLink: "https://phishgaurd---ai-phishing-message-analyzer-b5aw8qqdualgw83rnvkk.streamlit.app/",
      githubUrl: "https://github.com/ShravaniKale18/PhishGaurd---AI-Phishing-Message-Analyzer.git",
      description: [
        "Architected and deployed 'PhishGuard' — an AI phishing and social engineering analyzer utilizing LangChain, FAISS RAG, and Hugging Face in a 24-hour sprint.",
        "Engineered dual-layer defensive checks with 7 threat vector heuristics, zero-database architecture, and a live Streamlit dashboard.",
        "Pitched architecture to industry jury, demonstrating explainable AI reasoning and risk mitigation."
      ],
      skills: ["Cybersecurity", "LangChain", "RAG with FAISS", "Streamlit", "Hugging Face"]
    },
    {
      id: "exp-webrush",
      role: "Speed Frontend Builder",
      organization: "WebRush 6-Hour Hackathon • Frontend Arena",
      period: "September 2026",
      type: "Speed Hackathon",
      badge: "Sprint Hackathon",
      description: [
        "Designed and implemented high-performance responsive web interfaces under rigorous 6-hour time constraints.",
        "Mastered rapid layout structuring, accessible UI elements, and CSS optimization without external dependencies."
      ],
      skills: ["Speed Coding", "UI Architecture", "CSS Optimization", "Rapid Delivery"]
    },
    {
      id: "exp-internshala-iitm",
      role: "Machine Learning with AI Training (Top Performer)",
      organization: "Internshala & IITM Pravartak",
      period: "January 2025",
      type: "Technical Training",
      badge: "Top Performer",
      description: [
        "Completed intensive 8-week curriculum covering supervised/unsupervised ML, Python, data analytics, and neural foundations.",
        "Recognized as a Top Performer in the cohort with Grade A; certified under NSDC & Skill India.",
        "Built end-to-end predictive modeling projects using Scikit-learn and Pandas."
      ],
      skills: ["Machine Learning", "Scikit-learn", "Python", "Predictive Analytics"]
    }
  ],

  currentlyInLab: [
    {
      id: "lab-1",
      title: "Retrieval-Augmented Generation (RAG) Architectures",
      topic: "AI / LLM Systems",
      currentStatus: "Active Prototyping",
      whatImLearning: "Exploring multi-modal embeddings, hierarchical chunking, vector database index tuning, and latency reduction in LangChain pipelines.",
      resourceOrGoal: "Building real-time domain-specific code and doc synthesis agents.",
      tags: ["LangChain", "ChromaDB", "Hugging Face", "LLMs"]
    },
    {
      id: "lab-2",
      title: "Data Structures & Competitive Problem Solving",
      topic: "Algorithms",
      currentStatus: "Ongoing Practice",
      whatImLearning: "Dynamic programming, graph traversals (BFS/DFS, Dijkstra), monotonic stacks, and tree algorithms.",
      resourceOrGoal: "Solved 83+ LeetCode problems; advancing towards 200+ problem milestone.",
      tags: ["Algorithms", "LeetCode", "C++", "Python"]
    },
    {
      id: "lab-3",
      title: "Full-Stack Developement & Microservices Architecture",
      topic: "Software Engineering",
      currentStatus: "Building",
      whatImLearning: "RESTful API design, database connection pooling, token-based authentication, and stateful React interfaces.",
      resourceOrGoal: "Developing high-performance, data-driven web products.",
      tags: ["Node.js", "React", "SQLite", "Tailwind CSS"]
    }
  ],

  githubSummary: {
    username: "ShravaniKale18",
    profileUrl: "https://github.com/ShravaniKale18",
    tagline: "Building AI/LLM applications, predictive ML models, and full-stack software solutions.",
    repositoriesPreview: [
      {
        name: "Github-Repository-Assistant",
        description: "Chat with any GitHub repo using RAG, LangChain, ChromaDB, and Qwen 2.5 72B Instruct.",
        language: "Python",
        stars: 0,
        updated: "Recently updated"
      },
      {
        name: "Multi-Agent-Research-System",
        description: "Autonomous multi-agent system orchestrating research workflows and report generation.",
        language: "Python",
        stars: 0,
        updated: "Active"
      },
      {
        name: "Student_Performance_Prediction",
        description: "End-to-end ML prediction pipeline with 0.96 R² score and interactive Streamlit GUI.",
        language: "Python",
        stars: 0,
        updated: "Active"
      }
    ]
  }
};
