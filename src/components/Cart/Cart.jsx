import Modal from "../Modals/SidePaneModal/SidePane.jsx";
import Styles from "../Cart/Cart.module.css";
import Button from "../Button/Button";
import { useCart } from "../Helpers/UseCart.jsx";

export default function Cart () {
  const { cartItems, isCartOpen, toggleCart, removeFromCart} = useCart();


return (
  <>
    <Modal isOpen={isCartOpen} onClose={toggleCart}>
      <div className={Styles.cart}>
        <h3>Shopping Cart</h3>
        {cartItems.map((item, index) => (
          <div key={index} className={Styles.cartItem}>
            <img src={item.thumbnailImages[0]} alt={item.name} />
            <div>
              <h4>{item.name}</h4>
              <p>{item.price}</p>
              <Button className="leaf" onClick={() => removeFromCart(item.id)}>
                Remove
              </Button>
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