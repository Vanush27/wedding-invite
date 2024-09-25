import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, onClick }: any) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {text ? text : "button"}
    </button>
  );
};

export default Button;
