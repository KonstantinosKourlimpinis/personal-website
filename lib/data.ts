export const personal = {
  name: "Konstantinos Kourlimpinis",
  shortName: "KK",
  title: "Analyst · Software & AI Engineer · Curious Adventurer",
  tagline: "Turning Data Into Decisions That Matter.",
  location: "Lausanne, Switzerland",
  email: "konstantinos.kourlimpinis@gmail.com",
  phone: "+41 78 730 39 45",
  linkedin: "https://www.linkedin.com/in/konstantinos-kourlimpinis/",
  github: "https://github.com/KonstantinosKourlimpinis",
  quote:
    "A frustrated student of mine once asked me: 'Why do I have to suffer?' — to which I replied: 'You don't always have to, but you won't find much meaning in life without it.'",
};

export const values = [
  {
    title: "Honesty",
    icon: "🔍",
    description:
      "Being transparent and honest is the best way to find the root cause of any problem. Conflict is inevitable — but that's just part of the process.",
    ocean: "Like the ocean, clarity only comes when the silt settles.",
  },
  {
    title: "Environment",
    icon: "🌊",
    description:
      "Nothing is more precious than humanity's connection with nature. I spent months volunteering in eco-communities. My biggest lesson: nature is what can truly bring us all together.",
    ocean: "Every dive reminds me how much we stand to lose — and protect.",
  },
  {
    title: "Empathy",
    icon: "🤿",
    description:
      "I'm a good teacher not because I'm the most knowledgeable, but because I always see myself as a student. For someone to truly listen, they have to feel safe.",
    ocean:
      "Underwater, ego dissolves. You listen to the water, not your own voice.",
  },
];

export const experience = [
  {
    role: "Software Developer & AI Engineer",
    company: "Axion Promotion",
    location: "Piraeus, Greece",
    period: "2025 – Present",
    bullets: [
      "Built and deployed AI automation workflows using n8n, Make.com, Claude and the Anthropic API to streamline operations for a promotions agency.",
      "Developed web tools and internal dashboards with Python, JavaScript, Next.js and Vercel; integrated Airtable as the core data layer for promoter management.",
      "Conducted data analysis and produced client-facing reports to support business decisions and agency strategy.",
    ],
    tags: ["n8n", "Make.com", "Anthropic API", "Next.js", "Airtable", "Vercel"],
    current: true,
  },
  {
    role: "Data Analyst & Data Engineer",
    company: "Thalassa Diving Academy",
    location: "Athens, Greece",
    period: "2024 – 2025",
    bullets: [
      "Designed relational databases and automated ETL pipelines using Python and SQL; built Tableau dashboards for KPI tracking.",
      "Implemented AI-powered tools to automate reporting workflows, reducing manual effort by 30%.",
    ],
    tags: ["Python", "SQL", "Tableau", "ETL", "AI Automation"],
    current: false,
  },
  {
    role: "Business Analyst Intern – Wholesale E-Commerce",
    company: "Ralph Lauren HQ",
    location: "Geneva, Switzerland",
    period: "2023 – 2024",
    bullets: [
      "Automated reporting using Python, SQL, Redshift, PowerQuery and Dataiku — freeing 10 work hours weekly.",
      "Data engineering on 10+ billion row datasets; reported business performance via Power BI to top management.",
    ],
    tags: ["Python", "SQL", "Redshift", "Dataiku", "Power BI"],
    current: false,
  },
  {
    role: "Mathematics & Physics Teacher",
    company: "Private Tutoring",
    location: "Lausanne, Switzerland",
    period: "2018 – 2023",
    bullets: [
      "Taught higher-level Mathematics and Physics in English and French to 40+ students across diverse cultural backgrounds.",
    ],
    tags: ["Teaching", "Mathematics", "Physics"],
    current: false,
  },
  {
    role: "Finance & Marketing Intern",
    company: "Nestlé HQ",
    location: "Vevey, Switzerland",
    period: "2016 – 2017",
    bullets: [
      "Data cleaning and preparation on 500k-row datasets; built Pivot Table and Power Query visualisations.",
      "Delivered strategic presentations on 50+ new products to top management across Asia.",
    ],
    tags: ["Excel", "Power Query", "Data Analysis"],
    current: false,
  },
];

export const education = [
  {
    degree: "MSc Artificial Intelligence",
    school: "Uni Distance",
    period: "2026 – Present",
    grade: null,
    subjects: "",
  },
  {
    degree: "MSc Business Analytics & Management",
    school: "University of Lausanne – HEC",
    period: "2022 – 2025",
    grade: "5.5/6",
    subjects: "Machine Learning · Causal Inference · Forecasting · Supply Chain Optimisation",
  },
  {
    degree: "BSc Economics",
    school: "University of Lausanne – HEC",
    period: "2018 – 2020",
    grade: "5/6",
    subjects: "Statistics · Econometrics · Macroeconomic Modelling",
  },
  {
    degree: "CMS – Special Mathematics Course",
    school: "EPFL · Lausanne",
    period: "2017 – 2018",
    grade: null,
    subjects: "Linear Algebra · Analytical Geometry · Java",
  },
];

export const skills = {
  Languages: ["Python", "R", "SQL", "Snowflake", "Redshift", "JavaScript", "Java"],
  Analytics: ["Machine Learning", "Causal Inference", "A/B Testing", "Forecasting", "Econometrics"],
  Tools: ["Power BI", "Tableau", "Dataiku", "n8n", "Make.com", "Airtable", "Vercel", "Git"],
  Spoken: ["Greek (Native)", "English (C1/C2)", "French (C1)", "Russian (A1)"],
};

export const certifications = [
  { name: "Associate Data Scientist in Python", issuer: "DataCamp" },
  { name: "Associate Data Engineer in SQL", issuer: "DataCamp" },
  { name: "Financial Markets", issuer: "Yale University" },
  { name: "Excel for Data Analytics", issuer: "IBM" },
];

export const projects = [
  {
    id: 1,
    title: "Axion Promotion Platform",
    subtitle: "Full-Stack Web App & AI Automation",
    description:
      "Built a full-stack promotions agency platform from scratch — promoter management system, client dashboards, and AI-powered automation workflows. The backend runs on Airtable, the frontend on Next.js, and AI agents handle repetitive operations via n8n, Make.com, and the Anthropic API.",
    tags: ["Next.js", "Airtable", "n8n", "Anthropic API", "Make.com", "Vercel"],
    status: "live",
    link: null,
    image: "/projects/AP.jpg",
    featured: true,
  },
  {
    id: 5,
    title: "Ralph Lauren — Automated Reporting",
    subtitle: "Data Engineering at Scale",
    description:
      "Automated reporting pipelines across 10+ billion row datasets using Python, SQL, Redshift and Dataiku — freeing 10 work hours weekly. Built weekly and monthly Power BI dashboards reported to top management.",
    tags: ["Python", "SQL", "Redshift", "Dataiku", "Power BI"],
    status: "professional",
    link: null,
    image: "/projects/dataiku.png",
    featured: false,
  },
  {
    id: 2,
    title: "Master's Thesis — Causal Pricing",
    subtitle: "Causal Inference in Consumer Demand",
    description:
      "Applied Directed Acyclic Graphs (DAGs) and Double Machine Learning to recover unbiased price elasticity estimates. Key finding: a ~5% price increase reduces demand by 1 unit. Designed A/B tests on promotional pricing to validate causal estimates and measure incremental lift.",
    tags: ["Python", "Causal Inference", "Double ML", "A/B Testing", "DAGs"],
    status: "research",
    link: null,
    image: "/projects/causalinf.jpg",
    featured: false,
  },
  {
    id: 9,
    title: "Geneva Airport Flight Prediction",
    subtitle: "Time-Series Forecasting · COVID-19 Impact Analysis",
    description:
      "Predicted flight volumes at Geneva International Airport using multiple ML algorithms — Random Forest, SVR, Neural Networks, and ARIMA. Incorporated COVID-19 as a structural break variable alongside seasonal patterns and economic indicators. The model captures the dramatic demand collapse in 2020 and the subsequent recovery trajectory.",
    tags: ["Python", "Random Forest", "SVR", "ARIMA", "Forecasting", "COVID-19"],
    status: "research",
    link: null,
    image: "/projects/flights.jpeg",
    featured: false,
  },
  {
    id: 7,
    title: "P&G — Strategic Optimization of Digital Media",
    subtitle: "Power BI Dashboard · European KPI Analysis",
    description:
      "Developed a Power BI dashboard to evaluate digital advertising platform effectiveness across European markets using 100+ KPIs. Applied advanced data analysis techniques to benchmark platform performance and support media budget decisions. Built as a group project at UNIL (Jan 2024) with Candelaria Retamal & Jordan Vazquez.",
    tags: ["Power BI", "Data Analytics", "KPIs", "Digital Media", "Dashboard"],
    status: "built",
    link: null,
    image: "/projects/variable importance.jpeg",
    featured: false,
  },
  {
    id: 8,
    title: "Bank Credit Rating Classification",
    subtitle: "Multi-Model ML on Imbalanced Data",
    description:
      "Benchmarked 8 classification algorithms (Logistic Regression, CART, SVM, Neural Network, KNN, LDA, Random Forest, XGBoost) on balanced and unbalanced credit data. Model selection based on AUC and balanced accuracy to handle class imbalance. Key finding: payment history, loan amount and loan duration are the strongest predictors of creditworthiness. Gradient Boosting was the top-performing model.",
    tags: ["R", "XGBoost", "Random Forest", "SVM", "Classification", "AUC"],
    status: "research",
    link: null,
    image: "/projects/RandomForest.jpeg",
    featured: false,
  },
  {
    id: 4,
    title: "Nestlé — Coffee Demand Forecasting",
    subtitle: "Time-Series ML · Nestlé / Nielsen Data",
    description:
      "Forecasted Swiss capsule coffee demand using proprietary Nestlé/Nielsen monthly sales data enriched with macroeconomic indicators (CPI, oil prices, temperature). Benchmarked SVR, Neural Networks, S-ARIMA and Random Forest — SVR achieved the best RMSE of 0.248. Key finding: coffee price (driven by supply-chain costs) is the #1 demand driver, followed by inflation and seasonal temperature.",
    tags: ["R", "SVR", "S-ARIMA", "Random Forest", "Time Series", "Forecasting"],
    status: "research",
    link: null,
    image: "/projects/arimaforecast.jpeg",
    featured: false,
  },
];

export const diveInfo = {
  certifications: ["PADI Advanced Open Water Diver – 50+ logged dives", "PADI Advanced Freediver – 5 min apnea"],
  quote:
    "The ocean teaches patience, focus, and respect — values I carry into everything I do. Underwater, you meet yourself without distraction.",
  stats: [
    { label: "Certification", value: "Advanced OW" },
    { label: "Freediving", value: "Certified" },
    { label: "Passion", value: "Since 2019" },
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Dive", href: "#dive" },
  { label: "Nature", href: "#sustainability" },
  { label: "Contact", href: "#contact" },
];
