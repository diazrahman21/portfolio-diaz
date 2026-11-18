export const profile = {
  greeting: "Hi, I'm Diaz",
  name: 'Muh Diaz Nazarudin Rahman',
  shortName: 'Diaz Rahman',
  headline:
    'Full-stack and backend developer building reliable, AI-powered web products.',
  intro:
    'I build web products end to end, from thoughtful interfaces to dependable backends, with a growing focus on AI-powered workflows and security-minded engineering.',
  availability: 'Open to Work',
  currentRole: 'Backend AI Engineer Intern at Flyrank AI, Jun–Sep 2026',
  location: 'Based in Indramayu, West Java, Indonesia.',
  email: 'muhdiaznazarudinrahman@gmail.com',
  linkedin: 'https://www.linkedin.com/in/muh-diaz-nazarudin-rahman-0aa85a2a1',
  linkedinLabel: 'LinkedIn',
  phone: '+62 821 1746 6103',
  phoneHref: 'tel:+6282117466103',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const marqueeItems = [
  'Full-stack',
  'Backend',
  'TypeScript',
  'React',
  'Flask',
  'Supabase',
  'Laravel',
  'Cyber Security',
]

export const about = {
  heading: 'Informatics graduate, hands-on builder.',
  paragraphs: [
    'I graduated from Universitas Ahmad Dahlan with a GPA of 3.57/4.00, on time and in under four years. Along the way I built full-stack and AI-powered applications with TypeScript, React, Flask, and Supabase, and developed a steady interest in cyber security.',
    "I'm looking for a full-stack or backend developer role where I can build reliable, impactful digital products.",
  ],
  stats: [
    { value: 3.57, suffix: '', decimals: 2, label: 'GPA out of 4.00' },
    { value: 2000, suffix: '+', decimals: 0, label: 'piracy websites reported at Vidio' },
    { value: 25, suffix: '', decimals: 0, label: 'teaching assistants coordinated' },
    {
      value: 8,
      suffix: '',
      decimals: 0,
      label: 'karate medals in national and international championships',
    },
  ],
}

export const skillGroups = [
  {
    title: 'Frontend',
    color: '#ffc93c',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Vue.js',
      'Vite',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Backend',
    color: '#9ed8b5',
    items: [
      'Node.js',
      'Express.js',
      'Flask',
      'Laravel',
      'CodeIgniter',
      'PHP',
      'Python',
      'Golang',
      'REST API',
    ],
  },
  {
    title: 'Data & Tools',
    color: '#9ec1ff',
    items: ['Supabase', 'PostgreSQL', 'TensorFlow', 'Git', 'Postman', 'Java', 'C#', '.NET'],
  },
]

export const softSkills = [
  'Problem Solving',
  'Communication',
  'Team Collaboration',
  'Time Management',
  'Adaptability',
  'Leadership',
  'Attention to Detail',
  'Critical Thinking',
  'Self-directed Learning',
]

export const projects = [
  {
    title: 'Smart Document Reader',
    description: 'A document reader powered by Vision AI and hosted on Cloudflare.',
    technologies: ['Next.js', 'TypeScript', 'Cloudflare', 'Vision AI'],
    tone: 'powder',
  },
  {
    title: 'Bedah Docs',
    description:
      'A document analysis project built with Next.js and TypeScript. More details coming soon.',
    technologies: ['Next.js', 'TypeScript'],
    tone: 'pink',
  },
  {
    title: 'Job Board & Recruitment App',
    description: 'A job board and recruitment application built with Laravel 12.',
    technologies: ['Laravel 12', 'PHP'],
    tone: 'sun',
  },
  {
    title: 'PDF Summarizer – Flyrank AI',
    description:
      'A RAG-based application where users upload PDFs and receive AI summaries organized around their selected key points.',
    technologies: ['TypeScript', 'RAG', 'AI'],
    tone: 'ink',
  },
  {
    title: 'Coding Camp Team Application',
    description:
      'Developed with a team of six in two months. Delivered 5+ key features, deployed to Netlify, and achieved a final score of 94/100.',
    technologies: ['React', 'Vite', 'Flask', 'Supabase'],
    tone: 'mint',
  },
]

export const experience = [
  {
    period: 'Jun–Sep 2026',
    role: 'Backend AI Engineer Intern',
    company: 'Flyrank AI, Illinois, USA (Remote)',
    color: '#e8452c',
    points: [
      'Developed a RAG-based TypeScript application that converts uploaded PDFs into AI-powered summaries.',
      'Built an automated pipeline to process documents and retrieve relevant passages.',
      'Added customizable summaries organized around user-defined key points.',
    ],
  },
  {
    period: 'Aug–Dec 2025',
    role: 'Content Security Intern',
    company: 'PT Vidio Dot Com, Jakarta, Indonesia',
    color: '#9ec1ff',
    points: [
      'Built Match Replacer and SnackVideo Converter to automate content processing.',
      'Reported 2,000+ piracy websites.',
      'Monitored illegal live streams and reported illegal applications.',
      'Analyzed piracy patterns and supported copyright enforcement.',
    ],
  },
  {
    period: 'Feb–Jul 2025',
    role: 'Full-stack Developer Intern',
    company: 'Coding Camp by DBS Foundation, Indonesia',
    color: '#ffc93c',
    points: [
      'Built an end-to-end web application with a team of six.',
      'Used React + Vite, Flask, and Supabase.',
      'Delivered 5+ key features.',
      'Achieved a final score of 94/100.',
    ],
  },
  {
    period: 'Feb–Jul 2025',
    role: 'Coordinator, Programming Algorithms Practicum',
    company: 'Informatics Laboratory, Universitas Ahmad Dahlan',
    color: '#9ed8b5',
    points: [
      'Coordinated 25 teaching assistants.',
      'Prepared learning materials, schedules, and evaluations.',
      'Mentored students in algorithms and C++ programming.',
    ],
  },
  {
    period: 'May–Aug 2025',
    role: 'Student Employment, Tracer Study',
    company: 'Universitas Ahmad Dahlan',
    color: '#ffb3c7',
    points: [
      'Contacted 100+ alumni through surveys and direct outreach.',
      'Helped validate and recap data within two weeks.',
    ],
  },
]

export const education = {
  degree: 'Bachelor of Informatics',
  school: 'Universitas Ahmad Dahlan, Yogyakarta',
  period: 'September 2022 – June 2026',
  gpa: 'GPA: 3.57/4.00',
  achievements: [
    'Graduated in 3 years and 10 months.',
    'Sang Surya Non-Academic Achievement Scholarship (2024).',
    'Non-Academic Outstanding Student.',
    '8 medals in national and international karate championships (2023–2024).',
  ],
  leadership: [
    {
      period: 'July 2026',
      role: 'Co-Trainer, Softskills Training II',
      org: 'Universitas Ahmad Dahlan',
      detail:
        'Supported 2 classes with 140 participants, and handled participant assessment and evaluation data.',
    },
    {
      period: 'August 2023 – August 2024',
      role: 'President, Karate Activity Unit',
      org: 'Universitas Ahmad Dahlan, Yogyakarta',
      detail:
        'Led 30+ active members through weekly training, 3 internal events, and 8 national and international championships.',
    },
    {
      period: 'October 2023',
      role: 'Liaison Officer, National Schools Debating Championships',
      org: 'National Schools Debating Championships',
      detail:
        'Coordinated between participants, the committee, and organizers over a 5-day event with 100+ participants.',
    },
  ],
}

export const certificates = [
  { issuer: 'Google', title: 'Google AI Essentials', color: '#f7f5ee' },
  { issuer: 'IBM', title: 'IBM Code Generation and Optimization', color: '#9ec1ff' },
  {
    issuer: 'Huawei ICT Academy',
    title: 'Huawei ICT Academy HCIA-Security',
    color: '#ffb3c7',
  },
]
