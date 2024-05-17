import styles from './CustomCheckbox.module.css';
import icons from '../../images/icons.svg';

const CustomCheckbox = ({ label, iconName }) => {
  return (
    <div className={styles.inputBar}>
      <input
        id={iconName}
        type="checkbox"
        name={iconName}
        className={`${styles.checkbox} ${styles.visuallyHidden}`}
      />
      <label key={iconName} className={styles.checkboxLabel} htmlFor={iconName}>
        <svg className={styles.icon}>
          <use xlinkHref={`${icons}#icon-${iconName}`}></use>
        </svg>
        {label}
      </label>
    </div>
  );
};

export default CustomCheckbox;
