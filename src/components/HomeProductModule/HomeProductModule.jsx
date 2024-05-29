import CategoryLinks from "../CategoryLinks/CategoryLinks";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import Styles from "../HomeProductModule/HomeProductModule.module.css";
import Button from "../Button/Button";

      
      export default function HomeProductModule() {
      return (
        <div className="page">
            <div className={Styles.homeProductModule}>
                <h4>New products</h4>
                <CategoryLinks />
                <ProductCarousel />
                <Button className="sage">Explore the category</Button>
            </div>
        </div>
      );
        }