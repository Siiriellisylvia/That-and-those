import Styles from "./ProductCount.module.css";

export default function ProductCount ({ count }) {
  return (
    <h4 className={Styles.counter}>
      {count} {count === 1 ? "product" : "products"}
    </h4>
  );
}

