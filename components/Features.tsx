'use client';

import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import {
  RadarIcon,
  GaugeIcon,
  PeopleIcon,
  SparkleIcon,
  DependencyIcon,
  TimelineIcon,
  WidgetIcon,
  WebhookIcon,
  HistoryIcon,
} from './icons';

const features = [
  {
    icon: RadarIcon,
    title: 'Repository Intelligence',
    desc: 'One call collects a full snapshot from the GitHub API — metadata, languages, contributors, commit activity, releases, issues, pull requests, and README signals.',
  },
  {
    icon: GaugeIcon,
    title: 'Health Scores',
    desc: 'A deterministic 0–100 Beacon Score across five weighted pillars — Activity, Community, Maintenance, Documentation, and Security — with an Excellent-to-Critical grade.',
  },
  {
    icon: PeopleIcon,
    title: 'Contributor Analytics',
    desc: 'See the contributor base, the balance of external contribution, and who is carrying the project — with each pillar backed by explainable reasons.',
  },
  {
    icon: TimelineIcon,
    title: 'Timelines & Trends',
    desc: 'Weekly commit-activity histograms and release cadence reveal whether a project is accelerating, steady, or stalling over the last year.',
  },
  {
    icon: SparkleIcon,
    title: 'AI Summaries',
    desc: 'A natural-language "Beacon Summary" — headline, paragraph, highlights, and risks — from pluggable providers: an offline heuristic by default, or OpenAI / Anthropic.',
  },
  {
    icon: DependencyIcon,
    title: 'Dependency & Security Signals',
    desc: 'Language breakdown plus dependency manifests and security signals — security policy, Dependabot, and vulnerability alerts — feed the Security pillar.',
  },
  {
    icon: WidgetIcon,
    title: 'Embeddable Widgets',
    desc: 'Drop a live health card, activity graph, language, contributor, or release widget — or a compact badge — into any README or site as an SVG. Themeable (dark / light / transparent) and sizeable.',
  },
  {
    icon: WebhookIcon,
    title: 'GitHub App & Monitoring',
    desc: 'A self-hostable GitHub App listens for push, pull_request, issues, release, star, and fork webhooks and re-scores a repository as it changes — no manual re-runs.',
  },
  {
    icon: HistoryIcon,
    title: 'Health History',
    desc: 'Beacon snapshots scores over time, so you can see trends across 30, 90, and 365 days — “health improved 4% this month” instead of a single point in time.',
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to read a repository at a glance"
          description="Beacon turns the raw signals GitHub exposes into a structured, explainable picture of a project's health — the same engine powers the CLI, the REST API, and the dashboard."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={0.05 + (i % 3) * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-md border border-line bg-slate/50 p-6 transition-colors hover:border-beacon/40">
                  {/* hover glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-beacon/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="relative grid h-11 w-11 place-items-center rounded-md border border-line bg-abyss/70 text-beacon transition-colors group-hover:border-beacon/40">
                    <Icon width={20} height={20} />
                  </span>
                  <h3 className="relative mt-5 text-base font-semibold text-mist">
                    {f.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted">
                    {f.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
