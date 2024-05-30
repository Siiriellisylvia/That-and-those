import Button from "../Button/Button";
import Styles from "./AboutBanner.module.css";

export default function AboutBanner() {
  return (
    <div className={`${Styles.bannerContainer} page`}>
      <div className={Styles.bannerContent}>
        <h2>Who is behind the wheel?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Button className="leaf">Read the whole story</Button>
    </div>
    <img className={Styles.bannerImage} src="https://via.placeholder.com/150" alt="placeholder"/>
    </div>
  );
}
