import Styles from './Footer.module.css';
import Logo from '../../assets/icons/logo.svg';
import paymentCards from '../../assets/paymentCards.png';
import Facebook from '../../assets/icons/facebook.svg';
import Instagram from '../../assets/icons/instagram.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
      <footer className={Styles.footer}>
        <div className={Styles.content}>
          <div className={Styles.about}>
            <Link to="/">
              <img src={Logo} alt="thatandthose-logo" />
            </Link>
            <p>
              Handmade ceramics made in Aarhus, with sustainability in focus.
              Every piece is unique and made to be enjoyed in everyday moments
            </p>
          </div>
          <div className={Styles.links}>
            <div>
              <h4>Contact</h4>
              <ul className={Styles.linkList}>
                <li>That and those</li>
                <li>Silkeborgvej 86B, Aarhus</li>
                <li>CVR 42792025</li>
                <li>hello@thatandthose.dk</li>
              </ul>
            </div>
            <div>
              <h4>Important information</h4>
              <ul className={Styles.linkList}>
                <li>
                  <Link to="/shop">Returns and shipping</Link>
                </li>
                <li>
                  <Link to="/about">Terms and conditions</Link>
                </li>
                <li>
                  <Link to="/contact">Privacy policy</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>Follow on</h4>
              <div className={Styles.socials}>
                <img src={Facebook} alt="facebook" />
                <img src={Instagram} alt="instagram" />
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.bottom}>
          <p>© 2024 that and those. All rights reserved.</p>
          <img src={paymentCards} alt="payment-cards" />
        </div>
      </footer>
    );
}