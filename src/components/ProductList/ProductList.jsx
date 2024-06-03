
import ProductCard from "../ProductCard/ProductCard";
import Styles from "../ProductList/ProductList.module.css";

export default function ProductList({products}) {
  // Sort products from newest to oldest based on Firebase Timestamps
  const sortedProducts = [...products].sort((a, b) => {
    // Comparing the seconds property of the timestamp
    return b.date.seconds - a.date.seconds;
  });

  return (
    <div className="page">
      <div className={Styles.productList}>
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
