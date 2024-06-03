import { Link } from "react-router-dom";
import Styles from "./Breadcrumbs.module.css";

export default function Breadcrumbs ({ category }) {
  return (
    <div className={Styles.breadcrumbs}>
      <Link to="/shop">Shop</Link>
        <span> / </span>
      <Link to={`/shop/${category.toLowerCase()}`}>{category}</Link>
    </div>
  );
}
