
import Styles from '../HeroBanner/HeroBanner.module.css';

export default function HeroBanner() {
    return (
        <section className={Styles.heroContainer}>
            <div className={Styles.heroContent}>
            <h1>that and those ceramics</h1>
            <p>
                Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
                fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed
                consequat, leo eget bibendum sodales, augue velit cursus nunc,
            </p>
            </div>
        </section>
    )
    }