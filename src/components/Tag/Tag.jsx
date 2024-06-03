
import Styles from "./Tag.module.css"; // Assume CSS for the tag is here

export default function Tag ({ text, type }) {
  return <div className={`${Styles.tag} ${Styles[type]}`}>{text}</div>;
}
