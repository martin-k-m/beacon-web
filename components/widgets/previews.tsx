import type { WidgetTheme } from '@/lib/site';

/**
 * Self-drawn inline-SVG previews that RESEMBLE Beacon's real embeddable widgets.
 * Everything here is illustrative SAMPLE DATA for the fictional repo
 * `beacon-labs/aurora` — never a real analysis. Used on /docs and /showcase, so
 * callers must keep them clearly labelled as previews / sample data.
 */

const FONT_SANS = 'var(--font-inter), ui-sans-serif, system-ui, sans-serif';
const FONT_MONO = 'var(--font-jetbrains), ui-monospace, SFMono-Regular, monospace';

type Tokens = {
  bg: string;
  border: string;
  text: string;
  sub: string;
  faint: string;
  track: string;
  accent: string;
  grade: string;
};

function tokens(theme: WidgetTheme): Tokens {
  const light = theme === 'light';
  return {
    bg: theme === 'transparent' ? 'none' : light ? '#FFFFFF' : '#0B0F16',
    border: light ? '#E4E8EE' : '#232C3B',
    text: light ? '#161D2A' : '#E9EEF5',
    sub: light ? '#5A6472' : '#8B95A7',
    faint: light ? '#98A1B0' : '#4C5768',
    track: light ? '#EDF0F4' : '#1A2230',
    accent: '#F5A524',
    grade: light ? '#B4740C' : '#FFCE63',
  };
}

/** Shared sample data — clearly fictional. */
const REPO = { owner: 'beacon-labs', name: 'aurora' };
const SCORE = 92;
const PILLARS = [
  { label: 'Activity', v: 95 },
  { label: 'Community', v: 88 },
  { label: 'Maintenance', v: 90 },
  { label: 'Docs', v: 94 },
  { label: 'Security', v: 90 },
];
const LANGS = [
  { name: 'TypeScript', pct: 68, color: '#F5A524' },
  { name: 'CSS', pct: 14, color: '#5A93C4' },
  { name: 'JavaScript', pct: 11, color: '#FFCE63' },
  { name: 'Shell', pct: 4, color: '#F97316' },
  { name: 'Other', pct: 3, color: '#8B95A7' },
];
const SPARK = [
  6, 9, 7, 12, 10, 14, 11, 8, 13, 16, 12, 18, 15, 20, 17, 14, 19, 22, 18, 24, 21,
  17, 23, 26, 22, 25,
];
const CONTRIBUTORS = [
  { initials: 'JD', name: 'jordan.d', commits: 412, color: '#F5A524' },
  { initials: 'MK', name: 'm.kade', commits: 288, color: '#5A93C4' },
  { initials: 'AV', name: 'avicente', commits: 174, color: '#F97316' },
  { initials: 'RS', name: 'r.sol', commits: 96, color: '#FFCE63' },
];

function gradeLabel(v: number) {
  if (v >= 90) return 'Excellent';
  if (v >= 75) return 'Healthy';
  if (v >= 60) return 'Fair';
  if (v >= 40) return 'At risk';
  return 'Critical';
}

/** A card frame shared by all rich widgets. */
function Frame({
  t,
  w,
  h,
  children,
}: {
  t: Tokens;
  w: number;
  h: number;
  children: React.ReactNode;
}) {
  return (
    <>
      <rect
        x={0.75}
        y={0.75}
        width={w - 1.5}
        height={h - 1.5}
        rx={10}
        fill={t.bg === 'none' ? 'transparent' : t.bg}
        stroke={t.border}
        strokeWidth={1.5}
      />
      {children}
    </>
  );
}

type PreviewProps = {
  theme?: WidgetTheme;
  className?: string;
  title?: string;
};

/* -------------------------------------------------------------------------- */
/*  1. Repository Health Card                                                  */
/* -------------------------------------------------------------------------- */

export function HealthCard({ theme = 'dark', className }: PreviewProps) {
  const t = tokens(theme);
  const W = 440;
  const H = 200;
  const cx = 78;
  const cy = 100;
  const r = 34;
  const c = 2 * Math.PI * r;
  const off = c - (SCORE / 100) * c;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={className}
      role="img"
      aria-label={`Sample Beacon health card for ${REPO.owner}/${REPO.name}`}
    >
      <defs>
        <linearGradient id="hc-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFCE63" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>
      <Frame t={t} w={W} h={H}>
        {/* score ring */}
        <g transform={`rotate(-90 ${cx} ${cy})`}>
          <circle cx={cx} cy={cy} r={r} fill="none" stroke={t.track} strokeWidth={9} />
          <circle
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke="url(#hc-ring)"
            strokeWidth={9}
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={off}
          />
        </g>
        <text x={cx} y={cy - 2} textAnchor="middle" fontSize="26" fontWeight="700" fill={t.text} style={{ fontFamily: FONT_MONO }}>
          {SCORE}
        </text>
        <text x={cx} y={cy + 14} textAnchor="middle" fontSize="9" letterSpacing="1.5" fill={t.faint} style={{ fontFamily: FONT_MONO }}>
          / 100
        </text>

        {/* header */}
        <text x={140} y={34} fontSize="14" fill={t.sub} style={{ fontFamily: FONT_MONO }}>
          {REPO.owner} /{' '}
          <tspan fill={t.text} fontWeight="700">{REPO.name}</tspan>
        </text>
        <rect x={140} y={44} width={94} height={22} rx={5} fill="none" stroke={t.grade} strokeWidth={1.2} opacity={0.9} />
        <text x={187} y={59} textAnchor="middle" fontSize="10.5" letterSpacing="1.5" fontWeight="700" fill={t.grade} style={{ fontFamily: FONT_MONO }}>
          {gradeLabel(SCORE).toUpperCase()}
        </text>

        {/* pillar bars */}
        {PILLARS.map((p, i) => {
          const y = 88 + i * 22;
          const barX = 205;
          const barW = 200;
          return (
            <g key={p.label}>
              <text x={140} y={y + 4} fontSize="10.5" fill={t.sub} style={{ fontFamily: FONT_MONO }}>
                {p.label}
              </text>
              <rect x={barX} y={y - 5} width={barW} height={7} rx={3.5} fill={t.track} />
              <rect x={barX} y={y - 5} width={(barW * p.v) / 100} height={7} rx={3.5} fill={t.accent} />
              <text x={W - 16} y={y + 4} textAnchor="end" fontSize="10" fill={t.faint} style={{ fontFamily: FONT_MONO }}>
                {p.v}
              </text>
            </g>
          );
        })}
      </Frame>
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  2. Activity Graph                                                          */
/* -------------------------------------------------------------------------- */

export function ActivityGraph({ theme = 'dark', className }: PreviewProps) {
  const t = tokens(theme);
  const W = 440;
  const H = 170;
  const max = Math.max(...SPARK);
  const plotX = 24;
  const plotW = W - 48;
  const baseY = 132;
  const plotH = 74;
  const gap = 3;
  const barW = (plotW - gap * (SPARK.length - 1)) / SPARK.length;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className={className} role="img" aria-label={`Sample commit activity for ${REPO.owner}/${REPO.name}`}>
      <Frame t={t} w={W} h={H}>
        <text x={24} y={34} fontSize="13" fill={t.text} fontWeight="700" style={{ fontFamily: FONT_SANS }}>
          Commit activity
        </text>
        <text x={W - 24} y={34} textAnchor="end" fontSize="10.5" fill={t.sub} style={{ fontFamily: FONT_MONO }}>
          last 26 weeks
        </text>
        {SPARK.map((v, i) => {
          const h = Math.max(3, (v / max) * plotH);
          const x = plotX + i * (barW + gap);
          return (
            <rect
              key={i}
              x={x}
              y={baseY - h}
              width={barW}
              height={h}
              rx={1.5}
              fill={t.accent}
              opacity={0.45 + (v / max) * 0.55}
            />
          );
        })}
        <line x1={24} y1={baseY + 4} x2={W - 24} y2={baseY + 4} stroke={t.border} strokeWidth={1} />
        <text x={24} y={155} fontSize="10.5" fill={t.grade} fontWeight="700" style={{ fontFamily: FONT_MONO }}>
          +412 commits
        </text>
        <text x={112} y={155} fontSize="10.5" fill={t.sub} style={{ fontFamily: FONT_MONO }}>
          · trending up
        </text>
      </Frame>
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  3. Language Card                                                           */
/* -------------------------------------------------------------------------- */

export function LanguageCard({ theme = 'dark', className }: PreviewProps) {
  const t = tokens(theme);
  const W = 440;
  const H = 170;
  const barX = 24;
  const barW = W - 48;
  let acc = 0;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className={className} role="img" aria-label={`Sample language breakdown for ${REPO.owner}/${REPO.name}`}>
      <Frame t={t} w={W} h={H}>
        <text x={24} y={34} fontSize="13" fill={t.text} fontWeight="700" style={{ fontFamily: FONT_SANS }}>
          Languages
        </text>
        {/* stacked bar */}
        <g>
          {LANGS.map((l) => {
            const x = barX + (barW * acc) / 100;
            const w = (barW * l.pct) / 100;
            acc += l.pct;
            return <rect key={l.name} x={x} y={48} width={w} height={10} fill={l.color} />;
          })}
          <rect x={barX} y={48} width={barW} height={10} rx={5} fill="none" stroke={t.border} strokeWidth={1} />
        </g>
        {/* legend, two columns */}
        {LANGS.map((l, i) => {
          const col = i % 2;
          const row = Math.floor(i / 2);
          const x = 24 + col * 210;
          const y = 88 + row * 24;
          return (
            <g key={l.name}>
              <rect x={x} y={y - 8} width={9} height={9} rx={2} fill={l.color} />
              <text x={x + 16} y={y} fontSize="11" fill={t.sub} style={{ fontFamily: FONT_MONO }}>
                {l.name}
              </text>
              <text x={x + 178} y={y} textAnchor="end" fontSize="11" fill={t.faint} style={{ fontFamily: FONT_MONO }}>
                {l.pct}%
              </text>
            </g>
          );
        })}
      </Frame>
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  4. Contributor Card                                                        */
/* -------------------------------------------------------------------------- */

export function ContributorCard({ theme = 'dark', className }: PreviewProps) {
  const t = tokens(theme);
  const W = 440;
  const H = 170;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className={className} role="img" aria-label={`Sample contributors for ${REPO.owner}/${REPO.name}`}>
      <Frame t={t} w={W} h={H}>
        <text x={24} y={34} fontSize="13" fill={t.text} fontWeight="700" style={{ fontFamily: FONT_SANS }}>
          Contributors
        </text>
        <text x={W - 24} y={34} textAnchor="end" fontSize="10.5" fill={t.sub} style={{ fontFamily: FONT_MONO }}>
          28 total
        </text>
        {/* avatar row */}
        {CONTRIBUTORS.map((ct, i) => {
          const x = 40 + i * 34;
          return (
            <g key={ct.name}>
              <circle cx={x} cy={70} r={16} fill={ct.color} opacity={0.18} />
              <circle cx={x} cy={70} r={16} fill="none" stroke={ct.color} strokeWidth={1.4} />
              <text x={x} y={74} textAnchor="middle" fontSize="10" fontWeight="700" fill={t.text} style={{ fontFamily: FONT_MONO }}>
                {ct.initials}
              </text>
            </g>
          );
        })}
        <circle cx={40 + CONTRIBUTORS.length * 34} cy={70} r={16} fill={t.track} />
        <text x={40 + CONTRIBUTORS.length * 34} y={74} textAnchor="middle" fontSize="9.5" fill={t.sub} style={{ fontFamily: FONT_MONO }}>
          +24
        </text>
        {/* top 3 list */}
        {CONTRIBUTORS.slice(0, 3).map((ct, i) => {
          const y = 112 + i * 18;
          return (
            <g key={ct.name}>
              <circle cx={30} cy={y - 4} r={3} fill={ct.color} />
              <text x={42} y={y} fontSize="11" fill={t.sub} style={{ fontFamily: FONT_MONO }}>
                {ct.name}
              </text>
              <text x={W - 24} y={y} textAnchor="end" fontSize="11" fill={t.faint} style={{ fontFamily: FONT_MONO }}>
                {ct.commits} commits
              </text>
            </g>
          );
        })}
      </Frame>
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  5. Release Card                                                            */
/* -------------------------------------------------------------------------- */

export function ReleaseCard({ theme = 'dark', className }: PreviewProps) {
  const t = tokens(theme);
  const W = 440;
  const H = 140;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className={className} role="img" aria-label={`Sample latest release for ${REPO.owner}/${REPO.name}`}>
      <Frame t={t} w={W} h={H}>
        <text x={24} y={34} fontSize="11" letterSpacing="1.5" fill={t.sub} style={{ fontFamily: FONT_MONO }}>
          LATEST RELEASE
        </text>
        {/* tag */}
        <rect x={24} y={48} width={92} height={30} rx={6} fill="none" stroke={t.accent} strokeWidth={1.3} />
        <text x={70} y={68} textAnchor="middle" fontSize="15" fontWeight="700" fill={t.grade} style={{ fontFamily: FONT_MONO }}>
          v2.4.0
        </text>
        <text x={130} y={62} fontSize="14" fontWeight="700" fill={t.text} style={{ fontFamily: FONT_SANS }}>
          Aurora — Borealis
        </text>
        <text x={130} y={80} fontSize="11" fill={t.sub} style={{ fontFamily: FONT_MONO }}>
          released 2026-06-28
        </text>
        <line x1={24} y1={98} x2={W - 24} y2={98} stroke={t.border} strokeWidth={1} />
        <text x={24} y={120} fontSize="11" fill={t.faint} style={{ fontFamily: FONT_MONO }}>
          38 commits since · 14 releases total
        </text>
      </Frame>
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  6. Maintenance Badge (shields-style)                                       */
/* -------------------------------------------------------------------------- */

export function MaintenanceBadge({ theme = 'dark', className }: PreviewProps) {
  const t = tokens(theme);
  const W = 208;
  const H = 34;
  const splitX = 108;
  const leftFill = theme === 'light' ? '#2A3444' : '#161D2A';

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className={className} role="img" aria-label={`Sample Beacon maintenance badge for ${REPO.owner}/${REPO.name}`}>
      <rect x={0.5} y={0.5} width={splitX} height={H - 1} rx={6} fill={leftFill} />
      <rect x={splitX - 6} y={0.5} width={W - splitX + 5.5} height={H - 1} rx={6} fill={t.accent} />
      {/* seam mask */}
      <rect x={splitX - 6} y={0.5} width={6} height={H - 1} fill={leftFill} />
      {/* beacon dot */}
      <circle cx={18} cy={H / 2} r={4} fill="#FFCE63" />
      <text x={32} y={H / 2 + 4} fontSize="11" letterSpacing="0.5" fill="#E9EEF5" style={{ fontFamily: FONT_MONO }}>
        beacon
      </text>
      <text x={splitX + 44} y={H / 2 + 4} textAnchor="middle" fontSize="11" fontWeight="700" fill="#0B0F16" style={{ fontFamily: FONT_MONO }}>
        92 · Excellent
      </text>
    </svg>
  );
}

/** Registry so pages can map over widget keys → preview components. */
export const widgetPreviews: Record<
  string,
  (props: PreviewProps) => React.JSX.Element
> = {
  health: HealthCard,
  activity: ActivityGraph,
  language: LanguageCard,
  contributor: ContributorCard,
  release: ReleaseCard,
  maintenance: MaintenanceBadge,
};
