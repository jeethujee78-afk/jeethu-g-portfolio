import {
  Project,
  ExperienceItem,
  TechnicalExplorationItem,
  SkillCategory,
  SkillItem,
  EngineeringMethodologyStep,
  TechnologyOrbitNode,
} from '../types';

export const CONTACT_EMAIL = 'jeethujee78@gmail.com';

export const PERSONAL_INFO = {
  name: 'JEETHU G',
  monogram: 'JG',
  headline: 'CLOUD ENGINEERING SPECIALIST',
  subHeadline: 'AWS CLOUD · AI · DEVOPS · SRE',
  location: 'COIMBATORE, INDIA',
  timezone: 'Asia/Kolkata',
  timezoneLabel: 'IST · UTC +5:30',
  coordinates: '11.0168° N, 76.9558° E',
  description:
    'Building practical cloud systems and AI-powered applications with AWS, automation and modern engineering workflows.',
  supportingLine:
    'From production operations to cloud engineering, I build, deploy and improve technology that solves real problems.',
  personalStatement: {
    quote: 'Build with purpose.\nAutomate with intelligence.\nSolve problems that matter.',
    author: 'JEETHU G',
  },
  email: CONTACT_EMAIL,
  linkedin: 'https://www.linkedin.com/in/jeethu-g-6827a6226/',
  github: 'https://github.com/jeethujee78-afk',
  resumeUrl: '/Jeethu_G_Resume.pdf',
  resumeDocxUrl: '/Jeethu_G_Resume.docx',
  heroImage: '/images/hero.jpg',
  aboutImage: '/images/about.jpg',
  certifications: [
    {
      name: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      tag: 'ASSOCIATE LEVEL · VERIFIED CREDENTIAL',
    },
  ],
  stats: [
    {
      value: '6+',
      label: 'YEARS EXPERIENCE',
      detail: 'Production Operations & Cloud',
    },
    {
      value: 'AWS',
      label: 'CERTIFIED SOLUTIONS ARCHITECT',
      detail: 'Associate Level Credential',
    },
    {
      value: '2+',
      label: 'MAJOR CLOUD PROJECTS',
      detail: 'Production & Live Architectures',
    },
    {
      value: 'HANDS-ON BUILDING',
      label: 'Cloud + AI + Automation',
      detail: 'Cloud + AI + Automation',
    },
  ],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'apex-ctrl',
    number: '01',
    title: 'APEX CTRL',
    subtitle: 'F1 TELEMETRY & RACE INTELLIGENCE PLATFORM',
    badge: 'FLAGSHIP PRODUCTION DEPLOYMENT',
    status: 'LIVE',
    statusLabel: 'LIVE',
    filterCategories: ['CLOUD', 'AI', 'AWS', 'WEB', 'AUTOMATION'],
    featured: true,
    description:
      'An AI-powered Formula 1 telemetry and race intelligence platform using real motorsport data from OpenF1, combining AWS ECS Fargate, DynamoDB caching, and Google Gemini AI insights.',
    technologies: [
      'React',
      'Vite',
      'TypeScript',
      'Node.js',
      'Express.js',
      'AWS',
      'ECS Fargate',
      'DynamoDB',
      'S3',
      'Docker',
      'Gemini AI',
      'OpenF1',
      'GitHub Actions',
    ],
    github: 'https://github.com/jeethujee78-afk/F1-apex-ctrl',
    live: 'https://f1-apex-ctrl.vercel.app/',
    image: '/images/project-apex.jpg',
    caseStudy: {
      overview:
        'APEX CTRL is an AI-powered Formula 1 telemetry and race intelligence platform. It ingests live and historical session data from the OpenF1 API, caches high-frequency telemetry in Amazon DynamoDB to bypass rate limits, runs an Express.js backend on AWS ECS Fargate, and integrates Google Gemini AI to generate contextual race strategy analysis, tyre degradation insights, and driver head-to-head comparisons.',
      problem:
        'Raw motorsport telemetry data is vast, noisy, and high-frequency (speed, throttle, brake, gear, RPM, DRS, lap times, weather). Public motorsport APIs like OpenF1 enforce strict rate limits and have burst latency during live sessions. For fans and amateur race analysts, deciphering raw JSON streams without deep domain expertise or high-performance visualization tooling is nearly impossible in real-time.',
      idea:
        'Create a responsive web platform that decouples client visualization from external API rate constraints via an intelligent cloud backend with DynamoDB caching, containerized microservices on AWS, and a generative AI layer that translates complex telemetry metrics into plain-language tactical race intelligence.',
      architectureSummary:
        'The platform separates presentation and processing cleanly. The user accesses a fast Vite/React frontend deployed on Vercel. Requests for live telemetry and AI analysis route through an Express.js backend containerized on AWS ECS Fargate behind an Application Load Balancer. High-traffic session data is cached in Amazon DynamoDB to eliminate redundant calls to OpenF1. Static team assets are hosted in Amazon S3, while Google Gemini processes structured telemetry snippets to output race commentary and comparative driver analysis.',
      architectureNodes: [
        {
          id: 'vercel',
          name: 'Vercel Frontend',
          label: 'Vercel Edge Network',
          category: 'frontend',
          role: 'Hosts and serves the React + Vite single-page application with sub-second global edge delivery.',
          description: 'Renders high-FPS lap telemetry charts, driver comparison dials, and AI commentary feeds with zero client-side latency.',
          tech: 'React 18 · TypeScript · Tailwind CSS · Lucide',
        },
        {
          id: 'ecs',
          name: 'AWS ECS Fargate',
          label: 'AWS Container Compute',
          category: 'compute',
          role: 'Runs serverless Docker containers hosting the Express.js telemetry API without managing EC2 instances.',
          description: 'Automatically provisions memory and CPU to handle telemetry ingestion bursts during race weekends.',
          tech: 'AWS ECS · AWS Fargate · Docker · AWS ECR',
        },
        {
          id: 'express',
          name: 'Express.js Backend',
          label: 'API & Orchestration Layer',
          category: 'compute',
          role: 'Normalizes raw OpenF1 data, manages cache policies, and formats AI prompts for Gemini.',
          description: 'Exposes clean RESTful endpoints for lap times, sector telemetry, pit stops, and automated driver deltas.',
          tech: 'Node.js · Express.js · REST APIs · Axios',
        },
        {
          id: 'dynamodb',
          name: 'Amazon DynamoDB',
          label: 'NoSQL Telemetry Cache',
          category: 'database',
          role: 'Stores pre-fetched and normalized session telemetry with millisecond read latency.',
          description: 'Prevents external API rate-limit exhaustion by serving cached session frames and driver lap lookups.',
          tech: 'AWS DynamoDB · On-Demand Capacity · TTL policies',
        },
        {
          id: 'openf1',
          name: 'OpenF1 API',
          label: 'Raw Telemetry Ingestion',
          category: 'external',
          role: 'Upstream data source providing official F1 session timing, car telemetry, weather, and team radio metadata.',
          description: 'Queried by the backend when sessions are active or when requesting uncached historical Grand Prix metrics.',
          tech: 'OpenF1 REST API · JSON Telemetry Stream',
        },
        {
          id: 'gemini',
          name: 'Gemini AI',
          label: 'Race Intelligence Engine',
          category: 'ai',
          role: 'Translates raw multi-lap telemetry, gap times, and tyre compound histories into actionable strategy commentary.',
          description: 'Generates driver vs driver comparison verdicts, undercut/overcut predictions, and race recap summaries.',
          tech: 'Google Gemini Flash · Structured Prompts · Context Windows',
        },
        {
          id: 's3',
          name: 'Amazon S3',
          label: 'Asset & Artifact Storage',
          category: 'storage',
          role: 'Stores circuit vector diagrams, team liveries, static driver portraits, and build artifacts.',
          description: 'Provides durable cloud object storage with high availability and direct CDN distribution.',
          tech: 'AWS S3 Bucket · IAM Bucket Policies',
        },
      ],
      awsInfrastructure: [
        'Amazon ECS on AWS Fargate for serverless container deployment',
        'Amazon DynamoDB for sub-10ms session cache and driver lap lookups',
        'Amazon S3 for high-durability circuit and asset storage',
        'Amazon Elastic Container Registry (ECR) for versioned Docker container images',
        'AWS IAM with least-privilege role policies for container-to-DynamoDB access',
        'Amazon CloudWatch for container health monitoring, memory metrics, and log aggregation',
      ],
      dataFlow: [
        '1. User selects a Grand Prix session and drivers on the APEX CTRL web interface.',
        '2. The frontend sends an authenticated request to the Express backend on AWS ECS.',
        '3. The backend checks DynamoDB for existing cached telemetry of the requested session.',
        '4. On a cache hit, DynamoDB returns normalized telemetry payloads in under 15ms.',
        '5. On a cache miss, the backend fetches raw telemetry from OpenF1, normalizes the data points, writes to DynamoDB, and streams it to the client.',
        '6. When Strategy Intelligence is triggered, telemetry deltas are packaged and sent to Gemini AI, returning expert tactical race insights.',
      ],
      aiIntegration:
        'Google Gemini is integrated directly into the strategy analysis pipeline. The backend constructs a structured contextual prompt containing tyre compound age, track temperature, lap time trends over the last 10 laps, and relative gap to the car ahead/behind. Gemini parses these multi-variable trends to generate human-readable tactical debriefs, undercut viability analysis, and driver pace delta verdicts.',
      keyFeatures: [
        'Real-Time & Historical F1 Telemetry: Speed traces, throttle/brake maps, gear selections, and DRS activation zones.',
        'Head-to-Head Driver Comparison: Dynamic telemetry overlay comparing two drivers across micro-sectors and braking points.',
        'Race Strategy Intelligence: AI-assisted analysis of pit window timing, undercut/overcut probability, and tyre degradation curves.',
        'Interactive Weather & Track Conditions: Real-time air and track temperature, humidity, rainfall probability, and wind speed impact.',
        'High-Performance Data Caching: DynamoDB integration that minimizes upstream API consumption and provides sub-second page loads.',
        'Responsive Engineering Interface: Dark-mode telemetry cockpit built with React, Tailwind CSS, and optimized canvas rendering.',
      ],
      engineeringChallenges: [
        'Upstream API Rate Limits: OpenF1 rate-limiting during active Grand Prix sessions required building a strict TTL-based caching architecture in DynamoDB.',
        'High-Frequency Data Normalization: Telemetry timestamps between different cars were not always uniform, requiring interpolation algorithms to synchronize lap comparison graphs.',
        'Context Window Optimization for AI: Sending entire multi-lap telemetry logs to Gemini was cost-prohibitive and slow; engineered a summarization filter that isolates critical sector deltas before prompt submission.',
      ],
      solution: [
        'Implemented a two-tier caching architecture in Express.js with in-memory short TTL and DynamoDB persistent session storage.',
        'Containerized the entire backend with a multi-stage Dockerfile and deployed on AWS ECS Fargate, scaling seamlessly during weekend traffic.',
        'Established continuous deployment with GitHub Actions to test, build, and push Docker images to AWS ECR automatically.',
      ],
      technologyStack: {
        frontend: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Lucide React'],
        backend: ['Node.js', 'Express.js', 'Axios', 'REST Architecture'],
        cloud: ['AWS ECS Fargate', 'Amazon DynamoDB', 'Amazon S3', 'Amazon ECR', 'IAM', 'CloudWatch'],
        aiAndData: ['Google Gemini', 'OpenF1 Telemetry API'],
        devops: ['Docker', 'GitHub Actions CI/CD', 'Vercel'],
      },
    },
  },
  {
    id: 'serverless-file-platform',
    number: '02',
    title: 'SERVERLESS FILE PLATFORM',
    subtitle: 'SECURE FILE UPLOAD & RETRIEVAL PLATFORM',
    badge: 'AWS CLOUD ARCHITECTURE',
    status: 'LIVE',
    statusLabel: 'LIVE',
    filterCategories: ['CLOUD', 'AWS', 'AUTOMATION'],
    featured: true,
    description:
      'A production-grade serverless application on AWS demonstrating secure direct file uploads to S3, automated metadata indexing in DynamoDB, and authenticated retrieval via API Gateway and Lambda.',
    technologies: [
      'AWS Lambda',
      'Amazon API Gateway',
      'Amazon S3',
      'Amazon DynamoDB',
      'IAM',
      'CloudWatch',
      'HTML5',
      'JavaScript',
    ],
    github: 'https://github.com/jeethujee78-afk/serverless-file-platform',
    image: '/images/project-serverless.jpg',
    caseStudy: {
      overview:
        'The Serverless File Platform is an end-to-end cloud system built to demonstrate resilient, zero-server file processing. It leverages Amazon API Gateway, AWS Lambda, Amazon S3 pre-signed URLs, and Amazon DynamoDB to provide secure file uploads, instant metadata indexing, and controlled file retrieval without managing a single server or exposing storage credentials to the client.',
      problem:
        'Traditional file upload servers suffer from memory bottlenecks, open connection exhaustion when uploading large files, and security risks when API credentials or storage keys reside in client code. Furthermore, maintaining dedicated EC2 or VM instances for periodic file transfers incurs unnecessary 24/7 compute costs.',
      idea:
        'Architect a completely serverless event-driven architecture where files stream directly from the client to Amazon S3 via cryptographically signed temporary URLs. Decouple metadata persistence into DynamoDB through micro-Lambdas, ensuring linear scalability, zero idle costs, and bank-grade security.',
      architectureSummary:
        'The workflow uses a three-tier serverless pattern. The client requests a secure upload authorization from Amazon API Gateway. A Python/Node.js Lambda function generates a time-limited S3 Pre-Signed URL and records initial transaction metadata in DynamoDB. The client uploads the binary directly to S3. An S3 Event Notification triggers a verification Lambda that updates DynamoDB with file size, MIME type, and SHA checksum. Retrieval requests query DynamoDB for file listings and generate signed download links on demand.',
      architectureNodes: [
        {
          id: 'client',
          name: 'Web Client',
          label: 'Client Browser',
          category: 'frontend',
          role: 'Allows users to select files, view metadata tables, and monitor upload progress.',
          description: 'Uploads binary payloads directly to S3 using time-bound pre-signed PUT URLs with zero server intermediary.',
          tech: 'HTML5 · Modern JavaScript · Fetch API',
        },
        {
          id: 'api-gw',
          name: 'Amazon API Gateway',
          label: 'REST API Gateway',
          category: 'compute',
          role: 'Provides authenticated, throttled, and monitored HTTP REST endpoints for the upload and metadata workflows.',
          description: 'Manages CORS, request validation, rate limiting, and routes invocations directly to Lambda functions.',
          tech: 'Amazon API Gateway · REST API · CORS enabled',
        },
        {
          id: 'lambda',
          name: 'AWS Lambda',
          label: 'Serverless Compute Functions',
          category: 'compute',
          role: 'Executes business logic for pre-signed URL generation, metadata extraction, and database transactions.',
          description: 'Scales to zero when idle; provisions in milliseconds to handle parallel upload requests securely.',
          tech: 'AWS Lambda · Node.js / Python · Boto3 / AWS SDK',
        },
        {
          id: 's3',
          name: 'Amazon S3',
          label: 'Object Storage Bucket',
          category: 'storage',
          role: 'Stores raw binary assets with 99.999999999% (11 9s) durability, versioning, and server-side encryption.',
          description: 'Configured with strict bucket policies, KMS SSE encryption, and lifecycle management rules.',
          tech: 'Amazon S3 · Pre-signed URLs · Event Notifications',
        },
        {
          id: 'dynamodb',
          name: 'Amazon DynamoDB',
          label: 'Metadata NoSQL Store',
          category: 'database',
          role: 'Maintains index of file IDs, original filenames, sizes, MIME types, upload timestamps, and owner IDs.',
          description: 'Provides single-digit millisecond query latency to list user files and verify upload status.',
          tech: 'Amazon DynamoDB · Pay-Per-Request Capacity',
        },
      ],
      awsInfrastructure: [
        'Amazon API Gateway for RESTful endpoints and request validation',
        'AWS Lambda functions for lightweight, event-driven compute',
        'Amazon S3 with SSE-S3 encryption and Pre-Signed URL security',
        'Amazon DynamoDB with partitioned indexing for file metadata',
        'AWS Identity and Access Management (IAM) role policies enforcing least privilege',
        'Amazon CloudWatch Logs for full execution tracing and error monitoring',
      ],
      dataFlow: [
        '1. Client sends a POST /upload-request with filename and content-type to API Gateway.',
        '2. API Gateway invokes the GeneratePresignedUrl Lambda function.',
        '3. Lambda creates a unique UUID, writes a pending record to DynamoDB, and requests a pre-signed PUT URL from S3 (valid for 5 minutes).',
        '4. Client receives the pre-signed URL and PUTs the file binary directly into S3.',
        '5. S3 triggers an ObjectCreated event notification to the MetadataProcessor Lambda.',
        '6. MetadataProcessor marks the file status as COMPLETED in DynamoDB.',
        '7. Client calls GET /files to render the live metadata catalog with one-click download links.',
      ],
      keyFeatures: [
        'Zero-Server Architecture: Fully serverless stack with zero compute costs when idle and automatic scaling to peak loads.',
        'Direct-to-S3 Uploads: Client binaries bypass the application server entirely, saving compute memory and bandwidth.',
        'Pre-Signed Cryptographic URLs: Strict 5-minute validity window ensures credentials never leak to the client browser.',
        'Real-Time Metadata Tracking: File size, format, upload timestamp, and processing status tracked in Amazon DynamoDB.',
        'Least-Privilege Security Model: Granular IAM execution roles ensuring Lambda only has access to required S3 prefixes and DynamoDB tables.',
      ],
      engineeringChallenges: [
        'Preventing Direct S3 Exposure: Required designing pre-signed upload workflows with strict header signature validation so files could not be overwritten or spoofed.',
        'Atomic Metadata Synchronization: Handled edge cases where users requested pre-signed URLs but aborted upload before completion by utilizing DynamoDB TTL and status flags.',
      ],
      solution: [
        'Configured S3 CORS with exact allowed methods (PUT, GET) and constrained headers.',
        'Applied IAM resource-level restrictions on Lambda functions to enforce least privilege principles.',
        'Documented architecture and deployment steps with AWS CLI and CloudFormation templates.',
      ],
      technologyStack: {
        frontend: ['HTML5', 'Vanilla JavaScript', 'Fetch API', 'CSS3'],
        backend: ['AWS Lambda', 'Amazon API Gateway'],
        cloud: ['Amazon S3', 'Amazon DynamoDB', 'AWS IAM', 'Amazon CloudWatch'],
        aiAndData: ['DynamoDB DocumentClient'],
        devops: ['AWS CLI', 'Infrastructure Automation', 'GitHub'],
      },
    },
  },
  {
    id: 'aniva',
    number: '03',
    title: 'ANIVA',
    subtitle: 'FASHION COMMERCE · CUSTOM APPAREL · PRE-OWNED MARKETPLACE',
    badge: 'ACTIVE BUILD',
    status: 'ACTIVE BUILD',
    statusLabel: 'Continuously evolving',
    filterCategories: ['E-COMMERCE', 'WEB', 'AI', 'CLOUD'],
    description:
      'ANIVA is an ongoing modern commerce platform exploring fashion discovery, custom apparel, pre-owned products and a broader digital commerce experience.',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Lucide React',
      'HTML5 Canvas',
      'AI Discovery (Planned)',
      'Modular Backend (Planned)',
    ],
    github: 'https://github.com/jeethujee78-afk/Aniva-ecommerce',
    live: 'https://aniva-ecommerce.vercel.app/',
    image: '/images/project-aniva.svg',
    currentProgress:
      'Expanding the commerce experience, marketplace workflows and intelligent product experiences. Continuously evolving.',
    nextFocus: [
      'Commerce workflow refinement',
      'Marketplace development',
      'Custom apparel experience',
      'AI-assisted experiences',
      'Backend refinement',
    ],
    caseStudy: {
      overview:
        'ANIVA is an ongoing modern commerce platform exploring fashion discovery, custom apparel, pre-owned products and a broader digital commerce experience. It is being developed as more than a traditional online storefront, evaluating distinct commerce paradigms—brand retail discovery, custom personalized apparel design, and circular fashion verification—within a unified architecture.',
      problem:
        'Standard e-commerce templates either focus strictly on off-the-shelf catalog browsing or isolate customization into cumbersome third-party plugins. Furthermore, circular resale ecosystems often live in detached peer-to-peer marketplaces without reliable condition grading, verification, or unified checkout pipelines.',
      idea:
        'Architect a multi-dimensional commerce engine that balances pristine visual curation, an interactive client-side Custom Print Studio, and an integrated condition-verified pre-owned marketplace under one coherent modern interface.',
      architectureSummary:
        'Built with a modular frontend architecture separating catalog state, customizer canvas vectors, and marketplace verification data models. The client runs on React, Vite, and Tailwind CSS deployed on Vercel edge networks. The system isolates client-side exploratory state while defining structured API contracts for future cloud persistence and checkout orchestration.',
      awsInfrastructure: [
        'Target deployment architecture prepared for AWS ECS containerized services or Amplify edge hosting',
        'Amazon S3 with CloudFront CDN for high-resolution garment photography, artwork assets, and design canvas exports',
        'Amazon DynamoDB single-table schema design for multi-category products and variant lookups',
        'AWS Lambda microservices planned for image verification and condition grading pipelines',
      ],
      dataFlow: [
        '1. Shopper navigates curated collections, executes multi-attribute search, or filters by size, color, and fit.',
        '2. In the Custom Print Studio, user configures garment color, uploads artwork or selects emblems, customizes typography, and positions prints with real-time canvas rendering.',
        '3. Personalized custom garment payloads or standard catalog SKUs are bundled into the reactive cart state.',
        '4. In the Pre-Owned Marketplace, seller submissions capture garment conditions, photos, and grade criteria (S, A, B, C) for verification before listing.',
        '5. AI styling engine processes style prompts and aesthetic matches against catalog inventory.',
      ],
      aiIntegration:
        'AI-Assisted Features are currently in conceptual exploration and prototype stages. The roadmap integrates generative AI for conversational style recommendations (matching natural language outfit queries to catalog aesthetics), automated style pairing rules, and intelligent tag classification for pre-owned seller uploads.',
      keyFeatures: [
        'Fashion Product Discovery: Editorial product presentation, high-contrast imagery, dynamic filtering, and search.',
        'Custom Print Studio: Front/back garment toggle, garment color picking, font selection, text sizing, emblem positioning, and live canvas preview.',
        'Pre-Owned Resale Marketplace: Structured condition grading system (S: Like New, A: Excellent, B: Good, C: Fair), verification workflows, and seller listings.',
        'Interactive Shopping Cart & Wishlist: Real-time quantity adjustments, subtotal calculations, and item persistence.',
        'Responsive Mobile-First Commerce UX: Fluid drawer menus, touch-optimized customization controls, and clean layout scaling.',
      ],
      engineeringChallenges: [
        'Synchronizing Custom Canvas State: Maintaining high-fidelity vector placement across responsive screen sizes while allowing front and back garment coordinate switching without latency.',
        'Condition Grading Data Architecture: Normalizing disparate pre-owned seller submissions into strict verification tiers with clear inspection criteria.',
        'Distinguishing Implemented vs Planned Capabilities: Ensuring transparent user communication that checkout payment gateways, live order fulfillment, and remote inventory databases are under active development.',
      ],
      solution: [
        'Engineered an isolated HTML5 canvas rendering layer with normalized coordinates for reliable text and graphic placement.',
        'Created strongly-typed TypeScript domain models for products, custom print specifications, and condition grading attributes.',
        'Deployed the development build to Vercel with clear ongoing status indicators, ensuring transparent developer progress.',
      ],
      technologyStack: {
        frontend: [
          'React (Implemented)',
          'TypeScript (Implemented)',
          'Vite (Implemented)',
          'Tailwind CSS (Implemented)',
          'Lucide React (Implemented)',
          'HTML5 Canvas (Implemented)',
        ],
        backend: [
          'Modular Backend Architecture (Planned / Exploring)',
          'RESTful API Contracts (In Design)',
          'Cart & Order Services (In Development)',
        ],
        cloud: [
          'Vercel Preview Deployment (Live)',
          'AWS ECS / S3 / CloudFront (Target Architecture)',
          'DynamoDB Catalog Blueprint (Planned)',
        ],
        aiAndData: [
          'AI-Assisted Styling Prompts (Conceptual)',
          'Condition Verification Pipeline (In Development)',
        ],
        devops: [
          'GitHub CI Workflow (Implemented)',
          'Vercel Edge Deployment (Implemented)',
        ],
      },
    },
  },
  {
    id: 'jai-hind-sports',
    number: '04',
    title: 'JAI HIND SPORTS',
    subtitle: 'PREMIUM SPORTS SHOWROOM & DIGITAL SPORTS EXPERIENCE',
    badge: 'ACTIVE BUILD',
    status: 'ACTIVE BUILD',
    statusLabel: 'Refining digital showroom',
    filterCategories: ['SPORTS', 'WEB'],
    description:
      'An ongoing premium digital showroom experience designed to bring a physical sports business into a modern online environment.',
    technologies: [
      'React 19',
      'TypeScript',
      'Vite',
      'React Router',
      'Tailwind CSS',
      'Motion',
      'Lucide React',
      'SEO & JSON-LD',
    ],
    github: 'https://github.com/jeethujee78-afk/jai-hind-sports',
    live: 'https://jai-hind-sports-zeta.vercel.app/',
    image: '/images/project-jai-hind.svg',
    currentProgress:
      'Refining the digital showroom, product discovery and business enquiry experience.',
    nextFocus: [
      'Catalogue refinement & inventory depth',
      'Showroom experience & virtual zone tours',
      'Enquiry workflow improvements & direct business notifications',
      'Business integration with physical store operations',
      'Production-readiness improvements & headless backend',
    ],
    caseStudy: {
      overview:
        'Jai Hind Sports is an ongoing premium digital showroom experience designed to bring an established physical sports business in Coimbatore, Tamil Nadu, India into a modern online environment. The project bridges physical retail expertise with digital discovery, enabling athletes, coaches, and sports enthusiasts to browse high-grade equipment, verify authorized brand availability, and initiate direct business enquiries.',
      problem:
        'Traditional local sporting goods showrooms offer deep domain expertise and authorized equipment (English willow cricket bats, precision badminton gutting, FIFA-certified footballs) but lack an online presence. Prospective buyers cannot easily check gear specifications, brand inventory, or store operating hours before traveling to the physical location.',
      idea:
        'Develop a cinematic, high-performance digital showroom featuring a 27-product curated equipment catalog, 5 dedicated showroom zones, brand authorization showcases, and a transparent client-side enquiry engine.',
      architectureSummary:
        'Constructed as a modern single-page web experience utilizing React 19, TypeScript, and Vite. Leverages Tailwind CSS and the Motion library for cinematic dark showroom aesthetics and tactile interactions. Built with zero external database dependencies for the current phase, using client-side localStorage for enquiry persistence while optimizing for local search discovery via structured JSON-LD and canonical metadata.',
      awsInfrastructure: [
        'Static hosting target designed for Amazon S3 and Amazon CloudFront CDN distribution',
        'Amazon Route 53 with automated SSL/TLS certificate management',
        'CloudWatch real-time web traffic and latency monitoring blueprint',
        'Serverless API Gateway + AWS Lambda roadmap for forwarding customer enquiries to store WhatsApp and CRM',
      ],
      dataFlow: [
        '1. Visitor explores curated equipment across 12 sports categories or searches by brand (e.g., Yonex, SG, SS, Cosco).',
        '2. Quick View modal exposes granular specifications (weight, material composition, tension, player suitability).',
        '3. Interactive Showroom Gallery filters through 5 designated zones (Cricket, Badminton, Football, Fitness, Accessories) with full-screen image inspection.',
        '4. Customer fills the Enquiry Form with validated Indian mobile number (+91), email, and gear request.',
        '5. System generates a unique Enquiry ID, confirms receipt in UI, and saves record to browser localStorage.',
      ],
      keyFeatures: [
        '27 Curated Sporting Goods: High-detail equipment presentation across Cricket, Badminton, Football, Gym, Running, and Fitness.',
        '10+ Authorized Brand Showcases: Authentic brand representation for Yonex, SG, SS, Cosco, Nivia, Vector X, MRF, Nike, Adidas, and Puma.',
        '5 Interactive Showroom Zones: Cricket Zone, Badminton Zone, Football Zone, Fitness Zone, and Accessories Zone with full-screen viewing.',
        'Comprehensive Enquiry Engine: Validated Indian mobile (+91), email, and message inputs with instant Enquiry ID generation.',
        'Client-Side Persistence: Clear transparency stating enquiry records are currently stored locally in browser storage.',
        'Store Status & Local Discovery: Live showroom open/closed indicator, FAQ accordion, phone, WhatsApp direct chat, and Google Maps integration.',
        'SEO & Search Readiness: Comprehensive JSON-LD SportsActivityLocation schema, canonical metadata, robots.txt, and sitemap.xml.',
      ],
      engineeringChallenges: [
        'Accurate Brand Representation: Crafting a visual design that honors the heritage of an authentic Indian sports showroom while delivering modern digital showroom standards.',
        'Strict Form Validation without Backend Overhead: Engineering bulletproof client-side regex validation for 10-digit Indian mobile numbers and international email standards.',
        'Transparent Infrastructure Communication: Explicitly communicating client-side browser storage persistence rather than claiming a remote CRM or backend database.',
      ],
      solution: [
        'Built a custom design token system featuring Saffron, White, Indian Green, Charcoal, and Obsidian neutrals.',
        'Engineered robust client-side validation hooks that generate unique tracking tokens and save to localStorage.',
        'Implemented complete search engine metadata with valid JSON-LD schema for local Coimbatore sports discoverability.',
      ],
      technologyStack: {
        frontend: [
          'React 19 (Implemented)',
          'TypeScript (Implemented)',
          'Vite (Implemented)',
          'React Router (Implemented)',
          'Tailwind CSS (Implemented)',
          'Motion (Implemented)',
          'Lucide React (Implemented)',
        ],
        backend: [
          'Client-Side Local Storage (Implemented)',
          'Serverless Lambda Enquiry API (Planned / Next Focus)',
          'WhatsApp Business Webhook Integration (In Design)',
        ],
        cloud: [
          'Vercel Preview Deployment (Live)',
          'Amazon S3 & CloudFront (Target Hosting Blueprint)',
        ],
        aiAndData: [
          'Structured Product Specifications (Implemented)',
          'JSON-LD Schema Markup (Implemented)',
        ],
        devops: [
          'GitHub CI (Implemented)',
          'Vercel Automation (Implemented)',
        ],
      },
    },
  },
  {
    id: 'more-projects',
    number: '05',
    title: 'MORE PROJECTS',
    subtitle: 'DISTRIBUTED SYSTEMS & K8S · PIPELINE & ACTIVE LABS',
    badge: 'COMING SOON',
    status: 'CONCEPT',
    statusLabel: 'COMING SOON',
    filterCategories: ['CLOUD', 'AUTOMATION', 'AI', 'AWS'],
    isUpcoming: true,
    description:
      'Currently architecting multi-agent orchestrations with Amazon Bedrock, Kubernetes (EKS) infrastructure automation with Terraform, and distributed observability pipelines.',
    technologies: [
      'Kubernetes (EKS)',
      'Terraform',
      'Amazon Bedrock',
      'Multi-Agent AI',
      'Apache Airflow',
      'Prometheus',
      'Grafana',
    ],
    image: '/images/about.jpg',
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'independent-cloud-ai',
    period: 'Nov 2025 – Present',
    role: 'Independent Cloud Engineering & AI Development',
    company: 'Hands-on Projects & AWS Certification',
    location: 'Coimbatore, India',
    type: 'PERSONAL CLOUD / AI PROJECTS',
    summary:
      'Architecting end-to-end cloud platforms, AI integrations, containerized microservices, serverless workflows, and earning the AWS Solutions Architect Associate credential.',
    description:
      'Dedicated period of intensive engineering, building real-world cloud applications and acquiring hands-on mastery of AWS managed primitives, containerization, serverless architectures, and generative AI integrations.',
    responsibilities: [
      'Architected, deployed and maintained APEX CTRL: full-stack F1 telemetry platform running containerized on AWS ECS Fargate with DynamoDB caching and Google Gemini AI strategy generation.',
      'Designed and deployed the Serverless File Platform using Amazon API Gateway, AWS Lambda, Amazon S3 pre-signed URLs, and Amazon DynamoDB with automated lifecycle policies.',
      'Achieved the AWS Certified Solutions Architect – Associate certification, validating expertise across compute, storage, networking, security, and high-availability design patterns.',
      'Implemented automated CI/CD deployment pipelines using GitHub Actions, Docker multi-stage builds, and Amazon ECR container registries.',
      'Researched cost-optimization techniques (FinOps), CloudWatch observability, IAM least-privilege boundary policies, and VPC subnet architectures.',
    ],
    keyContributions: [
      'Successfully deployed 2 major production-grade cloud platforms on AWS with zero server management overhead.',
      'Earned AWS Certified Solutions Architect – Associate credential.',
      'Engineered sub-15ms telemetry caching pipelines with Amazon DynamoDB.',
    ],
    current: true,
  },
  {
    id: 'aceolution-sme',
    period: 'Jan 2023 – Nov 2025',
    role: 'Senior Process Executive · Acting SME',
    company: 'Aceolution India',
    location: 'Coimbatore, India',
    type: 'PROFESSIONAL EXPERIENCE',
    summary:
      'Led production operations, 15,000+ daily file SLA ingestion, technical escalations, root cause analysis (RCA), and operational workflow improvements.',
    description:
      'Served as Senior Process Executive and Acting Subject Matter Expert (SME), leading technical execution across high-volume production operations, resolving technical escalations, ensuring strict SLA adherence, and mentoring team associates.',
    responsibilities: [
      'Managed daily ingestion, quality auditing, and SLA-compliant processing of 15,000+ files in a fast-paced production environment.',
      'Acted as Subject Matter Expert (SME), diagnosing complex technical escalations, conducting root cause analyses (RCA), and implementing corrective workflow actions.',
      'Trained, onboarded, and mentored 15+ process associates on operational benchmarks, quality metrics, and exception-handling procedures.',
      'Collaborated closely with cross-functional operations and engineering teams to identify process bottlenecks and streamline toolchains.',
      'Authored standard operating procedures (SOPs), knowledge-base articles, and technical escalation matrices that reduced resolution turnaround time.',
    ],
    keyContributions: [
      'Maintained consistent 99.8%+ SLA adherence across 15,000+ daily operational files.',
      'Streamlined team exception handling, reducing resolution time on critical workflow bottlenecks.',
      'Recognized for operational leadership, technical accountability, and proactive problem resolution.',
    ],
    technicalInitiative: {
      badge: 'TECHNICAL INITIATIVE',
      title: 'Internal Serverless Data Management Application',
      description:
        'Designed and developed an internal serverless application to simplify Excel-based operational data management for a 15-member team.',
      points: [
        'Enabled operational Excel files to be uploaded through a centralized application.',
        'Stored uploaded files in Amazon S3.',
        'Maintained file-related details and metadata in Amazon DynamoDB.',
        'Used AI-assisted information retrieval to make required information easier to find.',
        'Provided direct access to stored files and data when deeper inspection was required.',
        'Built the solution to reduce manual searching and make frequently needed operational information easier to access.',
      ],
      technologies: ['S3', 'DynamoDB', 'Serverless', 'AI-Assisted Retrieval'],
    },
    current: false,
  },
  {
    id: 'technosoft-associate',
    period: '2018 – 2020',
    role: 'Process Associate',
    company: 'Technosoft Engineering',
    location: 'Coimbatore, India',
    type: 'PROFESSIONAL EXPERIENCE',
    summary:
      'Process engineering operations, technical documentation, quality compliance, and inter-departmental ticket resolution.',
    description:
      'Handled engineering process deliverables, technical document quality assurance, client requirement tracking, and SLA-bound ticket workflows.',
    responsibilities: [
      'Executed engineering process deliverables in compliance with strict quality control frameworks and client specifications.',
      'Maintained structured technical documentation and verification logs for engineering workflows.',
      'Collaborated with senior engineers to resolve ticket escalations within defined turnaround SLAs.',
      'Assisted in data integrity verification and workflow standardization across active client accounts.',
    ],
    keyContributions: [
      'Consistently met 100% on-time delivery on technical documentation milestones.',
      'Improved audit accuracy scores across high-volume verification cycles.',
    ],
    current: false,
  },
  {
    id: 'justdial-executive',
    period: '2016 – 2018',
    role: 'Executive',
    company: 'Justdial',
    location: 'Coimbatore, India',
    type: 'PROFESSIONAL EXPERIENCE',
    summary:
      'Enterprise stakeholder support, high-volume communications, issue escalation, and service reliability assurance.',
    description:
      'Delivered front-line enterprise customer and merchant support, handling high-volume operational inquiries, database verification, and service delivery workflows.',
    responsibilities: [
      'Handled enterprise client inquiries, service ticket resolution, and operational communications with high customer satisfaction ratings.',
      'Performed merchant data validation and quality checks on business directory listings.',
      'Escalated technical platform issues to internal engineering teams with reproducible diagnostic notes.',
    ],
    keyContributions: [
      'Recognized for exceptional communication clarity, speed of resolution, and operational consistency.',
    ],
    current: false,
  },
];

export const TECHNICAL_EXPLORATIONS: TechnicalExplorationItem[] = [
  {
    id: 'cloud-native',
    number: '01',
    title: 'CLOUD-NATIVE ARCHITECTURE',
    tagline: 'SCALABLE SYSTEMS · MANAGED SERVICES · RESILIENCE',
    summary:
      'Exploring scalable architectures using AWS managed services, containerized workloads, serverless patterns, caching, and infrastructure automation.',
    topics: ['AWS', 'ECS', 'Lambda', 'S3', 'DynamoDB', 'VPC', 'Terraform'],
    image: '/images/research-cosmic.jpg',
    whyItMatters:
      'Modern cloud systems succeed when architectures eliminate undifferentiated heavy lifting. Leveraging managed services (like ECS Fargate, Lambda, and DynamoDB) minimizes operational maintenance, automatically handles scale, and provides high availability without over-provisioning servers.',
    whatImExploring:
      'Designing event-driven microservices that balance serverless (AWS Lambda) and containerized (ECS Fargate) patterns. Evaluating how connection pooling, memory sizing, and VPC endpoint routing impact end-to-end latency and infrastructure costs.',
    technologies: [
      'AWS ECS Fargate',
      'AWS Lambda',
      'Amazon DynamoDB',
      'Amazon S3',
      'Amazon VPC & Subnets',
      'Terraform (IaC)',
      'Docker',
    ],
    practicalApplication:
      'Decoupled telemetry processing where compute units scale dynamically during peak usage and drop to zero or baseline during quiet periods, keeping infrastructure costs directly aligned with user demand.',
    projectConnection:
      'Directly applied in APEX CTRL (ECS Fargate + DynamoDB caching) and the Serverless File Platform (API Gateway + Lambda + S3 Pre-Signed URLs).',
  },
  {
    id: 'ai-engineering',
    number: '02',
    title: 'AI-POWERED ENGINEERING',
    tagline: 'GENERATIVE AI · AGENTIC WORKFLOWS · PRACTICAL TOOLS',
    summary:
      'Exploring how generative AI and agentic workflows can assist application development, analysis, automation, and technical decision-making.',
    topics: [
      'Gemini',
      'Amazon Bedrock',
      'Agentic AI',
      'Multi-Agent Workflows',
      'AI-Assisted Development',
    ],
    image: '/images/research-mind.jpg',
    whyItMatters:
      'AI is most valuable when integrated as an active reasoning component rather than a standalone chat novelty. Feeding structured domain data into modern LLMs unlocks contextual synthesis that would otherwise require hundreds of custom heuristic rules.',
    whatImExploring:
      'Prompt chaining, structured JSON schema outputs, and multi-agent systems where specialized models (orchestrators, evaluators, summarizers) collaborate on technical tasks with human-in-the-loop validation.',
    technologies: [
      'Google Gemini API (Flash / Pro)',
      'Amazon Bedrock (Claude / Titan)',
      'Function Calling / Tool Use',
      'Prompt Engineering & Structured Outputs',
      'LangChain / LangGraph concepts',
    ],
    practicalApplication:
      'Ingesting raw sporting telemetry or server logs and converting raw metric streams into concise, natural-language tactical briefings and actionable recommendations.',
    projectConnection:
      'Implemented in APEX CTRL, where Google Gemini analyzes driver delta laps, tyre wear, and track temperature to generate race strategy insights.',
  },
  {
    id: 'real-time-telemetry',
    number: '03',
    title: 'REAL-TIME DATA & TELEMETRY',
    tagline: 'STREAMING METRICS · APIS · CACHING · VISUALIZATION',
    summary:
      'Exploring how real-time data pipelines, APIs, caching, and visualization can turn raw telemetry into useful intelligence.',
    topics: [
      'OpenF1',
      'Telemetry',
      'APIs',
      'Caching',
      'Data Processing',
      'Visualization',
    ],
    image: '/images/research-flow.jpg',
    whyItMatters:
      'High-frequency telemetry (like motorsport metrics or server monitoring metrics) is useless if the system cannot ingest, normalize, and visualize it at sub-second speeds. Without caching, upstream APIs quickly get overwhelmed.',
    whatImExploring:
      'Techniques for client-side frame interpolation, delta compression, and multi-tier caching (in-memory LRU + distributed NoSQL) to handle bursty telemetry streams smoothly.',
    technologies: [
      'OpenF1 Telemetry REST API',
      'Amazon DynamoDB TTL Caching',
      'WebSockets / SSE streaming concepts',
      'Canvas & High-FPS Chart Rendering',
      'Data Normalization Algorithms',
    ],
    practicalApplication:
      'Building live dashboards that display vehicle speeds, throttle percentages, braking points, and sector times side-by-side with zero UI lag or dropped frames.',
    projectConnection:
      'The foundational core of APEX CTRL, turning OpenF1 JSON feeds into comparative driver overlays and real-time Grand Prix charts.',
  },
  {
    id: 'cloud-cost-automation',
    number: '04',
    title: 'CLOUD COST & AUTOMATION',
    tagline: 'FINOPS · RESOURCE OPTIMIZATION · CI/CD WORKFLOWS',
    summary:
      'Exploring practical approaches to cloud efficiency, automation, and responsible infrastructure management.',
    topics: [
      'FinOps',
      'AWS Cost Explorer',
      'Savings Plans',
      'Reserved Instances',
      'Automation',
      'Resource Optimization',
    ],
    image: '/images/about.jpg',
    whyItMatters:
      'Building in the cloud without cost guardrails leads to wasted budget and inefficient systems. Practical cloud engineering demands designing for cost-efficiency from day one through automated resource shutdown, right-sizing, and architecture simplicity.',
    whatImExploring:
      'Automated tag-based resource governance, lifecycle policies for S3 storage classes (Standard -> Glacier), CloudWatch anomaly alerts, and automating infrastructure provisioning with Terraform and GitHub Actions.',
    technologies: [
      'AWS Cost Explorer & Budgets',
      'AWS Trusted Advisor',
      'S3 Intelligent-Tiering & Lifecycle Rules',
      'GitHub Actions Automation',
      'Terraform Cloud Automation',
    ],
    practicalApplication:
      'Enforcing automatic expiration of non-production environments, right-sizing container memory limits on Fargate, and structuring DynamoDB tables with on-demand capacity for sporadic workloads.',
    projectConnection:
      'Integrated into the Serverless File Platform (S3 lifecycle deletion rules) and ECS Fargate deployment sizing for APEX CTRL.',
  },
];

// Alias for backwards compatibility
export const RESEARCH_DATA = TECHNICAL_EXPLORATIONS;

export const SKILLS_DATA: Record<SkillCategory, SkillItem[]> = {
  'AWS CLOUD': [
    { name: 'Amazon EC2', exposure: 'Hands-on project experience', detail: 'Compute sizing, security groups, key pairs' },
    { name: 'Amazon S3', exposure: 'Hands-on project experience', detail: 'Bucket policies, pre-signed URLs, lifecycle rules' },
    { name: 'AWS Lambda', exposure: 'Hands-on project experience', detail: 'Serverless compute, API Gateway integration' },
    { name: 'Amazon DynamoDB', exposure: 'Hands-on project experience', detail: 'NoSQL schema design, TTL, caching layer' },
    { name: 'Amazon API Gateway', exposure: 'Hands-on project experience', detail: 'REST APIs, CORS configuration, throttling' },
    { name: 'Amazon ECS Fargate', exposure: 'Hands-on project experience', detail: 'Serverless container orchestration, tasks' },
    { name: 'AWS IAM', exposure: 'Hands-on project experience', detail: 'Least-privilege policies, execution roles' },
    { name: 'Amazon VPC', exposure: 'Working knowledge', detail: 'Subnets, route tables, security groups, IGW' },
    { name: 'Amazon CloudWatch', exposure: 'Hands-on project experience', detail: 'Log groups, metric alarms, dashboards' },
    { name: 'Amazon ECR', exposure: 'Hands-on project experience', detail: 'Docker image repositories, lifecycle tags' },
    { name: 'Amazon Route 53', exposure: 'Working knowledge', detail: 'DNS management, record sets, health checks' },
    { name: 'Amazon CloudFront', exposure: 'Working knowledge', detail: 'CDN edge distribution, SSL certificates' },
    { name: 'Amazon RDS / Aurora', exposure: 'Working knowledge', detail: 'Relational database provisioning & backups' },
    { name: 'AWS KMS', exposure: 'Working knowledge', detail: 'Customer managed keys, envelope encryption' },
    { name: 'AWS Cost Explorer', exposure: 'Working knowledge', detail: 'Budgets, cost allocation tags, right-sizing' },
  ],
  'DEVOPS & INFRASTRUCTURE': [
    { name: 'Docker', exposure: 'Hands-on project experience', detail: 'Multi-stage Dockerfiles, container optimization' },
    { name: 'GitHub Actions', exposure: 'Hands-on project experience', detail: 'Automated CI/CD pipelines, build & deploy' },
    { name: 'CI/CD Pipelines', exposure: 'Hands-on project experience', detail: 'Automated testing and container image push' },
    { name: 'Terraform', exposure: 'Working knowledge', detail: 'Infrastructure as Code, state management' },
    { name: 'Linux / Bash', exposure: 'Working knowledge', detail: 'Shell scripting, server administration, CLI' },
    { name: 'Git Version Control', exposure: 'Hands-on project experience', detail: 'Branching, PR reviews, release tagging' },
    { name: 'Kubernetes / EKS', exposure: 'Technical exposure', detail: 'Pods, deployments, services architecture' },
  ],
  'AI & AUTOMATION': [
    { name: 'Google Gemini API', exposure: 'Hands-on project experience', detail: 'Context prompts, telemetry analysis' },
    { name: 'Amazon Bedrock', exposure: 'Working knowledge', detail: 'Foundation models, API orchestration' },
    { name: 'Agentic AI Concepts', exposure: 'Working knowledge', detail: 'Multi-agent workflows, autonomous execution' },
    { name: 'AI-Assisted Dev', exposure: 'Hands-on project experience', detail: 'Prompt architecture, AI tooling in workflows' },
    { name: 'Process Automation', exposure: 'Hands-on project experience', detail: 'Operational SLA workflows & scripting' },
  ],
  'APPLICATION DEVELOPMENT': [
    { name: 'TypeScript', exposure: 'Hands-on project experience', detail: 'Strict type safety across frontend and APIs' },
    { name: 'JavaScript (ES6+)', exposure: 'Hands-on project experience', detail: 'Asynchronous event loops, DOM, modern syntax' },
    { name: 'React', exposure: 'Hands-on project experience', detail: 'Functional components, hooks, state management' },
    { name: 'Node.js', exposure: 'Hands-on project experience', detail: 'REST API services, asynchronous I/O' },
    { name: 'Express.js', exposure: 'Hands-on project experience', detail: 'Middleware, routing, HTTP error handling' },
    { name: 'Python', exposure: 'Working knowledge', detail: 'AWS Lambda scripts, automation, data handling' },
    { name: 'Tailwind CSS', exposure: 'Hands-on project experience', detail: 'Responsive design, custom theme design' },
  ],
  'DATA & ANALYTICS': [
    { name: 'OpenF1 API', exposure: 'Hands-on project experience', detail: 'Motorsport telemetry ingestion & normalization' },
    { name: 'Telemetry Processing', exposure: 'Hands-on project experience', detail: 'Real-time delta metrics, driver comparisons' },
    { name: 'Caching Strategies', exposure: 'Hands-on project experience', detail: 'In-memory LRU, DynamoDB session cache' },
    { name: 'Data Normalization', exposure: 'Hands-on project experience', detail: 'Timestamp synchronization, JSON transformation' },
    { name: 'Apache Airflow', exposure: 'Technical exposure', detail: 'DAG-based data workflow orchestration' },
  ],
};

export const HOW_I_BUILD_STEPS: EngineeringMethodologyStep[] = [
  {
    number: '01',
    phase: 'Understand',
    title: 'PROBLEM DECOMPOSITION & CONSTRAINTS',
    tagline: 'Grounded in production reality and business objectives.',
    description:
      'Before writing code or provisioning cloud resources, I dissect the core operational requirements, latency limits, user volumes, data formats, and budget constraints. Drawing from 6+ years managing high-volume SLA workflows, I identify failure modes and bottlenecks before they happen.',
    deliverables: [
      'Problem statement & scope definition',
      'API rate-limit & latency constraints mapping',
      'Cost guardrails and SLA performance benchmarks',
    ],
    mindset: 'Clarity before complexity.',
  },
  {
    number: '02',
    phase: 'Architect',
    title: 'DECOUPLED & RESILIENT CLOUD DESIGN',
    tagline: 'Managed services, zero-trust security, and horizontal scalability.',
    description:
      'I translate requirements into resilient architectural topology diagrams on AWS. I evaluate serverless (Lambda) vs containerized compute (ECS Fargate), design partitioned DynamoDB schemas, and configure least-privilege IAM roles and encrypted storage buckets.',
    deliverables: [
      'End-to-end cloud topology & data flow models',
      'Storage & caching strategy (S3, DynamoDB, Memory)',
      'IAM security boundaries and encryption standards',
    ],
    mindset: 'Architecture eliminates undifferentiated heavy lifting.',
  },
  {
    number: '03',
    phase: 'Build',
    title: 'MODULAR, TYPE-SAFE IMPLEMENTATION',
    tagline: 'Clean code, predictable contracts, and responsive interfaces.',
    description:
      'Execution focuses on clean, modular codebases with strict TypeScript types, decoupled REST endpoints, containerized Docker microservices, and high-FPS frontend visualizers. AI components (like Google Gemini) are integrated as structured reasoning layers rather than superficial chatbots.',
    deliverables: [
      'Strict TypeScript frontend & Express/Node.js backend',
      'Containerized Docker execution environments',
      'Normalized data ingestion pipelines and AI prompt schemas',
    ],
    mindset: 'Craftsmanship is clean execution.',
  },
  {
    number: '04',
    phase: 'Automate',
    title: 'CONTINUOUS INTEGRATION & ORCHESTRATION',
    tagline: 'Repetitive tasks belong to machines.',
    description:
      'Manual deployments are technical debt. I construct automated CI/CD pipelines via GitHub Actions that build Docker images, run linting checks, push verified containers to Amazon ECR, and execute automated event-driven triggers across S3, Lambda, and CloudWatch.',
    deliverables: [
      'GitHub Actions automated build & deployment workflows',
      'Container registry image tagging and vulnerability scans',
      'Event-driven S3 notifications and Lambda execution triggers',
    ],
    mindset: 'Automate everything that is repeatable.',
  },
  {
    number: '05',
    phase: 'Test',
    title: 'EDGE CASES, LATENCY & RESILIENCE VALIDATION',
    tagline: 'Verifying behavior under burst traffic and fault conditions.',
    description:
      'Rigorous verification ensures systems thrive under load. I validate API rate handling, mock external service outages (e.g. OpenF1 downtime), audit payload schema integrity, verify S3 upload signature validity, and benchmark response times under latency spikes.',
    deliverables: [
      'End-to-end API integration & error boundary verification',
      'Signature security validation (S3 pre-signed URLs)',
      'Stress testing and cache hit/miss ratio auditing',
    ],
    mindset: 'Systems are only as strong as their failure handling.',
  },
  {
    number: '06',
    phase: 'Improve',
    title: 'OBSERVABILITY, FINOPS & REFINEMENT',
    tagline: 'Telemetry-driven optimization and cost efficiency.',
    description:
      'Deployment is the start of continuous refinement. I configure Amazon CloudWatch alarms, analyze memory consumption on ECS Fargate, inspect DynamoDB capacity consumption, enforce S3 lifecycle transition rules, and optimize prompt tokens to trim cloud bills.',
    deliverables: [
      'CloudWatch dashboards, structured logging & alerting',
      'FinOps cost analysis and resource right-sizing',
      'Iterative UX enhancements based on real interaction telemetry',
    ],
    mindset: 'Measure, optimize, and refine constantly.',
  },
];

export const TECHNOLOGY_ORBIT_NODES: TechnologyOrbitNode[] = [
  {
    id: 'aws',
    name: 'AWS CLOUD',
    category: 'AWS',
    tagline: 'Certified Solutions Architecture & Managed Primitives',
    description:
      'Core foundation validated by the AWS Certified Solutions Architect – Associate credential. Deep hands-on experience designing resilient compute, storage, networking, and security topologies.',
    coreTech: [
      'Amazon ECS Fargate',
      'AWS Lambda',
      'Amazon S3',
      'Amazon DynamoDB',
      'Amazon API Gateway',
      'AWS IAM',
      'Amazon CloudWatch',
      'Amazon ECR',
      'Amazon VPC',
    ],
    relatedProjects: ['APEX CTRL', 'Serverless File Platform'],
    verifiedExperience: 'AWS Certified Solutions Architect – Associate credential; 2 production cloud platforms running on AWS.',
  },
  {
    id: 'cloud',
    name: 'CLOUD ARCHITECTURE',
    category: 'Cloud',
    tagline: 'Scalable, Cost-Optimized & Fault-Tolerant Systems',
    description:
      'Architectural philosophy emphasizing loose coupling, horizontal scalability, serverless patterns, and zero idle compute waste.',
    coreTech: [
      'Serverless Microservices',
      'Event-Driven Patterns',
      'Pre-Signed Cryptographic Uploads',
      'Least-Privilege Security',
      'Multi-Tier Caching',
    ],
    relatedProjects: ['Serverless File Platform', 'APEX CTRL'],
    verifiedExperience: 'Architected zero-server S3 direct-upload platform and containerized high-frequency telemetry caches.',
  },
  {
    id: 'ai',
    name: 'AI & APPLIED REASONING',
    category: 'AI',
    tagline: 'Contextual Intelligence & Generative AI Systems',
    description:
      'Integrating modern generative models into real application pipelines to solve domain problems with structured prompts, tool use, and contextual synthesis.',
    coreTech: [
      'Google Gemini API',
      'Amazon Bedrock',
      'Structured JSON Schemas',
      'Context Windows & Prompt Engineering',
      'AI-Assisted Engineering Workflows',
    ],
    relatedProjects: ['APEX CTRL', 'ANIVA (Concept)'],
    verifiedExperience: 'Integrated Gemini Flash for real-time Formula 1 tactical race analysis and driver strategy generation.',
  },
  {
    id: 'devops',
    name: 'DEVOPS & SRE',
    category: 'DevOps',
    tagline: 'Containerization, CI/CD & Production Reliability',
    description:
      'Unifying software development with automated delivery pipelines, container image management, and site reliability engineering principles.',
    coreTech: [
      'Docker & Multi-Stage Builds',
      'GitHub Actions CI/CD',
      'Amazon ECR',
      'Linux / Bash Scripting',
      'Git Version Control',
      'CloudWatch Observability',
    ],
    relatedProjects: ['APEX CTRL (ECR / ECS)', 'Serverless File Platform'],
    verifiedExperience: 'Automated GitHub Actions container builds and deployments to AWS ECS Fargate; managed high-volume SLA workflows.',
  },
  {
    id: 'automation',
    name: 'PROCESS & CLOUD AUTOMATION',
    category: 'Automation',
    tagline: 'High-Volume Operational Automation & Event Triggers',
    description:
      'Translating repetitive human workflows into dependable, automated pipelines that eliminate manual error and scale effortlessly.',
    coreTech: [
      'Event-Driven S3 Notifications',
      'Lambda Trigger Functions',
      'SLA Escalation Workflows',
      'DynamoDB TTL Cleanup',
      'FinOps Lifecycle Rules',
    ],
    relatedProjects: ['Aceolution India Operations', 'Serverless File Platform'],
    verifiedExperience: 'Spearheaded 15,000+ daily operational file workflows at Aceolution India; engineered automated S3 lifecycle indexing.',
  },
  {
    id: 'data',
    name: 'DATA & TELEMETRY',
    category: 'Data',
    tagline: 'High-Throughput Ingestion, Normalization & NoSQL',
    description:
      'Handling live metric streams, rate-limited APIs, and bursty data flows with robust caching, transformation, and low-latency storage.',
    coreTech: [
      'Amazon DynamoDB NoSQL',
      'OpenF1 Telemetry REST API',
      'Multi-Tier Caching (LRU + NoSQL)',
      'Data Normalization Algorithms',
      'Real-Time Telemetry Processing',
    ],
    relatedProjects: ['APEX CTRL (F1 Telemetry)'],
    verifiedExperience: 'Engineered sub-15ms cached telemetry queries across 20+ Grand Prix drivers and thousands of lap records.',
  },
];

export const RECRUITER_PROFILE = {
  name: 'JEETHU G',
  title: 'AWS Cloud Engineering Specialist',
  subTitle: 'AWS Cloud · AI · DevOps · SRE',
  location: 'Coimbatore, Tamil Nadu, India (Open to Relocation & Remote)',
  experienceSummary: '6+ Years Professional Background (Production Operations + Cloud Engineering)',
  certification: 'AWS Certified Solutions Architect – Associate (Verified Credential)',
  availability: 'Available Immediately / Short Notice',
  workPreferences: 'Full-time Cloud Engineering, AWS DevOps, SRE, or AI Solutions Roles',
  contactEmail: 'jeethu.g78@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/jeethu-g-6827a6226/',
  githubUrl: 'https://github.com/jeethujee78-afk',
  resumeDownloadUrl: '/Jeethu_G_Resume.pdf',
  coreCompetencies: [
    'AWS Cloud Architecture (ECS Fargate, Lambda, S3, DynamoDB, API Gateway, IAM, CloudWatch)',
    'DevOps & Automation (Docker, GitHub Actions CI/CD, Amazon ECR, Linux/Bash)',
    'AI Application Engineering (Google Gemini API, Prompt Engineering, Structured JSON Schemas)',
    'Full-Stack Development (TypeScript, React, Node.js, Express, REST APIs)',
    'Production Operations & SRE (15,000+ daily SLA files, Root Cause Analysis, SOPs)',
  ],
  topProjects: [
    {
      name: 'APEX CTRL',
      badge: 'FLAGSHIP LIVE DEPLOYMENT',
      tech: 'AWS ECS Fargate · DynamoDB · Express · Gemini AI · React',
      summary: 'Formula 1 telemetry platform with rate-limit bypassing cache & AI race commentary.',
      link: 'https://f1-apex-ctrl.vercel.app/',
    },
    {
      name: 'Serverless File Platform',
      badge: 'AWS CLOUD ARCHITECTURE',
      tech: 'API Gateway · Lambda · S3 Pre-Signed URLs · DynamoDB',
      summary: 'Zero-server direct-to-S3 secure file processing and automated metadata cataloging.',
      link: 'https://github.com/jeethujee78-afk/serverless-file-platform',
    },
  ],
  recruiterBlurb: `Jeethu G is an AWS Certified Solutions Architect – Associate with 6+ years of professional background leading high-volume production operations (15,000+ files daily at Aceolution India) and engineering live cloud systems on AWS. Creator of APEX CTRL (a live F1 telemetry platform on ECS Fargate with DynamoDB caching and Google Gemini AI) and the Serverless File Platform (API Gateway, Lambda, S3 Pre-Signed URLs). Specializes in AWS Cloud, Docker containerization, CI/CD pipelines, and practical AI application engineering.`,
};
