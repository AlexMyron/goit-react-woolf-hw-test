import styles from './CustomCheckbox.module.css';

const CustomCheckbox = ({ label, iconName }) => {
  return (
    <div>
      <input
        id={iconName}
        type="checkbox"
        name={iconName}
        className={styles.checkbox}
      />
      <label key={iconName} className={styles.checkboxLabel} htmlFor={iconName}>
        <img src={`../../images/icons/${iconName}.svg`} alt={label} />
        {label}
      </label>
    </div>
  );
};

export default CustomCheckbox;
