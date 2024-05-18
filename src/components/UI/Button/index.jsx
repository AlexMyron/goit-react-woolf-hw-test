import { motion } from 'framer-motion';

import styles from './Button.module.css';

const Button = ({ children, label, location, ...props }) => {
  const buttonClasses = `${styles.button} ${styles[location]}`;
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 500 }}
      className={buttonClasses}
      {...props}
    >
      {label || children}
    </motion.button>
  );
};

export default Button;
