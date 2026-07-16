import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { GitHubIcon, DocsIcon, CheckIcon, ArrowIcon } from '@/components/icons';
import { pricingTiers, site, type PricingTier } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Pricing — Beacon',
  description:
    'Beacon is free and open source under the MIT license — the whole platform, self-hosted, with no paywalled features.',
  alternates: { canonical: 'https://beacon.blinkdev.me/pricing' },
};

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <section className="relative overflow-hidden py-20 sm:py-28">
          <div className="absolute inset-0 bg-blueprint opacity-30" />
          <div className="container-x relative">
            <SectionHeading
              eyebrow="Pricing"
              title="Free and open source"
              description="Beacon is MIT licensed and fully self-hostable: the whole platform — CLI, SDK, API, dashboard, widgets, and worker — with no seat limits and no paywalled features."
              align="center"
            />

            <div className="mx-auto mt-14 grid max-w-md items-start gap-5">
              {pricingTiers.map((tier, i) => (
                <Reveal key={tier.name} delay={0.05 + i * 0.08}>
                  <TierCard tier={tier} />
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2} className="mx-auto mt-12 max-w-3xl rounded-lg border border-line bg-slate/40 p-6 text-center">
              <p className="text-sm leading-relaxed text-muted">
                <span className="font-semibold text-mist">Run it your way.</span>{' '}
                Deploy Beacon on your own infrastructure with{' '}
                <span className="font-mono text-mist">docker compose up</span>, or
                install the CLI with{' '}
                <span className="font-mono text-mist">npm i -g @beacon/cli</span>.{' '}
                <a href={site.github} target="_blank" rel="noreferrer noopener" className="text-beacon hover:text-gold">
                  Star it on GitHub
                </a>
                .
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function TierCard({ tier }: { tier: PricingTier }) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-xl border p-6 ${
        tier.highlight
          ? 'border-beacon/50 bg-beacon/[0.05] shadow-glow'
          : 'border-line bg-slate/50'
      }`}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-mono text-sm font-semibold uppercase tracking-widest text-mist">
          {tier.name}
        </h3>
        <span className="rounded-full border border-beacon/50 bg-beacon/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-beacon">
          MIT
        </span>
      </div>

      <div className="mt-5 flex items-baseline gap-2">
        <span className="text-3xl font-bold text-mist">{tier.price}</span>
        {tier.cadence && (
          <span className="font-mono text-xs text-faint">/ {tier.cadence}</span>
        )}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted">{tier.tagline}</p>

      <ul className="mt-6 flex-1 space-y-3">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
            <CheckIcon
              width={16}
              height={16}
              className={`mt-0.5 shrink-0 ${tier.highlight ? 'text-beacon' : 'text-faint'}`}
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={tier.cta.href}
        {...(tier.cta.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
        className={`mt-7 ${tier.highlight ? 'btn-primary' : 'btn-secondary'} w-full`}
      >
        {tier.cta.href === site.github ? (
          <GitHubIcon width={15} height={15} />
        ) : tier.cta.href === '/docs' ? (
          <DocsIcon width={15} height={15} />
        ) : null}
        {tier.cta.label}
        <ArrowIcon width={15} height={15} />
      </a>
    </div>
  );
}
