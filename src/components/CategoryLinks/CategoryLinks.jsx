import Styles from "../CategoryLinks/CategoryLinks.module.css";

export default function CategoryLinks({ onCategoryChange }) {
  const handleCategoryClick = (category, e) => {
    e.preventDefault();
    onCategoryChange(category);
  };

  return (
    <div className={Styles.categoryLinks}>
      <a href="#" onClick={(e) => handleCategoryClick("All", e)}>
        all
      </a>
      <a href="#" onClick={(e) => handleCategoryClick("Cups", e)}>
        cups
      </a>
      <a href="#" onClick={(e) => handleCategoryClick("Bowls", e)}>
        bowls
      </a>
      <a href="#" onClick={(e) => handleCategoryClick("Plates", e)}>
        plates
      </a>
      <a href="#" onClick={(e) => handleCategoryClick("Good", e)}>
        good
      </a>
    </div>
  );
}
