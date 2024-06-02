import { useEffect, useRef } from "react";
import Styles from "./SidePane.module.css";

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef();

  // Handle click outside of modal content
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose(); // Close modal if click is outside modal content
      }
    };

    // Manage scroll and click listeners
    const body = document.body;
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      body.classList.add("no-scroll");
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      body.classList.remove("no-scroll");
    }

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      body.classList.remove("no-scroll"); // Make sure to clean this up
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
