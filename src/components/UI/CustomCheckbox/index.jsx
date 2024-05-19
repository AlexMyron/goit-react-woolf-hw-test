import { motion } from 'framer-motion';

import styles from './CustomCheckbox.module.css';
import icons from '../../../images/icons.svg';
import { useEffect, useRef } from 'react';

const CustomCheckbox = ({ label, iconName }) => {
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
        type="checkbox"
        name={iconName}
        className={`${styles.checkbox} ${styles.visuallyHidden}`}
        ref={inputRef}
      />
      <motion.label
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'tween', stiffness: 500 }}
        key={iconName}
        className={styles.checkboxLabel}
        htmlFor={iconName}
        tabIndex="0"
        ref={labelRef}
      >
        <svg className={styles.icon}>
          <use xlinkHref={`${icons}#icon-${iconName}`}></use>
        </svg>
        {label}
      </motion.label>
    </div>
  );
};

export default CustomCheckbox;
