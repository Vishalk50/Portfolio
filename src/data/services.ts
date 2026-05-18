export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  ctaText: string;
  ctaLink: string;
}

export const services: Service[] = [
  {
    id: 'ai-product-dev',
    title: 'AI Product Development',
    description: 'I design and build AI-powered products from idea to working prototype. You describe the vision — I architect the solution and direct AI agents to build it.',
    icon: 'bot',
    ctaText: 'Start a project',
    ctaLink: '/portfolio/contact/',
  },
  {
    id: 'chatbot-building',
    title: 'Custom ChatBot Building',
    description: 'Document-grounded chatbots that answer questions from your PDFs, manuals, or knowledge bases. Powered by vector search + LLM for accurate, context-aware responses.',
    icon: 'message-square',
    ctaText: 'Build a chatbot',
    ctaLink: '/portfolio/contact/',
  },
  {
    id: 'web-automation',
    title: 'Web Scraping & Automation',
    description: 'Custom data extraction pipelines and automation scripts. Turn unstructured web data into structured, actionable information.',
    icon: 'search',
    ctaText: 'Talk about automation',
    ctaLink: '/portfolio/contact/',
  },
  {
    id: 'voice-ai',
    title: 'Voice AI Solutions',
    description: 'Speech-to-text, voice-controlled assistants, and voice-enabled data entry systems. Built with Whisper, RAG pipelines, and LLM integration.',
    icon: 'mic',
    ctaText: 'Discuss voice AI',
    ctaLink: '/portfolio/contact/',
  },
];
