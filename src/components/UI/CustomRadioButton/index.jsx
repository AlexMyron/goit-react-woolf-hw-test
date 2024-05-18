import styles from './CustomRadioButton.module.css';
import icons from '../../../images/icons.svg';

import { motion } from 'framer-motion';

const CustomRadioButton = ({ label, iconName, buttonName }) => {
  return (
    <div className={styles.inputBar}>
      <input
        id={iconName}
        type="radio"
        name={buttonName}
        value={iconName}
        className={`${styles.checkbox} ${styles.visuallyHidden}`}
      />
      <motion.label
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'tween', stiffness: 500 }}
        key={iconName}
        className={styles.checkboxLabel}
        htmlFor={iconName}
      >
        <svg className={styles.icon}>
          <use xlinkHref={`${icons}#icon-${iconName}`}></use>
        </svg>
        <span className={styles.name}>{label}</span>
      </motion.label>
    </div>
  );
};

export default CustomRadioButton;
