export type JourneyType = 'experience' | 'education';

export interface JourneyItem {
  id: string;
  type: JourneyType;
  title: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies?: string[];
  achievements?: string[];
  link?: string;
}

export const journeyData: JourneyItem[] = [

  // =========================================================
  // EXPERIENCE — 10 ITEMS
  // =========================================================

  {
    id: 'exp-1',
    type: 'experience',
    title: 'Machine Learning Engineer',
    organization: 'Tech AI Solutions',
    location: 'Remote',
    startDate: 'Jan 2025',
    endDate: 'Present',
    description:
      'Worked on designing, training, evaluating, and deploying machine learning solutions for real-world predictive analytics problems. Responsibilities included preparing large datasets, building reusable preprocessing pipelines, experimenting with different algorithms, optimizing model performance, and integrating trained models into production-ready applications. Focused heavily on model reliability, inference performance, explainability, and building practical ML systems rather than isolated notebook experiments.',
    technologies: [
      'Python',
      'Scikit-Learn',
      'XGBoost',
      'TensorFlow',
      'FastAPI',
      'Docker',
      'AWS',
    ],
    achievements: [
      'Built and optimized end-to-end machine learning pipelines for predictive analytics',
      'Improved inference performance through model optimization and efficient preprocessing',
      'Introduced model interpretability techniques for easier business-level decision making',
      'Designed reusable data preprocessing and model evaluation workflows',
    ],
  },

  {
    id: 'exp-2',
    type: 'experience',
    title: 'Data Science Intern',
    organization: 'DataTech Analytics',
    location: 'Dhaka, Bangladesh',
    startDate: 'Jun 2024',
    endDate: 'Dec 2024',
    description:
      'Supported data science projects involving exploratory data analysis, data cleaning, statistical analysis, feature engineering, and baseline predictive modeling. Worked with structured business datasets to identify trends, relationships, anomalies, and patterns that could support better decision making. Collaborated with team members to transform raw datasets into meaningful reports and machine learning-ready data pipelines.',
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Scikit-Learn',
      'SQL',
    ],
    achievements: [
      'Prepared and cleaned large datasets for downstream analytics workflows',
      'Created reusable exploratory data analysis notebooks and reporting templates',
      'Developed baseline classification and regression models for business problems',
      'Presented data-driven findings through visual reports and dashboards',
    ],
  },

  {
    id: 'exp-3',
    type: 'experience',
    title: 'Data Analyst',
    organization: 'Insight Data Labs',
    location: 'Remote',
    startDate: 'Jan 2024',
    endDate: 'May 2024',
    description:
      'Analyzed business datasets to identify customer behavior, sales patterns, performance trends, and operational insights. Developed interactive dashboards and visual reports that transformed complex datasets into understandable information for non-technical users. Focused on data cleaning, exploratory analysis, KPI development, trend analysis, and communicating results in a clear and practical way.',
    technologies: [
      'Python',
      'Pandas',
      'SQL',
      'Power BI',
      'Excel',
      'Plotly',
    ],
    achievements: [
      'Created automated reports for recurring business analysis tasks',
      'Designed dashboards for KPI and performance monitoring',
      'Identified important trends and anomalies from historical business data',
      'Reduced repetitive manual reporting through reusable analytical workflows',
    ],
  },

  {
    id: 'exp-4',
    type: 'experience',
    title: 'Full Stack Developer',
    organization: 'Digital Product Studio',
    location: 'Remote',
    startDate: 'Aug 2023',
    endDate: 'Dec 2023',
    description:
      'Developed responsive web applications using modern frontend and backend technologies. Worked across the complete development lifecycle, including interface design, API development, database integration, authentication, validation, debugging, and deployment. Focused on writing maintainable components, creating reusable UI patterns, and building practical applications with clean architecture.',
    technologies: [
      'JavaScript',
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST API',
      'Tailwind CSS',
    ],
    achievements: [
      'Built responsive interfaces for multiple application modules',
      'Developed and integrated RESTful APIs',
      'Implemented reusable frontend components and form validation',
      'Improved application usability through responsive UI improvements',
    ],
  },

  {
    id: 'exp-5',
    type: 'experience',
    title: 'Python Developer',
    organization: 'Automation & Analytics Lab',
    location: 'Remote',
    startDate: 'Mar 2023',
    endDate: 'Jul 2023',
    description:
      'Worked on Python-based automation, data processing, and analytical applications. Built scripts for repetitive tasks, transformed raw files into structured datasets, automated data validation processes, and created reusable utilities for analytics workflows. This role strengthened practical programming skills while working with real-world data and application requirements.',
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'SQLite',
      'Flask',
      'Automation',
    ],
    achievements: [
      'Automated repetitive data processing tasks using Python',
      'Developed reusable scripts for CSV and database workflows',
      'Built small internal tools for data validation and transformation',
      'Improved consistency of recurring analytical tasks through automation',
    ],
  },

  {
    id: 'exp-6',
    type: 'experience',
    title: 'Machine Learning Project Developer',
    organization: 'Independent Projects',
    location: 'Remote',
    startDate: 'Jan 2023',
    endDate: 'Present',
    description:
      'Developed a growing collection of independent machine learning and data science projects covering classification, regression, clustering, recommendation systems, natural language processing, computer vision, and forecasting. Focused on taking projects beyond model training by building complete workflows including data preparation, experimentation, evaluation, visualization, deployment, and documentation.',
    technologies: [
      'Python',
      'Pandas',
      'Scikit-Learn',
      'XGBoost',
      'TensorFlow',
      'NLP',
      'OpenCV',
      'Streamlit',
    ],
    achievements: [
      'Built multiple end-to-end machine learning portfolio projects',
      'Explored supervised and unsupervised learning workflows',
      'Created interactive interfaces for deployed models',
      'Practiced model evaluation, feature engineering, and interpretability',
    ],
  },

  {
    id: 'exp-7',
    type: 'experience',
    title: 'Web Development Mentor',
    organization: 'Academic & Student Projects',
    location: 'Bangladesh',
    startDate: '2024',
    endDate: 'Present',
    description:
      'Provided practical guidance on HTML, CSS, JavaScript, frontend development, project structure, debugging, and modern web development workflows. Helped learners understand concepts by connecting theory with real project development and encouraging clean coding practices, component-based thinking, and problem-solving through hands-on implementation.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Git',
      'GitHub',
      'Tailwind CSS',
    ],
    achievements: [
      'Guided learners through practical web development projects',
      'Helped troubleshoot frontend bugs and implementation issues',
      'Encouraged reusable component-based development practices',
      'Supported project-based learning through real implementation tasks',
    ],
  },

  {
    id: 'exp-8',
    type: 'experience',
    title: 'Frontend Developer',
    organization: 'Freelance & Personal Projects',
    location: 'Remote',
    startDate: '2022',
    endDate: 'Present',
    description:
      'Designed and developed modern, responsive, and interactive web interfaces for personal and freelance-style projects. Focused on building clean layouts, responsive navigation systems, reusable components, polished animations, dark mode experiences, and user-friendly interfaces. Frequently worked from the idea stage through implementation, testing, and refinement.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
    ],
    achievements: [
      'Created multiple responsive frontend projects from scratch',
      'Built reusable UI components and modern page layouts',
      'Implemented animated and interactive user experiences',
      'Developed responsive interfaces for desktop, tablet, and mobile devices',
    ],
  },

  {
    id: 'exp-9',
    type: 'experience',
    title: 'Database & Backend Developer',
    organization: 'Application Development Projects',
    location: 'Remote',
    startDate: '2023',
    endDate: 'Present',
    description:
      'Worked on backend-focused application development involving database design, CRUD operations, API development, validation, authentication flows, and server-side business logic. Built applications where frontend interfaces communicate with backend services and persistent databases, with an emphasis on reliable data flow and maintainable server architecture.',
    technologies: [
      'Node.js',
      'Express.js',
      'MariaDB',
      'MySQL',
      'SQLite',
      'REST API',
      'JavaScript',
    ],
    achievements: [
      'Designed relational database structures for application projects',
      'Built CRUD-based REST APIs and server-side logic',
      'Worked with relational databases and query optimization',
      'Integrated frontend interfaces with backend services',
    ],
  },

  {
    id: 'exp-10',
    type: 'experience',
    title: 'Research & AI Project Contributor',
    organization: 'Independent Research & Academic Projects',
    location: 'Bangladesh',
    startDate: '2024',
    endDate: 'Present',
    description:
      'Explored practical applications of Artificial Intelligence, Machine Learning, Data Science, and Natural Language Processing through independent research and project experimentation. Investigated model architectures, dataset preparation techniques, evaluation strategies, and ways to transform experimental machine learning ideas into useful software applications.',
    technologies: [
      'Python',
      'Machine Learning',
      'Deep Learning',
      'NLP',
      'TensorFlow',
      'Scikit-Learn',
      'Data Analysis',
    ],
    achievements: [
      'Explored multiple AI and machine learning problem domains',
      'Experimented with different model architectures and evaluation strategies',
      'Combined research concepts with practical software implementations',
      'Developed project documentation and technical learning notes',
    ],
  },

  // =========================================================
  // EDUCATION — 10 ITEMS
  // =========================================================

  {
    id: 'edu-1',
    type: 'education',
    title: 'Diploma in Computer Science & Technology',
    organization: 'Shariatpur Polytechnic Institute',
    location: 'Shariatpur, Bangladesh',
    startDate: '2022',
    endDate: 'Present',
    description:
      'Pursuing a Diploma in Computer Science & Technology with a strong focus on programming, software development, computer networks, databases, web technologies, algorithms, data structures, and modern computing concepts. Alongside academic coursework, actively exploring Data Science, Machine Learning, Artificial Intelligence, and practical software development through independent projects.',
    technologies: [
      'Computer Programming',
      'Data Structures',
      'Database Systems',
      'Web Development',
      'Computer Networks',
      'Software Engineering',
      'Python',
      'JavaScript',
    ],
    achievements: [
      'Developed multiple academic and personal software projects',
      'Built practical experience across web development and data science',
      'Participated in technical and project-based learning activities',
      'Continuously expanded skills beyond academic curriculum through self-learning',
    ],
  },

  {
    id: 'edu-2',
    type: 'education',
    title: 'Secondary School Certificate (SSC)',
    organization: 'Secondary Education',
    location: 'Bangladesh',
    startDate: '2019',
    endDate: '2022',
    description:
      'Completed secondary-level education with an early interest in mathematics, science, computing, and logical problem solving. Developed foundational academic skills that later supported deeper learning in programming, algorithms, mathematics, and computer science.',
    technologies: [
      'Mathematics',
      'General Science',
      'ICT',
      'Logical Reasoning',
    ],
    achievements: [
      'Built foundational knowledge in mathematics and ICT',
      'Developed early interest in programming and technology',
      'Strengthened analytical and problem-solving abilities',
    ],
  },

  {
    id: 'edu-3',
    type: 'education',
    title: 'Python for Data Science',
    organization: 'Online Technical Training',
    location: 'Online',
    startDate: '2024',
    endDate: '2024',
    description:
      'Completed structured learning in Python for data science, covering data types, functions, object-oriented programming, NumPy, Pandas, data cleaning, data transformation, visualization, and practical dataset analysis. The learning process emphasized solving real analytical problems rather than focusing only on syntax and isolated examples.',
    technologies: [
      'Python',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Data Analysis',
    ],
    achievements: [
      'Built practical data analysis notebooks',
      'Worked with real-world datasets',
      'Learned data cleaning and transformation workflows',
      'Developed reusable Python-based analytical solutions',
    ],
  },

  {
    id: 'edu-4',
    type: 'education',
    title: 'Machine Learning Fundamentals',
    organization: 'Self-Directed Technical Learning',
    location: 'Online',
    startDate: '2024',
    endDate: '2025',
    description:
      'Studied the foundations of supervised and unsupervised machine learning through hands-on datasets and project-based experimentation. Covered classification, regression, clustering, feature engineering, model evaluation, cross-validation, hyperparameter tuning, and practical model deployment concepts.',
    technologies: [
      'Python',
      'Scikit-Learn',
      'Pandas',
      'NumPy',
      'XGBoost',
      'Machine Learning',
    ],
    achievements: [
      'Built classification and regression projects',
      'Practiced feature engineering and preprocessing',
      'Learned multiple model evaluation techniques',
      'Implemented complete machine learning workflows from raw data to prediction',
    ],
  },

  {
    id: 'edu-5',
    type: 'education',
    title: 'Data Science & Exploratory Data Analysis',
    organization: 'Project-Based Learning',
    location: 'Online',
    startDate: '2025',
    endDate: '2025',
    description:
      'Focused on developing strong practical data analysis skills through large and complex datasets. Studied exploratory data analysis, statistical summaries, missing-value treatment, outlier detection, feature relationships, data visualization, grouping, aggregation, and insight generation. Particular emphasis was placed on analyzing large datasets as complete projects rather than isolated exercises.',
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Plotly',
      'Statistics',
      'EDA',
    ],
    achievements: [
      'Analyzed large real-world style datasets',
      'Developed structured data cleaning workflows',
      'Created analytical dashboards and visualizations',
      'Practiced extracting actionable insights from complex datasets',
    ],
  },

  {
    id: 'edu-6',
    type: 'education',
    title: 'React & Modern Frontend Development',
    organization: 'Self-Directed Web Development Study',
    location: 'Online',
    startDate: '2024',
    endDate: '2025',
    description:
      'Studied modern frontend application development using component-based architecture and reusable UI patterns. Covered React fundamentals, state management, routing, reusable components, responsive layouts, TypeScript integration, Tailwind CSS, and animation systems. Learning was reinforced through multiple portfolio and application projects.',
    technologies: [
      'React',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'Framer Motion',
      'React Router',
    ],
    achievements: [
      'Built reusable component-based interfaces',
      'Developed responsive React applications',
      'Integrated TypeScript into frontend projects',
      'Created animated and interactive portfolio experiences',
    ],
  },

  {
    id: 'edu-7',
    type: 'education',
    title: 'Database & SQL Fundamentals',
    organization: 'Academic & Practical Training',
    location: 'Bangladesh',
    startDate: '2023',
    endDate: '2024',
    description:
      'Developed a practical understanding of relational database concepts, SQL querying, database normalization, table relationships, indexing, CRUD operations, joins, aggregation, and application-level database integration. Worked with database-backed applications to understand how frontend, backend, and persistent storage communicate with each other.',
    technologies: [
      'SQL',
      'MariaDB',
      'MySQL',
      'SQLite',
      'Database Design',
    ],
    achievements: [
      'Designed relational database schemas for application projects',
      'Practiced complex SQL queries and joins',
      'Integrated databases with backend applications',
      'Learned practical database troubleshooting and optimization',
    ],
  },

  {
    id: 'edu-8',
    type: 'education',
    title: 'Deep Learning & Computer Vision',
    organization: 'Independent AI Learning Program',
    location: 'Online',
    startDate: '2025',
    endDate: '2026',
    description:
      'Explored Deep Learning concepts including neural networks, activation functions, optimization, convolutional neural networks, image preprocessing, model training, validation, overfitting, regularization, and computer vision workflows. Practical experimentation included image classification and real-time computer vision applications.',
    technologies: [
      'Python',
      'TensorFlow',
      'Keras',
      'CNN',
      'OpenCV',
      'Deep Learning',
    ],
    achievements: [
      'Built image classification experiments',
      'Implemented CNN-based learning pipelines',
      'Worked with image preprocessing and augmentation',
      'Explored real-time computer vision applications',
    ],
  },

  {
    id: 'edu-9',
    type: 'education',
    title: 'Natural Language Processing',
    organization: 'Self-Directed AI Study',
    location: 'Online',
    startDate: '2025',
    endDate: '2026',
    description:
      'Studied Natural Language Processing concepts including text preprocessing, tokenization, stemming, lemmatization, vectorization, TF-IDF, text classification, similarity analysis, information extraction, and practical NLP application development. Focused on building systems that convert unstructured text into useful analytical insights.',
    technologies: [
      'Python',
      'NLP',
      'NLTK',
      'SpaCy',
      'TF-IDF',
      'Scikit-Learn',
    ],
    achievements: [
      'Built sentiment analysis experiments',
      'Developed text classification pipelines',
      'Explored information extraction from unstructured documents',
      'Applied NLP techniques to practical AI projects',
    ],
  },

  {
    id: 'edu-10',
    type: 'education',
    title: 'Advanced Data Science & AI Project Learning',
    organization: 'Independent Project-Based Learning',
    location: 'Online',
    startDate: '2025',
    endDate: 'Present',
    description:
      'Currently expanding practical expertise by building larger end-to-end Data Science, Machine Learning, and AI projects using real and large-scale datasets. The learning process combines data cleaning, exploratory analysis, statistical reasoning, feature engineering, model development, evaluation, visualization, deployment, and technical documentation. The primary goal is to develop production-oriented problem-solving ability rather than simply completing theoretical courses.',
    technologies: [
      'Python',
      'Pandas',
      'Scikit-Learn',
      'XGBoost',
      'TensorFlow',
      'NLP',
      'Data Visualization',
      'Streamlit',
    ],
    achievements: [
      'Worked on multiple large-dataset analytical projects',
      'Developed complete machine learning pipelines',
      'Combined data analysis with deployed applications',
      'Built a growing portfolio of practical AI and data projects',
    ],
  },
];