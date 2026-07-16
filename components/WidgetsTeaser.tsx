import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { HealthCard, ActivityGraph, MaintenanceBadge } from './widgets/previews';
import { WidgetIcon, ArrowIcon } from './icons';

/**
 * Landing-page teaser for the embeddable widget system. Previews are self-drawn
 * SVGs with sample data — clearly labelled — linking out to /showcase and /docs.
 */
export function WidgetsTeaser() {
  return (
    <section id="widgets" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Widgets"
          title="Embed your repository’s health anywhere"
          description="Beacon serves live SVG widgets and badges from your own instance. Drop a health card into a README, an activity graph into a portfolio, or a maintenance badge at the top of any project — themeable and sizeable."
          align="center"
        />

        <Reveal delay={0.06} className="mt-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-beacon/40 bg-beacon/[0.07] px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-beacon">
            <span className="h-1.5 w-1.5 rounded-full bg-beacon" />
            Previews with sample data
          </span>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
          <Reveal delay={0.08} className="md:col-span-2">
            <div className="rounded-xl border border-line bg-slate/40 p-5">
              <HealthCard theme="dark" className="w-full" />
            </div>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="h-full rounded-xl border border-line bg-slate/40 p-5">
              <ActivityGraph theme="dark" className="w-full" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex h-full flex-col items-start justify-center gap-4 rounded-xl border border-line bg-slate/40 p-5">
              <MaintenanceBadge theme="dark" className="w-[190px]" />
              <p className="text-sm leading-relaxed text-muted">
                Six widget types plus a shields-style badge — in{' '}
                <span className="text-mist">dark</span>,{' '}
                <span className="text-mist">light</span>, and{' '}
                <span className="text-mist">transparent</span> themes.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.26} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="/showcase" className="btn-primary">
            <WidgetIcon width={16} height={16} />
            See the showcase
            <ArrowIcon width={16} height={16} />
          </a>
          <a href="/docs#widgets" className="btn-secondary">
            Embed docs
          </a>
        </Reveal>
      </div>
    </section>
  );
}
