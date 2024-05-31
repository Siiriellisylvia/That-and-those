import Styles from "../NoProductBanner/NoProductBanner.module.css";

export default function NoProductBanner() {
  return (
    <div className={Styles.banner}>
      <h3>There are currently no products :(</h3>
      <h3>But the good news is, I can make something just for you!</h3>
      <p>You can send me and email to hello@thatandthose.dk, ideally with some reference photos
         and a description of what you’re looking for. Then I will come back to you with a price 
         (or more questions) as soon as possible. I would love to hear from you!</p>
    </div>
  );
}
