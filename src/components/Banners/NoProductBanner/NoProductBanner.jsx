import Styles from "../NoProductBanner/NoProductBanner.module.css";

export default function NoProductBanner() {
  return (
    <div className={Styles.banner}>
      <h3>No products found :(</h3>
    </div>
  );
}
