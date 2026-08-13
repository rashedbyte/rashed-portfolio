export const projects = [
  {
    id: 'customer-churn-prediction',
    title: 'Customer Churn Prediction Model',

    description:
      'An advanced Machine Learning pipeline that predicts customer churn using XGBoost, feature engineering, class balancing, and model interpretability techniques.',

    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=85&w=1200',

    category: 'Machine Learning',
    featured: true,
    year: '2026',

    longDescription:
      'This project is an end-to-end customer churn prediction system designed to help businesses identify customers who are likely to discontinue their services. The system works with customer demographic information, account history, contract details, payment behavior, service usage patterns, and customer engagement data to discover the behavioral signals associated with churn. The workflow starts with extensive exploratory data analysis to understand distributions, missing values, outliers, correlations, and potential data quality issues. After preprocessing, a structured feature engineering pipeline transforms raw attributes into meaningful predictive variables. Because customer churn datasets often contain class imbalance, the project incorporates techniques such as SMOTE and class-weight optimization to improve the model’s ability to identify churned customers. Multiple classification algorithms are compared before selecting a high-performing XGBoost model. Hyperparameter optimization is used to improve generalization, while SHAP-based interpretability helps explain why specific customers receive high-risk predictions. Finally, the trained model is integrated into a Streamlit interface where users can enter customer information and receive an instant churn probability, risk classification, and model explanation.',

    features: [
      'Automated Feature Engineering Pipeline',
      'Advanced Exploratory Data Analysis',
      'SMOTE-based Class Imbalance Handling',
      'XGBoost Model Training and Optimization',
      'Hyperparameter Tuning',
      'SHAP-based Model Interpretability',
      'Customer Risk Probability Prediction',
      'Interactive Streamlit Dashboard',
    ],

    challenges:
      'One of the biggest challenges was handling class imbalance without creating an excessive number of false-positive predictions. Churned customers represented a smaller portion of the dataset, which made accuracy alone an unreliable evaluation metric. The project required careful optimization of precision, recall, F1-score, ROC-AUC, and prediction thresholds. Another major challenge was producing interpretable predictions so that business users could understand which customer behaviors contributed most strongly to a churn risk.',

    tags: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-Learn',
      'XGBoost',
      'SMOTE',
      'SHAP',
      'Streamlit',
    ],

    github: 'https://github.com',
    demo: 'https://demo.com',
  },

  {
    id: 'house-price-prediction',
    title: 'House Price Prediction System',

    description:
      'A regression-based Machine Learning system that predicts residential property prices using property characteristics, location, size, and market-related features.',

    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=85&w=1200',

    category: 'Data Science',
    featured: true,
    year: '2026',

    longDescription:
      'This project focuses on building a reliable house price prediction system capable of estimating the market value of residential properties from structured historical data. The dataset contains a mixture of numerical and categorical variables such as property size, number of bedrooms, bathrooms, location, construction year, property condition, parking facilities, and other real-estate characteristics. The project begins with detailed exploratory data analysis to understand price distributions, relationships between variables, geographic effects, and potential anomalies. A robust preprocessing pipeline is created to handle missing values, categorical variables, skewed numerical features, and extreme outliers. Feature engineering is then used to create additional predictors that better represent property value. Several regression algorithms including Linear Regression, Random Forest, Gradient Boosting, and XGBoost are evaluated using cross-validation and multiple performance metrics. After model selection and hyperparameter tuning, the best-performing model is integrated into an interactive prediction interface. The final application allows users to enter property information and receive an estimated house price along with supporting information about the factors influencing the prediction.',

    features: [
      'Complete Real-Estate Data Cleaning Pipeline',
      'Missing Value Treatment',
      'Categorical Feature Encoding',
      'Advanced Feature Engineering',
      'Outlier Detection and Treatment',
      'Multiple Regression Model Comparison',
      'Cross-Validation Based Evaluation',
      'Interactive House Price Prediction',
    ],

    challenges:
      'The dataset contained a mixture of numerical and categorical variables with different scales and distributions. Highly expensive properties created significant outliers, while certain locations had very limited observations. Building a preprocessing pipeline that handled these inconsistencies without destroying useful information required careful experimentation. Another challenge was selecting evaluation metrics that reflected real-world pricing error rather than relying only on a single score.',

    tags: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-Learn',
      'XGBoost',
      'Regression',
      'Feature Engineering',
      'Streamlit',
    ],

    github: 'https://github.com',
    demo: 'https://demo.com',
  },

  {
    id: 'sales-forecasting-system',
    title: 'Sales Forecasting System',

    description:
      'A time-series forecasting platform that analyzes historical sales data and predicts future demand to support inventory and business planning decisions.',

    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=85&w=1200',

    category: 'Data Science',
    featured: false,
    year: '2026',

    longDescription:
      'This project is designed to transform historical business sales data into actionable future demand forecasts. The system analyzes transaction-level information to identify long-term trends, seasonal patterns, weekly and monthly cycles, product-level behavior, and sudden changes in demand. The first stage of the pipeline performs extensive data cleaning, date normalization, aggregation, missing-period detection, and consistency checks. Exploratory analysis is then used to identify seasonal peaks, declining products, high-performing categories, and unusual sales events. Different forecasting strategies can be evaluated depending on the characteristics of the dataset, including moving averages, exponential smoothing, Prophet-based forecasting, and machine learning approaches using engineered temporal features. The final forecasting workflow generates future predictions over configurable time horizons and presents them through interactive charts. Business users can explore historical performance, compare actual and predicted sales, inspect product-level trends, and identify potential periods of unusually high or low demand. The system is designed to support practical decisions around inventory planning, production scheduling, resource allocation, and sales strategy.',

    features: [
      'Historical Sales Trend Analysis',
      'Seasonality Detection',
      'Time-Series Data Preparation',
      'Future Demand Forecasting',
      'Product-Level Sales Analysis',
      'Forecast Visualization',
      'Interactive Date Range Selection',
      'Business Trend Dashboard',
    ],

    challenges:
      'The primary challenge was working with highly irregular demand patterns that included seasonal fluctuations, unexpected spikes, missing dates, and changing customer behavior. Forecasting models had to be evaluated using time-aware validation rather than random train-test splitting. Another challenge was converting technical forecasting results into clear visual information that business users could understand without requiring deep knowledge of time-series modeling.',

    tags: [
      'Python',
      'Pandas',
      'NumPy',
      'Time Series',
      'Prophet',
      'Plotly',
      'Data Visualization',
      'Streamlit',
    ],

    github: 'https://github.com',
    demo: 'https://demo.com',
  },

  {
    id: 'credit-card-fraud-detection',
    title: 'Credit Card Fraud Detection',

    description:
      'A Machine Learning fraud detection system that identifies suspicious financial transactions using classification, imbalance handling, and anomaly-focused evaluation.',

    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=85&w=1200',

    category: 'Machine Learning',
    featured: true,
    year: '2026',

    longDescription:
      'This project focuses on developing a Machine Learning system capable of identifying potentially fraudulent credit card transactions from historical transaction data. Fraud detection is a challenging classification problem because fraudulent transactions usually represent only a very small portion of the total dataset. The project therefore begins with detailed exploratory analysis of transaction amount distributions, temporal patterns, transaction frequencies, and other behavioral indicators. Data preprocessing includes scaling, feature transformation, missing-value handling, and analysis of class imbalance. Several classification algorithms are evaluated, including Logistic Regression, Random Forest, Gradient Boosting, and XGBoost. Instead of relying on accuracy alone, the system focuses heavily on precision, recall, F1-score, ROC-AUC, and precision-recall curves because missing fraudulent transactions can be much more costly than flagging a small number of legitimate transactions. Probability threshold optimization is used to find a practical balance between fraud detection and false alarms. The final model can be exposed through an interactive interface where transaction information is analyzed and a fraud risk score is generated.',

    features: [
      'Fraud Transaction Classification',
      'Highly Imbalanced Dataset Processing',
      'Transaction Pattern Analysis',
      'Random Forest and XGBoost Comparison',
      'Precision-Recall Analysis',
      'Prediction Threshold Optimization',
      'Fraud Risk Scoring',
      'Interactive Transaction Analysis',
    ],

    challenges:
      'The most difficult part of fraud detection was the extreme class imbalance between legitimate and fraudulent transactions. A model can achieve very high accuracy while still failing to identify actual fraud cases. The project therefore required specialized evaluation methods, careful resampling strategies, and threshold optimization. Another challenge was minimizing false alarms because incorrectly blocking legitimate transactions can negatively affect real customers and business operations.',

    tags: [
      'Python',
      'Pandas',
      'Scikit-Learn',
      'Random Forest',
      'XGBoost',
      'Classification',
      'SMOTE',
      'Data Analysis',
    ],

    github: 'https://github.com',
    demo: 'https://demo.com',
  },

  {
    id: 'movie-recommendation-system',
    title: 'Movie Recommendation System',

    description:
      'A content-based recommendation engine that recommends similar movies using genres, keywords, descriptions, cast, and other metadata.',

    image:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=85&w=1200',

    category: 'Artificial Intelligence',
    featured: false,
    year: '2026',

    longDescription:
      'This project implements an intelligent movie recommendation engine designed to help users discover films that are similar to movies they already enjoy. Instead of relying solely on user ratings, the system uses a content-based recommendation approach built from movie metadata such as genres, keywords, cast, crew, descriptions, and other textual attributes. The data preparation stage combines multiple fields into a consolidated representation of each movie. Natural Language Processing techniques are then applied to clean, normalize, and transform this information into machine-readable vectors. TF-IDF and cosine similarity are used to measure relationships between movies and generate ranked recommendations. Additional filtering and ranking logic is used to avoid irrelevant results and improve recommendation quality. The final application allows a user to search for a movie, select it, and instantly receive a list of similar titles. The system demonstrates how text processing, vectorization, similarity analysis, and recommendation logic can be combined to create a practical AI-powered user experience.',

    features: [
      'Content-Based Recommendation Engine',
      'Movie Metadata Processing',
      'TF-IDF Text Vectorization',
      'Cosine Similarity Ranking',
      'Genre and Keyword Analysis',
      'Top-N Recommendation Generation',
      'Movie Search Interface',
      'Recommendation Result Visualization',
    ],

    challenges:
      'A major challenge was combining multiple metadata fields into a meaningful representation without giving too much weight to a single feature. Another challenge was handling missing metadata, duplicate information, and inconsistent naming across different movie records. The recommendation system also needed to balance similarity with useful diversity so that users would not repeatedly receive nearly identical results.',

    tags: [
      'Python',
      'Pandas',
      'NLP',
      'TF-IDF',
      'Scikit-Learn',
      'Cosine Similarity',
      'Recommendation System',
      'Streamlit',
    ],

    github: 'https://github.com',
    demo: 'https://demo.com',
  },

  {
    id: 'customer-segmentation',
    title: 'Customer Segmentation & Analytics',

    description:
      'An unsupervised Machine Learning solution that discovers meaningful customer groups based on purchasing behavior, engagement, and demographic characteristics.',

    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=85&w=1200',

    category: 'Data Science',
    featured: false,
    year: '2026',

    longDescription:
      'This project applies unsupervised Machine Learning techniques to identify distinct customer segments from behavioral and demographic data. Instead of predicting a predefined outcome, the system discovers hidden groups of customers who share similar purchasing patterns, spending levels, engagement behavior, and demographic characteristics. The project begins with exploratory analysis to understand customer distributions and identify useful variables for segmentation. Data preprocessing includes scaling numerical features, handling missing values, and selecting the most informative dimensions for clustering. K-Means clustering is then applied and the number of clusters is evaluated using methods such as the Elbow Method and Silhouette Score. Once the clusters are identified, each group is profiled using average spending, purchase frequency, engagement, income, and other important characteristics. Interactive visualizations help users understand how segments differ from each other. The final results can be translated into practical marketing strategies such as premium customer targeting, retention campaigns, personalized recommendations, and reactivation programs for low-engagement customers.',

    features: [
      'Customer Behavior Analysis',
      'Data Standardization',
      'K-Means Clustering',
      'Elbow Method Analysis',
      'Silhouette Score Evaluation',
      'Customer Segment Profiling',
      'Interactive Cluster Visualization',
      'Business-Oriented Customer Insights',
    ],

    challenges:
      'The primary challenge was determining the correct number of meaningful customer groups. A mathematically valid cluster is not automatically useful from a business perspective. The project therefore combined statistical clustering metrics with human-readable segment profiling. Another challenge involved reducing the effect of differently scaled variables so that high-value features did not dominate the clustering process.',

    tags: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-Learn',
      'K-Means',
      'Clustering',
      'Plotly',
      'Data Analytics',
    ],

    github: 'https://github.com',
    demo: 'https://demo.com',
  },

  {
    id: 'sentiment-analysis-system',
    title: 'Sentiment Analysis System',

    description:
      'An NLP-powered application that classifies customer reviews, feedback, and textual content into positive, negative, and neutral sentiments.',

    image:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=85&w=1200',

    category: 'Natural Language Processing',
    featured: true,
    year: '2026',

    longDescription:
      'This project is an end-to-end Natural Language Processing system designed to understand the sentiment expressed in written text. The application can analyze customer reviews, product feedback, social media comments, and other forms of unstructured text and classify them into sentiment categories. The processing pipeline begins by cleaning raw text, handling punctuation, removing unnecessary noise, normalizing words, and preparing the content for machine learning. Tokenization and text representation techniques such as TF-IDF convert the textual information into numerical features that classification algorithms can process. Several models can be compared to determine which approach provides the best trade-off between accuracy, precision, recall, and inference speed. The final application provides an interactive interface where users can enter a sentence or review and instantly receive a predicted sentiment. The system can also be extended to support batch analysis, sentiment distribution charts, and customer feedback dashboards. This project demonstrates the practical application of NLP, supervised learning, feature engineering, and interactive model deployment.',

    features: [
      'Automated Text Cleaning',
      'Tokenization and Normalization',
      'TF-IDF Feature Extraction',
      'Sentiment Classification',
      'Positive / Negative / Neutral Prediction',
      'Prediction Confidence Display',
      'Batch Review Analysis',
      'Interactive NLP Dashboard',
    ],

    challenges:
      'Natural language contains ambiguity, sarcasm, informal expressions, spelling mistakes, emojis, abbreviations, and context-dependent meanings. Building a preprocessing pipeline that removed unnecessary noise without removing sentiment-critical information was one of the main challenges. Another difficulty was maintaining balanced performance across different writing styles and review lengths.',

    tags: [
      'Python',
      'NLP',
      'NLTK',
      'TF-IDF',
      'Scikit-Learn',
      'Text Classification',
      'Machine Learning',
      'Streamlit',
    ],

    github: 'https://github.com',
    demo: 'https://demo.com',
  },

  {
    id: 'stock-market-analysis-dashboard',
    title: 'Stock Market Analysis Dashboard',

    description:
      'An interactive financial analytics dashboard for exploring stock prices, market trends, trading volume, volatility, and technical indicators.',

    image:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=85&w=1200',

    category: 'Data Analytics',
    featured: false,
    year: '2026',

    longDescription:
      'This project is an interactive financial analytics dashboard created to transform historical stock market data into meaningful visual insights. The application allows users to analyze price movements across customizable time periods and explore important market indicators such as opening price, closing price, daily range, trading volume, moving averages, and volatility. The data pipeline handles date normalization, missing market days, duplicate records, and numerical transformations before generating analytical features. Interactive charts are used to display long-term price trends, short-term movements, volume changes, and relationships between technical indicators. Users can compare different stocks, inspect specific date ranges, and identify periods of unusually high market activity. The dashboard is designed primarily as an analytical and educational tool rather than an automated trading system. Its main goal is to demonstrate how Python-based data processing, time-series analysis, interactive visualization, and financial metrics can be combined to build a practical data analytics product.',

    features: [
      'Interactive Stock Price Charts',
      'Historical Market Data Analysis',
      'Moving Average Indicators',
      'Trading Volume Analysis',
      'Volatility Monitoring',
      'Technical Indicator Visualization',
      'Custom Date Range Filtering',
      'Multi-Stock Comparison',
    ],

    challenges:
      'Financial data changes rapidly and often contains irregularities such as missing trading sessions, sudden market events, extreme volatility, and differences between data providers. The main challenge was designing a reliable preprocessing pipeline while also making the visualizations responsive and easy to understand. Another challenge was presenting technical indicators without overwhelming users who may not have a strong financial background.',

    tags: [
      'Python',
      'Pandas',
      'NumPy',
      'Plotly',
      'Time Series',
      'Financial Analysis',
      'Data Visualization',
      'Streamlit',
    ],

    github: 'https://github.com',
    demo: 'https://demo.com',
  },

  {
    id: 'face-mask-detection',
    title: 'Face Mask Detection System',

    description:
      'A Computer Vision and Deep Learning application that detects whether people are wearing face masks using image and real-time video processing.',

    image:
      'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=85&w=1200',

    category: 'Computer Vision',
    featured: false,
    year: '2026',

    longDescription:
      'This project combines Computer Vision and Deep Learning to build a real-time face mask detection application. The system is designed to identify human faces from images or video streams and classify whether a person is wearing a mask. The workflow begins with image preprocessing and dataset preparation, followed by augmentation techniques to improve model robustness against different lighting conditions, facial orientations, and image quality. A Convolutional Neural Network is trained to distinguish between masked and unmasked faces, while OpenCV handles real-time frame processing and visualization. During inference, detected faces are analyzed individually and the predicted class is displayed using visual overlays. The application demonstrates how deep learning models can be integrated with traditional computer vision tools to create a real-time AI solution. The system can potentially be extended to multiple-person detection, confidence score display, alert mechanisms, and edge-device deployment. The project serves as a practical example of image classification, CNN training, OpenCV processing, and real-time model inference.',

    features: [
      'Real-Time Face Detection',
      'CNN-Based Image Classification',
      'OpenCV Video Processing',
      'Mask / No-Mask Classification',
      'Bounding Box Visualization',
      'Confidence Score Display',
      'Image and Webcam Support',
      'Real-Time Prediction Overlay',
    ],

    challenges:
      'Real-world facial images differ significantly from training images because of lighting conditions, camera angles, partial occlusion, image resolution, and multiple people appearing in the same frame. Improving the model’s robustness required careful data augmentation, normalization, and evaluation. Real-time performance was another challenge because the detection and classification pipeline needed to maintain acceptable prediction speed while processing continuous video frames.',

    tags: [
      'Python',
      'OpenCV',
      'TensorFlow',
      'Keras',
      'CNN',
      'Computer Vision',
      'Deep Learning',
      'Image Classification',
    ],

    github: 'https://github.com',
    demo: 'https://demo.com',
  },

  {
    id: 'ai-resume-screening-system',
    title: 'AI Resume Screening System',

    description:
      'An NLP-powered resume screening application that extracts candidate information and ranks resumes based on job-specific skills and requirements.',

    image:
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=85&w=1200',

    category: 'Artificial Intelligence',
    featured: true,
    year: '2026',

    longDescription:
      'This project focuses on automating the initial stage of recruitment by using Natural Language Processing and Machine Learning to analyze resumes and compare them against job requirements. Traditional resume screening can require significant manual effort, especially when recruiters receive hundreds of applications for a single position. The system addresses this problem by extracting structured information from unstructured resume documents, including candidate names, technical skills, educational qualifications, work experience, certifications, and relevant keywords. Resume content is cleaned and normalized before being analyzed using NLP techniques. Job descriptions are processed using a similar pipeline so that the system can calculate how closely each candidate matches the required skills and qualifications. A relevance scoring mechanism is then used to rank candidates and highlight the strongest matches. The application can also provide skill-gap information, showing which required technologies or qualifications are missing from a candidate profile. The overall goal is not to replace recruiters but to provide an intelligent first-pass screening assistant that reduces repetitive manual work and allows human decision-makers to focus more on interviews, candidate quality, and final evaluation.',

    features: [
      'Automated Resume Text Extraction',
      'Resume Information Parsing',
      'Technical Skill Extraction',
      'Job Description Analysis',
      'Candidate-to-Job Matching',
      'Resume Relevance Scoring',
      'Candidate Ranking System',
      'Skill Gap Identification',
      'NLP-Based Profile Analysis',
    ],

    challenges:
      'Resume documents are highly inconsistent because candidates use different layouts, wording, sections, file formats, and terminology. Extracting useful information reliably from these documents was one of the main challenges. Another difficulty involved recognizing that the same skill can be written in several different ways, such as “Machine Learning”, “ML”, or a specific framework name. The system therefore requires normalization and contextual matching rather than simple keyword comparison. Maintaining fair and explainable ranking was also important so that recruiters can understand why one candidate received a higher relevance score than another.',

    tags: [
      'Python',
      'NLP',
      'SpaCy',
      'Scikit-Learn',
      'Machine Learning',
      'Text Processing',
      'Information Extraction',
      'Streamlit',
    ],

    github: 'https://github.com',
    demo: 'https://demo.com',
  },

  {
    id: 'handwritten-digit-recognition',
    title: 'Handwritten Digit Recognition',

    description:
      'A Deep Learning application that recognizes handwritten digits using a Convolutional Neural Network trained on the MNIST dataset.',

    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=85&w=1200',

    category: 'Deep Learning',
    featured: false,
    year: '2026',

    longDescription:
      'This project demonstrates a complete Deep Learning workflow for recognizing handwritten numerical digits from images. The model is trained using the well-known MNIST dataset, which contains thousands of grayscale handwritten digit samples. The project begins with image normalization and preprocessing so that input values are represented in a form suitable for neural network training. A Convolutional Neural Network is then designed to automatically learn spatial patterns such as edges, curves, strokes, and shapes that distinguish one digit from another. During training, validation performance is monitored to identify overfitting and determine when the model achieves stable generalization. After training, the system is evaluated using accuracy, confusion matrices, and class-level performance analysis. The final application includes an interactive interface where users can draw or upload a handwritten digit and receive a predicted class in real time. The system demonstrates the practical workflow of preparing image data, designing a CNN architecture, training and evaluating a deep learning model, and integrating the model into an interactive application.',

    features: [
      'Convolutional Neural Network',
      'MNIST Dataset Processing',
      'Image Normalization',
      'Training and Validation Monitoring',
      'Confusion Matrix Analysis',
      'Real-Time Digit Prediction',
      'Interactive Drawing Interface',
      'Image Upload Support',
    ],

    challenges:
      'Although MNIST is a relatively clean dataset, handwritten digits vary greatly in stroke thickness, alignment, shape, and style. The interactive drawing interface introduced additional variations because users may draw digits at different positions or scales. Proper image resizing, centering, normalization, and preprocessing were therefore essential for maintaining reliable predictions. Preventing overfitting while preserving high validation accuracy was another important training challenge.',

    tags: [
      'Python',
      'TensorFlow',
      'Keras',
      'CNN',
      'Deep Learning',
      'Computer Vision',
      'MNIST',
      'Image Classification',
    ],

    github: 'https://github.com',
    demo: 'https://demo.com',
  },
];