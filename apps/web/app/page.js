import ImmersiveShell from '../components/immersive-shell';
import Topbar from '../components/home/topbar';
import RouteSidebar from '../components/home/route-sidebar';
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
import noteRideImage from '../src/images/noteride.jpg';

export default function HomePage() {
  return (
    <ImmersiveShell>
      <main className="portfolio-grid">
        <div className="ambient ambient-a" />
        <div className="ambient ambient-b" />

        <Topbar />

        <div className="portfolio-layout">
          <RouteSidebar profile={profile} metrics={metrics} />

          <div className="journey-main">
            <div className="journey-stop stop-start">
              <MissionOverview profile={profile} heroImage={heroImage} launchBullets={launchBullets} />
            </div>

            <div className="journey-stop stop-signals">
              <MetricsBand metrics={metrics} stackSignals={stackSignals} />
            </div>

            <div className="journey-stop stop-routes">
              <ProgramsBoard activePrograms={activePrograms} controlPanels={controlPanels} />
            </div>

            <div className="journey-stop stop-career">
              <ExperienceFeed experienceFeed={experienceFeed} />
            </div>

            <div className="journey-stop stop-ai" data-reveal>
              <PortfolioAI />
            </div>

            <div className="journey-stop stop-legend">
              <StackArchive stackSignals={stackSignals} archiveItems={archiveItems} archiveImage={noteRideImage} />
            </div>

            <div className="journey-stop stop-contact">
              <ContactDeck profile={profile} />
            </div>
          </div>
        </div>
      </main>
    </ImmersiveShell>
  );
}
