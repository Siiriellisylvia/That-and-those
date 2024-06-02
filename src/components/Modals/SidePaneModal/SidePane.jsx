import { useEffect, useRef } from "react";
import Styles from "./SidePane.module.css";

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef();

  // Function to handle click outside of modal content
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose(); // Close modal if click is outside modal content
    }
  };

  // Effect to add and remove the event listener
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={Styles.modal}>
      <div className={Styles.modalContent} ref={modalRef}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
