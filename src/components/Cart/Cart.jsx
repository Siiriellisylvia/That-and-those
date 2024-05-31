import { useState } from "react";
import Modal from "../Modals/SidePaneModal/SidePane.jsx";
import Styles from "../Cart/Cart.module.css";
import Button from "../Button/Button";

export default function Cart () {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>View Cart</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className={Styles.cart}>
          <h3>Shopping Cart</h3>
          <div className={Styles.cartItem}>
            <img src="path_to_cappuccino_cup_image.jpg" alt="Cappuccino Cup" />
            <div>
              <h4>Cappuccino Cup</h4>
              <p>250 DKK</p>
            </div>
          </div>
          <div className={Styles.checkbox}>
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">I accept the terms and conditions</label>
          </div>
          <Button className="leaf">
            Go to checkout
          </Button>
        </div>
      </Modal>
    </>
  );
}