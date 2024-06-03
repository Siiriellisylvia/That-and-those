import Styles from "../ProductCard/ProductCard.module.css";
// import ShoppingBasket from "../../assets/icons/shopping_basket_400.svg";
import { useNavigate } from "react-router-dom";
import Tag from "../Tag/Tag";
// import { useCart } from "../Helpers/UseCart";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  // const { addToCart } = useCart(); // Assumed useCart includes addToCart function

  // Calculate if the product is new
  const isNew =
    new Date(product.date.seconds * 1000) >=
    new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000);
  const isSoldOut = !product.inStock;

  // Function to navigate to the product page
  function openProduct() {
    navigate(`/products/${product.id}`);
  }

  // // Function to add product to cart
  // function handleAddToCart(event) {
  //   event.stopPropagation(); // Prevents the card onClick from triggering when the icon is clicked
  //   addToCart(product);
  // }

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
            {/* <div className={Styles.iconContainer}>
            <img
              src={ShoppingBasket}
              alt="Add to basket"
              className={Styles.addToCartIcon}
              onClick={handleAddToCart}
            />
          </div> */}
          </div>
        </section>
      </div>
    </section>
  );
}
