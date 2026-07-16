'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * Ambient hero backdrop: a harbor grid at night, concentric scan rings, a
 * slowly rotating lighthouse/radar sweep, and repository "nodes" that pulse as
 * the beam passes — the visual metaphor for Beacon scanning a repository.
 * Radial-masked so the centered hero copy stays readable.
 */
export function HeroBeacon() {
  const reduce = useReducedMotion();

  // Repository nodes scattered around the beam, colored by rough health.
  const nodes = [
    { cx: 235, cy: 150, r: 3, kind: 'ok' },
    { cx: 715, cy: 175, r: 3, kind: 'ok' },
    { cx: 175, cy: 330, r: 4, kind: 'warn' },
    { cx: 780, cy: 350, r: 5, kind: 'good' },
    { cx: 300, cy: 445, r: 3, kind: 'ok' },
    { cx: 660, cy: 430, r: 3, kind: 'warn' },
  ];
  const color = (k: string) =>
    k === 'good' ? '#FFCE63' : k === 'warn' ? '#F97316' : '#5A93C4';

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-50 [mask-image:radial-gradient(72%_62%_at_50%_40%,black,transparent)]" />

      <svg
        className="absolute inset-0 h-full w-full [mask-image:radial-gradient(78%_72%_at_50%_42%,black,transparent)]"
        viewBox="0 0 960 560"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <radialGradient id="beamGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F5A524" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#F5A524" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="sweepGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFCE63" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FFCE63" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* concentric scan rings around the beacon */}
        {[70, 130, 195, 265].map((r, i) => (
          <circle
            key={r}
            cx="480"
            cy="285"
            r={r}
            fill="none"
            stroke="#232C3B"
            strokeWidth="1"
            opacity={0.8 - i * 0.14}
          />
        ))}

        {/* rotating lighthouse sweep */}
        <g style={{ transformOrigin: '480px 285px' }}>
          {!reduce && (
            <g className="animate-sweep" style={{ transformOrigin: '480px 285px' }}>
              <path d="M480 285 L480 20 A265 265 0 0 1 730 200 Z" fill="url(#sweepGrad)" />
            </g>
          )}
        </g>

        {/* central beacon core */}
        <circle cx="480" cy="285" r="34" fill="url(#beamGrad)" />
        <circle cx="480" cy="285" r="6" fill="#FFCE63" />
        {!reduce && (
          <circle
            cx="480"
            cy="285"
            r="6"
            fill="none"
            stroke="#F5A524"
            strokeWidth="1.4"
            className="origin-center animate-pulse-ring"
            style={{ transformOrigin: '480px 285px' }}
          />
        )}

        {/* repository nodes */}
        {nodes.map((n, i) => (
          <g key={`${n.cx}-${n.cy}`}>
            <line
              x1="480"
              y1="285"
              x2={n.cx}
              y2={n.cy}
              stroke="#1B2431"
              strokeWidth="1"
            />
            <circle cx={n.cx} cy={n.cy} r={n.r + 6} fill={color(n.kind)} opacity="0.08" />
            <motion.circle
              cx={n.cx}
              cy={n.cy}
              r={n.r}
              fill={color(n.kind)}
              initial={reduce ? undefined : { opacity: 0.3 }}
              animate={reduce ? undefined : { opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 3, delay: i * 0.45, repeat: Infinity }}
            />
          </g>
        ))}
      </svg>

      <Corner className="left-6 top-24" />
      <Corner className="right-6 top-24 rotate-90" />
      <Corner className="bottom-10 left-6 -rotate-90" />
      <Corner className="bottom-10 right-6 rotate-180" />
    </div>
  );
}

function Corner({ className }: { className?: string }) {
  return (
    <svg
      className={`absolute hidden text-line md:block ${className}`}
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
    >
      <path d="M1 9V1h8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
