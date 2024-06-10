import { Link } from "react-router-dom";
import SearchIcon from "../../assets/icons/search_400.svg";
import Logo from "../../assets/icons/logo.svg";
import ShoppingBasket from "../../assets/icons/shopping_basket_400.svg";
import MenuIcon from "../../assets/icons/menu.svg";
import CloseIcon from "../../assets/icons/close_small.svg";
import Styles from "../MobileNav/MobileNav.module.css"; 
import { useCart } from "../Helpers/UseCart";
import { useState } from "react";

export default function MobileNav() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const { toggleCart, cartItems } = useCart();
  const cartItemCount = cartItems.length;

  const handleLinkClick = () => {
    setMobileMenuVisible(false); // Close mobile menu on link click
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <section className="MobileNav">
      <div className={Styles.NavBar}>
        <div className={Styles.BurgerIcon} onClick={toggleMobileMenu}>
          <img src={mobileMenuVisible ? CloseIcon : MenuIcon} alt="menu-icon" />
        </div>
        <Link to="/">
          <img src={Logo} alt="thatandthose-logo" />
        </Link>
        <div className={Styles.NavBarIcons}>
          <Link to="/search">
            <img src={SearchIcon} alt="search-icon" />
          </Link>
          <Link className="icons" onClick={toggleCart}>
            <img src={ShoppingBasket} alt="cart-icon" />
            {cartItemCount > 0 && (
              <span className={Styles.CartItemCount}>{cartItemCount}</span>
            )}
          </Link>
        </div>
      </div>
      {mobileMenuVisible && (
        <div className={Styles.MobileMenuContent}>
          <Link to="/shop" onClick={handleLinkClick}>
            Shop
          </Link>
          <Link to="/shop/cups" onClick={handleLinkClick}>
            Cups
          </Link>
          <Link to="/shop/bowls" onClick={handleLinkClick}>
            Bowls
          </Link>
          <Link to="/shop/plates" onClick={handleLinkClick}>
            Plates
          </Link>
          <Link to="/shop/good" onClick={handleLinkClick}>
            The Good Collection
          </Link>
          <Link to="/about" onClick={handleLinkClick}>
            About
          </Link>
          <Link to="/contact" onClick={handleLinkClick}>
            Contact
          </Link>
        </div>
      )}
    </section>
  );
}
