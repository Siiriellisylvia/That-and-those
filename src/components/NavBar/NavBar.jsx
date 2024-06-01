import { Link } from "react-router-dom";
import SearchIcon from "../../assets/icons/search_400.svg";
import Logo from "../../assets/icons/logo.svg";
import ExpandMore from "../../assets/icons/expand_more.svg";
import ShoppingBasket from "../../assets/icons/shopping_basket_400.svg";
import Styles from "../NavBar/NavBar.module.css";
import { useState, useEffect, useRef } from "react";
import { useCart } from "../Helpers/UseCart";

export default function NavBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const dropdownRef = useRef(null);

  const {toggleCart, cartItems } = useCart(); // Destructure to get cartItems
  const cartItemCount = cartItems.length; // You can count the number of items or calculate the total quantity based on your cart item structure

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 10
      );

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  const handleHover = () => {
    setDropdownVisible(true);
  };

  const handleLeave = () => {
    setDropdownVisible(false);
  };

  const handleLinkClick = () => {
    setDropdownVisible(false);
  };

  const closeDropdown = (e) => {
    if (!e.target.closest(`.${Styles.Dropdown}`)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <section className={visible ? "NavBar" : "NavBar hidden"}>
      <div className={Styles.NavBar}>
        <Link to="/">
          <img src={Logo} alt="potato-logo" />
        </Link>

        <div className={Styles.NavBarLinks}>
          <div
            className={Styles.Dropdown}
            onMouseOver={handleHover}
            onMouseLeave={handleLeave}
            ref={dropdownRef}
          >
            <div className={Styles.DropdownLink}>
              <Link
                to="/shop"
                className={Styles.Dropbtn}
                onClick={handleLinkClick}
              >
                Shop
              </Link>
              <img src={ExpandMore} alt="expand-dropdown" />
            </div>
            {dropdownVisible && (
              <div className={Styles.DropdownContent}>
                <Link to="/shop/cups" onClick={handleLinkClick}>
                  cups
                </Link>
                <Link to="/shop/bowls" onClick={handleLinkClick}>
                  bowls
                </Link>
                <Link to="/shop/plates" onClick={handleLinkClick}>
                  plates
                </Link>
                <Link to="/shop/plantpots" onClick={handleLinkClick}>
                  plant pots
                </Link>
                <Link to="/shop/thegoodcollection" onClick={handleLinkClick}>
                  the good collection
                </Link>
              </div>
            )}
          </div>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className={Styles.NavBarIcons}>
          <Link to="/search">
            <img src={SearchIcon} alt="potato-logo" />
          </Link>

          <Link className="icons" onClick={toggleCart}>
            <img src={ShoppingBasket} alt="potato-logo" />
            {cartItemCount > 0 && (
              <span className={Styles.CartItemCount}>{cartItemCount}</span> // Styling for this span should make it appear as a leaf-colored ellipse
            )}
          </Link>
        </div>
      </div>
    </section>
  );
}
