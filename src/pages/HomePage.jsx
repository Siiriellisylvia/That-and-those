import AboutBanner from "../components/Banners/AboutBanner";
import GoodCollectionBanner from "../components/Banners/GoodCollectionBanner.jsx";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import HomeProductModule from "../components/HomeProductModule/HomeProductModule";

export default function HomePage() {

  return (
    <div>
      <HeroBanner />
      <HomeProductModule />
      <AboutBanner />
      <GoodCollectionBanner/>
    </div>
  );
}