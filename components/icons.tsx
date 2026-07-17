/** Small inline icon set — thin strokes to match the technical/harbor feel. */
import type { SVGProps } from 'react';

const base = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props} strokeWidth={0} fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.22-3.37-1.22-.46-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/** Radar / repository intelligence scan. */
export function RadarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M20.5 12a8.5 8.5 0 1 1-4.2-7.3" />
      <path d="M16.5 12a4.5 4.5 0 1 1-2.4-4" />
      <path d="M12 12 20 5" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Health score gauge. */
export function GaugeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 15a8 8 0 0 1 16 0" />
      <path d="M12 15l4-4" />
      <circle cx="12" cy="15" r="1.2" fill="currentColor" stroke="none" />
      <path d="M4 15h1M19 15h1M12 7v1" />
    </svg>
  );
}

/** Contributors / people. */
export function PeopleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.5a3 3 0 0 1 0 5.4M17 14.2a5.5 5.5 0 0 1 3.5 5.1" />
    </svg>
  );
}

/** AI summary / sparkle. */
export function SparkleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l1.6 4.6L18 9l-4.4 1.4L12 15l-1.6-4.6L6 9l4.4-1.4L12 3Z" />
      <path d="M18.5 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" />
    </svg>
  );
}

/** Dependency insights / package graph. */
export function DependencyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2 3 7v10l9 5 9-5V7Z" />
      <path d="M3 7l9 5 9-5M12 12v10" />
    </svg>
  );
}

/** Timeline / commit trend. */
export function TimelineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3 17l5-6 4 3 4-7 5 5" />
      <path d="M3 21h18" />
    </svg>
  );
}

export function TerminalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="m4 17 6-5-6-5" />
      <path d="M12 19h8" />
    </svg>
  );
}

export function ServerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="7" rx="1.5" />
      <rect x="3" y="13" width="18" height="7" rx="1.5" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </svg>
  );
}

export function GridIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="7" height="9" rx="1.4" />
      <rect x="14" y="3" width="7" height="5" rx="1.4" />
      <rect x="14" y="12" width="7" height="9" rx="1.4" />
      <rect x="3" y="16" width="7" height="5" rx="1.4" />
    </svg>
  );
}

export function DocsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H14l6 6v10.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 19.5Z" />
      <path d="M14 3v6h6M8 13h8M8 17h5" />
    </svg>
  );
}

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9L12 3.5Z" />
    </svg>
  );
}

export function ForkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="6" cy="5" r="2.2" />
      <circle cx="18" cy="5" r="2.2" />
      <circle cx="12" cy="19" r="2.2" />
      <path d="M6 7.2v3a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-3M12 13.2v3.6" />
    </svg>
  );
}

/** Embeddable widget / badge card. */
export function WidgetIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
      <path d="M7 14h5M7 16.5h3" />
      <circle cx="16.5" cy="15" r="1.6" />
    </svg>
  );
}

/** Webhook / GitHub App events. */
export function WebhookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M8.5 9.5a3.5 3.5 0 1 1 5 3.16" />
      <path d="M12 12.7 8 19a3.5 3.5 0 1 1-2.3-1.2" />
      <path d="M13 12.7 16 19a3.5 3.5 0 1 0 2.3-6.3" />
      <path d="M7 19h6M15 12.9l3-.2" />
    </svg>
  );
}

/** Historical health / trend over time. */
export function HistoryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1" />
      <path d="M6 3.5V8h4.5" />
      <path d="M12 8v4.2l3 1.8" />
    </svg>
  );
}

/** AI advisor / recommendation — lightbulb. */
export function AdvisorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M9.5 18h5M10.5 21h3" />
      <path d="M12 3a6 6 0 0 0-3.6 10.8c.5.4.85 1 .9 1.65l.05.55h5.3l.05-.55c.05-.65.4-1.25.9-1.65A6 6 0 0 0 12 3Z" />
    </svg>
  );
}

/** Team health / bus factor — a maintainer within the group. */
export function TeamHealthIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="7.5" r="3" />
      <path d="M6 20a6 6 0 0 1 12 0" />
      <path d="M4.5 13 3 11.5 4.5 10M19.5 13 21 11.5 19.5 10" />
    </svg>
  );
}

/** Security / shield with a check. */
export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l7 3v5c0 4.4-3 7.7-7 9-4-1.3-7-4.6-7-9V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

/** Continuous monitoring / event pulse. */
export function PulseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3 12h4l2-5 3 10 2-7 1.5 3H21" />
    </svg>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 12.5 9 17l10.5-11" />
    </svg>
  );
}

export function CopyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M15 5.5A1.5 1.5 0 0 0 13.5 4h-8A1.5 1.5 0 0 0 4 5.5v8A1.5 1.5 0 0 0 5.5 15" />
    </svg>
  );
}
