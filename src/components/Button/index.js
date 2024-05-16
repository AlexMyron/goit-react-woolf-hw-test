import styles from './Button.module.css'

const Button = ({ label, location, ...props }) => {
  const buttonClasses = `${styles.button} ${styles[location]}`
  return <button className={buttonClasses} {...props}>{label}</button>;
};

export default Button;
