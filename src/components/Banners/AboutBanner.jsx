import Button from "../Button/Button";
import Styles from "./AboutBanner.module.css";
import aboutImage from "../../assets/aboutBanner.jpg";

export default function AboutBanner() {
  return (
    <div className={Styles.bannerContainer}>
      <div className={Styles.bannerContent}>
        <h2>Who is behind the wheel?</h2>
        <p>
          That and those is a one woman business based in Aarhus - and I see it more
          like a hobby and an appreciation for the craft, rather than a business. I love playing around, especially with glaze combinations.
          That is also the reason why all my products are one of a kind! 
          <p>I don’t stock anything, all I have is what you
          see here. Unless I was procrastinating a photoshoot of my most recent
          works, which to be honest sounds like me.</p>
        </p>
        <Button className="leaf">Read the whole story</Button>
      </div>
      <img className={Styles.bannerImage} src={aboutImage} alt="placeholder" />
    </div>
  );
}
