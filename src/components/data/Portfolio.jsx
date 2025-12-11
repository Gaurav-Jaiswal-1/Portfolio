export const portfolioData = {
  personal: {
    name: "Gaurav Jaiswal",
    title: "AI Engineer & ML Architect",
    tagline: "Building Intelligent Systems with Deep Learning & MLOps",
    bio: "I specialize in designing and deploying end-to-end AI solutions that transform data into actionable intelligence. With expertise in Machine Learning, Deep Learning, NLP, and MLOps, I've engineered production-grade systems that achieve 95%+ accuracy and reduce manual workload by 80%.",
    email: "jaiswalgaurav863@gmail.com",
    phone: "+91 9511626235",
    location: "Maharashtra, India",
    resumeLink: "/resume.pdf",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com/in/gaurav-jaiswal",
      twitter: "https://twitter.com",
      medium: "https://medium.com",
    },
  },
  skills: [
    {
      category: "Machine Learning & AI",
      items: ["Deep Learning", "PyTorch", "Scikit-learn", "LLMs", "Generative AI", "Computer Vision", "CNNs"],
    },
    {
      category: "Data Science & NLP",
      items: ["NLP", "NLTK", "SpaCy", "Pandas", "NumPy", "Text Processing", "Embeddings"],
    },
    {
      category: "Backend & MLOps",
      items: ["FastAPI", "Docker", "Kubernetes", "MLflow", "DVC", "CI/CD", "GitHub Actions"],
    },
    {
      category: "Languages & Tools",
      items: ["Python", "SQL", "Bash", "Git", "AWS", "Google Cloud"],
    },
  ],
  experience: [
    {
      role: "Data Science Intern",
      company: "Ellipsis",
      location: "Chh. Sambhajinagar",
      duration: "Mar 2025 – Present",
      achievements: [
        "Engineered end-to-end OCR pipeline extracting data from 2000+ semi-structured forms with 95% accuracy",
        "Integrated Gemini 2.0 Flash reducing manual processing workload by 80%",
        "Built scalable FastAPI microservices serving ML models via RESTful APIs",
        "Integrated Soniox API for real-time transcription (95% accuracy across diverse media)",
        "Leveraged Google Gemini for context-aware summaries, improving analysis efficiency by 60%",
      ],
    },
  ],
  projects: [
    {
      title: "VedX",
      description: "Full-stack AI coding assistant with LLM-driven autonomous loops and multimodal capabilities",
      longDescription: "Built a comprehensive VS Code extension and web UI powered by autonomous LLM loops. Features include voice, image, and file multimodal input, sentiment-aware Gita-based notifications, and offline capabilities using GGUF models (Phi-3, Mistral) with persistent memory via Chroma.",
      technologies: ["Python", "FastAPI", "LLMs", "Chroma", "VS Code API"],
      github: "https://github.com",
      highlights: ["Autonomous LLM loops", "Multimodal input", "Privacy-first design"],
    },
    {
      title: "Text-Preprocessing-Toolkit",
      description: "Modular Python package for end-to-end data preprocessing with 12,000+ PyPI downloads",
      longDescription: "Engineered a scalable preprocessing toolkit featuring tokenization, lemmatization, spell correction, imputation, outlier handling, and encoding. Reduces data preparation time by 50-55% across ML pipelines and is actively used in production workflows.",
      technologies: ["Python", "Pandas", "NLTK", "SpaCy"],
      github: "https://github.com",
      highlights: ["12,000+ downloads", "50-55% time reduction", "Production-ready"],
    },
  ],
  research: [
    {
      title: "HyperX Activation Function",
      description: "Novel PyTorch activation function combining tanh(softplus(x)) with tunable sinusoidal residuals",
      status: "Under Development",
      duration: "Dec 2024 – Present",
      achievements: [
        "15% faster convergence on CNN-based image classification",
        "10% higher accuracy vs ReLU and GELU",
        "12% performance improvement on MNIST and CIFAR-10",
        "20% reduction in overfitting on large-scale evaluations",
      ],
    },
  ],
  education: {
    school: "CSMSS, Chh. Shahu College of Engineering",
    degree: "B.Tech in Artificial Intelligence and Data Science",
    duration: "Jan 2021 – July 2025",
  },
};
