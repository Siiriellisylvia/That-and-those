import Modal from "../Modals/SidePaneModal/SidePane.jsx";
import Styles from "../Cart/Cart.module.css";
import Button from "../Button/Button";
import { useCart } from "../Helpers/UseCart.jsx";
import CloseButton from "../../assets/icons/close_small.svg";
import Remove from "../../assets/icons/delete_400.svg";

export default function Cart () {
  const { cartItems, isCartOpen, toggleCart, removeFromCart} = useCart();


return (
  <>
    <Modal isOpen={isCartOpen} onClose={toggleCart}>
      <div className={Styles.cart}>
        <div className={Styles.cartHeader}>
        <h3>Shopping Cart</h3>
        <img src={CloseButton} onClick={toggleCart} />
        </div>
        {cartItems.map((item, index) => (
          <div key={index} className={Styles.cartItem}>
            <img src={item.thumbnailImages[0]} alt={item.name} />
            <div>
              <h4>{item.name}</h4>
              <p>{item.price}</p>
              <img src={Remove} onClick={() => removeFromCart(item.id)}/>
            </div>
          </div>
        ))}
        <div className={Styles.checkbox}>
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">I accept the terms and conditions</label>
        </div>
        <Button className="leaf">Go to checkout</Button>
      </div>
    </Modal>
  </>
);
}