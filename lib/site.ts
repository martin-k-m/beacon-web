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
    'An open-source GitHub repository intelligence platform. Beacon scores repository health, surfaces AI recommendations, tracks dependencies and team health, and monitors repositories continuously — a clear score and actionable insights.',
  // Status is about the project, not adoption. Newly published, MIT, self-hostable.
  status: 'Open source · MIT · newly published',
  github: 'https://github.com/martin-k-m/beacon',
  // The dashboard is not hosted publicly yet, so the primary CTA points at the
  // repo / an in-page demo rather than a live app.
  docs: 'https://github.com/martin-k-m/beacon#readme',
  license: 'MIT',
  language: 'TypeScript',
  // Real command implemented by the CLI (`beacon analyze owner/repo`). The CLI
  // is published as `@martin-k-m/beacon-cli` — install it globally with
  // `npm install -g`. The command it installs is `beacon`.
  cliCommand: 'beacon analyze owner/repo',
  // How to install the terminal client.
  cliInstall: 'npm install -g @martin-k-m/beacon-cli',
  // The published package — live on npm. The CLI is the only published
  // artifact; every @beacon/* workspace package is private.
  npm: 'https://www.npmjs.com/package/@martin-k-m/beacon-cli',
} as const;

/**
 * Primary navigation. Anchors use absolute `/#…` targets so they resolve from
 * the sub-routes (/docs, /showcase) too, not just the landing page.
 */
export const nav = [
  { label: 'Features', href: '/#features' },
  { label: 'Docs', href: '/docs' },
  { label: 'Showcase', href: '/showcase' },
] as const;

/**
 * The five health-score pillars, matching @beacon/analytics' scoring engine.
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
 * Health grade bands, exactly as @beacon/analytics computes them.
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
    description: 'A Fastify REST API that serves analyses, widgets, and webhooks.',
  },
  {
    name: 'apps/worker',
    kind: 'app',
    description: 'A background queue consumer that re-scores repositories on events.',
  },
  {
    name: 'apps/cli',
    kind: 'app',
    description: 'The `beacon` CLI — analyze any repo from your terminal.',
  },
  {
    name: 'packages/analytics',
    kind: 'package',
    description: 'The engine: scoring, trends, the analyze orchestrator, and team health.',
  },
  {
    name: 'packages/ai-advisor',
    kind: 'package',
    description: 'Recommendations engine — why health changed and what to do next.',
  },
  {
    name: 'packages/dependency-engine',
    kind: 'package',
    description: 'Dependency classification against npm, PyPI, and crates.io.',
  },
  {
    name: 'packages/widgets',
    kind: 'package',
    description: 'Embeddable SVG widgets and badges.',
  },
  {
    name: 'packages/sdk',
    kind: 'package',
    description: 'A programmatic client: `Beacon.analyze(...)`.',
  },
  {
    name: 'packages/database',
    kind: 'package',
    description: 'Prisma schema and client for persisting analyses and history.',
  },
];

/* -------------------------------------------------------------------------- */
/*  Embeddable widgets                                                        */
/* -------------------------------------------------------------------------- */

/**
 * Beacon serves embeddable SVG widgets from its own API. Beacon is SELF-HOSTED
 * — there is no public hosted beacon.dev service — so every embed URL on this
 * site uses a `<your-beacon-host>` placeholder (or `beacon.example.com`), never
 * a claim that a hosted endpoint is live.
 */
export const embed = {
  /** Placeholder host used in copy-paste snippets. */
  hostPlaceholder: '<your-beacon-host>',
  exampleHost: 'beacon.example.com',
  /** The rich widget endpoint: /widget/repo/:owner/:repo */
  widgetBase: 'https://<your-beacon-host>/widget/repo',
  /** The compact badge endpoint: /badge/:owner/:repo */
  badgeBase: 'https://<your-beacon-host>/badge',
  themes: ['dark', 'light', 'transparent'] as const,
  sizes: ['small', 'medium', 'large'] as const,
  /** Sample repo used throughout previews — clearly fictional demo data. */
  sampleRepo: 'beacon-labs/aurora',
} as const;

export type WidgetTheme = (typeof embed.themes)[number];

export type WidgetDef = {
  /** Stable id, also used as the `type` query param on the widget endpoint. */
  key: string;
  name: string;
  /** Which endpoint serves it. */
  endpoint: 'widget' | 'badge';
  blurb: string;
};

/**
 * The six embeddable widget types. `endpoint: 'widget'` widgets are served by
 * `/widget/repo/:owner/:repo` (the type selected via the `type` query param);
 * the Maintenance Badge is served by the compact `/badge/:owner/:repo`
 * endpoint. All accept `?theme=` and `?size=`.
 */
export const widgets: WidgetDef[] = [
  {
    key: 'health',
    name: 'Repository Health Card',
    endpoint: 'widget',
    blurb:
      'The headline Beacon Score with its grade and the five pillar bars — the full-health snapshot in one card.',
  },
  {
    key: 'activity',
    name: 'Activity Graph',
    endpoint: 'widget',
    blurb: 'Weekly commit volume over the last year, drawn as a compact trend.',
  },
  {
    key: 'language',
    name: 'Language Card',
    endpoint: 'widget',
    blurb: 'The repository language breakdown as a stacked bar with a legend.',
  },
  {
    key: 'contributor',
    name: 'Contributor Card',
    endpoint: 'widget',
    blurb: 'Top contributors and the balance of external contribution.',
  },
  {
    key: 'release',
    name: 'Release Card',
    endpoint: 'widget',
    blurb: 'The latest tagged release — version, name, and date.',
  },
  {
    key: 'maintenance',
    name: 'Maintenance Badge',
    endpoint: 'badge',
    blurb: 'A shields-style badge — the Beacon grade at a glance for any README.',
  },
];

/* -------------------------------------------------------------------------- */
/*  GitHub App / monitoring                                                   */
/* -------------------------------------------------------------------------- */

/**
 * Webhook events the (self-hostable) GitHub App subscribes to. Beacon re-scores
 * a repository when these arrive. There is NO public installable app — a user
 * registers their own GitHub App against their Beacon instance.
 */
export const githubAppEvents = [
  { event: 'push', desc: 'New commits land — activity and maintenance refresh.' },
  { event: 'pull_request', desc: 'PRs opened, merged, or closed feed throughput.' },
  { event: 'issues', desc: 'Issue open/close activity feeds the Maintenance pillar.' },
  { event: 'release', desc: 'A new tagged release updates cadence and the Release card.' },
  { event: 'star', desc: 'Stargazer changes update community signals.' },
  { event: 'fork', desc: 'Forks update community signals.' },
] as const;

/* -------------------------------------------------------------------------- */
/*  CLI reference                                                             */
/* -------------------------------------------------------------------------- */

export type CliCommand = {
  command: string;
  summary: string;
  example: string;
  output: string;
};

export const cliCommands: CliCommand[] = [
  {
    command: 'beacon analyze owner/repo',
    summary: 'Run a full analysis and print the score, pillars, and summary.',
    example: 'beacon analyze beacon-labs/aurora',
    output: `beacon-labs/aurora
Beacon Score  92 / 100   Excellent
  Activity        95   ██████████
  Community       88   █████████
  Maintenance     90   █████████
  Documentation   94   ██████████
  Security        90   █████████
Summary  Thriving, well-maintained project — watch the bus factor.`,
  },
  {
    command: 'beacon insights owner/repo',
    summary: 'Show the AI Advisor — why health changed and prioritized fixes.',
    example: 'beacon insights beacon-labs/aurora',
    output: `beacon-labs/aurora — insights
Why  Community dipped 6 pts — external contribution fell this quarter.
  ! High    Bus factor is 1 — 82% of commits are from one maintainer.
            → Invite a co-maintainer and document the release process.
  ! Medium  No SECURITY.md — Security pillar capped at 70.
            → Add a security policy with a disclosure contact.`,
  },
  {
    command: 'beacon contributors owner/repo',
    summary: 'Report team health — bus factor, maintainer load, and distribution.',
    example: 'beacon contributors beacon-labs/aurora',
    output: `beacon-labs/aurora — team health
Bus factor    1     (82% of commits by top contributor)
Maintainers   3 active · 1 carrying the load
  ada        ██████████  82%
  lin        ███         11%
  sam        ██           7%`,
  },
  {
    command: 'beacon dependencies owner/repo',
    summary: 'Classify dependencies as current, outdated, or unmaintained.',
    example: 'beacon dependencies beacon-labs/aurora',
    output: `beacon-labs/aurora — dependencies (npm)
  current       28
  outdated       5   fastify 4.2 → 5.1, zod 3.22 → 3.24, …
  unmaintained   1   left-pad (no release in 3y)`,
  },
  {
    command: 'beacon history owner/repo',
    summary: 'Print the recorded event timeline and health over time.',
    example: 'beacon history beacon-labs/aurora',
    output: `beacon-labs/aurora — history
2026-07-16  release  v1.4.0    92  ↑ +3
2026-07-02  push     14 commits 89
2026-06-20  issues   closed 8   88`,
  },
  {
    command: 'beacon widget owner/repo',
    summary: 'Print an embeddable widget SVG (or a URL) for the repository.',
    example: 'beacon widget beacon-labs/aurora --type health --theme dark',
    output: `<svg width="400" height="180" ...>  <!-- Repository Health Card -->
… writes health-card.svg`,
  },
  {
    command: 'beacon badge owner/repo',
    summary: 'Emit a compact Markdown/HTML badge snippet for a README.',
    example: 'beacon badge beacon-labs/aurora --theme dark',
    output: `![Beacon](https://<your-beacon-host>/badge/beacon-labs/aurora?theme=dark)`,
  },
  {
    command: 'beacon watch owner/repo',
    summary: 'Track a repository over time and report health trend changes.',
    example: 'beacon watch beacon-labs/aurora',
    output: `watching beacon-labs/aurora …
2026-07-16  92  (+3 this month)  Excellent  ↑ trending up`,
  },
];

/* -------------------------------------------------------------------------- */
/*  REST API                                                                  */
/* -------------------------------------------------------------------------- */

export type ApiEndpoint = {
  method: 'GET' | 'POST';
  path: string;
  desc: string;
};

export const apiEndpoints: ApiEndpoint[] = [
  {
    method: 'POST',
    path: '/api/analyze',
    desc: 'Analyze a repository on demand — body { owner, repo } — returns the full analysis.',
  },
  {
    method: 'GET',
    path: '/api/repositories/:owner/:repo',
    desc: 'Fetch the latest stored analysis for a repository.',
  },
  {
    method: 'GET',
    path: '/api/repositories/:owner/:repo/history',
    desc: 'Historical health snapshots for trends over 30 / 90 / 365 days.',
  },
  {
    method: 'GET',
    path: '/api/repositories/:owner/:repo/insights',
    desc: 'AI Advisor output — why health changed and prioritized, fixable issues.',
  },
  {
    method: 'GET',
    path: '/api/repositories/:owner/:repo/contributors',
    desc: 'Team health — bus factor, maintainer load, and contribution distribution.',
  },
  {
    method: 'GET',
    path: '/api/repositories/:owner/:repo/events',
    desc: 'The recorded event timeline of webhook-driven repository changes.',
  },
  {
    method: 'GET',
    path: '/widget/repo/:owner/:repo',
    desc: 'Render an embeddable widget SVG. Query: type, theme, size.',
  },
  {
    method: 'GET',
    path: '/badge/:owner/:repo',
    desc: 'Render a compact badge SVG. Query: theme, size.',
  },
  {
    method: 'POST',
    path: '/api/github/webhooks',
    desc: 'Receives GitHub App webhook deliveries and re-scores the repository.',
  },
];

/* -------------------------------------------------------------------------- */
/*  Self-hosting                                                              */
/* -------------------------------------------------------------------------- */

export type EnvVar = {
  name: string;
  required: boolean;
  desc: string;
};

export const envVars: EnvVar[] = [
  {
    name: 'GITHUB_TOKEN',
    required: true,
    desc: 'A GitHub token used to read repositories via the API (higher rate limits).',
  },
  {
    name: 'DATABASE_URL',
    required: true,
    desc: 'Postgres connection string for persisting analyses and history (Prisma).',
  },
  {
    // Must stay BEACON_-prefixed: this is the exact key the API and worker
    // validate (apps/*/src/config.ts). A bare AI_PROVIDER is ignored, and the
    // app silently falls back to heuristic summaries with no error.
    name: 'BEACON_AI_PROVIDER',
    required: false,
    desc: 'Summary provider: heuristic (default, offline), openai, or anthropic.',
  },
  {
    name: 'OPENAI_API_KEY',
    required: false,
    desc: 'Key for the OpenAI summary provider (only if BEACON_AI_PROVIDER=openai).',
  },
  {
    name: 'ANTHROPIC_API_KEY',
    required: false,
    desc: 'Key for the Anthropic summary provider (only if BEACON_AI_PROVIDER=anthropic).',
  },
  {
    name: 'GITHUB_APP_ID',
    required: false,
    desc: 'GitHub App id — set when running the self-hosted App for webhook re-scoring.',
  },
  {
    name: 'GITHUB_WEBHOOK_SECRET',
    required: false,
    desc: 'Shared secret used to verify incoming webhook deliveries.',
  },
];

/* -------------------------------------------------------------------------- */
/*  Docs navigation                                                           */
/* -------------------------------------------------------------------------- */

/** In-page anchors for the /docs sidebar. Content lives in the docs page. */
export const docsSections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'quickstart', label: 'Quickstart' },
  { id: 'beacon-score', label: 'The Beacon Score' },
  { id: 'ai-advisor', label: 'AI Advisor' },
  { id: 'widgets', label: 'Widgets' },
  { id: 'github-app', label: 'GitHub App' },
  { id: 'monitoring', label: 'Continuous monitoring' },
  { id: 'cli', label: 'CLI reference' },
  { id: 'api', label: 'REST API' },
  { id: 'self-hosting', label: 'Self-hosting' },
] as const;

