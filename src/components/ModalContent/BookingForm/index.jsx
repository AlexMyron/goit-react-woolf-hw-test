import { useCallback, useState } from 'react';

import Button from 'components/UI/Button';
import DateInput from 'components/UI/DatePicker';

import styles from './BookingForm.module.css';
import { validateBookingForm } from 'services/helpers';
import { postBooking } from 'services/api';
import { INIT_FORM_STATE } from 'services/constants';

const BookingForm = () => {
  const [formValues, setFormValues] = useState(INIT_FORM_STATE);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;

    setFormErrors(prev => ({ ...prev, [name]: '' }));

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleDateInput = useCallback(
    date => {
      if (!date) return;

      setFormErrors(prev => ({ ...prev, date: '' }));

      setFormValues({
        ...formValues,
        date,
      });
    },
    [formValues]
  );

  const handleSubmit = e => {
    e.preventDefault();
    const errors = validateBookingForm(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      postBooking(formValues);
      setFormValues(INIT_FORM_STATE);
    }
  };

  return (
    <div className={styles.bookingForm}>
      <h4 className={styles.formTitle}>Book your campervan now</h4>
      <span className={styles.slogan}>
        Stay connected! We are always ready to help you.
      </span>
      <form className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formValues.name}
          onChange={handleChange}
        />
        {formErrors.name && (
          <span className={styles.error}>{formErrors.name}</span>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formValues.email}
          onChange={handleChange}
        />
        {formErrors.email && (
          <span className={styles.error}>{formErrors.email}</span>
        )}
        <DateInput handleDateInput={handleDateInput} />
        {formErrors.date && (
          <span className={styles.error}>{formErrors.date}</span>
        )}
        <textarea
          name="comment"
          placeholder="Comment"
          rows="4"
          onChange={handleChange}
          value={formValues.comment}
        ></textarea>
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
