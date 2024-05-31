import Button from "../../Button/Button";
import Styles from "./SidePane.module.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={Styles.modal}>
      <div className={Styles.modalContent}>
        <Button className={Styles.closeButton} onClick={onClose}>
          ×
        </Button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
