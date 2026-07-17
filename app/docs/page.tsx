import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { CodeBlock } from '@/components/CodeBlock';
import { DocsSidebar } from '@/components/docs/DocsSidebar';
import {
  HealthCard,
  MaintenanceBadge,
  LanguageCard,
} from '@/components/widgets/previews';
import {
  site,
  pillars,
  grades,
  widgets,
  embed,
  cliCommands,
  apiEndpoints,
  envVars,
  githubAppEvents,
} from '@/lib/site';
import { GitHubIcon, CheckIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Documentation — Beacon',
  description:
    'Beacon documentation: quickstart, the Beacon Score, embeddable widgets, the GitHub App, CLI reference, REST API, and self-hosting. Open source and MIT licensed.',
  alternates: { canonical: 'https://beacon.blinkdev.me/docs' },
};

const SAMPLE = embed.sampleRepo;

/** Grade band ranges derived from the shared `grades` bands. */
const gradeRows = grades.map((g, i) => {
  const upper = i === 0 ? 100 : grades[i - 1].min - 1;
  const range = i === grades.length - 1 ? `< ${grades[i - 1].min}` : `${g.min}–${upper}`;
  return { label: g.label, range };
});

export default function DocsPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <div className="container-x py-12 lg:py-16">
          <div className="lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
            {/* sidebar */}
            <aside className="mb-10 lg:mb-0">
              <div className="lg:sticky lg:top-24">
                <DocsSidebar />
                <div className="mt-8 rounded-md border border-line bg-slate/40 p-4">
                  <div className="font-mono text-[11px] uppercase tracking-widest text-muted">
                    Source
                  </div>
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-2 inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-mist"
                  >
                    <GitHubIcon width={14} height={14} />
                    martin-k-m/beacon
                  </a>
                </div>
              </div>
            </aside>

            {/* content */}
            <article className="min-w-0 max-w-3xl">
              <header className="border-b border-line pb-8">
                <div className="eyebrow">Documentation</div>
                <h1 className="mt-3 text-3xl font-bold tracking-tight text-mist sm:text-4xl">
                  Beacon docs
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-muted">
                  Everything you need to run Beacon, read a Beacon Score, embed
                  widgets, and self-host. Beacon is a newly published open-source
                  project — these docs describe what ships in the{' '}
                  <a href={site.github} target="_blank" rel="noreferrer noopener" className="text-beacon hover:text-gold">
                    monorepo
                  </a>{' '}
                  today.
                </p>
              </header>

              <Introduction />
              <Quickstart />
              <BeaconScore />
              <AiAdvisor />
              <Widgets />
              <GithubApp />
              <Monitoring />
              <Cli />
              <RestApi />
              <SelfHosting />
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section primitives                                                        */
/* -------------------------------------------------------------------------- */

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-line py-12">
      <h2 className="group flex items-center gap-2 text-2xl font-bold tracking-tight text-mist">
        <a href={`#${id}`} className="text-faint opacity-0 transition-opacity group-hover:opacity-100" aria-hidden>
          #
        </a>
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted">
        {children}
      </div>
    </section>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-8 text-base font-semibold text-mist">{children}</h3>;
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md border border-beacon/30 bg-beacon/[0.05] p-4 text-sm leading-relaxed text-muted">
      <span className="mr-2 font-mono text-[10px] uppercase tracking-widest text-beacon">
        Note
      </span>
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  1. Introduction                                                           */
/* -------------------------------------------------------------------------- */

function Introduction() {
  return (
    <Section id="introduction" title="Introduction">
      <p>
        <span className="text-mist">Beacon</span> is an open-source GitHub
        repository intelligence platform. Point it at any{' '}
        <code className="rounded bg-abyss/70 px-1.5 py-0.5 font-mono text-[13px] text-mist">owner/repo</code>{' '}
        and it collects a full snapshot from the GitHub API, computes a
        deterministic <span className="text-mist">Beacon Score</span> across five
        weighted pillars, and generates a natural-language summary.
      </p>
      <p>
        The same analysis engine powers every surface — a CLI, a Fastify REST
        API, and a Next.js dashboard — so they always agree on the numbers.
        Beacon also ships an AI Advisor for prioritized recommendations,
        dependency and team-health analysis, an embeddable widget system, a
        self-hostable GitHub App for continuous re-scoring, and historical
        health snapshots.
      </p>
      <ul className="space-y-2">
        {[
          'Deterministic 0–100 health score with explainable pillars',
          'AI Advisor — why health changed and prioritized, fixable issues',
          'Dependency intelligence (npm / PyPI / crates.io) and team health / bus factor',
          'Six embeddable SVG widgets + a maintenance badge',
          'Continuous monitoring — webhooks re-score and build an event timeline',
          'Historical snapshots and trends over 30 / 90 / 365 days',
          'Pluggable AI summaries: heuristic (default), OpenAI, or Anthropic',
        ].map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <CheckIcon width={16} height={16} className="mt-0.5 shrink-0 text-beacon" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Note>
        Beacon is <span className="text-mist">self-hosted</span> — there is no
        public hosted service. You run the API, dashboard, and (optionally) the
        GitHub App on your own infrastructure. It is MIT licensed.
      </Note>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  2. Quickstart                                                             */
/* -------------------------------------------------------------------------- */

function Quickstart() {
  return (
    <Section id="quickstart" title="Quickstart">
      <p>Clone the monorepo and start the stack. Requires Node 20+ (and Docker for the container path).</p>
      <H3>Option A — Docker</H3>
      <CodeBlock
        label="bash"
        code={`git clone ${site.github}.git
cd beacon
docker compose up`}
      />
      <H3>Option B — Node</H3>
      <CodeBlock
        label="bash"
        code={`git clone ${site.github}.git
cd beacon
npm install
npm run dev`}
      />
      <p>
        The dashboard comes up on{' '}
        <code className="rounded bg-abyss/70 px-1.5 py-0.5 font-mono text-[13px] text-mist">http://localhost:3000</code>{' '}
        and the API alongside it. Set a{' '}
        <code className="font-mono text-mist">GITHUB_TOKEN</code> (see{' '}
        <a href="#self-hosting" className="text-beacon hover:text-gold">Self-hosting</a>) for
        higher GitHub API rate limits.
      </p>
      <H3>Option C — the CLI</H3>
      <p>
        Prefer the terminal? Install the{' '}
        <a
          href={site.npm}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-beacon hover:text-gold"
        >
          @martin-k-m/beacon-cli
        </a>{' '}
        client globally and analyze any repository — no server required. It ships
        as a single self-contained bundle with zero runtime dependencies.
      </p>
      <CodeBlock
        label="bash"
        code={`${site.cliInstall}
${site.cliCommand}`}
      />
      <Note>
        Beacon runs with zero configuration — no database, Redis, GitHub token,
        or AI key required. Without a token it uses anonymous GitHub access or
        bundled demo data; add a token and{' '}
        <code className="font-mono text-mist">DATABASE_URL</code> to persist
        history. See the <a href="#cli" className="text-beacon hover:text-gold">CLI reference</a>{' '}
        for every command.
      </Note>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  3. The Beacon Score                                                       */
/* -------------------------------------------------------------------------- */

function BeaconScore() {
  return (
    <Section id="beacon-score" title="The Beacon Score">
      <p>
        The Beacon Score is a deterministic 0–100 number computed from five
        weighted pillars. Each pillar is scored independently and combined by
        weight — the same math in the CLI, API, and dashboard.
      </p>

      <H3>Pillars &amp; weights</H3>
      <div className="overflow-hidden rounded-md border border-line">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-line bg-slate/50 text-left font-mono text-[11px] uppercase tracking-widest text-muted">
              <th className="px-4 py-2.5 font-medium">Pillar</th>
              <th className="px-4 py-2.5 font-medium">Weight</th>
              <th className="px-4 py-2.5 font-medium">What it measures</th>
            </tr>
          </thead>
          <tbody>
            {pillars.map((p) => (
              <tr key={p.key} className="border-b border-line last:border-0">
                <td className="px-4 py-3 font-medium text-mist">{p.label}</td>
                <td className="px-4 py-3 font-mono text-beacon">
                  {Math.round(p.weight * 100)}%
                </td>
                <td className="px-4 py-3 text-muted">{p.blurb}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H3>Grade bands</H3>
      <div className="overflow-hidden rounded-md border border-line">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-line bg-slate/50 text-left font-mono text-[11px] uppercase tracking-widest text-muted">
              <th className="px-4 py-2.5 font-medium">Grade</th>
              <th className="px-4 py-2.5 font-medium">Score range</th>
            </tr>
          </thead>
          <tbody>
            {gradeRows.map((g) => (
              <tr key={g.label} className="border-b border-line last:border-0">
                <td className="px-4 py-3 font-medium text-mist">{g.label}</td>
                <td className="px-4 py-3 font-mono text-muted">{g.range}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 rounded-lg border border-line bg-abyss/50 p-4">
        <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-faint">
          Preview · sample data
        </div>
        <HealthCard theme="dark" className="w-full max-w-md" />
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  4. AI Advisor                                                             */
/* -------------------------------------------------------------------------- */

function AiAdvisor() {
  return (
    <Section id="ai-advisor" title="AI Advisor">
      <p>
        The Beacon Score tells you <span className="text-mist">where</span> a
        repository stands. The AI Advisor tells you{' '}
        <span className="text-mist">why it moved</span> and{' '}
        <span className="text-mist">what to do next</span>. It reads the same
        snapshot and pillar reasons the score is built from, so every
        recommendation is grounded in the repository&rsquo;s real signals — no
        guesswork.
      </p>
      <ul className="space-y-2">
        {[
          'A short explanation of why health changed since the last snapshot',
          'Prioritized issues (High / Medium / Low), each with a concrete fix',
          'Grounded in the pillar reasons — nothing the score can’t back up',
        ].map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <CheckIcon width={16} height={16} className="mt-0.5 shrink-0 text-beacon" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <p>Read it from the terminal:</p>
      <CodeBlock label="bash" code={`beacon insights ${SAMPLE}`} />
      <p>Or over HTTP:</p>
      <CodeBlock
        label="bash"
        code={`curl https://${embed.hostPlaceholder}/api/repositories/${SAMPLE}/insights`}
      />
      <p>
        Team and dependency health power the same recommendations —{' '}
        <code className="font-mono text-mist">beacon contributors</code> reports
        the bus factor and maintainer load, and{' '}
        <code className="font-mono text-mist">beacon dependencies</code>{' '}
        classifies your dependencies as current, outdated, or unmaintained
        against npm, PyPI, and crates.io.
      </p>
      <Note>
        The Advisor uses your configured AI provider (heuristic by default, or
        OpenAI / Anthropic). Hosted providers fall back to the offline heuristic
        on any error, so <code className="font-mono text-mist">beacon insights</code>{' '}
        always returns something useful.
      </Note>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  5. Widgets                                                                */
/* -------------------------------------------------------------------------- */

function Widgets() {
  const healthUrl = `${embed.widgetBase}/${SAMPLE}?type=health&theme=dark&size=medium`;
  const badgeUrl = `${embed.badgeBase}/${SAMPLE}?theme=dark`;

  return (
    <Section id="widgets" title="Widgets">
      <p>
        Beacon renders embeddable SVG widgets from your instance. There are two
        endpoints — a rich <span className="text-mist">widget</span> endpoint and
        a compact <span className="text-mist">badge</span> endpoint:
      </p>
      <CodeBlock
        label="Embed URL pattern"
        code={`${embed.widgetBase}/:owner/:repo?type=<type>&theme=<theme>&size=<size>
${embed.badgeBase}/:owner/:repo?theme=<theme>&size=<size>`}
      />

      <H3>Widget types</H3>
      <div className="grid gap-2 sm:grid-cols-2">
        {widgets.map((w) => (
          <div key={w.key} className="rounded-md border border-line bg-slate/40 p-3">
            <div className="flex items-center gap-2">
              <code className="font-mono text-[13px] text-mist">{w.key}</code>
              <span className="rounded-full border border-line px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-faint">
                /{w.endpoint}
              </span>
            </div>
            <p className="mt-1 text-[13px] leading-relaxed text-muted">{w.blurb}</p>
          </div>
        ))}
      </div>

      <H3>Options</H3>
      <ul className="space-y-2">
        <li>
          <code className="font-mono text-mist">theme</code> —{' '}
          {embed.themes.join(', ')}
        </li>
        <li>
          <code className="font-mono text-mist">size</code> —{' '}
          {embed.sizes.join(', ')}
        </li>
        <li>
          <code className="font-mono text-mist">type</code> — the widget type
          (widget endpoint only), one of the keys above
        </li>
      </ul>

      <H3>Embed snippets</H3>
      <p>Markdown (README):</p>
      <CodeBlock
        label="Markdown"
        code={`![Beacon health](${healthUrl})`}
      />
      <p>HTML:</p>
      <CodeBlock
        label="HTML"
        code={`<img
  src="${healthUrl}"
  alt="Beacon health card"
  width="440" height="200" />`}
      />
      <p>Script tag (auto-inserts the widget where the tag sits):</p>
      <CodeBlock
        label="HTML"
        code={`<script
  src="https://${embed.hostPlaceholder}/widget/embed.js"
  data-repo="${SAMPLE}"
  data-type="health"
  data-theme="dark"
  async></script>`}
      />

      <H3>Badge</H3>
      <CodeBlock label="Markdown" code={`![Beacon](${badgeUrl})`} />
      <div className="mt-4 rounded-lg border border-line bg-abyss/50 p-4">
        <div className="mb-3 font-mono text-[10px] uppercase tracking-widest text-faint">
          Preview · sample data
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <MaintenanceBadge theme="dark" className="w-[190px]" />
          <LanguageCard theme="dark" className="w-full max-w-xs" />
        </div>
      </div>

      <Note>
        Replace{' '}
        <code className="font-mono text-mist">{embed.hostPlaceholder}</code> with
        your own Beacon host (e.g.{' '}
        <code className="font-mono text-mist">{embed.exampleHost}</code>). See the{' '}
        <a href="/showcase" className="text-beacon hover:text-gold">showcase</a>{' '}
        for every widget in both themes.
      </Note>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  5. GitHub App                                                             */
/* -------------------------------------------------------------------------- */

function GithubApp() {
  return (
    <Section id="github-app" title="GitHub App">
      <p>
        Beacon can run as a GitHub App that installs on your repositories and
        receives webhooks. When a subscribed event arrives, Beacon re-scores the
        repository automatically — no manual re-runs — and updates its history.
      </p>

      <H3>Events</H3>
      <div className="overflow-hidden rounded-md border border-line">
        <table className="w-full border-collapse text-sm">
          <tbody>
            {githubAppEvents.map((e) => (
              <tr key={e.event} className="border-b border-line last:border-0">
                <td className="w-40 px-4 py-3 font-mono text-mist">{e.event}</td>
                <td className="px-4 py-3 text-muted">{e.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        Deliveries hit the API at{' '}
        <code className="rounded bg-abyss/70 px-1.5 py-0.5 font-mono text-[13px] text-mist">
          POST /api/github/webhooks
        </code>
        , which verifies the signature against{' '}
        <code className="font-mono text-mist">GITHUB_WEBHOOK_SECRET</code> and
        queues a re-score.
      </p>

      <Note>
        This is a <span className="text-mist">self-hostable</span> GitHub App —
        there is no public app to install. You register your own GitHub App
        against your Beacon instance and set{' '}
        <code className="font-mono text-mist">GITHUB_APP_ID</code> and{' '}
        <code className="font-mono text-mist">GITHUB_WEBHOOK_SECRET</code>.
      </Note>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Continuous monitoring                                                     */
/* -------------------------------------------------------------------------- */

function Monitoring() {
  return (
    <Section id="monitoring" title="Continuous monitoring">
      <p>
        Beacon does not just score a repository once. With the{' '}
        <a href="#github-app" className="text-beacon hover:text-gold">GitHub App</a>{' '}
        installed, every subscribed webhook is recorded as an event and triggers
        a re-score — so the health history builds itself as the project moves.
      </p>
      <div className="my-2 flex flex-wrap items-center gap-2 font-mono text-[13px] text-muted">
        <span className="rounded border border-line bg-slate/40 px-2 py-1 text-mist">webhook event</span>
        <span className="text-beacon">→</span>
        <span className="rounded border border-line bg-slate/40 px-2 py-1 text-mist">record + re-score</span>
        <span className="text-beacon">→</span>
        <span className="rounded border border-line bg-slate/40 px-2 py-1 text-mist">event timeline</span>
      </div>
      <p>
        Read the recorded timeline from the terminal or the API — the events
        endpoint returns each webhook-driven change, and the history endpoint
        returns the score snapshots behind the 30 / 90 / 365-day trends.
      </p>
      <CodeBlock label="bash" code={`beacon history ${SAMPLE}`} />
      <CodeBlock
        label="bash"
        code={`curl https://${embed.hostPlaceholder}/api/repositories/${SAMPLE}/events`}
      />
      <Note>
        Monitoring is optional — Beacon works fine as a one-shot analyzer
        without it. The event timeline and trends only fill in once the GitHub
        App is delivering webhooks and a{' '}
        <code className="font-mono text-mist">DATABASE_URL</code> is set to
        persist history.
      </Note>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  CLI reference                                                             */
/* -------------------------------------------------------------------------- */

function Cli() {
  return (
    <Section id="cli" title="CLI reference">
      <p>
        The <code className="font-mono text-mist">beacon</code> CLI wraps the
        same engine as the API and dashboard. Install it with{' '}
        <code className="font-mono text-mist">{site.cliInstall}</code>, then:
      </p>
      <div className="space-y-6">
        {cliCommands.map((c) => (
          <div key={c.command}>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <code className="font-mono text-sm font-semibold text-mist">
                {c.command}
              </code>
            </div>
            <p className="mt-1.5 text-[15px] text-muted">{c.summary}</p>
            <div className="mt-3">
              <CodeBlock label="example" code={`$ ${c.example}\n\n${c.output}`} />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  7. REST API                                                               */
/* -------------------------------------------------------------------------- */

function RestApi() {
  return (
    <Section id="api" title="REST API">
      <p>
        The Fastify API exposes analyses, insights, team and dependency health,
        history, the event timeline, widgets, and the webhook receiver over
        HTTP. Key endpoints:
      </p>
      <div className="overflow-hidden rounded-md border border-line">
        <table className="w-full border-collapse text-sm">
          <tbody>
            {apiEndpoints.map((e) => (
              <tr key={e.path} className="border-b border-line last:border-0 align-top">
                <td className="w-16 px-4 py-3">
                  <span
                    className={`font-mono text-[11px] font-semibold ${
                      e.method === 'POST' ? 'text-ember' : 'text-harbor'
                    }`}
                  >
                    {e.method}
                  </span>
                </td>
                <td className="px-4 py-3 font-mono text-[13px] text-mist">{e.path}</td>
                <td className="hidden px-4 py-3 text-muted sm:table-cell">{e.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H3>Example — analyze a repository</H3>
      <CodeBlock
        label="bash"
        code={`curl -X POST https://${embed.hostPlaceholder}/api/analyze \\
  -H 'content-type: application/json' \\
  -d '{"owner":"beacon-labs","repo":"aurora"}'`}
      />
      <H3>Example — historical trend</H3>
      <CodeBlock
        label="bash"
        code={`curl https://${embed.hostPlaceholder}/api/repositories/beacon-labs/aurora/history?range=90`}
      />
      <H3>Example — AI Advisor insights</H3>
      <CodeBlock
        label="bash"
        code={`curl https://${embed.hostPlaceholder}/api/repositories/beacon-labs/aurora/insights`}
      />
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  8. Self-hosting                                                           */
/* -------------------------------------------------------------------------- */

function SelfHosting() {
  return (
    <Section id="self-hosting" title="Self-hosting">
      <p>
        Beacon is designed to run on your own infrastructure. The fastest path is
        Docker Compose; you can also run each app in the monorepo directly.
      </p>

      <H3>Environment variables</H3>
      <div className="overflow-hidden rounded-md border border-line">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-line bg-slate/50 text-left font-mono text-[11px] uppercase tracking-widest text-muted">
              <th className="px-4 py-2.5 font-medium">Variable</th>
              <th className="px-4 py-2.5 font-medium">Req</th>
              <th className="px-4 py-2.5 font-medium">Purpose</th>
            </tr>
          </thead>
          <tbody>
            {envVars.map((v) => (
              <tr key={v.name} className="border-b border-line last:border-0 align-top">
                <td className="px-4 py-3 font-mono text-[13px] text-mist">{v.name}</td>
                <td className="px-4 py-3">
                  {v.required ? (
                    <span className="font-mono text-[11px] text-beacon">yes</span>
                  ) : (
                    <span className="font-mono text-[11px] text-faint">opt</span>
                  )}
                </td>
                <td className="px-4 py-3 text-muted">{v.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H3>Docker</H3>
      <CodeBlock
        label="bash"
        code={`git clone ${site.github}.git
cd beacon
cp .env.example .env      # set GITHUB_TOKEN, DATABASE_URL, …
docker compose up -d`}
      />

      <Note>
        The exact variable names and compose services may evolve — treat the
        repo’s <code className="font-mono text-mist">.env.example</code> and{' '}
        <code className="font-mono text-mist">docker-compose.yml</code> as the
        source of truth for your version.
      </Note>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a href={site.github} target="_blank" rel="noreferrer noopener" className="btn-primary">
          <GitHubIcon width={16} height={16} />
          View the repo
        </a>
        <a href="/showcase" className="btn-secondary">
          Explore widgets
        </a>
      </div>
    </Section>
  );
}
