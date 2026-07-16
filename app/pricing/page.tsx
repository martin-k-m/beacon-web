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
    'Beacon is open source and free to self-host under the MIT license. Hosted Team and Enterprise tiers are planned (roadmap, not yet purchasable).',
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
              title="Free and open source — hosting is optional"
              description="Beacon is MIT licensed and fully self-hostable today: the whole platform, no seat limits, no paywalled features. Managed hosting is on the roadmap for teams that would rather not run the infrastructure."
              align="center"
            />

            <Reveal delay={0.06} className="mx-auto mt-8 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-slate/60 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-beacon" />
                One tier is real today · hosted tiers are roadmap
              </span>
            </Reveal>

            <div className="mx-auto mt-14 grid max-w-5xl items-start gap-5 md:grid-cols-3">
              {pricingTiers.map((tier, i) => (
                <Reveal key={tier.name} delay={0.05 + i * 0.08}>
                  <TierCard tier={tier} />
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2} className="mx-auto mt-12 max-w-3xl rounded-lg border border-line bg-slate/40 p-6 text-center">
              <p className="text-sm leading-relaxed text-muted">
                <span className="font-semibold text-mist">Roadmap, not a store.</span>{' '}
                Beacon has no hosted service yet and nothing here is purchasable.
                The Team and Enterprise columns describe where a managed offering
                could go — prices are undecided. The way to use Beacon today is to{' '}
                <a href={site.github} target="_blank" rel="noreferrer noopener" className="text-beacon hover:text-gold">
                  run it yourself
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
  const planned = tier.status === 'planned';

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
        {tier.highlight ? (
          <span className="rounded-full border border-beacon/50 bg-beacon/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-beacon">
            Available now
          </span>
        ) : (
          <span className="rounded-full border border-line bg-abyss/60 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-muted">
            Planned
          </span>
        )}
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
        {!planned && <ArrowIcon width={15} height={15} />}
      </a>
      {planned && (
        <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-widest text-faint">
          Not yet available
        </p>
      )}
    </div>
  );
}
