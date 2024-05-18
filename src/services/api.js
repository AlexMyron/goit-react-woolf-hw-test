import axios from 'axios';
import { toast } from 'react-toastify';

export const postBooking = async booking => {
  try {
    const { data } = await axios.post('/bookings', {
      details: booking,
    });
    toast('Your booking has been registered.');
    return data;
  } catch (err) {
    toast('Error. Please, try again later.');
    return console.error(err.message);
  }
};
