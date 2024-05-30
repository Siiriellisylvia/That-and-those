import CategoryLinks from "../CategoryLinks/CategoryLinks";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import Styles from "../HomeProductModule/HomeProductModule.module.css";
import Button from "../Button/Button";
import { useState } from "react";

      
      export default function HomeProductModule() {
          const [selectedCategory, setSelectedCategory] = useState("All");
          const [hasProducts, setHasProducts] = useState(true);

          // Function to handle category change
          const handleCategoryChange = (category) => {
            setSelectedCategory(category);
          };

      return (
        <div className="page">
          <div className={Styles.homeProductModule}>
            <h4>New products</h4>
            <CategoryLinks onCategoryChange={handleCategoryChange} />
            {/* Show the carousel only if there are products */}
            <ProductCarousel
              category={selectedCategory}
              setHasProducts={setHasProducts}
            />
            {/* If there are products, show the button */}
            {hasProducts && (
              <Button className="sage">Explore the category</Button> 
            )}
          </div>
        </div>
      );
        }