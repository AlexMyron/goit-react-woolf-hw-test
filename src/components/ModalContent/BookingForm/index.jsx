import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Button from 'components/UI/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import styles from './BookingForm.module.css';
import icons from '../../../images/icons.svg';
import { validateBookingForm } from 'services/helpers';
import { postBooking } from 'services/api';
import { INIT_FORM_STATE } from 'services/constants';

const BookingForm = () => {
  const [formValues, setFormValues] = useState(INIT_FORM_STATE);
  const [formErrors, setFormErrors] = useState({});
  const [startDate, setStartDate] = useState(null);
  const [shake, setShake] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormErrors((prev) => ({ ...prev, [name]: '' }));
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    setFormErrors((prev) => ({ ...prev, date: '' }));
    setFormValues({
      ...formValues,
      date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateBookingForm({ ...formValues, date: startDate });
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      postBooking({ ...formValues, date: startDate });
      setFormValues(INIT_FORM_STATE);
      setStartDate(null);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const shakeAnimation = shake
    ? {
        x: [-5, 5, -5, 5, -5, 5, 0],
        transition: { duration: 0.4 },
      }
    : {};

  return (
    <div className={styles.bookingForm}>
      <h4 className={styles.formTitle}>Book your campervan now</h4>
      <span className={styles.slogan}>
        Stay connected! We are always ready to help you.
      </span>
      <form className={styles.form} ref={formRef}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formValues.name}
          onChange={handleChange}
        />
        {formErrors.name && (
          <motion.span
            className={styles.error}
            initial={{ x: 0 }}
            animate={shakeAnimation}
          >
            {formErrors.name}
          </motion.span>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formValues.email}
          onChange={handleChange}
        />
        {formErrors.email && (
          <motion.span
            className={styles.error}
            initial={{ x: 0 }}
            animate={shakeAnimation}
          >
            {formErrors.email}
          </motion.span>
        )}
        <div className={styles.dateBar}>
          <DatePicker
            selected={startDate}
            name="date"
            onChange={handleDateChange}
            placeholderText={'Booking date'}
          />
          <svg className={styles.icon}>
            <use xlinkHref={`${icons}#icon-calendar`}></use>
          </svg>
        </div>
        {formErrors.date && (
          <motion.span
            className={styles.error}
            initial={{ x: 0 }}
            animate={shakeAnimation}
          >
            {formErrors.date}
          </motion.span>
        )}
        <textarea
          name="comment"
          placeholder="Comment"
          rows="4"
          onChange={handleChange}
          value={formValues.comment}
        ></textarea>
        {formErrors.comment && (
          <motion.span
            className={styles.error}
            initial={{ x: 0 }}
            animate={shakeAnimation}
          >
            {formErrors.comment}
          </motion.span>
        )}
        <Button
          label="Send"
          type="submit"
          location="sidebar"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default BookingForm;
