
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Styles from '../HeroBanner/HeroBanner.module.css';

export default function HeroBanner() {
    return (
      <section className={Styles.heroContainer}>

        <div className={Styles.heroContent}>
            <h1 className="hero">that and those ceramics</h1>
            <p>
                Handmade ceramics made in Aarhus, with sustainability in focus. Every piece is unique and made to be enjoyed in everyday moments. 
            </p>
            <Link to ="/shop"><Button className="leaf">Explore products</Button></Link>
        </div>
      </section>
    );
    }