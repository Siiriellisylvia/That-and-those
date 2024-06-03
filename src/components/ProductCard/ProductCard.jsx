import Styles from "../ProductCard/ProductCard.module.css";
import ShoppingBasket from "../../assets/icons/shopping_basket_400.svg";
import { useNavigate } from "react-router-dom";
import Tag from "../Tag/Tag";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  // Calculate if the product is new
  const isNew =
    new Date(product.date.seconds * 1000) >=
    new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000);
  const isSoldOut = !product.inStock;

  // Function to navigate to the product page
  function openProduct() {
    navigate(`/products/${product.id}`);
  }

  return (
    <section className={Styles.cardContainer}>
      <div className={Styles.card} onClick={openProduct}>
        <div className={Styles.imageContainer}>
          <img className={Styles.image} src={product.mainImage} alt="product" />
          {isNew && <Tag text="new" type="new" />}
          {isSoldOut && <Tag text="sold out" type="soldOut" />}
        </div>
        <section className={Styles.contentContainer}>
          <div className={Styles.content}>
            <div>
              <h4>{product.name}</h4>
              <p>
                {product.price.amount} {product.price.currency}
              </p>
            </div>
            <img src={ShoppingBasket} alt="add to basket" />
          </div>
        </section>
      </div>
    </section>
  );
}
