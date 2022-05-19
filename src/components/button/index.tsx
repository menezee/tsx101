import React from "react";
import styles from './button.module.css';

function Button(props: { children: string }) {
  const { children } = props;

  return (
    <button className={styles.button}>
      {children}
    </button>
  );
}

export default Button;
