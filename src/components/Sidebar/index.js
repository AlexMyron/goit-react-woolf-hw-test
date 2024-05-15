import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CustomCheckbox from 'components/CustomCheckbox/CustomCheckbox';
import { selectAdverts } from '../../redux/selectors';
import { filterAdvertsList } from '../../redux/advertsSlice';

import styles from './Sidebar.module.css';
import icons from '../../images/icons.svg';

const formAdvertList = [
  { name: 'Van', iconName: 'panelTruck' },
  { name: 'Fully Integrated', iconName: 'fullyIntegrated' },
  { name: 'Alcove', iconName: 'alcove' },
];
const galleryFeaturesList = [
  { name: 'AC', iconName: 'airConditioner' },
  { name: 'Automatic', iconName: 'transmission' },
  { name: 'Kitchen', iconName: 'kitchen' },
  { name: 'TV', iconName: 'tv' },
  { name: 'Shower/WC', iconName: 'shower' },
];

const filterCardsList = ({ target, list }) => {
  const fd = new FormData(target);
  const formEntries = Object.fromEntries(fd.entries());
  const filterKeys = Object.keys(formEntries);

  console.log('filterKeys', filterKeys)

  const res = list.reduce((acc, card) => {
    const details = {
      ...card.details,
      transmission: card.transmission.toLowerCase() === 'automatic',
      // form: card.form,
      form: filterKeys.includes(card.form) && card.form,
      [card.form]: true
    };

    console.log('details', details)
    const filteredDetails = Object.keys(details)
      // .filter(key => details[key] !== undefined && details[key] !== null && details[key] !== false)
      .filter(key => !!details[key])
      .reduce((acc, key) => {
        const keyName = key.toLowerCase();
        acc[keyName] = details[keyName];
        return acc;
      }, {});

    const isCardPassed = filterKeys.some(key => {
      // console.log('key', filteredDetails);
      for (const item in filteredDetails) {
        console.log(key, details[item]);
        return key === filteredDetails.item;
      }
    });
    console.log('isCardPassed', isCardPassed)
    if (isCardPassed) acc.push(card);
    return acc;
  }, []);
console.log('res', res)
  return res
};

const Sidebar = () => {
  const [location, setLocation] = useState('');
  const advertsList = useSelector(selectAdverts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    console.log(value);
    setLocation(value);
  };

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
      <div className={styles.formSection}>
        <label className={styles.label} htmlFor="location">
          Location
        </label>
        <div className={styles.inputBar}>
          <input
            id="location"
            type="text"
            name="location"
            value={location}
            onChange={handleChange}
            className={styles.input}
          />
          <svg className={styles.iconLocation}>
            <use xlinkHref={`${icons}#icon-location`}></use>
          </svg>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formSection}>
          <h2 className={styles.filterTitle}>Filters</h2>
          <h3 className={styles.checkboxTitle}>Vehicle Equipment</h3>
          <div className={styles.checkboxGroup}>
            {galleryFeaturesList.map(({ name, iconName }) => (
              // <label key={item} className={styles.checkboxLabel}>
              //   <input
              //     type="checkbox"
              //     name={item}
              //     checked={filters[item]}
              //     onChange={handleCheckboxChange}
              //     className={styles.checkbox}
              //   />
              //   {item}
              // </label>
              <CustomCheckbox key={name} label={name} iconName={iconName} />
            ))}
          </div>
        </div>
        <div className={styles.formSection}>
          <h3 className={styles.checkboxTitle}>Vehicle Type</h3>
          <div className={styles.checkboxGroup}>
            {formAdvertList.map(({ name, iconName }) => (
              // <label key={item} className={styles.checkboxLabel}>
              //   <input
              //     type="checkbox"
              //     name={item}
              //     checked={filters[item]}
              //     onChange={handleCheckboxChange}
              //     className={styles.checkbox}
              //   />
              //   {item}
              // </label>

              <CustomCheckbox key={name} label={name} iconName={iconName} />
            ))}
          </div>
        </div>
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
