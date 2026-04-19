'use client';

import AIPanel from './ai-panel';
import CustomCursor from './custom-cursor';
import ExperienceSection from './experience-section';
import HeroSection from './hero-section';
import ImpactSection from './impact-section';
import MarqueeStrip from './marquee-strip';
import SiteFooter from './site-footer';
import SkillsNetwork from './skills-network';

export default function PortfolioPage() {
  return (
    <>
      <CustomCursor />

      <main className="port">
        <HeroSection />
        <MarqueeStrip />
        <ExperienceSection />
        <SkillsNetwork />
        <ImpactSection />
        <AIPanel />
        <SiteFooter />
      </main>
    </>
  );
}
