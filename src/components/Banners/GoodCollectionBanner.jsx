import Styles from './GoodCollectionBanner.module.css';
import DyrenesLogo from '../../assets/dyrenesLogo.png';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

export default function GoodCollectionBanner () {
  return (
    <section className={Styles.banner}>
      <div className={Styles.content}>
        <h2 className={Styles.title}>the good collection</h2>
        <p>
          All the experiments, the wonky cups and otherwise less lucky, but
          perfectly functional pieces can be found here!
        </p>
        <p>
          The good collection - because it’s good for the environment to reduce
          waste, and also because it will be good for the animals in Aarhus!
        </p>
        <p>
          <strong>
            For the sale of each product, I will donate 100kr to Dyrenes
            Beskyttelse.
          </strong>
        </p>
        <p>
          They care for all the animals that someone didn’t want, and find
          better homes for them. A bit like I do here with my discarded
          ceramics. It just fits.
        </p>
        <div className={Styles.buttonContainer}>
          <Link to="/shop/good">
            <Button className="leaf">See the good collection</Button>
          </Link>
          <img
            src={DyrenesLogo}
            alt="Dyrenes Beskyttelse logo"
            className={Styles.logo}
          />
        </div>
      </div>
    </section>
  );
}
