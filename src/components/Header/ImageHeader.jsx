import Styles from '../Header/ImageHeader.module.css';

export default function ImageHeader() {
  return (
    <section className={Styles.header}>
      <img src="https://via.placeholder.com/150" alt="placeholder" />
      <img className={Styles.bigImage} src='https://via.placeholder.com/300' alt='placeholder' />
      <img src='https://via.placeholder.com/150' alt='placeholder' />
    </section>
  );
}