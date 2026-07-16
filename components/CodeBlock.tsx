'use client';

import { useState } from 'react';
import { CopyIcon, CheckIcon } from './icons';

/**
 * A styled code block with a copy-to-clipboard affordance. Client component —
 * uses the Clipboard API. `label` is an optional caption (e.g. "Markdown").
 */
export function CodeBlock({
  code,
  label,
  className,
}: {
  code: string;
  label?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard blocked — no-op */
    }
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-md border border-line bg-abyss/70 ${className ?? ''}`}
    >
      {label && (
        <div className="flex items-center justify-between border-b border-line bg-slate/40 px-4 py-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
            {label}
          </span>
        </div>
      )}
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? 'Copied' : 'Copy to clipboard'}
        className="absolute right-2 top-2 z-10 inline-flex items-center gap-1.5 rounded border border-line bg-night/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-muted transition-colors hover:border-beacon/50 hover:text-mist"
        style={label ? { top: '2.75rem' } : undefined}
      >
        {copied ? (
          <>
            <CheckIcon width={12} height={12} className="text-beacon" />
            Copied
          </>
        ) : (
          <>
            <CopyIcon width={12} height={12} />
            Copy
          </>
        )}
      </button>
      <pre className="overflow-x-auto p-4 pr-20 font-mono text-[12.5px] leading-relaxed text-mist">
        <code>{code}</code>
      </pre>
    </div>
  );
}
