'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { StarIcon, ForkIcon, SparkleIcon } from './icons';

/**
 * A realistic — but entirely fictional — repository dashboard preview. Every
 * number here is illustrative SAMPLE DATA, mirroring the shape of a real Beacon
 * analysis (the tool ships equivalent fixtures behind `beacon analyze --demo`).
 * It is clearly labeled as demo data per the site's accuracy standard.
 */

const SCORE = 92; // grade band: Excellent (>= 90)

const PILLARS = [
  { label: 'Activity', value: 95, weight: '30%' },
  { label: 'Community', value: 88, weight: '20%' },
  { label: 'Maintenance', value: 90, weight: '20%' },
  { label: 'Documentation', value: 94, weight: '15%' },
  { label: 'Security', value: 90, weight: '15%' },
];

const LANGUAGES = [
  { name: 'TypeScript', pct: 68, color: '#F5A524' },
  { name: 'CSS', pct: 14, color: '#5A93C4' },
  { name: 'JavaScript', pct: 11, color: '#FFCE63' },
  { name: 'Shell', pct: 4, color: '#F97316' },
  { name: 'Other', pct: 3, color: '#4C5768' },
];

// 24 weeks of illustrative commit counts for the sparkline.
const SPARK = [
  6, 9, 7, 12, 10, 14, 11, 8, 13, 16, 12, 18, 15, 20, 17, 14, 19, 22, 18, 24,
  21, 17, 23, 26,
];

function scoreColor(v: number) {
  if (v >= 90) return '#FFCE63';
  if (v >= 75) return '#F5A524';
  if (v >= 60) return '#F97316';
  return '#F97316';
}

export function DemoDashboard() {
  const reduce = useReducedMotion();

  return (
    <section
      id="demo"
      className="relative overflow-hidden border-y border-line bg-abyss/40 py-24 sm:py-32"
    >
      <div className="absolute inset-0 bg-blueprint opacity-40" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Live preview"
          title="A repository, distilled"
          description="This is the kind of report Beacon produces for any repository — a headline score, five explainable pillars, activity trends, and a language breakdown, all in one view."
          align="center"
        />

        {/* Sample-data label — required by the accuracy standard */}
        <Reveal delay={0.05} className="mt-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-beacon/40 bg-beacon/[0.07] px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-beacon">
            <span className="h-1.5 w-1.5 rounded-full bg-beacon" />
            Sample dashboard — demo data
          </span>
        </Reveal>

        <Reveal delay={0.12} className="mx-auto mt-10 max-w-5xl">
          <div className="overflow-hidden rounded-xl border border-line bg-slate/70 shadow-glow backdrop-blur">
            {/* window chrome */}
            <div className="flex items-center gap-2 border-b border-line bg-abyss/60 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="ml-3 font-mono text-xs text-muted">
                beacon.blinkdev.me/beacon-labs/aurora
              </span>
              <span className="ml-auto rounded border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-faint">
                demo
              </span>
            </div>

            <div className="p-6 sm:p-8">
              {/* header row */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 font-mono text-sm text-mist">
                    <span className="text-muted">beacon-labs /</span>
                    <span className="font-semibold">aurora</span>
                  </div>
                  <p className="mt-1 max-w-md text-sm text-muted">
                    Real-time data-sync engine for local-first apps.
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-4 font-mono text-xs text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <StarIcon width={13} height={13} className="text-beacon" />
                      18.4k
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <ForkIcon width={13} height={13} className="text-harbor" />
                      1.2k
                    </span>
                    <span>TypeScript</span>
                    <span>MIT</span>
                  </div>
                </div>
                <span className="rounded-md border border-gold/40 bg-gold/[0.08] px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-gold">
                  Excellent
                </span>
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,220px)_1fr]">
                {/* score ring */}
                <div className="flex flex-col items-center justify-center rounded-lg border border-line bg-abyss/50 p-6">
                  <ScoreRing value={SCORE} reduce={!!reduce} />
                  <div className="mt-4 text-center">
                    <div className="font-mono text-xs uppercase tracking-widest text-muted">
                      Beacon Score
                    </div>
                    <div className="mt-1 text-xs text-faint">Weighted across 5 pillars</div>
                  </div>
                </div>

                {/* pillar bars */}
                <div className="flex flex-col justify-center gap-4">
                  {PILLARS.map((p, i) => (
                    <div key={p.label}>
                      <div className="flex items-baseline justify-between font-mono text-xs">
                        <span className="text-mist">
                          {p.label}
                          <span className="ml-2 text-faint">{p.weight}</span>
                        </span>
                        <span className="text-muted">{p.value}</span>
                      </div>
                      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-abyss">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: scoreColor(p.value) }}
                          initial={reduce ? undefined : { width: 0 }}
                          whileInView={reduce ? undefined : { width: `${p.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* lower row: activity sparkline + languages + summary */}
              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {/* commit activity */}
                <div className="rounded-lg border border-line bg-abyss/50 p-5">
                  <div className="font-mono text-xs uppercase tracking-widest text-muted">
                    Commit activity
                  </div>
                  <div className="mt-1 text-xs text-faint">Last 24 weeks</div>
                  <Sparkline data={SPARK} reduce={!!reduce} />
                  <div className="mt-2 font-mono text-xs text-mist">
                    <span className="text-beacon">+412</span> commits · trending up
                  </div>
                </div>

                {/* languages */}
                <div className="rounded-lg border border-line bg-abyss/50 p-5">
                  <div className="font-mono text-xs uppercase tracking-widest text-muted">
                    Languages
                  </div>
                  <div className="mt-3 flex h-2 overflow-hidden rounded-full">
                    {LANGUAGES.map((l) => (
                      <span
                        key={l.name}
                        style={{ width: `${l.pct}%`, backgroundColor: l.color }}
                        className="h-full"
                      />
                    ))}
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {LANGUAGES.map((l) => (
                      <li key={l.name} className="flex items-center justify-between font-mono text-xs">
                        <span className="flex items-center gap-2 text-muted">
                          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: l.color }} />
                          {l.name}
                        </span>
                        <span className="text-faint">{l.pct}%</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* AI summary */}
                <div className="rounded-lg border border-line bg-abyss/50 p-5 md:col-span-2 lg:col-span-1">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted">
                    <SparkleIcon width={14} height={14} className="text-beacon" />
                    Beacon Summary
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Aurora is a{' '}
                    <span className="text-mist">thriving, well-maintained</span> project:
                    frequent commits, timely releases, and strong docs. Watch the
                    single-maintainer bus factor as it grows.
                  </p>
                  <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-faint">
                    Generated · heuristic provider
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-6 text-center">
          <p className="font-mono text-xs text-faint">
            Illustrative data for a fictional repository. Run it for real with{' '}
            <span className="text-muted">beacon analyze owner/repo</span>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ScoreRing({ value, reduce }: { value: number; reduce: boolean }) {
  const size = 148;
  const stroke = 12;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#232C3B" strokeWidth={stroke} />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          initial={reduce ? { strokeDashoffset: offset } : { strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
        />
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFCE63" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-mono text-4xl font-bold text-mist">{value}</span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-faint">/ 100</span>
      </div>
    </div>
  );
}

function Sparkline({ data, reduce }: { data: number[]; reduce: boolean }) {
  const w = 220;
  const h = 56;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / (max - min || 1)) * (h - 6) - 3;
    return [x, y] as const;
  });
  const line = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');
  const area = `${line} L${w} ${h} L0 ${h} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-3 w-full" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5A524" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#F5A524" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#sparkFill)" />
      <motion.path
        d={line}
        fill="none"
        stroke="#F5A524"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduce ? undefined : { pathLength: 0 }}
        whileInView={reduce ? undefined : { pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
    </svg>
  );
}
