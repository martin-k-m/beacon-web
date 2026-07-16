/**
 * Central source of truth for site copy and links.
 *
 * ACCURACY RULE: every claim on this site must be verifiable against the actual
 * Beacon tool repository (https://github.com/martin-k-m/beacon). Beacon is a
 * NEWLY PUBLISHED open-source project with a real, working codebase — a
 * TypeScript monorepo with an analysis engine, a REST API, a Next.js dashboard,
 * and a CLI — but it has NO adoption history yet. Therefore:
 *
 *   - Do NOT invent adoption numbers (GitHub stars, contributor counts,
 *     downloads, "trusted by", testimonials). There are none to show.
 *   - Any dashboard / score preview must be clearly labeled as SAMPLE / DEMO
 *     data (the tool ships real demo fixtures behind `beacon analyze --demo`).
 *   - Describe only features that exist in the repo today (health score across
 *     Activity / Community / Maintenance / Documentation / Security pillars,
 *     contributor analytics, commit & release timelines, language breakdown,
 *     AI "Beacon Summary" with pluggable providers, CLI `beacon analyze`).
 *   - Frame anything not yet built as "Roadmap".
 *
 * If a claim cannot be checked in the repo, remove it, rewrite it, or label it
 * as roadmap.
 */
export const site = {
  name: 'Beacon',
  // What Beacon does, in one line.
  tagline: 'Understand any GitHub repository instantly.',
  // Honest one-liner about what this is.
  summary:
    'An open-source GitHub repository intelligence platform. Beacon analyzes repository health, activity, contributors, and trends into a clear score and actionable insights.',
  // Status is about the project, not adoption. Newly published, MIT, self-hostable.
  status: 'Open source · MIT · newly published',
  github: 'https://github.com/martin-k-m/beacon',
  // The dashboard is not hosted publicly yet, so the primary CTA points at the
  // repo / an in-page demo rather than a live app.
  docs: 'https://github.com/martin-k-m/beacon#readme',
  license: 'MIT',
  language: 'TypeScript',
  // Real command implemented by the CLI (`beacon analyze owner/repo`). Built
  // from the monorepo — not yet published to npm, so we don't imply `npm i -g`.
  cliCommand: 'beacon analyze owner/repo',
} as const;

export const nav = [
  { label: 'Features', href: '#features' },
  { label: 'Demo', href: '#demo' },
  { label: 'Open source', href: '#open-source' },
  { label: 'Architecture', href: '#architecture' },
] as const;

/**
 * The five health-score pillars, matching @beacon/core's scoring engine.
 * `weight` values are the actual pillar weights from the engine (sum to 1).
 */
export type Pillar = {
  key: string;
  label: string;
  weight: number;
  blurb: string;
};

export const pillars: Pillar[] = [
  {
    key: 'activity',
    label: 'Activity',
    weight: 0.3,
    blurb: 'Push recency, commit volume over 12 weeks, and release cadence.',
  },
  {
    key: 'community',
    label: 'Community',
    weight: 0.2,
    blurb: 'Contributor base and the balance of external contribution.',
  },
  {
    key: 'maintenance',
    label: 'Maintenance',
    weight: 0.2,
    blurb: 'Issue and pull-request throughput and time-to-close.',
  },
  {
    key: 'documentation',
    label: 'Documentation',
    weight: 0.15,
    blurb: 'README depth — install, usage, badges, and license sections.',
  },
  {
    key: 'security',
    label: 'Security',
    weight: 0.15,
    blurb: 'Security policy, Dependabot, and vulnerability signals.',
  },
];

/**
 * Health grade bands, exactly as @beacon/core computes them.
 */
export const grades = [
  { label: 'Excellent', min: 90 },
  { label: 'Healthy', min: 75 },
  { label: 'Fair', min: 60 },
  { label: 'At risk', min: 40 },
  { label: 'Critical', min: 0 },
] as const;

/**
 * What actually lives in the Beacon monorepo. These are structural facts about
 * the repository, not adoption claims.
 */
export type RepoPart = {
  name: string;
  kind: 'app' | 'package';
  description: string;
};

export const monorepo: RepoPart[] = [
  {
    name: 'apps/web',
    kind: 'app',
    description: 'The Beacon dashboard — a Next.js web UI for repository intelligence.',
  },
  {
    name: 'apps/api',
    kind: 'app',
    description: 'A Fastify REST API that serves analyses over HTTP.',
  },
  {
    name: 'apps/cli',
    kind: 'app',
    description: 'The `beacon` CLI — analyze any repo from your terminal.',
  },
  {
    name: 'packages/core',
    kind: 'package',
    description: 'The analysis engine: GitHub client, scoring, and AI summaries.',
  },
  {
    name: 'packages/database',
    kind: 'package',
    description: 'Prisma schema and client for persisting analyses.',
  },
  {
    name: 'packages/config',
    kind: 'package',
    description: 'Shared TypeScript and ESLint configuration.',
  },
];

/**
 * The Blink Dev ecosystem — sibling project sites, framed as a product
 * lifecycle (Create → Build → Protect → Understand). These are navigation
 * links to other properties, not feature claims. `current: true` on this site.
 */
export type EcosystemProject = {
  name: string;
  stage: string;
  description: string;
  url: string;
  current?: boolean;
};

export const ecosystem: EcosystemProject[] = [
  {
    name: 'Blink',
    stage: 'Create',
    description: 'Fast developer tooling for modern workflows.',
    url: 'https://blinkdev.me',
  },
  {
    name: 'Flux',
    stage: 'Build',
    description: 'Local-first build & automation engine.',
    url: 'https://flux.blinkdev.me',
  },
  {
    name: 'Killer',
    stage: 'Protect',
    description: 'Security testing platform for Rust.',
    url: 'https://killer.blinkdev.me',
  },
  {
    name: 'Beacon',
    stage: 'Understand',
    description: 'Repository intelligence & health scores.',
    url: 'https://beacon.blinkdev.me',
    current: true,
  },
];
