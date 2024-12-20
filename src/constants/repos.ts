export interface Repo {
  name: string;
  isPublic: boolean;
  size: string;
  language: string;
  lastUpdated: string;
}

const repos = [
  {
    name: "design-system",
    isPublic: true,
    language: "React",
    size: "7320 KB",
    lastUpdated: "1 day ago",
  },
  {
    name: "backend-api",
    isPublic: false,
    language: "Node.js",
    size: "4820 KB",
    lastUpdated: "3 days ago",
  },
  {
    name: "frontend-ui",
    isPublic: true,
    language: "Vue",
    size: "6200 KB",
    lastUpdated: "2 hours ago",
  },
  {
    name: "mobile-app",
    isPublic: true,
    language: "React Native",
    size: "9200 KB",
    lastUpdated: "5 days ago",
  },
  {
    name: "analytics",
    isPublic: false,
    language: "Python",
    size: "15320 KB",
    lastUpdated: "1 week ago",
  },
  {
    name: "devops-tools",
    isPublic: true,
    language: "Shell",
    size: "3200 KB",
    lastUpdated: "2 weeks ago",
  },
  {
    name: "ecommerce-platform",
    isPublic: false,
    language: "Ruby",
    size: "11420 KB",
    lastUpdated: "4 days ago",
  },
  {
    name: "documentation-site",
    isPublic: true,
    language: "Markdown",
    size: "240 KB",
    lastUpdated: "3 weeks ago",
  },
  {
    name: "image-processor",
    isPublic: true,
    language: "Go",
    size: "730 KB",
    lastUpdated: "1 month ago",
  },
  {
    name: "chatbot",
    isPublic: false,
    language: "Python",
    size: "620 KB",
    lastUpdated: "2 months ago",
  },
  {
    name: "game-engine",
    isPublic: true,
    language: "C++",
    size: "45 MB",
    lastUpdated: "3 months ago",
  },
  {
    name: "data-visualizer",
    isPublic: true,
    language: "JavaScript",
    size: "10 MB",
    lastUpdated: "2 weeks ago",
  },
  {
    name: "authentication-service",
    isPublic: false,
    language: "Java",
    size: "8 MB",
    lastUpdated: "1 week ago",
  },
  {
    name: "machine-learning-pipeline",
    isPublic: true,
    language: "Python",
    size: "50 MB",
    lastUpdated: "1 month ago",
  },
  {
    name: "static-website",
    isPublic: true,
    language: "HTML",
    size: "500 KB",
    lastUpdated: "6 months ago",
  },
  {
    name: "crypto-wallet",
    isPublic: false,
    language: "Rust",
    size: "12 MB",
    lastUpdated: "4 months ago",
  },
  {
    name: "iot-controller",
    isPublic: true,
    language: "C",
    size: "7 MB",
    lastUpdated: "5 months ago",
  },
  {
    name: "video-encoder",
    isPublic: false,
    language: "C++",
    size: "30 MB",
    lastUpdated: "3 weeks ago",
  },
  {
    name: "newsletter-service",
    isPublic: true,
    language: "PHP",
    size: "2 MB",
    lastUpdated: "2 months ago",
  },
  {
    name: "real-time-chat",
    isPublic: false,
    language: "JavaScript",
    size: "15 MB",
    lastUpdated: "3 days ago",
  },
];

export default repos;
