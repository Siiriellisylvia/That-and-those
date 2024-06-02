import CategoryLinks from "../CategoryLinks/CategoryLinks";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import Styles from "../HomeProductModule/HomeProductModule.module.css";
import Button from "../Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

      
      export default function HomeProductModule() {
        const [selectedCategory, setSelectedCategory] = useState("All");
        const [hasProducts, setHasProducts] = useState(true);
        const navigate = useNavigate(); // Hook for navigation

        // Function to handle category change
        const handleCategoryChange = (category) => {
          setSelectedCategory(category);
        };

        // Function to navigate to the selected category page
        const handleExploreCategory = () => {
          // Navigate to /shop if 'All' is selected, otherwise go to the specific category page
          const path =
            selectedCategory === "All"
              ? "/shop"
              : `/shop/${selectedCategory.toLowerCase()}`;
          navigate(path);
        };
console.log("Selected Category in HomeProductModule:", selectedCategory);

        return (
          <div className="page">
            <div className={Styles.homeProductModule}>
              <h4>New products</h4>
              <CategoryLinks
                onCategoryChange={handleCategoryChange}
                selectedCategory={selectedCategory}
              />
              {/* Show the carousel only if there are products */}
              <ProductCarousel
                category={selectedCategory}
                setHasProducts={setHasProducts}
              />
              {/* If there are products, show the button */}
              {hasProducts && (
                <Button className="sage" onClick={handleExploreCategory}>
                  Explore the category
                </Button>
              )}
            </div>
          </div>
        );
      }