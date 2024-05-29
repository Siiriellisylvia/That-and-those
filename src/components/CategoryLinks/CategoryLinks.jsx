import { Link } from "react-router-dom";
import Styles from "../CategoryLinks/CategoryLinks.module.css";

export default function CategoryLinks() {
  return (
    <div className={Styles.categoryLinks}>
      <Link to="/shop">all</Link>
      <Link to="/shop/cups">cups</Link>
      <Link to="/shop/bowls">bowls</Link>
      <Link to="/shop/plates">plates</Link>
      <Link to="/shop/good">good</Link>
    </div>
  );
}