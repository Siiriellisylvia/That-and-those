
import ProductCard from "../ProductCard/ProductCard";
import Styles from "../ProductList/ProductList.module.css";

export default function ProductList({products}) {

  return (
    <div className="page">
      <div className={Styles.productList}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} product={product} />
        ))}
      </div>
    </div>
  );
}
