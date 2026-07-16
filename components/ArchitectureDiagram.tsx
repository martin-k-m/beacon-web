'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

export function ArchitectureDiagram() {
  const reduce = useReducedMotion();

  return (
    <section
      id="architecture"
      className="relative overflow-hidden border-y border-line bg-abyss/40 py-24 sm:py-32"
    >
      <div className="absolute inset-0 bg-blueprint opacity-40" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Architecture"
          title="How Beacon is structured"
          description="The GitHub API feeds a single analysis engine that collects a snapshot, computes the score, and generates an AI summary. Three surfaces — the CLI, the REST API, and the dashboard — all read from that one engine, so every product agrees on the numbers."
          align="center"
        />

        <Reveal delay={0.1} className="mt-16">
          <div className="mx-auto max-w-3xl">
            <svg viewBox="0 0 720 540" className="w-full" aria-label="Beacon architecture diagram">
              <defs>
                <marker id="tip" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                  <path d="M1 1 L6 4 L1 7" fill="none" stroke="#4C5768" strokeWidth="1.2" />
                </marker>
              </defs>

              <g stroke="#2A3444" strokeWidth="1.4" fill="none">
                {/* GitHub API -> Engine */}
                <line x1="360" y1="86" x2="360" y2="150" markerEnd="url(#tip)" />
                {/* Engine internals feed the graph node -> then out to surfaces */}
                <line x1="360" y1="242" x2="360" y2="300" markerEnd="url(#tip)" />
                {/* graph -> three surfaces */}
                <path d="M300 330 C210 350, 150 360, 130 396" markerEnd="url(#tip)" />
                <line x1="360" y1="346" x2="360" y2="396" markerEnd="url(#tip)" />
                <path d="M420 330 C510 350, 570 360, 590 396" markerEnd="url(#tip)" />
              </g>

              {!reduce && (
                <motion.circle
                  r="3"
                  fill="#F5A524"
                  cx={360}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 1, 1, 0], cy: [90, 180, 270, 380, 430] }}
                  transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
                />
              )}

              {/* Source */}
              <Node x={270} y={46} w={180} h={44} label="GitHub API" accent="harbor" />

              {/* Engine block wrapping the three internal stages */}
              <rect x={186} y={150} width={348} height={92} rx={8} fill="none" stroke="#2A3444" strokeWidth="1.2" strokeDasharray="4 6" />
              <text x={200} y={168} fill="#8B95A7" fontSize="11" letterSpacing="3" style={{ fontFamily: 'var(--font-jetbrains), monospace' }}>
                @beacon/core — ANALYSIS ENGINE
              </text>
              <MiniNode x={200} y={186} w={100} label="Snapshot" />
              <MiniNode x={310} y={186} w={100} label="Scoring" />
              <MiniNode x={420} y={186} w={100} label="AI Summary" />

              {/* Analysis object */}
              <Node x={250} y={300} w={220} h={46} label="Beacon Analysis" accent="beacon" mono />

              {/* Three surfaces */}
              <Node x={40} y={400} w={180} h={46} label="CLI" accent="muted" sub="beacon analyze" />
              <Node x={270} y={400} w={180} h={46} label="REST API" accent="muted" sub="Fastify" />
              <Node x={500} y={400} w={180} h={46} label="Dashboard" accent="muted" sub="Next.js" />
            </svg>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-4">
          {[
            ['Engine', 'Collect · score · summarize'],
            ['CLI', 'beacon analyze owner/repo'],
            ['REST API', 'Analyses over HTTP'],
            ['Dashboard', 'Explore visually'],
          ].map(([t, d]) => (
            <div key={t} className="bg-slate p-4 text-center">
              <div className="font-mono text-xs uppercase tracking-widest text-mist">{t}</div>
              <div className="mt-1 text-xs text-muted">{d}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Node({
  x,
  y,
  w,
  h,
  label,
  accent,
  mono,
  sub,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  accent: 'beacon' | 'harbor' | 'muted';
  mono?: boolean;
  sub?: string;
}) {
  const stroke = {
    beacon: '#F5A524',
    harbor: '#5A93C4',
    muted: '#4C5768',
  }[accent];

  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={5} fill="#0B0F16" stroke={stroke} strokeWidth="1.3" opacity="0.97" />
      <path d={`M${x} ${y + 8} V${y} H${x + 8}`} stroke={stroke} strokeWidth="1.3" fill="none" />
      <path d={`M${x + w - 8} ${y + h} H${x + w} V${y + h - 8}`} stroke={stroke} strokeWidth="1.3" fill="none" />
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 1 : y + h / 2 + 5}
        textAnchor="middle"
        fill="#E9EEF5"
        fontSize="15"
        fontWeight="600"
        style={{
          fontFamily: mono ? 'var(--font-jetbrains), monospace' : 'var(--font-inter), sans-serif',
          letterSpacing: mono ? '0.12em' : '0',
        }}
      >
        {label}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 14}
          textAnchor="middle"
          fill="#8B95A7"
          fontSize="10.5"
          style={{ fontFamily: 'var(--font-jetbrains), monospace' }}
        >
          {sub}
        </text>
      )}
    </g>
  );
}

function MiniNode({ x, y, w, label }: { x: number; y: number; w: number; label: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={40} rx={4} fill="#111722" stroke="#2A3444" strokeWidth="1.1" />
      <text
        x={x + w / 2}
        y={y + 24}
        textAnchor="middle"
        fill="#C7D0DD"
        fontSize="12.5"
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        {label}
      </text>
    </g>
  );
}
