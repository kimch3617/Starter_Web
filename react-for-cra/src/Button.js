import React from "react";
import PropTypes from "prop-types"
import styles from "./Button.module.css"

const Button = ({ text, onClick }) => {
  return (
    <div>
      <button className={styles.btn} onClick={onClick}>{text}</button>
    </div>
  );
};
Button.propTypes = {
    text: PropTypes.string.isRequired
}

export default Button;
