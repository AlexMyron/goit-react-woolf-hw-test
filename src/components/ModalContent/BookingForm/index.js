import Button from 'components/Button';
import styles from './BookingForm.module.css'
import DateInput from 'components/DatePicker';

const BookingForm = () => {
  return (
    <div className={styles.bookingForm}>
      <h4 className={styles.formTitle}>Book your campervan now</h4>
      <span className={styles.slogan}>
        Stay connected! We are always ready to help you.
      </span>
      <form className={styles.form}>
        <input type="text" placeholder="Name" pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" />
        <input type="email" placeholder="Email" pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}" />
        {/* <input type="date" placeholder="Booking date" /> */}
        <DateInput />
        <textarea placeholder="Comment" rows="4"></textarea>
        <Button label="Send" type="submit" location="sidebar" />
      </form>
    </div>
  );
};

export default BookingForm;
