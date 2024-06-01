import  { useState } from "react";
import Styles from "./Accordion.module.css";
import ExpandLess from "../../assets/icons/expand_less.svg";
import ExpandMore from "../../assets/icons/expand_more.svg";

export default function Accordion ({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={Styles.accordionContainer}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${Styles.accordionTitle} ${
          isOpen ? Styles.titleOpen : Styles.titleClosed
        }`}
      >
        {title} {isOpen ? <img src={ExpandLess} /> : <img src={ExpandMore} />}
      </div>
      {isOpen && (
        <p className={isOpen ? Styles.contentOpen : Styles.contentClosed}>
          {children}
        </p>
      )}
    </div>
  );
}
