# Beacon — Website

The marketing site for **Beacon**, an open-source **GitHub repository
intelligence platform**. Beacon turns any repository into a clear health score
and actionable insights — activity, contributors, timelines, languages, and an
AI-generated summary.

Live at **https://beacon.blinkdev.me**.

> ℹ️ **Accuracy note:** Beacon is a **newly published** open-source project. The
> tool repository ([`martin-k-m/beacon`](https://github.com/martin-k-m/beacon))
> is a real, working TypeScript monorepo — an analysis engine, a REST API, a
> Next.js dashboard, and a CLI — but it has **no adoption history yet**. This
> site therefore shows **no fabricated metrics** (stars, contributors,
> downloads, "trusted by"), and the dashboard preview is clearly labeled as
> **sample/demo data**.

## Accuracy standard

Treat every public claim on this site as something a visitor could verify
against the tool repo. If it can't be verified there, it must be **removed,
rewritten, or labeled as roadmap**. Concretely, this site avoids:

- adoption numbers (stars, contributors, downloads, users) — Beacon has no
  history to cite yet;
- feature claims for things that aren't implemented (those are framed as
  *Roadmap*);
- unlabeled demo data — the dashboard preview is explicitly **sample data**
  (the tool ships equivalent fixtures behind `beacon analyze --demo`);
- install/usage commands that don't actually work.

Site copy lives in [`lib/site.ts`](lib/site.ts) — the header comment there
restates this rule. Keep the feature list, pillars, and grades in that file in
sync with `@beacon/core` in the tool repo.

## What Beacon actually does (verifiable in the repo)

- **Health Score** — a deterministic 0–100 score across five weighted pillars:
  Activity (30%), Community (20%), Maintenance (20%), Documentation (15%), and
  Security (15%), graded Excellent / Healthy / Fair / At risk / Critical.
- **Repository intelligence** — a full snapshot from the GitHub API: metadata,
  languages, contributors, commit activity, releases, issues, PRs, README, and
  security signals.
- **Embeddable widgets** — six SVG widgets (Repository Health Card, Activity
  Graph, Language, Contributor, Release cards, and a Maintenance Badge) served
  from a self-hosted Beacon instance, themeable (dark / light / transparent)
  and sizeable.
- **Self-hostable GitHub App** — receives `push`, `pull_request`, `issues`,
  `release`, `star`, and `fork` webhooks and re-scores repositories as they
  change (you register your own app; there is no public installable app).
- **Historical analytics** — health snapshots over time, with trends over
  30 / 90 / 365 days.
- **AI "Beacon Summary"** — pluggable providers (offline heuristic by default,
  or OpenAI / Anthropic).
- **Surfaces** — a `beacon analyze | widget | badge | watch owner/repo` CLI, a
  Fastify REST API, and a Next.js dashboard, all reading from the same
  `@beacon/core` engine.

## Pages

- **`/`** — landing page: hero, features, sample dashboard, widget teaser,
  open source, architecture, ecosystem.
- **`/docs`** — the primary documentation (sidebar + content): introduction,
  quickstart, the Beacon Score, widgets, GitHub App, CLI, REST API, and
  self-hosting.
- **`/showcase`** — a gallery of the embeddable widgets in dark/light themes
  with copy-paste embed snippets and "in context" mockups (all sample data).

All widget previews on the site are **self-drawn inline SVGs with sample
data**, clearly labelled — they resemble the real widgets but are not live
analyses.

## Stack

- **Next.js** (App Router, static export)
- **React 19**
- **Tailwind CSS 3**
- **Framer Motion** for animations
- **Inter** + **JetBrains Mono** via `next/font`

Fully static — no server, no runtime dependencies.

## Local development

Requires Node 20+.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Structure

```
app/
  page.tsx                   Landing page composition
  docs/                      /docs — primary documentation (sidebar + sections)
  showcase/                  /showcase — widget gallery + in-context mockups
components/
  Nav / Hero / HeroBeacon    Header + hero with the lighthouse-sweep visual
  Features                   Repository-intelligence capabilities (incl. widgets,
                             GitHub App, health history)
  DemoDashboard              Sample repo dashboard (labeled demo data)
  WidgetsTeaser              Landing-page widget preview section
  OpenSource                 Honest open-source facts + monorepo contents
  ArchitectureDiagram        GitHub API → engine → CLI / API / dashboard
  Ecosystem                  Blink Dev lifecycle (Create/Build/Protect/Understand)
  Footer                     Links + Blink Dev ecosystem
  CodeBlock                  Copy-to-clipboard code block
  docs/DocsSidebar           Scroll-spy sidebar for /docs
  widgets/previews           Self-drawn inline-SVG widget previews (sample data)
  Reveal / SectionHeading    Shared scroll-reveal + heading primitives
lib/site.ts     Copy, links, pillars, grades, ecosystem, widgets, GitHub App
                events, CLI, API endpoints, env vars — accuracy rule lives here
```

## Deployment

Pushes to `main` build and deploy to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). Served from the
custom domain root (`public/CNAME` → `beacon.blinkdev.me`). In the repo's Pages
settings, set **Source** to **GitHub Actions**.

## License

This website repository does not currently include a `LICENSE` file. The Beacon
tool itself is licensed **MIT** (see the
[tool repository](https://github.com/martin-k-m/beacon)).
