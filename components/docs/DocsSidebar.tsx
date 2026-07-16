'use client';

import { useEffect, useState } from 'react';
import { docsSections } from '@/lib/site';

/**
 * Sticky docs sidebar with scroll-spy. Highlights the section currently in
 * view. Anchors are plain in-page links so it degrades fine without JS.
 */
export function DocsSidebar() {
  const [active, setActive] = useState<string>(docsSections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-96px 0px -70% 0px', threshold: 0 },
    );
    docsSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Documentation sections" className="space-y-1">
      <div className="eyebrow mb-3">On this page</div>
      {docsSections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          aria-current={active === s.id ? 'true' : undefined}
          className={`block border-l-2 py-1.5 pl-3 font-mono text-[13px] transition-colors ${
            active === s.id
              ? 'border-beacon text-beacon'
              : 'border-line text-muted hover:border-faint hover:text-mist'
          }`}
        >
          {s.label}
        </a>
      ))}
    </nav>
  );
}
