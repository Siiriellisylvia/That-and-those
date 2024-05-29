import Styles from "../Button/Button.module.css";

export default function Button ({
  onClick,
  children,
  className = "",
  disabled = false,
  type = "button",
}) {
  return (
    <button
      onClick={onClick}
      className={`${Styles.customButton} ${Styles[className]}`}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}
