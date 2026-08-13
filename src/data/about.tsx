export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  percentage: number;
  strokeColor: string;
  glowClass: string;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  projectCount: string;
  svgIcon: string;
}

export interface WorkflowStep {
  stepNumber: string;
  title: string;
  description: string;
  iconName: string;
}

export interface JourneyMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
}

export const aboutData = {
  personalInfo: {
    name: "Rashed",
    role: "Machine Learning & AI Engineer",
    headline: "Building Intelligent Systems from Complex Data",
    bio: "Specializing in developing high-performance ML models, scalable data pipelines, and full-stack AI applications. I turn raw data into actionable insights and robust software solutions.",
    location: "Dhaka, Bangladesh",
    availability: "Available for ML & AI Opportunities",
    tagline: "Engineering intelligence with mathematical precision and clean modular code.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop", // placeholder
    primaryTech: ["Python", "PyTorch", "Scikit-Learn", "FastAPI", "React", "Docker"]
  },

  stats: [
    {
      label: "ML Models Built",
      value: 15,
      suffix: "+",
      percentage: 88,
      strokeColor: "#a855f7", // Purple
      glowClass: "hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]"
    },
    {
      label: "Projects Completed",
      value: 20,
      suffix: "+",
      percentage: 75,
      strokeColor: "#06b6d4", // Cyan
      glowClass: "hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]"
    },
    {
      label: "Accuracy / Metric",
      value: 95,
      suffix: "%",
      percentage: 95,
      strokeColor: "#ec4899", // Pink
      glowClass: "hover:shadow-[0_0_25px_rgba(236,72,153,0.3)]"
    }
  ] as StatItem[],

  expertise: [
    {
      id: "ml",
      title: "Machine Learning",
      description: "Supervised & unsupervised model development, feature engineering, classification, regression, and model evaluation.",
      technologies: ["Scikit-learn", "XGBoost", "LightGBM", "PyTorch"],
      projectCount: "8 Projects"
    },
    {
      id: "ds",
      title: "Data Science & Analytics",
      description: "Exploratory Data Analysis (EDA), data cleaning pipelines, statistical inference, visualization, and business insights.",
      technologies: ["Python", "Pandas", "NumPy", "SQL", "Seaborn"],
      projectCount: "6 Projects"
    },
    {
      id: "se",
      title: "Software & AI Engineering",
      description: "Deploying ML models via scalable REST APIs, containerization, full-stack integration, and clean modular code architecture.",
      technologies: ["FastAPI", "React", "Docker", "Git", "REST APIs"],
      projectCount: "7 Projects"
    }
  ],

  workflow: [
    {
      step: "01. Objective",
      text: "Understanding business goals & translating them into clear ML metrics."
    },
    {
      step: "02. Data Pipeline",
      text: "Ingesting, cleaning, scaling features & validating data integrity."
    },
    {
      step: "03. Modeling",
      text: "Algorithm selection, baseline comparison & hyperparameter tuning."
    },
    {
      step: "04. Deployment",
      text: "Packaging APIs into containers & monitoring model performance."
    }
  ],

  journey: [
    {
      year: "2021",
      title: "Computer Science Foundation",
      subtitle: "Core Algorithms & Software Engineering",
      description: "Started deep dive into Data Structures, Algorithms, Object-Oriented Programming, and Web Development.",
      skills: ["C++", "Python", "Algorithms"]
    },
    {
      year: "2022",
      title: "Data Science & Analytical Thinking",
      subtitle: "Data Exploration & Statistical Modeling",
      description: "Focused on statistical analysis, data cleaning, exploratory data analysis (EDA), and database architectures.",
      skills: ["Pandas", "NumPy", "SQL", "Seaborn"]
    },
    {
      year: "2023",
      title: "Machine Learning Optimization",
      subtitle: "Predictive Intelligence & Applied ML",
      description: "Built supervised/unsupervised machine learning models, handled feature engineering, and tuned hyper-parameters.",
      skills: ["Scikit-Learn", "XGBoost", "MLflow"]
    },
    {
      year: "2024+",
      title: "AI Engineering & Full-Stack Deployment",
      subtitle: "Production ML & Web Integration",
      description: "Architecting end-to-end AI applications, REST API model deployments, NLP, Deep Learning, and modern web integration.",
      skills: ["PyTorch", "FastAPI", "Docker", "React"]
    }
  ] as JourneyMilestone[],

  educationPreview: {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "University / Institute Name",
    status: "Graduated / Final Year",
    focus: "Specializing in Artificial Intelligence, Machine Learning & Software Engineering."
  }
};