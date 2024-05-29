import Styles from "../ProductCard/ProductCard.module.css";
import ShoppingBasket from "../../assets/icons/shopping_basket_400.svg";
import productImage from "../../assets/productImage.png";

export default function ProductCard({product}) {
  console.log("Product:", product); // Log the product object

  return (
    <div className={Styles.card}>
      <div className={Styles.imageContainer}>
        <img className={Styles.image} src={productImage} alt="product" />
      </div>
      <div className={Styles.contentContainer}>
        <div className={Styles.content}>
          <div>
            <h4>{product?.name}</h4>
            <p>{product?.price}</p>
          </div>
          <img src={ShoppingBasket} alt="add to basket" />
        </div>
      </div>
    </div>
  );
}
