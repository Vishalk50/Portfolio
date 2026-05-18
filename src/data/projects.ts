export interface Project {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  shortDescription: string;
  details: string[];
  status: 'complete' | 'in-progress';
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'ai-video-summarizer',
    title: 'AI-Video-Summarizer',
    slug: 'ai-video-summarizer',
    tagline: 'YouTube transcript + AI summary tool',
    description: 'A multi-agent pipeline that extracts YouTube transcripts and generates AI-powered summaries. Built with a 3-agent architecture: extractor fetches transcripts, summarizer processes them via Gemini API, and formatter structures the output into clean sections.',
    shortDescription: 'YouTube transcript extraction and AI summarization via a multi-agent pipeline.',
    details: [
      'Extracts transcripts from any YouTube video',
      'AI-powered summarization via Gemini API (OpenAI API fallback)',
      '3-agent pipeline: extractor → summarizer → formatter',
      'Timestamps, key points, and structured summaries',
      'Public shareable pages for each summary',
      'Built with Streamlit frontend and FastAPI backend',
    ],
    status: 'complete',
    tech: ['Python', 'Streamlit', 'FastAPI', 'Gemini API', 'OpenAI API', 'Multi-Agent'],
    githubUrl: 'https://github.com/Vishalk50/-AI-Video-Summarizer-',
    featured: true,
  },
  {
    id: 'chatbot-studio',
    title: 'ChatBot Studio',
    slug: 'chatbot-studio',
    tagline: 'Upload PDF/TXT → AI chatbot with search',
    description: 'Upload any PDF or text file and get an interactive AI chatbot that answers questions based on your content. Combines vector search (FAISS + Sentence Transformers) with keyword fallback for accurate retrieval, powered by Gemini AI with Ollama fallback.',
    shortDescription: 'Upload documents and get an AI chatbot that answers from your content.',
    details: [
      'Upload PDF or TXT files (up to 10MB)',
      'Vector search via FAISS + Sentence Transformers',
      'Keyword search fallback for broader matching',
      'Gemini AI primary, Ollama fallback',
      'Rate limiting (10 uploads/min, 30 chats/min) per IP',
      'Shareable chat links and embeddable widget',
    ],
    status: 'complete',
    tech: ['Python', 'Flask', 'FAISS', 'Gemini API', 'Sentence Transformers', 'Ollama'],
    githubUrl: 'https://github.com/Vishalk50/ChatBot-Studio',
    featured: true,
  },
  {
    id: 'quarterly-clock',
    title: 'QuarterlyClock',
    slug: 'quarterly-clock',
    tagline: 'Desktop widget for global trading sessions',
    description: 'A floating desktop overlay that tracks global trading sessions (Asian, London, New York) with ICT Killzone overlays. Displays quarterly shifts and session transitions in real time. Packaged as a standalone .exe, no installation needed.',
    shortDescription: 'Floating desktop widget tracking global trading sessions and ICT Killzones.',
    details: [
      'Tracks ASI, LDN, NYC trading sessions in real time',
      'ICT Killzone overlays for advanced trading strategies',
      'Quarterly shift tracking',
      'Floating overlay, always-on-top mode',
      'Standalone .exe, no Python required to run',
      'Built with Tkinter and packaged with PyInstaller',
    ],
    status: 'complete',
    tech: ['Python', 'Tkinter', 'PyInstaller'],
    featured: true,
  },
  {
    id: 'tradingview-candles',
    title: '6h 40m Candles — TradingView',
    slug: 'tradingview-candles',
    tagline: 'Custom timeframe indicator for TradingView',
    description: 'A custom Pine Script v6 indicator for TradingView that reconstructs 6-hour-40-minute candles from lower timeframe data. Enables analysis on a timeframe not natively supported by TradingView.',
    shortDescription: 'Custom TradingView indicator for 6h 40m candle reconstruction.',
    details: [
      'Reconstructs 6h 40m candles from lower timeframe data',
      'Written in Pine Script v6',
      'Seamlessly integrates with TradingView charts',
      'Lightweight and efficient computation',
    ],
    status: 'complete',
    tech: ['Pine Script v6'],
    featured: false,
  },
  {
    id: 'voice-trade-recorder',
    title: 'Voice-Trade-Recorder',
    slug: 'voice-trade-recorder',
    tagline: 'Voice-to-text recorder for Indian mandi Arhatias',
    description: 'A voice-to-text trade recording system designed for Indian mandi (market) Arhatias. Converts spoken trade details into structured records using a 5-agent pipeline: recorder → transcriber → extractor → trainer → output.',
    shortDescription: 'Voice-to-text system for recording market trades in Indian mandis.',
    details: [
      'Voice recording of trade details in Hindi/English',
      'Whisper-based transcription',
      'Gemini API for information extraction',
      '5-agent pipeline for end-to-end processing',
      'Designed for mandi Arhatias (commission agents)',
    ],
    status: 'in-progress',
    tech: ['Python', 'Whisper', 'Gemini API', 'Multi-Agent'],
    featured: false,
  },
];
