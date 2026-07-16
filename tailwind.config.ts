import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Night-harbor surfaces — deep blue-black warming toward the signal
        night: '#070A0F', // page base
        abyss: '#0B0F16', // near-black panels
        slate: '#111722', // raised surface
        panel: '#161D2A',
        line: '#232C3B',
        // Beacon accents — a warm signal light cutting through the dark
        beacon: '#F5A524', // primary amber/gold — the light
        'beacon-dim': '#A9741B',
        gold: '#FFCE63', // bright highlight / flare
        ember: '#F97316', // warm secondary
        // Cool technical counter-accent (harbor water), used sparingly
        harbor: '#5A93C4',
        'harbor-dim': '#34526F',
        // Neutrals
        mist: '#E9EEF5', // cold white text
        muted: '#8B95A7',
        faint: '#4C5768',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '1200px',
      },
      keyframes: {
        sweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        beam: {
          '0%, 100%': { opacity: '0.15' },
          '50%': { opacity: '0.55' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.85)', opacity: '0.6' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        'pulse-node': {
          '0%, 100%': { opacity: '0.35' },
          '50%, 60%': { opacity: '1' },
        },
        'dash-flow': {
          to: { strokeDashoffset: '-24' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        sweep: 'sweep 8s linear infinite',
        beam: 'beam 4s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 3s ease-out infinite',
        'pulse-node': 'pulse-node 3s ease-in-out infinite',
        'dash-flow': 'dash-flow 1s linear infinite',
        'fade-up': 'fade-up 0.6s ease-out both',
      },
      boxShadow: {
        panel: '0 1px 0 0 rgba(255,255,255,0.02) inset, 0 0 0 1px rgba(255,255,255,0.03)',
        glow: '0 0 44px -12px rgba(245,165,36,0.5)',
        'glow-sm': '0 0 24px -10px rgba(245,165,36,0.55)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};

export default config;
