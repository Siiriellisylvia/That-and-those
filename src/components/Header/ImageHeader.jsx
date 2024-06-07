import Styles from '../Header/ImageHeader.module.css';
import mainImage from '../../assets/aboutLargeImage.png'
import smallImage3 from '../../assets/aboutSmallImage3.png'
import smallImage2 from '../../assets/aboutSmallImage2.png'

export default function ImageHeader() {
  return (
    <section className={Styles.header}>
      <img src={smallImage3} alt="placeholder" />
      <img className={Styles.bigImage} src={mainImage} alt='placeholder' />
      <img src={smallImage2} alt='placeholder' />
    </section>
  );
}