import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { motion } from 'framer-motion';

import CustomCheckbox from 'components/UI/CustomCheckbox';
import CustomRadioButton from 'components/UI/CustomRadioButton';

import { selectAdverts } from '../../redux/selectors';
import { filterAdvertsList } from '../../redux/advertsSlice';
import { FORM_FEATURES_LIST, GALLERY_FEATURES_LIST } from 'services/constants';
import { filterCardsList } from 'services/helpers';

import styles from './Sidebar.module.css';
import icons from '../../images/icons.svg';
import Button from 'components/UI/Button';
import PaginationCtx from 'ctx/store';

const Sidebar = () => {
  const advertsList = useSelector(selectAdverts);
  const dispatch = useDispatch();
  const { resetPage } = useContext(PaginationCtx);

  const handleSubmit = e => {
    e.preventDefault();
    const filteredList = filterCardsList({
      target: e.target,
      list: advertsList,
    });
    resetPage();
    dispatch(filterAdvertsList(filteredList));
  };

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.sidebar}
    >
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
            {GALLERY_FEATURES_LIST.map(({ name, iconName }) => (
              <CustomCheckbox key={name} label={name} iconName={iconName} />
            ))}
          </div>
        </div>
        <div className={styles.formSection}>
          <h3 className={styles.checkboxTitle}>Vehicle Type</h3>
          <div className={styles.checkboxGroup}>
            {FORM_FEATURES_LIST.map(({ name, iconName }) => (
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
    </motion.div>
  );
};

export default Sidebar;
