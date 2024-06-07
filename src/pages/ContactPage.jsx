import { useState } from "react";
import emailjs from "emailjs-com";
import Header from "../components/Header/Header";
import Styles from "./ContactPage.module.css";
import Button from "../components/Button/Button";
import CupsHeader from "../assets/cupsHeader.png";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

    const [consent, setConsent] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [formError, setFormError] = useState("");



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

    const validateForm = () => {
      let valid = true;

      if (!formData.from_email.includes("@")) {
        setEmailError("Please use a valid email address.");
        valid = false;
      } else {
        setEmailError("");
      }

      if (
        !formData.from_name ||
        !formData.from_email ||
        !formData.message ||
        !consent
      ) {
        setFormError("Please fill all fields.");
        valid = false;
      } else {
        setFormError("");
      }

      return valid;
    };

  const handleConsentChange = (e) => {
    setConsent(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs
      .send(
        "service_wer040p",
        "template_7qfghzn",
        formData,
        "ti88TxCGWLD51wgBF"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        alert("Failed to send email.");
      });
  };

  return (
    <>
      <Header title="Contact me" backgroundImage={CupsHeader} />
      <section className={`${Styles.contactPage} page`}>
        <div className={Styles.contactSubheadingContainer}>
          <div className={Styles.contactSubheadingSection}>
            <h3>I would love to hear from you!</h3>
            <p>
              You can also send me an email directly to hello@thatandthose.dk
              and ask about orders, commissions, whatever you like. I will
              probably answer within 1-2 days but sometimes I'm busy!
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className={Styles.contactForm} noValidate>
          <div className={Styles.formGroup}>
            <label htmlFor="from_name">Name:</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              placeholder="just your first name will do!"
              value={formData.from_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={Styles.formGroup}>
            <label htmlFor="from_email">Email:</label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              required
            />
            {emailError && (
              <span className={Styles.errorMessage}>{emailError}</span>
            )}
          </div>
          <div className={Styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className={Styles.privacyPolicyTerms}>
            <label>
              <input
                type="checkbox"
                checked={consent}
                onChange={handleConsentChange}
                required
              />
              I agree to the <a href="#">privacy policy and terms</a>.
            </label>
          </div>
          <div className={Styles.buttonContainer}>
            {formError && (
              <span className={Styles.errorMessage}>{formError}</span>
            )}

            <Button type="submit" className="leaf">
              Send
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}





