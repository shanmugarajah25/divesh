/**
 * All site content lives here. Edit this file to update your website.
 * Icons come from Iconify (https://icon-sets.iconify.design) via CDN.
 * Sources: CV, Loncey Tech company profile and the Loncey Tech story script.
 */

/** Career start year. Years of experience are derived from it at build time. */
export const careerStart = 2016;
declare const __BUILD_YEAR__: number; // injected in astro.config.mjs
export const yearsExperience = __BUILD_YEAR__ - careerStart;

export const site = {
  name: 'Nadarajah Shanmugarajah',
  shortName: 'Raj',
  role: 'Managing Director, Loncey Tech',
  title: 'Founder & CEO · Software Engineer',
  /** Hero headline and the services that rotate beneath it (typewriter effect). */
  hero: {
    greeting: "Hi, I'm",
    title: 'Founder, engineer &',
    highlight: 'tech leader.',
    lead: 'I help businesses with',
  },
  roles: [
    'web design & development.',
    'mobile app development.',
    'AI & ML solutions.',
    'digital marketing.',
    'IT consulting.',
    'cloud & web hosting.',
  ],
  tagline:
    `Entrepreneurial, vision-driven tech leader with ${yearsExperience}+ years in software development, web platforms and IT consulting. Founder & CEO of Loncey Tech, delivering digital solutions to clients in 15+ countries.`,
  bio: [
    'Founder and Managing Director of Loncey Tech, a software company in Jaffna, Sri Lanka. What began as Raj Creation in 2016 became Loncey Tech in 2022 and now serves clients in 15+ countries.',
    "I pair strategic leadership with hands-on skills in Laravel, modern JavaScript, AI/ML and cloud, and I'm passionate about growing the next generation of tech talent in the North and East.",
  ],
  email: 'raj@lonceytech.com',
  phone: '+94 77 2111 175',
  location: 'Jaffna, Sri Lanka',
  availability: 'Open to new projects',
  languages: ['Tamil', 'English', 'Sinhala'],

  /** SEO settings. `url` must match the `site` value in astro.config.mjs. */
  seo: {
    url: 'https://shanraj.com',
    title: 'Nadarajah Shanmugarajah (Raj) | Founder & CEO of Loncey Tech, Jaffna',
    description:
      'Official website of Nadarajah Shanmugarajah (Raj), software engineer, entrepreneur and Managing Director of Loncey Tech, an award-winning software development company in Jaffna, Sri Lanka serving clients in 15+ countries.',
    keywords: [
      'Nadarajah Shanmugarajah',
      'Shanmugarajah',
      'Raj Loncey Tech',
      'Loncey Tech',
      'Raj Creation',
      'software company Jaffna',
      'web development Jaffna',
      'software engineer Sri Lanka',
      'Laravel developer Sri Lanka',
      'IT consulting Northern Province',
      'mobile app development Jaffna',
      'AI ML solutions Sri Lanka',
      'digital marketing Jaffna',
      'Managing Director Loncey Tech',
    ],
    image: '/og.png',
    locale: 'en_US',
    twitter: '',
  },

  company: {
    name: 'Loncey Tech (Pvt) Ltd',
    shortName: 'Loncey Tech',
    tagline: 'A Light for the Future',
    url: 'https://www.lonceytech.com',
    email: 'raj@lonceytech.com',
    phone: '+94 21 222 7343',
    address: 'No. 259, Temple Road, Jaffna, Sri Lanka',
    founded: 2016,
    registration: 'PV00264184',
    mission: 'New technology and consistent, on-time service.',
    vision:
      'To be a global leader in web solutions, driven by quality, innovation and customer satisfaction, shaping the future of digital.',
  },

  socials: [
    { label: 'Loncey Tech', icon: 'ph:globe-bold', href: 'https://www.lonceytech.com' },
    { label: 'LinkedIn', icon: 'mdi:linkedin', href: 'https://www.linkedin.com/in/shanmugarajah' },
    { label: 'Facebook', icon: 'mdi:facebook', href: 'https://www.facebook.com/shanmugarajah.raj.5' },
    { label: 'Email', icon: 'mdi:email-outline', href: 'mailto:raj@lonceytech.com' },
  ],

  nav: [
    { label: 'Home', href: '/', icon: 'ph:house-bold' },
    { label: 'About', href: '/about', icon: 'ph:user-bold' },
    { label: 'Story', href: '/story', icon: 'ph:book-open-bold' },
    { label: 'Services', href: '/services', icon: 'ph:squares-four-bold' },
    { label: 'Experience', href: '/experience', icon: 'ph:briefcase-bold' },
    { label: 'Work', href: '/work', icon: 'ph:folder-open-bold' },
    { label: 'Awards', href: '/awards', icon: 'ph:trophy-bold' },
    { label: 'Contact', href: '/contact', icon: 'ph:paper-plane-tilt-bold' },
  ],

  /** Per-page SEO metadata. Keys are route paths. */
  pages: {
    '/about': {
      image: '/og/about.png',
      title: 'About Nadarajah Shanmugarajah (Raj) | Software Engineer & Entrepreneur, Jaffna',
      description:
        `Learn about Nadarajah Shanmugarajah (Raj): software engineer, founder and Managing Director of Loncey Tech in Jaffna, Sri Lanka, with ${yearsExperience}+ years in web development, IT consulting and leadership.`,
      eyebrow: 'About me',
      heading: 'About',
      highlight: 'Nadarajah Shanmugarajah',
      intro: 'Software engineer, entrepreneur and Managing Director based in Jaffna, Sri Lanka.',
    },
    '/story': {
      image: '/og/story.png',
      title: 'The Loncey Tech Story | From Raj Creation to an Award-Winning Software Company',
      description:
        'The story of Loncey Tech: how Nadarajah Shanmugarajah (Raj) grew Raj Creation, founded in 2016 in Jaffna, into Loncey Tech, an award-winning software company serving 15+ countries.',
      eyebrow: 'Our story',
      heading: 'From a seed to',
      highlight: 'Loncey Tech',
      intro: 'How a passion for IT in Jaffna grew into an award-winning software company serving the world.',
    },
    '/services': {
      image: '/og/services.png',
      title: 'Services | Web, Mobile App, AI/ML, Digital Marketing & IT Consulting in Jaffna',
      description:
        'Web design & development, mobile app development, AI/ML solutions, digital marketing, IT consulting and web hosting by Nadarajah Shanmugarajah (Raj) and Loncey Tech, Jaffna, Sri Lanka.',
      eyebrow: 'Services',
      heading: 'What I',
      highlight: 'do',
      intro: 'Through Loncey Tech, I help businesses and institutions harness digital transformation.',
    },
    '/experience': {
      image: '/og/experience.png',
      title: 'Experience & Education | Nadarajah Shanmugarajah (Raj)',
      description:
        'Professional journey and education of Nadarajah Shanmugarajah (Raj): Founder & CEO of Loncey Tech, IT roles in banking and the Ministry of Education, MBA and BEng (Hons) in Software Engineering.',
      eyebrow: 'Experience',
      heading: 'My professional',
      highlight: 'journey',
      intro: 'From web developer to founder: the roles, milestones and studies that shaped how I build software and lead teams.',
    },
    '/work': {
      image: '/og/work.png',
      title: 'Selected Work | Government & Institutional Projects by Loncey Tech, Jaffna',
      description:
        'Digital solutions delivered by Nadarajah Shanmugarajah (Raj) and Loncey Tech for the Jaffna Municipal Council, Northern Provincial Council, district and divisional secretariats and the College of Technology, Jaffna.',
      eyebrow: 'Selected work',
      heading: 'Trusted by',
      highlight: 'institutions',
      intro: 'A selection of digital solutions delivered for government bodies and organisations across the Northern Province of Sri Lanka.',
    },
    '/awards': {
      image: '/og/awards.png',
      title: 'Awards & Recognition | Nadarajah Shanmugarajah (Raj) & Loncey Tech',
      description:
        'Awards won by Nadarajah Shanmugarajah (Raj) and Loncey Tech: SLASSCOM National Ingenuity Awards 2025, SLCBC Regional Excellence Award 2025, Best Data Engineering Company 2024 and Best Entrepreneur Jaffna 2022.',
      eyebrow: 'Recognition',
      heading: 'Awards &',
      highlight: 'achievements',
      intro: 'Recognition for innovation, entrepreneurship and impact in the technology sector.',
    },
    '/faq': {
      image: '/og/faq.png',
      title: 'FAQ | Working with Nadarajah Shanmugarajah (Raj) & Loncey Tech',
      description:
        'Answers to common questions about hiring Nadarajah Shanmugarajah (Raj) and Loncey Tech in Jaffna, Sri Lanka: services, technologies, timelines, pricing, support and how to get started.',
      eyebrow: 'FAQ',
      heading: 'Frequently asked',
      highlight: 'questions',
      intro: 'Quick answers about working with me and Loncey Tech. Not covered here? Just ask.',
    },
    '/contact': {
      image: '/og/contact.png',
      title: 'Contact Nadarajah Shanmugarajah (Raj) | Loncey Tech, Jaffna, Sri Lanka',
      description:
        'Get in touch with Nadarajah Shanmugarajah (Raj), Managing Director of Loncey Tech in Jaffna, Sri Lanka, to discuss web, mobile, AI/ML and digital transformation projects.',
      eyebrow: 'Contact',
      heading: "Let's build something",
      highlight: 'together',
      intro: 'Have a project in mind or want to discuss how Loncey Tech can support your organisation? My inbox is always open.',
    },
  },

  stats: [
    { value: yearsExperience, suffix: '+', label: 'Years experience' },
    { value: 15, suffix: '+', label: 'Countries served' },
    { value: 4, suffix: '', label: 'Industry awards' },
    { value: 14, suffix: '', label: 'Team members' },
  ],

  heroBadges: [
    { icon: 'ph:code-bold', title: `${yearsExperience}+ years`, text: 'in software & web' },
    { icon: 'ph:globe-hemisphere-east-bold', title: '15+ countries', text: 'clients served' },
  ],

  highlights: [
    { icon: 'ph:crown-simple-bold', title: 'Leadership', text: 'Founder & CEO driving strategy and growth.' },
    { icon: 'ph:code-bold', title: 'Full-stack expertise', text: 'Laravel, JavaScript, AI/ML and cloud.' },
    { icon: 'ph:lightbulb-bold', title: 'Problem solver', text: 'Complex needs, simple systems.' },
    { icon: 'ph:buildings-bold', title: 'Public-sector trusted', text: 'Digital solutions for government.' },
  ],

  /** The Loncey Tech story, from the company script. */
  story: {
    intro: [
      'As IT companies grew in Southern Sri Lanka, people from the North and East moved south in search of technology careers. Few realised then that those same companies were needed in the North and East too, and the biggest problem faced by the people who moved was language.',
      'To solve that problem, a seed was planted. While studying at the Vocational Training Authority, my passion for IT laid the foundation for Raj Creation. That seed has today grown into a strong tree: Loncey Tech.',
    ],
    nameOrigin: {
      title: 'Why “Loncey”?',
      text: 'Because it is a proudly Sri Lankan product. Take CEYLON, the island’s classic name, and flip it: CEY LON becomes LON CEY.',
      from: 'CEY LON',
      to: 'LON CEY',
    },
    milestones: [
      {
        year: '2016',
        title: 'Raj Creation is born',
        text: 'Started as a home-based freelancing venture offering web design and development, and grew steadily into a company.',
        icon: 'ph:plant-bold',
      },
      {
        year: '2019',
        title: 'Formalised, then tested',
        text: 'Registered under the Divisional Secretary. Soon after, the COVID pandemic and the national economic crisis became stumbling blocks for the next stage of growth.',
        icon: 'ph:shield-warning-bold',
      },
      {
        year: '2022',
        title: 'Rebranded as Loncey Tech',
        text: 'Turning obstacles into stepping stones, Raj Creation rebranded as Loncey Tech, registered with the Registrar of Companies and moved into a dedicated office in Jaffna.',
        icon: 'ph:rocket-launch-bold',
      },
      {
        year: 'Today',
        title: 'A trusted brand',
        text: 'Serving clients in 15+ countries, contributing to the digital transformation of Sri Lankan government departments and winning national recognition.',
        icon: 'ph:trophy-bold',
      },
    ],
    impact: [
      {
        icon: 'ph:graduation-cap-bold',
        title: 'Internships for students',
        text: 'University students are offered internships that build careers and personality, supporting the next generation of tech talent.',
      },
      {
        icon: 'ph:hand-heart-bold',
        title: 'Empowering women entrepreneurs',
        text: 'Digital marketing guidance for women’s self-employment projects in the community.',
      },
      {
        icon: 'ph:lightning-bold',
        title: 'Early tech adopters',
        text: 'Whenever new technologies arrive, from AI/ML to modern cloud, we are quick to adopt them for our clients.',
      },
    ],
    closing:
      'Loncey Tech sincerely thanks every customer, employee, partner and well-wisher who helped it shine as a leading technology company. While celebrating past achievements, we are planning for future success and take pride in customer satisfaction.',
  },

  services: [
    {
      icon: 'ph:browsers-bold',
      title: 'Web Design & Development',
      text: 'Custom, responsive websites and web applications built on modern frameworks for performance and scale.',
    },
    {
      icon: 'ph:device-mobile-bold',
      title: 'Mobile App Development',
      text: 'Native and cross-platform mobile applications tailored to your business workflows.',
    },
    {
      icon: 'ph:brain-bold',
      title: 'AI / ML Solutions',
      text: 'Intelligent modules and machine-learning features that turn your data into actionable insights.',
    },
    {
      icon: 'ph:megaphone-bold',
      title: 'Digital Marketing',
      text: 'Strategy and execution to grow reach, engagement and conversion across digital channels.',
    },
    {
      icon: 'ph:headset-bold',
      title: 'IT Consulting',
      text: 'Practical technology guidance, systems support and digital transformation for organisations.',
    },
    {
      icon: 'ph:hard-drives-bold',
      title: 'Web Hosting',
      text: 'Reliable, managed web hosting delivered through Raj Creation, the brand where it all began.',
    },
  ],

  skillGroups: [
    {
      title: 'Frontend & Mobile',
      icon: 'ph:layout-bold',
      skills: [
        { name: 'HTML5', icon: 'logos:html-5' },
        { name: 'CSS3', icon: 'logos:css-3' },
        { name: 'JavaScript', icon: 'logos:javascript' },
        { name: 'Angular', icon: 'logos:angular-icon' },
        { name: 'React', icon: 'logos:react' },
        { name: 'Vue.js', icon: 'logos:vue' },
        { name: 'Flutter', icon: 'logos:flutter' },
      ],
    },
    {
      title: 'Backend & Data',
      icon: 'ph:database-bold',
      skills: [
        { name: 'PHP', icon: 'logos:php' },
        { name: 'Laravel', icon: 'logos:laravel' },
        { name: 'Node.js', icon: 'logos:nodejs-icon' },
        { name: 'MySQL', icon: 'logos:mysql-icon' },
        { name: 'C#', icon: 'logos:c-sharp' },
        { name: 'Python / ML', icon: 'logos:python' },
      ],
    },
    {
      title: 'Cloud & Tools',
      icon: 'ph:cloud-bold',
      skills: [
        { name: 'AWS', icon: 'skill-icons:aws-dark' },
        { name: 'Azure', icon: 'logos:microsoft-azure' },
        { name: 'Google Cloud', icon: 'logos:google-cloud' },
        { name: 'Linux', icon: 'logos:ubuntu' },
        { name: 'Nginx', icon: 'logos:nginx' },
        { name: 'Figma', icon: 'logos:figma' },
        { name: 'WordPress', icon: 'logos:wordpress-icon' },
      ],
    },
  ],

  experience: [
    {
      period: '2016 - Present',
      role: 'Founder & CEO · Managing Director',
      company: 'Loncey Tech (Pvt) Ltd, Jaffna',
      icon: 'ph:rocket-launch-bold',
      text: 'Leading a global software company delivering web, mobile, AI/ML and custom software solutions to clients in 15+ countries. Oversee strategy, client projects and team growth.',
      tags: ['Leadership', 'Laravel', 'Strategy', 'Client delivery'],
    },
    {
      period: '2019 - 2020',
      role: 'IT Assistant',
      company: 'Samurdhi Bank, Siruppiddy',
      icon: 'ph:bank-bold',
      text: 'Supported daily IT operations in banking. Resolved hardware and software issues and monitored systems.',
      tags: ['IT Support', 'Systems', 'Banking'],
    },
    {
      period: '2018 - 2019',
      role: 'IT Technician',
      company: 'Ministry of Education',
      icon: 'ph:wrench-bold',
      text: 'Provided technical support for schools and offices. Installed and maintained systems, networks and software.',
      tags: ['Networks', 'Hardware', 'Support'],
    },
    {
      period: '2018 - 2019',
      role: 'Board of Directors',
      company: 'Northern Chamber of Information Technology',
      icon: 'ph:users-three-bold',
      text: 'Served on the board of the regional ICT chamber, supporting the growth of the technology community in Northern Sri Lanka.',
      tags: ['Community', 'ICT', 'Governance'],
    },
  ],

  education: [
    {
      period: 'In progress',
      degree: 'MBA · Master of Business Administration',
      school: 'London Metropolitan University',
      icon: 'ph:briefcase-bold',
    },
    {
      period: '2023 - 2024',
      degree: 'BEng (Hons) in Software Engineering',
      school: 'London Metropolitan University',
      icon: 'ph:graduation-cap-bold',
    },
    {
      period: '2017 - 2020',
      degree: 'ICT Technician (NVQ Level 5)',
      school: 'College of Technology, Jaffna',
      icon: 'ph:certificate-bold',
    },
    {
      period: '2016',
      degree: 'ICT Technician (NVQ Level 4)',
      school: 'Vocational Training Authority, Jaffna',
      icon: 'ph:certificate-bold',
    },
  ],

  projects: [
    {
      title: 'Jaffna Public Library Digitalisation',
      client: 'Jaffna Municipal Council',
      description:
        'Digitalisation initiative for one of South Asia’s most iconic libraries, bringing its catalogue and services into the digital era.',
      icon: 'ph:books-bold',
      gradient: 'from-brand-600 to-accent-500',
      tags: ['Public sector', 'Web platform', 'Digitalisation'],
      featured: true,
      links: { live: '', code: '' },
    },
    {
      title: 'Northern Provincial Council',
      client: 'Provincial Council',
      description:
        'Reliable digital solutions supporting the administrative work of the Northern Province’s provincial government.',
      icon: 'ph:buildings-bold',
      gradient: 'from-sky-500 to-brand-500',
      tags: ['Government', 'Web application'],
      featured: false,
      links: { live: '', code: '' },
    },
    {
      title: 'Mullaitivu District Secretariat',
      client: 'District Secretariat',
      description:
        'Office Management System for district-level administration, streamlining services and record management. National 1st Runner-up at the SLASSCOM National Ingenuity Awards 2025.',
      icon: 'ph:map-pin-bold',
      gradient: 'from-emerald-500 to-teal-400',
      tags: ['Government', 'Systems'],
      featured: false,
      links: { live: '', code: '' },
    },
    {
      title: 'Kilinochchi District Secretariat',
      client: 'District Secretariat',
      description:
        'Public-sector software delivered for the Kilinochchi District Secretariat to improve day-to-day operations.',
      icon: 'ph:map-trifold-bold',
      gradient: 'from-amber-500 to-orange-500',
      tags: ['Government', 'Systems'],
      featured: false,
      links: { live: '', code: '' },
    },
    {
      title: 'College of Technology, Jaffna',
      client: 'Official website · 2019',
      description:
        'Designed and built the official website for the College of Technology, Jaffna, showcasing courses and campus information.',
      icon: 'ph:student-bold',
      gradient: 'from-fuchsia-500 to-rose-500',
      tags: ['Education', 'Website', 'Design'],
      featured: false,
      links: { live: '', code: '' },
    },
    {
      title: 'Divisional Secretariats',
      client: 'Karainagar & Thunukkai',
      description:
        'Tailored digital solutions for divisional secretariats, plus other divisional and district offices across the Northern Province.',
      icon: 'ph:city-bold',
      gradient: 'from-lime-500 to-emerald-500',
      tags: ['Government', 'Multi-site'],
      featured: false,
      links: { live: '', code: '' },
    },
  ],

  faqs: [
    {
      icon: 'ph:squares-four-bold',
      q: 'What services do you and Loncey Tech offer?',
      a: 'Web design and development, mobile app development, AI/ML solutions, digital marketing, IT consulting and managed web hosting. We handle everything from a simple business website to custom government systems and cross-platform apps.',
    },
    {
      icon: 'ph:code-bold',
      q: 'Which technologies do you work with?',
      a: 'Our core stack is PHP/Laravel, MySQL and modern JavaScript frameworks such as React, Vue and Angular, with Flutter for mobile and Node.js, Python and cloud platforms (AWS, Azure, Google Cloud) where they fit. We choose the tool that best suits your project, not the other way round.',
    },
    {
      icon: 'ph:globe-hemisphere-east-bold',
      q: 'Do you work with clients outside Sri Lanka?',
      a: 'Yes. Loncey Tech serves clients in more than 15 countries. We work remotely with clear communication, regular progress updates and time-zone friendly scheduling.',
    },
    {
      icon: 'ph:clock-bold',
      q: 'How long does a typical project take?',
      a: 'A business website usually takes two to four weeks. Web applications and mobile apps range from six weeks to several months depending on scope. After a short discovery call you receive a written plan with milestones and a realistic timeline.',
    },
    {
      icon: 'ph:currency-circle-dollar-bold',
      q: 'How is pricing structured?',
      a: 'Most projects are quoted as a fixed price after we agree on the scope, so there are no surprises. For ongoing work such as consulting, maintenance or marketing we offer monthly retainers.',
    },
    {
      icon: 'ph:buildings-bold',
      q: 'Do you have experience with government and public-sector projects?',
      a: 'Yes. We have delivered digital solutions for the Jaffna Municipal Council, the Northern Provincial Council and several district and divisional secretariats, and our work in this sector won the SLASSCOM National Ingenuity Award for Best Innovative Product in Government.',
    },
    {
      icon: 'ph:lifebuoy-bold',
      q: 'What happens after launch?',
      a: 'Every project includes a hand-over and a support period. Beyond that we offer hosting, maintenance, security updates and feature development plans so your product keeps running smoothly and growing.',
    },
    {
      icon: 'ph:paper-plane-tilt-bold',
      q: 'How do we get started?',
      a: 'Send a message through the contact form or email raj@lonceytech.com with a short description of your idea. I will reply within one or two working days to arrange a free discovery call.',
    },
  ],

  awards: [
    {
      year: '2025',
      title: 'Best Innovative Product in Government',
      by: 'SLASSCOM National Ingenuity Awards',
      text: 'National 1st Runner-up and Provincial Winner (Northern Province) for the Office Management System built for the Mullaitivu District Secretariat.',
      icon: 'ph:trophy-bold',
      details: [
        { label: 'Product', value: 'Office Management System' },
        { label: 'Client', value: 'Mullaitivu District Secretariat' },
        { label: 'Result', value: 'National 1st Runner-up · Provincial Winner' },
        { label: 'Awarded', value: '1 July 2025, Colombo' },
      ],
    },
    {
      year: '2025',
      title: 'Best ICT Services, Northern Province',
      by: 'Regional Excellence Awards · Sri Lanka–Canada Business Council',
      text: 'Recognising excellence in ICT services across the Northern Province.',
      icon: 'ph:seal-check-bold',
    },
    {
      year: '2024',
      title: 'Best Data Engineering Company',
      by: 'OneYes Startup Fest, India',
      text: 'Celebrating innovation, efficiency and impact in transforming data into actionable insights.',
      icon: 'ph:chart-line-up-bold',
    },
    {
      year: '2022',
      title: 'Best Entrepreneur, Jaffna District',
      by: 'Vocational Training Authority, Sri Lanka',
      text: 'Recognising excellence in software development and entrepreneurship in Jaffna.',
      icon: 'ph:medal-bold',
    },
  ],
};

export type Site = typeof site;
