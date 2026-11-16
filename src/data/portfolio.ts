/**
 * Central portfolio data — updated for Mahesha Kothuru Narayanaswamy.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Mahesha Kothuru Narayanaswamy',
  displayName: 'Mahesha Kothuru Narayanaswamy',
  firstName: 'MAHESHA',
  seriesTag: 'THE SERIES',
  originalLabel: 'A Mahesh ORIGINAL',
  role: 'MSc AI Student (KTU) | AI Automation Intern (MB Rosy AI) | Erasmus+ at INSA Toulouse | Seeking 6-Month Internship (Feb 25, 2027)',
  tagline: ['AI / ML', 'COMPUTER VISION', 'TINYML', 'AGENTIC AI'],
  intro:
    'MSc Artificial Intelligence student at Kaunas University of Technology, AI Automation Engineering Intern at MB Rosy AI, and Erasmus+ exchange student at INSA Toulouse, specialising in machine learning, computer vision, LLM agents, multimodal automation pipelines, and TinyML.',
  location: 'Doing Erasmus+ exchange studies at INSA Toulouse, France',
  email: 'maheshkn452@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/mahesha-kothuru-narayanaswamy-b084b7248/',
    github: 'https://github.com/maheshkn452-hub',
  },
  resumePdf: '/assets/Mahesha_Kothuru_Narayanaswamy_Resume.pdf?v=2',
  portrait: {
    src: '/portrait.png',
    alt: 'Mahesha Kothuru Narayanaswamy',
  },
  interests: ['Machine Learning', 'Computer Vision', 'TinyML', 'Cloud & DevOps'],
};

export const education = [
  {
    school: 'Kaunas University of Technology (KTU)',
    place: 'Kaunas, Lithuania',
    degree: "Master's in Artificial Intelligence in Computer Science",
    period: 'Sep 2025 – Present',
    score: 'Full-Time Master’s Degree Programme',
  },
  {
    school: 'INSA Toulouse',
    place: 'Toulouse, France',
    degree: 'Erasmus+ Exchange Studies — Electronics & Computer Science',
    period: 'Sep 2026 – Jan 2027',
    score: '1-Semester Academic Mobility',
  },
  {
    school: 'R L Jalappa Institute of Technology',
    place: 'Karnataka, India',
    degree: 'Bachelor of Engineering — Computer Science and Engineering (CSE)',
    period: 'June 2021 – May 2024',
    score: 'Completed',
  },
];

export const experience = [
  {
    company: 'MB Rosy AI Lithuania',
    role:'AI Automation Engineer (Intern)',
    place: 'Lithuania',
    period: 'Sep 2026 – Present',
    points: [
      'Architected a reusable, duration-driven multimodal content automation pipeline orchestrating text LLMs, neural TTS voice synthesis, and visual generation models for continuous end-to-end video production.',
      'Engineered automated script pacing and structural segmentation logic to generate timed narrative scripts with calibrated silent pauses, intro/outro transitions, and synchronized visual pacing.',
      'Built an automated local media-assembly engine using Python and FFmpeg to composite transitioning visuals, multi-track background audio mixing, and fade-in/fade-out mastering into publish-ready video outputs.',
    ],
  },
  {
    company: 'Kaunas University of Technology Lithuania',
    role:"Master's Thesis Researcher",
    place: 'Lithuania',
    period: 'Sep 2025 – Present',
    points: [
      'Benchmarking YOLOv5, YOLOv8 and Faster R-CNN on small object detection under domain shift (VisDrone and COCO).',
      'Designing augmentation pipelines with Albumentations (mosaic, mixup, affine and photometric transforms) and proposing an augmentation curriculum strategy that improves small-object mAP.',
      'Evaluating models with mAP@0.5, AP_S, precision and recall, and running ablation studies to measure each augmentation contribution.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'impact-of-data-augmentation-and-domain-shift',
    title: 'Small Object Detection Under Domain Shift',
    year: '2025 - Present',
    genre: "Master's Thesis • Computer Vision • Ongoing",
    logline: "Master's thesis evaluating the impact of data augmentation on YOLOv5, YOLOv8, and Faster R-CNN across VisDrone and COCO.",
    stack: ['Python', 'PyTorch', 'YOLOv5', 'YOLOv8', 'Faster R-CNN', 'Albumentations', 'VisDrone', 'COCO'],
    build: [
      'Benchmarking YOLOv5, YOLOv8 and Faster R-CNN on small object detection under domain shift across VisDrone and COCO datasets.',
      'Designing augmentation pipelines with Albumentations (mosaic, mixup, affine and photometric transforms) and proposing an augmentation curriculum strategy that improves small-object mAP.',
      'Evaluating models with mAP@0.5, AP_S, precision and recall, and running systematic ablation studies to measure each augmentation contribution.',
    ],
    features: [
      'Cross-domain evaluation on VisDrone & COCO benchmarks',
      'Albumentations curriculum strategy (mosaic, mixup, affine)',
      'Multi-architecture benchmarking (YOLOv5, YOLOv8, Faster R-CNN)',
      'Granular ablation studies tracking mAP@0.5 and AP_S',
    ],
    metrics: [
      { value: '3 Models', label: 'YOLOv5, v8 & Faster R-CNN' },
      { value: 'AP_S', label: 'small-object precision focus' },
      { value: '2 Datasets', label: 'VisDrone & COCO' },
    ],
    github: 'https://github.com/maheshkn452-hub',
    palette: { from: '#160829', via: '#4c1d95', to: '#07060c', accent: '#a78bfa' },
    motif: 'tenants',
  },
  {
    id: 'effectiveness-of-ai-programming-agents',
    title: 'Effectiveness of AI Programming Agents (KTU Applied Research)',
    year: '2026 - Present',
    genre: 'AI • LLMs • Code Generation • Ongoing',
    logline: 'Evaluating whether AI coding agents justify their extra cost over simpler LLM approaches via multi-turn self-debugging.',
    stack: ['Python', 'LLMs', 'Qwen2.5-Coder-7B-Instruct', 'DeepSeek-Coder-V2-Lite-Instruct', 'MBPP', 'JupyterHub'],
    build: [
      'Evaluating whether AI coding agents justify their extra cost over simpler LLM approaches, by comparing one-shot generation, feedback-based correction (syntax and test errors, up to 3 fix attempts) and agentic code generation.',
      'Built the one-shot pipeline and developing the feedback-correction pipeline, which test generated code against unit tests, measuring Pass@1 (accuracy), tokens per task and time per task.',
      'Initial results (10 tasks): DeepSeek-Coder reached 100% Pass@1 vs 80% for Qwen2.5-Coder, with Qwen about 16x faster per task.',
    ],
    features: [
      'One-shot generation vs feedback-based self-debugging',
      'Up to 3 automated fix attempts against unit tests',
      'Pass@1 accuracy, token usage, and latency benchmarking',
      'Evaluated across 10-30 MBPP benchmark tasks',
    ],
    metrics: [
      { value: '100%', label: 'DeepSeek Pass@1 (initial)' },
      { value: '16×', label: 'Qwen speed advantage' },
      { value: '30', label: 'benchmark tasks planned' },
    ],
    github: 'https://github.com/maheshkn452-hub',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'tinyml-predictive-maintenance',
    title: 'TinyML for Predictive Maintenance (INSA Toulouse — ACTIA)',
    year: '2026 - Present',
    genre: 'Embedded AI • TinyML • IoT • Ongoing',
    logline: 'Industrial proof of concept acquiring sensor signals from a 12V fan and deploying anomaly detection on STM32.',
    stack: ['Python', 'STM32 Nucleo', 'TinyML', 'IoT'],
    build: [
      'Developing a proof of concept with an industrial partner, intended to extend to larger electric actuators: acquiring current, voltage and vibration data from a 12 V fan, analysing signals, training an anomaly-detection model and deploying it on an STM32 microcontroller.',
      'Preparing healthy and fault test campaigns (blocked airflow, blade load, supply-line resistance) to build a reproducible dataset, and evaluating tools for deploying Python models to the board.',
    ],
    features: [
      'Current, voltage, and vibration signal acquisition',
      'Industrial anomaly-detection model training',
      'STM32 microcontroller deployment pipeline',
      'Reproducible fault-condition test campaigns',
    ],
    metrics: [
      { value: '12V', label: 'fan test rig setup' },
      { value: 'STM32', label: 'edge hardware target' },
      { value: 'IoT', label: 'industrial telemetry' },
    ],
    github: 'https://github.com/maheshkn452-hub',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'yolov8-multi-class-detection',
    title: 'YOLOv8 Multi-Class Object Detection',
    year: '2025',
    genre: 'Computer Vision • PyTorch • Completed',
    logline: 'Fine-tuned YOLOv8 on a custom 3-class dataset with a real-time OpenCV inference pipeline.',
    stack: ['PyTorch', 'YOLOv8', 'OpenCV'],
    build: [
      'Fine-tuned YOLOv8 on a custom 3-class dataset (dog, zebra, elephant) and deployed a real-time inference pipeline with OpenCV visualisation.',
    ],
    features: [
      'Custom 3-class object detection model',
      'YOLOv8 fine-tuning framework',
      'Real-time OpenCV visualization pipeline',
    ],
    metrics: [
      { value: '3-Class', label: 'custom dataset' },
      { value: 'Real-time', label: 'OpenCV inference' },
    ],
    github: 'https://github.com/maheshkn452-hub',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'cloud-microservices-architecture',
    title: 'Cloud Microservices Architecture',
    year: '2025',
    genre: 'Cloud • DevOps • Completed',
    logline: 'Event-driven microservices platform using Docker, RabbitMQ asynchronous queues, and Azure PaaS.',
    stack: ['Docker', 'RabbitMQ', 'Microsoft Azure', 'REST APIs'],
    build: [
      'Designed and deployed an event-driven microservices platform using Docker, RabbitMQ asynchronous queues and Azure PaaS, with service discovery and asynchronous processing.',
    ],
    features: [
      'Event-driven message broker with RabbitMQ',
      'Azure PaaS deployment and hosting',
      'Docker containerized service architecture',
    ],
    metrics: [
      { value: 'Async', label: 'message queues' },
      { value: 'Azure', label: 'cloud infrastructure' },
    ],
    github: 'https://github.com/maheshkn452-hub',
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'shield',
  },
  {
    id: 'kubernetes-ecommerce-system',
    title: 'Kubernetes-Based E-Commerce System',
    year: '2025',
    genre: 'Kubernetes • DevOps • Completed',
    logline: 'Containerized and orchestrated a multi-service e-commerce platform on Kubernetes with Azure CI/CD.',
    stack: ['Kubernetes', 'Docker', 'Azure', 'CI/CD'],
    build: [
      'Containerised and orchestrated a multi-service e-commerce platform on Kubernetes, with horizontal pod autoscaling, rolling deployments and health probes on Azure.',
    ],
    features: [
      'Horizontal pod autoscaling (HPA)',
      'Zero-downtime rolling deployments',
      'Kubernetes health probes & management',
      'Automated Azure CI/CD pipeline',
    ],
    metrics: [
      { value: 'K8s', label: 'orchestration' },
      { value: 'Auto-scaling', label: 'cloud resiliency' },
    ],
    github: 'https://github.com/maheshkn452-hub',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'erasmus-scholar',
    title: 'Erasmus+ Scholar',
    org: 'KTU Lithuania & INSA Toulouse France',
    detail: 'Selected for international academic mobility across European institutions.',
    laurel: 'International',
  },
  {
    id: 'msc-ai',
    title: "Master's in Artificial Intelligence",
    org: 'Kaunas University of Technology',
    detail: 'Specialised research in computer vision, LLM agents, and TinyML.',
    laurel: 'Master of Science',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Microsoft Azure', name: 'Azure & Cloud DevOps Stack', link: 'https://github.com/maheshkn452-hub' },
  { issuer: 'PyTorch / YOLO', name: 'Deep Learning & Computer Vision', link: 'https://github.com/maheshkn452-hub' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Primary languages',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'C++', mono: 'C+' },
    ],
  },
  {
    id: 'llms-agentic',
    title: 'LLMs & Agentic AI',
    subtitle: 'Code generation & debugging',
    skills: [
      { name: 'LLM Code Generation', mono: 'Lg' },
      { name: 'Agentic Code Generation', mono: 'Ag' },
      { name: 'Self-Debugging (Feedback-Based)', mono: 'Sb' },
      { name: 'Qwen2.5-Coder', mono: 'Qw' },
      { name: 'DeepSeek-Coder-V2', mono: 'Ds' },
    ],
  },
  {
    id: 'embedded-ai',
    title: 'Embedded AI',
    subtitle: 'Edge intelligence & hardware',
    skills: [
      { name: 'TinyML', mono: 'Tm' },
      { name: 'Predictive Maintenance', mono: 'Pm' },
      { name: 'STM32 (Nucleo)', mono: 'St' },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    subtitle: 'Deep learning toolkits',
    skills: [
      { name: 'PyTorch', mono: 'Pt' },
      { name: 'TensorFlow', mono: 'Tf' },
      { name: 'YOLOv5', mono: 'Y5' },
      { name: 'YOLOv8', mono: 'Y8' },
      { name: 'Faster R-CNN', mono: 'Rc' },
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    subtitle: 'Infrastructure & orchestration',
    skills: [
      { name: 'Microsoft Azure', mono: 'Az' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Kubernetes', mono: 'Kb' },
      { name: 'RabbitMQ', mono: 'Rb' },
      { name: 'CI/CD', mono: 'Ci' },
    ],
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    subtitle: 'Image processing & datasets',
    skills: [
      { name: 'Object Detection', mono: 'Od' },
      { name: 'Image Classification', mono: 'Ic' },
      { name: 'Albumentations', mono: 'Al' },
      { name: 'COCO', mono: 'Cc' },
      { name: 'VisDrone', mono: 'Vd' },
    ],
  },
  {
    id: 'evaluation-mlops',
    title: 'Evaluation & MLOps',
    subtitle: 'Metrics & benchmarking',
    skills: [
      { name: 'mAP & AP_S', mono: 'Ap' },
      { name: 'Precision, Recall, F1', mono: 'Pr' },
      { name: 'Confusion Matrix', mono: 'Cm' },
      { name: 'Pass@1', mono: 'P1' },
      { name: 'Token & Latency Benchmarking', mono: 'Tb' },
      { name: 'Unit Testing', mono: 'Ut' },
    ],
  },
  {
    id: 'tools-benchmarks',
    title: 'Tools & Benchmarks',
    subtitle: 'Execution & media pipelines',
    skills: [
      { name: 'JupyterHub', mono: 'Jh' },
      { name: 'MBPP', mono: 'Mb' },
      { name: 'FFmpeg', mono: 'Ff' },
      { name: 'Neural TTS', mono: 'Ts' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Python: ['Small Object Detection Under Domain Shift', 'Effectiveness of AI Programming Agents', 'TinyML for Predictive Maintenance', 'MB Rosy AI Automation Pipeline'],
  'C++': ['Core Programming Language'],
  'YOLOv8': ['Small Object Detection Under Domain Shift', 'YOLOv8 Multi-Class Object Detection'],
  Docker: ['Cloud Microservices Architecture', 'Kubernetes-Based E-Commerce System'],
  Kubernetes: ['Kubernetes-Based E-Commerce System'],
  'Microsoft Azure': ['Cloud Microservices Architecture', 'Kubernetes-Based E-Commerce System'],
  TinyML: ['TinyML for Predictive Maintenance (INSA Toulouse — ACTIA)'],
  PyTorch: ['Small Object Detection Under Domain Shift', 'YOLOv8 Multi-Class Object Detection'],
  FFmpeg: ['MB Rosy AI Automation Pipeline'],
  'Neural TTS': ['MB Rosy AI Automation Pipeline'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Bachelor Foundations',
    period: '2021 – 2024',
    synopsis: 'Bachelor of Engineering in Computer Science and Engineering at R L Jalappa Institute of Technology, Karnataka.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Computer Science Roots',
        description: 'Completed Bachelor of Engineering in Computer Science and Engineering (June 2021 – May 2024).',
        tags: ['B.E.', 'Computer Science', 'R L Jalappa'],
        runtime: '2021 – 2024',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Master of Science in AI',
    period: '2025 – 2027',
    synopsis: "Pursuing Master's in Artificial Intelligence in Computer Science at Kaunas University of Technology, Lithuania.",
    episodes: [
      {
        code: 'S02 E01',
        title: 'KTU Master Programme',
        description: "Master's in Artificial Intelligence in Computer Science at Kaunas University of Technology.",
        tags: ['MSc AI', 'KTU', 'Lithuania'],
        runtime: 'Sep 2025 – June 2027',
        palette: violet,
      },
    ],
  },
  {
    number: 3,
    title: 'Erasmus+ Exchange in France',
    period: '2026 – 2027',
    synopsis: 'International mobility semester at INSA Toulouse Department of Electronics and Computer Science.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'INSA Toulouse Exchange',
        description: 'Erasmus+ Exchange Semester at INSA Toulouse Department of Electronics and Computer Science.',
        tags: ['Erasmus+', 'INSA Toulouse', 'France'],
        runtime: 'Sep 2026 – Jan 2027',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'Current Industry, Thesis & Research',
    period: '2025 – Present',
    synopsis: 'AI Automation Engineer internship at MB Rosy AI, Master thesis research on small object detection, AI code-generation agents, and TinyML.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'AI Automation Engineer (Intern) — MB Rosy AI',
        description: 'Architecting duration-driven multimodal content automation pipelines combining text LLMs, neural TTS, visual generation, and Python/FFmpeg media assembly.',
        tags: ['AI Automation', 'LLMs', 'FFmpeg', 'Neural TTS'],
        runtime: 'Sep 2026 – Present',
        palette: jade,
      },
      {
        code: 'S04 E02',
        title: 'Small Object Detection Under Domain Shift',
        description: 'Benchmarking YOLOv5, YOLOv8 and Faster R-CNN on small object detection with Albumentations augmentation curriculums.',
        tags: ['YOLOv8', 'Object Detection', 'Albumentations'],
        runtime: 'Sep 2025 – Present',
        palette: crimson,
      },
      {
        code: 'S04 E03',
        title: 'AI Programming Agents',
        description: 'Evaluating whether AI coding agents justify their extra cost over simpler LLM approaches via feedback-based self-debugging on MBPP benchmarks.',
        tags: ['Python', 'LLMs', 'Qwen2.5-Coder', 'DeepSeek-Coder'],
        runtime: '2026 – Present',
        palette: violet,
      },
      {
        code: 'S04 E04',
        title: 'TinyML for Predictive Maintenance',
        description: 'Developing an industrial proof of concept with ACTIA at INSA Toulouse: acquiring 12V fan sensor signals and deploying anomaly detection on STM32.',
        tags: ['TinyML', 'STM32 Nucleo', 'Python', 'IoT'],
        runtime: '2026 – Present',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: 'Completed Projects',
    period: '2025',
    synopsis: 'Shipped end-to-end computer vision pipelines, event-driven cloud microservices, and auto-scaling Kubernetes architectures.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'YOLOv8 Multi-Class Object Detection',
        description: 'Fine-tuned YOLOv8 on a custom 3-class dataset (dog, zebra, elephant) and deployed a real-time inference pipeline with OpenCV visualisation.',
        tags: ['PyTorch', 'YOLOv8', 'OpenCV'],
        runtime: '2025',
        palette: crimson,
      },
      {
        code: 'S05 E02',
        title: 'Cloud Microservices Architecture',
        description: 'Designed and deployed an event-driven microservices platform using Docker, RabbitMQ asynchronous queues and Azure PaaS, with service discovery and asynchronous processing.',
        tags: ['Docker', 'RabbitMQ', 'Microsoft Azure', 'REST APIs'],
        runtime: '2025',
        palette: ocean,
      },
      {
        code: 'S05 E03',
        title: 'Kubernetes-Based E-Commerce System',
        description: 'Containerised and orchestrated a multi-service e-commerce platform on Kubernetes, with horizontal pod autoscaling, rolling deployments and health probes on Azure.',
        tags: ['Kubernetes', 'Docker', 'Azure', 'CI/CD'],
        runtime: '2025',
        palette: jade,
      },
    ],
  },
  {
    number: 6,
    title: "What's Next",
    period: 'From Feb 25, 2027',
    synopsis: 'Seeking a 6-month internship starting February 25, 2027, to apply advanced AI, computer vision, and systems engineering.',
    episodes: [
      {
        code: 'S06 E01',
        title: 'The Internship Arc',
        description: 'Ready to bring cutting-edge machine learning, AI automation, and cloud DevOps expertise to forward-thinking engineering teams.',
        tags: ['AI Intern', 'Feb 2027', 'Available'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Current Degree', title: "Master's in Artificial Intelligence", detail: 'Kaunas University of Technology • Sep 2025 – Jun 2027', palette: violet },
  { label: 'Industry Experience', title: 'AI Automation Engineer Intern', detail: 'MB Rosy AI • Multimodal LLM, TTS & FFmpeg pipelines', palette: jade },
  { label: 'European Exchange', title: 'Erasmus+ at INSA Toulouse', detail: 'Department of Electronics & Computer Science', palette: ocean },
  { label: 'Internship Target', title: '6-Month Internship', detail: 'Available starting February 25, 2027', palette: crimson },
  { label: "Master's Thesis", title: 'Small Object Detection & Domain Shift', detail: 'Data augmentation curriculums with YOLOv5, YOLOv8 & Faster R-CNN', palette: violet },
  { label: 'Active Research 1', title: 'AI Programming Agents', detail: 'Comparing LLM code generation & self-debugging via MBPP', palette: amber },
  { label: 'Active Research 2', title: 'TinyML Predictive Maintenance', detail: 'Industrial proof of concept with ACTIA on STM32', palette: jade },
  { label: 'Primary Languages', title: 'Python & C++', detail: 'Core stack across AI, automation, and embedded systems', palette: violet },
  { label: 'Cloud Stack', title: 'Azure, K8s & Docker', detail: 'Containerised microservices and CI/CD pipelines', palette: ocean },
  { label: 'Completed Project', title: 'YOLOv8 Multi-Class Detection', detail: 'Custom dog, zebra, elephant dataset with OpenCV', palette: amber },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: "Master's Degree",
    title: 'Artificial Intelligence',
    lines: ['Kaunas University of Technology (KTU)', 'Erasmus+ Exchange Semester at INSA Toulouse'],
    chips: ['MSc AI', 'Erasmus+', 'Computer Vision'],
  },
  {
    kicker: 'Industry & Internship',
    title: 'AI Automation & 2027 Search',
    lines: ['AI Automation Engineer (Intern) at MB Rosy AI', 'Seeking 6-Month Internship from February 25, 2027'],
    chips: ['MB Rosy AI', 'Feb 25, 2027', 'AI Intern'],
  },
  {
    kicker: 'Active Research',
    title: 'Ongoing Projects (2025 – 2026)',
    lines: [
      'Small Object Detection Under Domain Shift',
      'AI Programming Agents Evaluation (KTU)',
      'TinyML Predictive Maintenance with ACTIA (INSA Toulouse)',
    ],
  },
  {
    kicker: 'Completed Projects',
    title: 'Shipped Systems (2025)',
    lines: ['YOLOv8 Multi-Class Detection', 'Cloud Microservices with RabbitMQ & Azure', 'Kubernetes-Based E-Commerce Platform'],
  },
];

export type ProfileId = 'sushmita' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sushmita',
    name: 'Mahesha',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & research', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • Ongoing & Completed`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 highlights from resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};