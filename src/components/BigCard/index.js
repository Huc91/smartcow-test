//style
import * as styles from "./style.module.scss";
import { Button } from "../Button";

export const BigCard = ({ image }) => {
  return (
    <div className={styles.container}>
      <div className={styles["container__passpartout"]}>
        <img src={image} className={styles["container__image"]} alt="an actor"></img>
        <div className={styles["container__preview"]}>
          <Button cta="Preview" color="secondary"></Button>
        </div>
      </div>
      <div className={styles["container__box"]}>
        <p>
          Type or paste your videoscript here.You can also request a translation
          of an English script to any of 27 other languages
        </p>
        <Button cta="Listen" color="grey"></Button>
      </div>
    </div>
  );
};
