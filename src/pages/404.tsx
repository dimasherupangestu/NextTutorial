import React from "react";
import styles from "@/styles/error.module.sass";

const Custom404 = () => {
  return (
    <div className={styles.error}>
      <img src="/404.gif" alt="404" className={styles.errorImage} />
      <h1 className={styles.errorText}>Sorry, Page Not Found 404</h1>
    </div>
  );
};

export default Custom404;
