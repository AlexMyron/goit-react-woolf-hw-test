import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import styles from './CustomRadioButton.module.css';
import icons from '../../../images/icons.svg';

const CustomRadioButton = ({ label, iconName, buttonName }) => {
  const inputRef = useRef(null);
  const labelRef = useRef(null);

  const handleKeyDown = e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      inputRef.current.click();
    }
  };

  useEffect(() => {
    const label = labelRef.current;
    label.addEventListener('keydown', handleKeyDown);

    return () => {
      label.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.inputBar}>
      <input
        id={iconName}
        type="radio"
        name={buttonName}
        value={iconName}
        className={`${styles.checkbox} ${styles.visuallyHidden}`}
        ref={inputRef}
      />
      <motion.label
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'tween', stiffness: 500 }}
        key={iconName}
        ref={labelRef}
        className={styles.checkboxLabel}
        htmlFor={iconName}
        tabIndex="0"
        id={iconName}
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
