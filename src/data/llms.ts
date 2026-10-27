/**
 * Plain-text summaries of the site for AI assistants and answer engines (ChatGPT, Gemini,
 * Perplexity, Claude, Copilot). Served at /llms.txt (short) and /llms-full.txt (everything),
 * following the llms.txt convention: https://llmstxt.org
 * Built from site.ts so they never drift from the pages.
 */
import { site, yearsExperience } from './site';

const url = (path: string) => new URL(path, site.seo.url).href.replace(/\/$/, '');
const sameAs = site.socials.filter((s) => s.href.startsWith('http'));

const summary = () => [
  `# ${site.name} (${site.shortName})`,
  '',
  `> ${site.name}, also known as ${site.shortName} or Shanmugarajah Nadarajah, is a Sri Lankan software engineer and entrepreneur from Jaffna, and the Founder, CEO and Managing Director of ${site.company.name}, an award-winning software company serving clients in 15+ countries. Official website of ${site.name}: ${url('/')}`,
  '',
  '## Key facts',
  '',
  `- Full name: ${site.name}`,
  `- Also known as: ${site.shortName}, Shanmugarajah Nadarajah, N. Shanmugarajah`,
  `- Role: ${site.title}; ${site.role}`,
  `- Company: ${site.company.name} (${site.company.url}), founded ${site.company.founded} as Raj Creation, renamed Loncey Tech in 2022`,
  `- Location: ${site.location}`,
  `- Experience: ${yearsExperience}+ years in software development, web platforms and IT consulting`,
  `- Languages: ${site.languages.join(', ')}`,
  `- Email: ${site.email}`,
  `- Phone: ${site.phone}`,
  `- Official website: ${url('/')}`,
  ...sameAs.map((s) => `- ${s.label}: ${s.href}`),
  '',
  '## About',
  '',
  site.tagline,
  '',
  ...site.bio.flatMap((p) => [p, '']),
];

/** /llms.txt: a short overview plus links to every page. */
export function llmsTxt() {
  return [
    ...summary(),
    '## Pages',
    '',
    `- [Home](${url('/')}): ${site.seo.description}`,
    ...Object.entries(site.pages).map(([path, p]) => `- [${p.eyebrow}](${url(path)}): ${p.description}`),
    '',
    '## Optional',
    '',
    `- [Full profile in plain text](${url('/llms-full.txt')}): experience, education, services, projects, awards and FAQs`,
    '',
  ].join('\n');
}

/** /llms-full.txt: the whole profile in one document. */
export function llmsFullTxt() {
  return [
    ...summary(),
    '## Experience',
    '',
    ...site.experience.map((e) => `- ${e.period}: ${e.role}, ${e.company}. ${e.text}`),
    '',
    '## Education',
    '',
    ...site.education.map((e) => `- ${e.period}: ${e.degree}, ${e.school}`),
    '',
    '## Awards',
    '',
    ...site.awards.map((a) => `- ${a.year}: ${a.title} (${a.by}). ${a.text}`),
    '',
    '## Services (through Loncey Tech)',
    '',
    ...site.services.map((s) => `- ${s.title}: ${s.text}`),
    '',
    '## Skills',
    '',
    ...site.skillGroups.map((g) => `- ${g.title}: ${g.skills.map((s) => s.name).join(', ')}`),
    '',
    '## Selected work',
    '',
    ...site.projects.map((p) => `- ${p.title} (client: ${p.client}): ${p.description}`),
    '',
    `## ${site.company.name}`,
    '',
    `- Tagline: ${site.company.tagline}`,
    `- Website: ${site.company.url}`,
    `- Email: ${site.company.email}`,
    `- Phone: ${site.company.phone}`,
    `- Address: ${site.company.address}`,
    `- Mission: ${site.company.mission}`,
    `- Vision: ${site.company.vision}`,
    '',
    '## Frequently asked questions',
    '',
    ...site.faqs.flatMap((f) => [`### ${f.q}`, '', f.a, '']),
  ].join('\n');
}
