import ImmersiveShell from '../components/immersive-shell';
import Topbar from '../components/home/topbar';
import MissionOverview from '../components/home/mission-overview';
import MetricsBand from '../components/home/metrics-band';
import ProgramsBoard from '../components/home/programs-board';
import ExperienceFeed from '../components/home/experience-feed';
import StackArchive from '../components/home/stack-archive';
import ContactDeck from '../components/home/contact-deck';
import PortfolioAI from '../components/portfolio-ai';
import {
  activePrograms,
  archiveItems,
  controlPanels,
  experienceFeed,
  launchBullets,
  metrics,
  profile,
  stackSignals,
} from '../lib/home-data';
import heroImage from '../src/images/1_cCdSJ0mOqjQkm-soL5hlIw.jpeg';

export default function HomePage() {
  return (
    <ImmersiveShell>
      <main className="site-shell">
        <div className="ambient ambient-a" />
        <div className="ambient ambient-b" />

        <Topbar profile={profile} />
        <MissionOverview profile={profile} heroImage={heroImage} launchBullets={launchBullets} />
        <MetricsBand metrics={metrics} stackSignals={stackSignals} />
        <ProgramsBoard activePrograms={activePrograms} controlPanels={controlPanels} />
        <ExperienceFeed experienceFeed={experienceFeed} />
        <div data-reveal>
          <PortfolioAI />
        </div>
        <StackArchive stackSignals={stackSignals} archiveItems={archiveItems} />
        <ContactDeck profile={profile} />
      </main>
    </ImmersiveShell>
  );
}
