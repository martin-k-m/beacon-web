import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { DemoDashboard } from '@/components/DemoDashboard';
import { WidgetsTeaser } from '@/components/WidgetsTeaser';
import { OpenSource } from '@/components/OpenSource';
import { ArchitectureDiagram } from '@/components/ArchitectureDiagram';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        {/* Demo dashboard — clearly labeled sample/demo data */}
        <DemoDashboard />
        {/* Embeddable widget system — self-drawn previews, sample data */}
        <WidgetsTeaser />
        <OpenSource />
        <ArchitectureDiagram />
      </main>
      <Footer />
    </>
  );
}
