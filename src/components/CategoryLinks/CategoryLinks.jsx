import Styles from "../CategoryLinks/CategoryLinks.module.css";

export default function CategoryLinks({ onCategoryChange, selectedCategory }) {
  console.log("Props in CategoryLinks:", selectedCategory);

  const handleCategoryClick = (category, e) => {
    e.preventDefault();
    onCategoryChange(category);
  };

 return (
        <div className={Styles.categoryLinks}>
            {["All", "Cups", "Bowls", "Plates", "Good"].map((category) => (
                <a
                    key={category}
                    href="#"
                    className={selectedCategory === category ? Styles.selected : ''}
                    onClick={(e) => handleCategoryClick(category, e)}
                >
                    {category.toLowerCase()}
                </a>
            ))}
        </div>
    );
}
