import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "../../assets/icons/search_400.svg";
import Logo from "../../assets/icons/logo.svg";
import ExpandMore from "../../assets/icons/expand_more.svg";
import ShoppingBasket from "../../assets/icons/shopping_basket_400.svg";
import MenuIcon from "../../assets/icons/menu.svg";
import CloseIcon from "../../assets/icons/close_small.svg";
import Styles from "../NavBar/NavBar.module.css";
import { useCart } from "../Helpers/UseCart";
import MobileNav from "../MobileNav/MobileNav";

export default function NavBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const dropdownRef = useRef(null);

  const { toggleCart, cartItems } = useCart();
  const cartItemCount = cartItems.length;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    setMobileMenuVisible(false); // Close mobile menu on link click
  };

  const closeDropdown = (e) => {
    if (!e.target.closest(`.${Styles.Dropdown}`)) {
      setDropdownVisible(false);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuVisible]);

  return (
    <section className={visible ? "NavBar" : "NavBar hidden"}>
      {isMobile ? (
        <MobileNav />
      ) : (
        <div className={Styles.NavBar}>
          <Link to="/">
            <img src={Logo} alt="thatandthose-logo" />
          </Link>

          <div
            className={`${Styles.NavBarLinks} ${
              mobileMenuVisible ? Styles.hideDesktopMenu : ""
            }`}
          >
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
                  <Link to="/shop/good" onClick={handleLinkClick}>
                    the good collection
                  </Link>
                </div>
              )}
            </div>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div
            className={`${Styles.NavBarIcons} ${
              mobileMenuVisible ? Styles.hideDesktopMenu : ""
            }`}
          >
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
          <div className={Styles.BurgerIcon} onClick={toggleMobileMenu}>
            <img
              src={mobileMenuVisible ? CloseIcon : MenuIcon}
              alt="menu-icon"
            />
          </div>
        </div>
      )}
      {mobileMenuVisible && !isMobile && (
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
