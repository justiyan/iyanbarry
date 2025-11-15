export interface Project {
  title: string
  slug: string
  description: string
  tags: string[]
  link?: string
  status?: string
}

export const projects: Project[] = [
  {
    title: "Safe Places IT Transformation",
    slug: "safe-places-it-transformation",
    description: "Multi-year program leading the IT function from reactive support to a proactive, strategic capability. Redesigned organizational structure, implemented Freshservice, uplifted cybersecurity posture, and aligned all controls to ISO 27001 standards.",
    tags: ["IT leadership", "Cybersecurity", "Governance"],
    status: "Active"
  },
  {
    title: "Internal AI Assistant (Safe Places)",
    slug: "internal-ai-assistant",
    description: "Developed an internal AI assistant for staff using open-source LLMs and company knowledge base, with a focus on secure, private use cases that enhance productivity without compromising data security.",
    tags: ["AI", "Internal tools", "Productivity"],
    status: "Active"
  },
  {
    title: "KindlyScan / KindQR",
    slug: "kindlyscan-kindqr",
    description: "A prototype concept for a QR code-based donation platform that allows people to donate to individuals or causes by scanning a code and reading their story. Exploring the intersection of fintech and social impact.",
    tags: ["Product design", "Fintech", "Social impact"],
    status: "Experiment"
  },
  {
    title: "Forex Trading Bots & AI Research",
    slug: "forex-trading-bots",
    description: "Ongoing experiments in building algorithmic trading systems and AI-assisted trading logic, including backtesting frameworks, automation workflows, and risk management strategies.",
    tags: ["Trading", "AI", "Experiments"],
    status: "In progress"
  },
  {
    title: "ThinkTryGrow",
    slug: "thinktryerow",
    description: "A blog concept focused on summarizing YouTube content, breaking down complex ideas into digestible insights, and turning them into actionable steps using automation and AI tools.",
    tags: ["Content", "Automation", "Learning"],
    status: "Experiment"
  },
  {
    title: "3D Printing Experiments (Bris3D)",
    slug: "bris3d-experiments",
    description: "Exploring small-scale consumer 3D printing services and prototypes, focusing on simple gadgets, custom tools, and promotional pieces for local businesses and personal projects.",
    tags: ["3D printing", "Prototype", "Side project"],
    status: "Active"
  }
]