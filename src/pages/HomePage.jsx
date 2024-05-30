import AboutBanner from "../components/Banners/AboutBanner";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import HomeProductModule from "../components/HomeProductModule/HomeProductModule";

export default function HomePage() {

  return (
    <div>
      <HeroBanner />
      <HomeProductModule />
      <AboutBanner />
    </div>
  );
}