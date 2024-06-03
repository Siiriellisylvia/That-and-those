import Modal from "../Modals/SidePaneModal/SidePane.jsx";
import Styles from "../Cart/Cart.module.css";
import Button from "../Button/Button";
import { useCart } from "../Helpers/UseCart.jsx";
import CloseButton from "../../assets/icons/close_small.svg";
import Remove from "../../assets/icons/delete_400.svg";
import Checkmark from "../../assets/icons/check_circle.svg";
import { useNavigate } from "react-router-dom";


export default function Cart() {
  const navigate = useNavigate();

  const { cartItems, isCartOpen, toggleCart, removeFromCart, lastAdded } =
    useCart();

  // Combined function to handle product name click
  function handleProductNameClick(productId) {
    toggleCart(); // Close the cart
    navigate(`/products/${productId}`); // Navigate to the product page
  }

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price.amount),
    0
  );

  // Get the currency from the first item in the cart, if the cart is not empty
  const currency = cartItems.length > 0 ? cartItems[0].price.currency : "DKK"; // Default to 'USD' if cart is empty

  return (
    <>
      <Modal isOpen={isCartOpen} onClose={toggleCart}>
        <div className={Styles.cart}>
          <div className={Styles.cartHeader}>
            <h3>Shopping cart</h3>
            <img src={CloseButton} alt="Close cart" onClick={toggleCart} />
          </div>
          {cartItems.length > 0 ? (
            <>
              {lastAdded && (
                <h4 className={Styles.addedToCart}>
                  <img src={Checkmark} alt="Checkmark" />
                  {`${lastAdded.name} added to cart!`}
                </h4>
              )}
              <div className={Styles.cartItems}>
                {cartItems.map((item, index) => (
                  <div key={index} className={Styles.cartItem}>
                    <img src={item.thumbnailImages[0]} alt={item.name} />
                    <div className={Styles.cartItemDetails}>
                      <h4 onClick={() => handleProductNameClick(item.id)}>{item.name}</h4>
                      <div className={Styles.priceDelete}>
                        <p>
                          {item.price.amount} {item.price.currency}
                        </p>
                        <img
                          src={Remove}
                          alt="Remove item"
                          onClick={() => removeFromCart(item.id)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <h4 className={Styles.emptyCartMessage}>Your cart is empty</h4>
          )}

          <div className={Styles.bottom}>
            <div className={Styles.totalPrice}>
              <h4>
                Total: {totalPrice.toFixed(0)} {currency}
              </h4>
            </div>
            <div className={Styles.checkbox}>
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">I accept the terms and conditions</label>
            </div>
            <Button className="leaf">Go to checkout</Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
