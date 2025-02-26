import ImageCarousel from "../components/ProShows/ImageCarousel";
import ProshowsCommingsoon from "../components/ProShows/ProshowsComingSoon";
import HeroComponent from "../components/HeroComponent";
import SplashScreen from "../components/SplashScreen";
import TimeLine from "../components/TimelineComponent";
import FAQ from "../components/FAQ";
import AboutPage from "../components/AboutSection";
import SponsorCarousel from "../components/SponsorCarousel";
import { Marquee3D } from "../components/ui/Marquee3D";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <HeroComponent />  */}
      <SplashScreen />
      {/* Main Content */}
      <AboutPage />
      <div className="flex-grow">
        <ImageCarousel/>
        {/* <ProshowsCommingsoon /> */}
      </div>
      {/* Timeline */}
      {/* <TimeLine /> */}
      {/* FAQ */}
      <FAQ />
      {/* <SponsorCarousel/> */}
    </div>
  );
}

export default Home;