import { useDispatch, useSelector } from 'react-redux';

import CustomCheckbox from 'components/CustomCheckbox';
import CustomRadioButton from 'components/CustomRadioButton';

import { selectAdverts } from '../../redux/selectors';
import { filterAdvertsList } from '../../redux/advertsSlice';
import { formAdvertList, galleryFeaturesList } from 'helpers/constants';
import { filterCardsList } from 'helpers/actions';

import styles from './Sidebar.module.css';
import icons from '../../images/icons.svg';
import Button from 'components/Button';

const Sidebar = () => {
  const advertsList = useSelector(selectAdverts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const filteredList = filterCardsList({
      target: e.target,
      list: advertsList,
    });
    dispatch(filterAdvertsList(filteredList));
  };

  return (
    <div className={styles.sidebar}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formSection}>
          <label className={styles.label} htmlFor="location">
            Location
          </label>
          <div className={styles.inputBar}>
            <input
              id="location"
              type="text"
              name="location"
              className={styles.input}
            />
            <svg className={styles.iconLocation}>
              <use xlinkHref={`${icons}#icon-location`}></use>
            </svg>
          </div>
        </div>
        <div className={styles.formSection}>
          <h2 className={styles.filterTitle}>Filters</h2>
          <h3 className={styles.checkboxTitle}>Vehicle Equipment</h3>
          <div className={styles.checkboxGroup}>
            {galleryFeaturesList.map(({ name, iconName }) => (
              <CustomCheckbox key={name} label={name} iconName={iconName} />
            ))}
          </div>
        </div>
        <div className={styles.formSection}>
          <h3 className={styles.checkboxTitle}>Vehicle Type</h3>
          <div className={styles.checkboxGroup}>
            {formAdvertList.map(({ name, iconName }) => (
              <CustomRadioButton
                key={name}
                label={name}
                iconName={iconName}
                buttonName="form"
              />
            ))}
          </div>
        </div>
        <Button label="Search" type="submit" location="sidebar" />
      </form>
    </div>
  );
};

export default Sidebar;
