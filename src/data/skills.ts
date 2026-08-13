export type SkillCategory =
  | 'Languages'
  | 'Data Science'
  | 'Machine Learning'
  | 'AI'
  | 'Web'
  | 'Tools';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  description: string;
  iconName: string;
  relatedSkills?: string[];
  relatedProjects?: string[];
  codeSnippet?: string;
}

export const skillsCategoryList: SkillCategory[] = [
  'Languages',
  'Data Science',
  'Machine Learning',
  'AI',
  'Web',
  'Tools',
];

export const skillsData: Skill[] = [
  // =========================================================
  // LANGUAGES
  // =========================================================

  {
    id: 's-python',
    name: 'Python',
    category: 'Languages',
    description:
      'Primary programming language for Data Science, Machine Learning, AI experimentation, automation, backend development, and data processing workflows.',
    iconName: 'Terminal',
    relatedSkills: ['NumPy', 'Pandas', 'Scikit-Learn', 'TensorFlow'],
    relatedProjects: [
      'customer-churn-prediction',
      'house-price-prediction',
      'ai-resume-screening-system',
    ],
    codeSnippet: 'print("Hello, World!")',
  },

  {
    id: 's-javascript',
    name: 'JavaScript',
    category: 'Languages',
    description:
      'Used to build interactive web applications, client-side logic, dynamic interfaces, API integrations, and modern JavaScript-based applications.',
    iconName: 'Code2',
    relatedSkills: ['React', 'Node.js', 'Express.js', 'TypeScript'],
    relatedProjects: [
      'portfolio-website',
      'result-management-system',
    ],
    codeSnippet: 'projects.map(project => project.title)',
  },

  {
    id: 's-typescript',
    name: 'TypeScript',
    category: 'Languages',
    description:
      'Type-safe superset of JavaScript used for scalable frontend applications, reusable components, structured data models, and maintainable project architecture.',
    iconName: 'FileCode2',
    relatedSkills: ['React', 'JavaScript', 'Node.js'],
    relatedProjects: [
      'portfolio-website',
      'result-management-system',
    ],
    codeSnippet: 'const project: Project = { title: "AI Project" }',
  },

  {
    id: 's-c',
    name: 'C',
    category: 'Languages',
    description:
      'Foundational programming language used to develop strong understanding of memory management, procedural programming, algorithms, data structures, and low-level concepts.',
    iconName: 'Braces',
    relatedSkills: ['Algorithms', 'Data Structures', 'Problem Solving'],
    relatedProjects: ['Academic Programming Projects'],
    codeSnippet: 'printf("Hello, World!");',
  },

  {
    id: 's-java',
    name: 'Java',
    category: 'Languages',
    description:
      'Object-oriented programming language used for understanding classes, objects, inheritance, abstraction, exception handling, and structured software development.',
    iconName: 'Coffee',
    relatedSkills: ['OOP', 'Data Structures', 'Algorithms'],
    relatedProjects: ['Academic Java Projects'],
    codeSnippet: 'System.out.println("Hello Java");',
  },

  {
    id: 's-sql',
    name: 'SQL',
    category: 'Languages',
    description:
      'Used for querying, filtering, aggregating, transforming, and managing structured data in relational databases.',
    iconName: 'Database',
    relatedSkills: ['MySQL', 'MariaDB', 'SQLite'],
    relatedProjects: [
      'sales-data-analytics',
      'result-management-system',
    ],
    codeSnippet: 'SELECT * FROM projects;',
  },

  // =========================================================
  // DATA SCIENCE
  // =========================================================

  {
    id: 's-numpy',
    name: 'NumPy',
    category: 'Data Science',
    description:
      'Numerical computing library used for arrays, mathematical operations, vectorized calculations, data transformations, and efficient scientific computing.',
    iconName: 'Sigma',
    relatedSkills: ['Python', 'Pandas', 'Matplotlib'],
    relatedProjects: [
      'customer-churn-prediction',
      'house-price-prediction',
    ],
    codeSnippet: 'arr = np.array([1, 2, 3])',
  },

  {
    id: 's-pandas',
    name: 'Pandas',
    category: 'Data Science',
    description:
      'Core data manipulation and analysis library used for cleaning, transforming, filtering, grouping, joining, and exploring structured datasets.',
    iconName: 'TableProperties',
    relatedSkills: ['Python', 'NumPy', 'Matplotlib', 'Plotly'],
    relatedProjects: [
      'customer-churn-prediction',
      'credit-card-fraud-detection',
      'sales-forecasting-system',
    ],
    codeSnippet: 'df = pd.read_csv("data.csv")',
  },

  {
    id: 's-matplotlib',
    name: 'Matplotlib',
    category: 'Data Science',
    description:
      'Visualization library used for exploratory data analysis, statistical charts, trend analysis, distributions, and analytical reporting.',
    iconName: 'ChartLine',
    relatedSkills: ['Python', 'Pandas', 'NumPy'],
    relatedProjects: [
      'customer-churn-prediction',
      'house-price-prediction',
    ],
    codeSnippet: 'plt.plot(x, y)',
  },

  {
    id: 's-plotly',
    name: 'Plotly',
    category: 'Data Science',
    description:
      'Interactive visualization library used for dashboards, time-series analysis, financial charts, and dynamic data exploration.',
    iconName: 'ChartNoAxesCombined',
    relatedSkills: ['Python', 'Pandas', 'Streamlit'],
    relatedProjects: [
      'stock-market-analysis-dashboard',
      'sales-forecasting-system',
    ],
    codeSnippet: 'px.line(df, x="date", y="sales")',
  },

  {
    id: 's-eda',
    name: 'Exploratory Data Analysis',
    category: 'Data Science',
    description:
      'Practical approach to understanding datasets through distributions, correlations, missing-value analysis, outlier detection, visualization, and pattern discovery.',
    iconName: 'Search',
    relatedSkills: [
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Statistics',
    ],
    relatedProjects: [
      'customer-churn-prediction',
      'credit-card-fraud-detection',
      'sales-forecasting-system',
    ],
    codeSnippet: 'df.describe()',
  },

  {
    id: 's-statistics',
    name: 'Statistics',
    category: 'Data Science',
    description:
      'Practical understanding of descriptive statistics, probability, distributions, variance, correlation, sampling, and statistical reasoning for data-driven decisions.',
    iconName: 'Sigma',
    relatedSkills: ['Python', 'Pandas', 'EDA'],
    relatedProjects: [
      'Data Analytics Projects',
      'Machine Learning Projects',
    ],
    codeSnippet: 'df["salary"].mean()',
  },

  {
    id: 's-feature-engineering',
    name: 'Feature Engineering',
    category: 'Data Science',
    description:
      'Process of transforming raw variables into meaningful predictive features using encoding, scaling, aggregation, transformations, and domain-specific logic.',
    iconName: 'GitBranchPlus',
    relatedSkills: ['Pandas', 'Scikit-Learn', 'XGBoost'],
    relatedProjects: [
      'customer-churn-prediction',
      'house-price-prediction',
    ],
    codeSnippet: 'df["total"] = df["price"] * df["qty"]',
  },

  // =========================================================
  // MACHINE LEARNING
  // =========================================================

  {
    id: 's-sklearn',
    name: 'Scikit-Learn',
    category: 'Machine Learning',
    description:
      'Core machine learning framework used for preprocessing, classification, regression, clustering, cross-validation, model evaluation, and complete ML pipelines.',
    iconName: 'BrainCircuit',
    relatedSkills: [
      'Python',
      'Pandas',
      'XGBoost',
      'Random Forest',
    ],
    relatedProjects: [
      'customer-churn-prediction',
      'house-price-prediction',
      'credit-card-fraud-detection',
    ],
    codeSnippet: 'model.fit(X_train, y_train)',
  },

  {
    id: 's-xgboost',
    name: 'XGBoost',
    category: 'Machine Learning',
    description:
      'High-performance gradient boosting framework used for structured-data classification, regression, feature importance, and predictive analytics.',
    iconName: 'Zap',
    relatedSkills: ['Python', 'Scikit-Learn', 'LightGBM'],
    relatedProjects: [
      'customer-churn-prediction',
      'credit-card-fraud-detection',
    ],
    codeSnippet: 'XGBClassifier(n_estimators=100)',
  },

  {
    id: 's-random-forest',
    name: 'Random Forest',
    category: 'Machine Learning',
    description:
      'Ensemble learning algorithm used for classification and regression problems with strong performance on structured data and useful feature importance analysis.',
    iconName: 'Trees',
    relatedSkills: ['Python', 'Scikit-Learn', 'Classification'],
    relatedProjects: [
      'credit-card-fraud-detection',
      'house-price-prediction',
    ],
    codeSnippet: 'RandomForestClassifier(n_estimators=100)',
  },

  {
    id: 's-regression',
    name: 'Regression',
    category: 'Machine Learning',
    description:
      'Experience building predictive models for continuous numerical values using preprocessing, feature engineering, model comparison, and performance evaluation.',
    iconName: 'ChartLine',
    relatedSkills: ['Scikit-Learn', 'XGBoost', 'Pandas'],
    relatedProjects: [
      'house-price-prediction',
      'sales-forecasting-system',
    ],
    codeSnippet: 'LinearRegression().fit(X, y)',
  },

  {
    id: 's-classification',
    name: 'Classification',
    category: 'Machine Learning',
    description:
      'Experience building classification systems using preprocessing pipelines, supervised models, validation strategies, evaluation metrics, and prediction threshold optimization.',
    iconName: 'GitPullRequest',
    relatedSkills: ['Scikit-Learn', 'XGBoost', 'Random Forest'],
    relatedProjects: [
      'customer-churn-prediction',
      'credit-card-fraud-detection',
      'sentiment-analysis-system',
    ],
    codeSnippet: 'classification_report(y_test, pred)',
  },

  {
    id: 's-clustering',
    name: 'Clustering',
    category: 'Machine Learning',
    description:
      'Unsupervised learning technique used to discover hidden patterns, behavioral groups, and meaningful segments without predefined target labels.',
    iconName: 'Network',
    relatedSkills: ['K-Means', 'Scikit-Learn', 'Pandas'],
    relatedProjects: ['customer-segmentation'],
    codeSnippet: 'KMeans(n_clusters=4).fit(X)',
  },

  {
    id: 's-kmeans',
    name: 'K-Means',
    category: 'Machine Learning',
    description:
      'Clustering algorithm used to divide observations into groups based on feature similarity and distance from cluster centroids.',
    iconName: 'CircleDot',
    relatedSkills: ['Clustering', 'Scikit-Learn', 'Pandas'],
    relatedProjects: ['customer-segmentation'],
    codeSnippet: 'KMeans(n_clusters=4).fit(X)',
  },

  {
    id: 's-model-evaluation',
    name: 'Model Evaluation',
    category: 'Machine Learning',
    description:
      'Experience evaluating models using accuracy, precision, recall, F1-score, ROC-AUC, confusion matrices, cross-validation, MAE, RMSE, and other problem-specific metrics.',
    iconName: 'ChartNoAxesCombined',
    relatedSkills: [
      'Scikit-Learn',
      'Classification',
      'Regression',
    ],
    relatedProjects: [
      'customer-churn-prediction',
      'credit-card-fraud-detection',
      'house-price-prediction',
    ],
    codeSnippet: 'accuracy_score(y_test, predictions)',
  },

  {
    id: 's-hyperparameter',
    name: 'Hyperparameter Tuning',
    category: 'Machine Learning',
    description:
      'Optimization technique used to systematically search for better model configurations and improve performance and generalization.',
    iconName: 'Settings2',
    relatedSkills: [
      'Scikit-Learn',
      'XGBoost',
      'Model Evaluation',
    ],
    relatedProjects: [
      'customer-churn-prediction',
      'credit-card-fraud-detection',
    ],
    codeSnippet: 'GridSearchCV(model, params, cv=5)',
  },

  // =========================================================
  // AI
  // =========================================================

  {
    id: 's-tensorflow',
    name: 'TensorFlow',
    category: 'AI',
    description:
      'End-to-end deep learning framework used for building, training, evaluating, and deploying neural network models.',
    iconName: 'Network',
    relatedSkills: ['Keras', 'CNN', 'Deep Learning'],
    relatedProjects: [
      'handwritten-digit-recognition',
      'face-mask-detection',
    ],
    codeSnippet: 'tf.keras.Sequential([...])',
  },

  {
    id: 's-keras',
    name: 'Keras',
    category: 'AI',
    description:
      'High-level deep learning API used to quickly build, train, validate, and experiment with neural network architectures.',
    iconName: 'Layers',
    relatedSkills: ['TensorFlow', 'CNN', 'Deep Learning'],
    relatedProjects: [
      'handwritten-digit-recognition',
      'face-mask-detection',
    ],
    codeSnippet: 'model.compile(optimizer="adam")',
  },

  {
    id: 's-deep-learning',
    name: 'Deep Learning',
    category: 'AI',
    description:
      'Practical understanding of neural networks, optimization, training workflows, regularization, validation, convolutional architectures, and deep learning model development.',
    iconName: 'Brain',
    relatedSkills: ['TensorFlow', 'Keras', 'CNN'],
    relatedProjects: [
      'handwritten-digit-recognition',
      'face-mask-detection',
    ],
    codeSnippet: 'model.fit(X_train, y_train)',
  },

  {
    id: 's-cnn',
    name: 'CNN',
    category: 'AI',
    description:
      'Convolutional Neural Network architecture used for image classification and visual pattern recognition.',
    iconName: 'ScanFace',
    relatedSkills: ['TensorFlow', 'Keras', 'Computer Vision'],
    relatedProjects: [
      'handwritten-digit-recognition',
      'face-mask-detection',
    ],
    codeSnippet: 'Conv2D(32, (3, 3), activation="relu")',
  },

  {
    id: 's-nlp',
    name: 'Natural Language Processing',
    category: 'AI',
    description:
      'Experience processing natural language data through text cleaning, tokenization, vectorization, classification, similarity analysis, and information extraction.',
    iconName: 'MessageSquareText',
    relatedSkills: ['NLTK', 'SpaCy', 'TF-IDF'],
    relatedProjects: [
      'sentiment-analysis-system',
      'ai-resume-screening-system',
      'movie-recommendation-system',
    ],
    codeSnippet: 'tokens = word_tokenize(text)',
  },

  {
    id: 's-nltk',
    name: 'NLTK',
    category: 'AI',
    description:
      'Natural Language Toolkit used for tokenization, stemming, lemmatization, stopword processing, and classical NLP experimentation.',
    iconName: 'Languages',
    relatedSkills: ['Python', 'NLP', 'TF-IDF'],
    relatedProjects: ['sentiment-analysis-system'],
    codeSnippet: 'word_tokenize(text)',
  },

  {
    id: 's-spacy',
    name: 'SpaCy',
    category: 'AI',
    description:
      'Industrial NLP library used for efficient text processing, entity recognition, linguistic analysis, and information extraction from unstructured documents.',
    iconName: 'FileSearch',
    relatedSkills: ['Python', 'NLP', 'Information Extraction'],
    relatedProjects: ['ai-resume-screening-system'],
    codeSnippet: 'nlp = spacy.load("en_core_web_sm")',
  },

  {
    id: 's-opencv',
    name: 'OpenCV',
    category: 'AI',
    description:
      'Computer vision library used for image processing, face detection, video frame handling, preprocessing, and real-time AI applications.',
    iconName: 'Camera',
    relatedSkills: ['Python', 'CNN', 'Computer Vision'],
    relatedProjects: ['face-mask-detection'],
    codeSnippet: 'cv2.imread("image.jpg")',
  },

  {
    id: 's-computer-vision',
    name: 'Computer Vision',
    category: 'AI',
    description:
      'Practical experience building image-based AI applications involving image preprocessing, classification, face detection, and real-time visual inference.',
    iconName: 'Scan',
    relatedSkills: ['OpenCV', 'TensorFlow', 'CNN'],
    relatedProjects: [
      'face-mask-detection',
      'handwritten-digit-recognition',
    ],
    codeSnippet: 'model.predict(image)',
  },

  {
    id: 's-tfidf',
    name: 'TF-IDF',
    category: 'AI',
    description:
      'Text vectorization technique used to convert documents into numerical representations for classification, search, similarity analysis, and recommendation systems.',
    iconName: 'TextSearch',
    relatedSkills: ['NLP', 'Scikit-Learn', 'Python'],
    relatedProjects: [
      'sentiment-analysis-system',
      'movie-recommendation-system',
    ],
    codeSnippet: 'TfidfVectorizer().fit_transform(texts)',
  },

  // =========================================================
  // WEB
  // =========================================================

  {
    id: 's-react',
    name: 'React',
    category: 'Web',
    description:
      'Frontend library used to build reusable, interactive, component-based user interfaces and modern single-page applications.',
    iconName: 'Layout',
    relatedSkills: ['TypeScript', 'JavaScript', 'Tailwind CSS'],
    relatedProjects: [
      'portfolio-website',
      'result-management-system',
    ],
    codeSnippet: '<ProjectCard title="AI Project" />',
  },

  {
    id: 's-node',
    name: 'Node.js',
    category: 'Web',
    description:
      'JavaScript runtime used for backend services, API development, server-side logic, automation, and full-stack applications.',
    iconName: 'Server',
    relatedSkills: ['Express.js', 'JavaScript', 'REST API'],
    relatedProjects: [
      'result-management-system',
      'full-stack-applications',
    ],
    codeSnippet: 'app.listen(5000)',
  },

  {
    id: 's-express',
    name: 'Express.js',
    category: 'Web',
    description:
      'Backend framework used for creating REST APIs, middleware pipelines, request handling, authentication, and server-side application logic.',
    iconName: 'Route',
    relatedSkills: ['Node.js', 'JavaScript', 'REST API'],
    relatedProjects: [
      'result-management-system',
      'backend-applications',
    ],
    codeSnippet: 'app.get("/api/projects", handler)',
  },

  {
    id: 's-tailwind',
    name: 'Tailwind CSS',
    category: 'Web',
    description:
      'Utility-first CSS framework used to create responsive, consistent, customizable, and modern interfaces with efficient styling workflows.',
    iconName: 'Palette',
    relatedSkills: ['React', 'TypeScript', 'Responsive Design'],
    relatedProjects: [
      'portfolio-website',
      'result-management-system',
    ],
    codeSnippet: 'className="grid lg:grid-cols-3"',
  },

  {
    id: 's-framer',
    name: 'Framer Motion',
    category: 'Web',
    description:
      'Animation library used for page transitions, interactive cards, layout animations, scroll reveals, hover effects, and polished UI interactions.',
    iconName: 'WandSparkles',
    relatedSkills: ['React', 'TypeScript', 'UI Animation'],
    relatedProjects: ['portfolio-website'],
    codeSnippet: '<motion.div whileHover={{ y: -8 }} />',
  },

  {
    id: 's-rest-api',
    name: 'REST API',
    category: 'Web',
    description:
      'Experience building and integrating RESTful APIs for communication between frontend applications, backend services, databases, and external systems.',
    iconName: 'Globe2',
    relatedSkills: ['Node.js', 'Express.js', 'FastAPI'],
    relatedProjects: [
      'result-management-system',
      'full-stack-applications',
    ],
    codeSnippet: 'fetch("/api/projects")',
  },

  {
    id: 's-responsive',
    name: 'Responsive Design',
    category: 'Web',
    description:
      'Strong focus on building interfaces that adapt naturally across mobile, tablet, laptop, and large desktop screens while preserving usability and visual consistency.',
    iconName: 'MonitorSmartphone',
    relatedSkills: ['Tailwind CSS', 'React', 'UI/UX'],
    relatedProjects: [
      'portfolio-website',
      'web-applications',
    ],
    codeSnippet: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  },

  {
    id: 's-html',
    name: 'HTML5',
    category: 'Web',
    description:
      'Semantic markup language used to structure accessible, well-organized, SEO-friendly, and maintainable web interfaces.',
    iconName: 'FileCode',
    relatedSkills: ['CSS3', 'JavaScript', 'Accessibility'],
    relatedProjects: [
      'portfolio-website',
      'frontend-projects',
    ],
    codeSnippet: '<section><h1>Projects</h1></section>',
  },

  {
    id: 's-css',
    name: 'CSS3',
    category: 'Web',
    description:
      'Used for responsive layouts, visual styling, animations, transitions, grids, flexbox, custom components, and modern web interface design.',
    iconName: 'Paintbrush',
    relatedSkills: ['HTML5', 'Tailwind CSS', 'Responsive Design'],
    relatedProjects: [
      'portfolio-website',
      'frontend-projects',
    ],
    codeSnippet: '.card:hover { transform: translateY(-6px); }',
  },

  // =========================================================
  // TOOLS
  // =========================================================

  {
    id: 's-git',
    name: 'Git',
    category: 'Tools',
    description:
      'Version control system used for tracking changes, managing branches, maintaining project history, and safely developing application features.',
    iconName: 'GitBranch',
    relatedSkills: ['GitHub', 'Linux', 'CLI'],
    relatedProjects: ['All Software Projects'],
    codeSnippet: 'git commit -m "update skills"',
  },

  {
    id: 's-github',
    name: 'GitHub',
    category: 'Tools',
    description:
      'Platform used for source code hosting, repository management, collaboration, project documentation, issue tracking, and portfolio presentation.',
    iconName: 'Github',
    relatedSkills: ['Git', 'Markdown', 'CI/CD'],
    relatedProjects: [
      'portfolio-website',
      'Open Source Projects',
    ],
    codeSnippet: 'git push origin main',
  },

  {
    id: 's-docker',
    name: 'Docker',
    category: 'Tools',
    description:
      'Containerization platform used to package applications and dependencies into portable environments for consistent development and deployment.',
    iconName: 'Container',
    relatedSkills: ['Linux', 'FastAPI', 'AWS'],
    relatedProjects: [
      'Machine Learning Deployment Projects',
      'Backend Applications',
    ],
    codeSnippet: 'docker build -t app .',
  },

  {
    id: 's-linux',
    name: 'Linux',
    category: 'Tools',
    description:
      'Development operating system experience including terminal workflows, package management, filesystem operations, networking basics, process management, and command-line tools.',
    iconName: 'TerminalSquare',
    relatedSkills: ['Git', 'Docker', 'CLI'],
    relatedProjects: [
      'Development Environment',
      'Deployment Projects',
    ],
    codeSnippet: 'sudo dnf update',
  },

  {
    id: 's-vscode',
    name: 'VS Code',
    category: 'Tools',
    description:
      'Primary development environment used for coding, debugging, terminal workflows, Git integration, extensions, and multi-language project development.',
    iconName: 'Brackets',
    relatedSkills: ['Git', 'TypeScript', 'Python', 'JavaScript'],
    relatedProjects: ['All Software Projects'],
    codeSnippet: 'code .',
  },

  {
    id: 's-fastapi',
    name: 'FastAPI',
    category: 'Tools',
    description:
      'Modern Python framework used for building high-performance APIs, serving machine learning models, validating requests, and creating backend services.',
    iconName: 'Zap',
    relatedSkills: ['Python', 'REST API', 'Docker'],
    relatedProjects: [
      'Machine Learning API Projects',
      'AI Applications',
    ],
    codeSnippet: '@app.get("/predict")',
  },

  {
    id: 's-streamlit',
    name: 'Streamlit',
    category: 'Tools',
    description:
      'Python framework used to transform Data Science and Machine Learning workflows into interactive web applications and model demonstration interfaces.',
    iconName: 'LayoutDashboard',
    relatedSkills: ['Python', 'Pandas', 'Machine Learning'],
    relatedProjects: [
      'customer-churn-prediction',
      'house-price-prediction',
      'sentiment-analysis-system',
    ],
    codeSnippet: 'st.title("ML Dashboard")',
  },

  {
    id: 's-mysql',
    name: 'MySQL',
    category: 'Tools',
    description:
      'Relational database management system used for structured data storage, SQL querying, relational modeling, and database-driven applications.',
    iconName: 'Database',
    relatedSkills: ['SQL', 'Database Design', 'Node.js'],
    relatedProjects: [
      'result-management-system',
      'backend-applications',
    ],
    codeSnippet: 'SELECT COUNT(*) FROM students;',
  },

  {
    id: 's-mariadb',
    name: 'MariaDB',
    category: 'Tools',
    description:
      'Open-source relational database system used for structured application data, relational queries, backend integration, and database-driven systems.',
    iconName: 'DatabaseZap',
    relatedSkills: ['SQL', 'MySQL', 'Node.js'],
    relatedProjects: [
      'result-management-system',
      'database-projects',
    ],
    codeSnippet: 'INSERT INTO students VALUES (...)',
  },

  {
    id: 's-sqlite',
    name: 'SQLite',
    category: 'Tools',
    description:
      'Lightweight relational database used for local applications, prototypes, development environments, academic projects, and small-scale data-driven systems.',
    iconName: 'Database',
    relatedSkills: ['SQL', 'Python', 'Flask'],
    relatedProjects: [
      'Python Applications',
      'Academic Projects',
    ],
    codeSnippet: 'sqlite3.connect("app.db")',
  },
];