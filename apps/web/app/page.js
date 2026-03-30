import ImmersiveShell from '../components/immersive-shell';
import BriefingShell from '../components/home/briefing-shell';
import {
  activePrograms,
  archiveItems,
  briefingLenses,
  controlPanels,
  experienceFeed,
  launchBullets,
  metrics,
  profile,
  stackSignals,
} from '../lib/home-data';

export default function HomePage() {
  return (
    <ImmersiveShell>
      <main className="site-shell">
        <div className="ambient ambient-a" />
        <div className="ambient ambient-b" />

        <BriefingShell
          profile={profile}
          briefingLenses={briefingLenses}
          metrics={metrics}
          launchBullets={launchBullets}
          activePrograms={activePrograms}
          controlPanels={controlPanels}
          experienceFeed={experienceFeed}
          stackSignals={stackSignals}
          archiveItems={archiveItems}
        />
      </main>
    </ImmersiveShell>
  );
}
