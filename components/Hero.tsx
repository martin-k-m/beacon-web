'use client';

import { motion } from 'framer-motion';
import { site } from '@/lib/site';
import { HeroBeacon } from './HeroBeacon';
import { GitHubIcon, ArrowIcon } from './icons';

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-16">
      <HeroBeacon />

      <div className="container-x relative flex min-h-[92vh] flex-col items-center justify-center py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-beacon/40 bg-beacon/[0.07] px-3 py-1 font-mono text-xs text-beacon backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-beacon" />
          {site.status}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="max-w-4xl text-balance text-4xl font-bold leading-[1.05] tracking-tight text-mist sm:text-6xl"
        >
          Understand any GitHub{' '}
          <span className="text-signal">repository instantly.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg"
        >
          Beacon analyzes repository health, activity, contributors, and trends
          into actionable insights — a single health score, five pillars, an AI
          summary, and <a href="/showcase" className="text-mist underline decoration-beacon/40 underline-offset-4 hover:decoration-beacon">embeddable widgets</a> for any{' '}
          <code className="text-mist">owner/repo</code>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a href="#demo" className="btn-primary">
            Analyze a Repository
            <ArrowIcon width={16} height={16} />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-secondary"
          >
            <GitHubIcon width={16} height={16} />
            View on GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.46 }}
          className="mt-8 font-mono text-xs text-faint"
        >
          <span className="rounded border border-line bg-abyss/60 px-2.5 py-1.5 text-muted">
            <span className="text-beacon">$</span> {site.cliCommand}
          </span>
          <span className="ml-3">{site.language} · {site.license} · self-hostable</span>
        </motion.div>
      </div>

      {/* fade into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-night" />
    </section>
  );
}
