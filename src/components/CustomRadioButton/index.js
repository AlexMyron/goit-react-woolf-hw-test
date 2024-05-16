import styles from './CustomRadioButton.module.css';

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
        {/* defaultChecked={iconName === 'panelTruck'} */}
      <label key={iconName} className={styles.checkboxLabel} htmlFor={iconName}>
        <img src={`../../images/icons/${iconName}.svg`} alt={label} />
        {label}
      </label>
    </div>
  );
};

export default CustomRadioButton;
