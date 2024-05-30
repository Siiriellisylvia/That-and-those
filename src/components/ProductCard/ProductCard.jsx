import Styles from "../ProductCard/ProductCard.module.css";
import ShoppingBasket from "../../assets/icons/shopping_basket_400.svg";
import { useNavigate } from "react-router-dom";

export default function ProductCard({product}) {

    const navigate = useNavigate();

    // Function to navigate to the product page
    function openProduct() {
      navigate(`/products/${product.id}`);
    }

  return (
    <div className={Styles.cardContainer}>
    <div className={Styles.card} onClick={openProduct}>
      <div className={Styles.imageContainer}>
        <img className={Styles.image} src={product.mainImage} alt="product" />
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
    </div>
  );
}
