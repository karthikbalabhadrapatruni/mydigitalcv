'use client';

import { useMemo, useState, useTransition } from 'react';
import Topbar from './topbar';
import MissionOverview from './mission-overview';
import MetricsBand from './metrics-band';
import ProgramsBoard from './programs-board';
import ExperienceFeed from './experience-feed';
import StackArchive from './stack-archive';
import ContactDeck from './contact-deck';
import PortfolioAI from '../portfolio-ai';

export default function BriefingShell({
  profile,
  briefingLenses,
  metrics,
  launchBullets,
  activePrograms,
  controlPanels,
  experienceFeed,
  stackSignals,
  archiveItems,
}) {
  const [activeLensId, setActiveLensId] = useState(briefingLenses[0]?.id ?? 'product');
  const [isPending, startTransition] = useTransition();

  const activeLens = briefingLenses.find((item) => item.id === activeLensId) ?? briefingLenses[0];

  const orderedPrograms = useMemo(() => {
    if (!activeLens) {
      return activePrograms;
    }

    const primary = activePrograms.find((item) => item.id === activeLens.primaryCapability);
    const rest = activePrograms.filter((item) => item.id !== activeLens.primaryCapability);
    return primary ? [primary, ...rest] : activePrograms;
  }, [activeLens, activePrograms]);

  function handleLensChange(nextLensId) {
    startTransition(() => {
      setActiveLensId(nextLensId);
    });
  }

  return (
    <>
      <Topbar profile={profile} />
      <MissionOverview
        profile={profile}
        launchBullets={launchBullets}
        lenses={briefingLenses}
        activeLens={activeLens}
        onLensChange={handleLensChange}
        isPending={isPending}
      />
      <MetricsBand metrics={metrics} activeLens={activeLens} />
      <ProgramsBoard
        activePrograms={orderedPrograms}
        controlPanels={controlPanels}
        preferredId={activeLens?.primaryCapability}
        lensLabel={activeLens?.label}
      />
      <ExperienceFeed experienceFeed={experienceFeed} activeLensId={activeLens?.id} activeLensLabel={activeLens?.label} />
      <div data-reveal>
        <PortfolioAI />
      </div>
      <StackArchive stackSignals={stackSignals} archiveItems={archiveItems} />
      <ContactDeck profile={profile} />
    </>
  );
}
