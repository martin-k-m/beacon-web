'use client';

import { useEffect, useState } from 'react';
import { nav, site } from '@/lib/site';
import { GitHubIcon } from './icons';
import { BeaconMark } from './BeaconMark';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-line bg-night/80 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="group flex items-center gap-2.5">
          <Logo />
          <span className="font-mono text-sm font-semibold tracking-[0.2em] text-mist">
            BEACON
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-mist"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden rounded-full border border-beacon/40 bg-beacon/[0.06] px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-beacon sm:block">
            Open source
          </span>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-primary px-4 py-2 text-xs"
          >
            <GitHubIcon width={14} height={14} />
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <span className="relative grid h-7 w-7 place-items-center rounded border border-beacon/40 bg-beacon/10 text-beacon">
      <span className="absolute inset-0 animate-pulse-node rounded bg-beacon/10" />
      <BeaconMark size={16} className="relative" />
    </span>
  );
}
