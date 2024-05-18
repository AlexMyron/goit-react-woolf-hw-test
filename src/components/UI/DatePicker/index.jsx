import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const DateInput = ({ handleDateInput }) => {
  const [startDate, setStartDate] = useState(null);

  useEffect(() => {
    if (startDate) handleDateInput(startDate);
  }, [startDate]);

  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      placeholderText={'Booking date'}
    />
  );
};

export default DateInput;
