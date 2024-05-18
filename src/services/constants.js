import axios from 'axios';

axios.defaults.baseURL = 'https://6642545e3d66a67b34370b8e.mockapi.io/';

export const PER_PAGE = 4;

export const FORM_FEATURES_LIST = [
  { name: 'Van', iconName: 'panelTruck' },
  { name: 'Fully Integrated', iconName: 'fullyIntegrated' },
  { name: 'Alcove', iconName: 'alcove' },
];

export const GALLERY_FEATURES_LIST = [
  { name: 'AC', iconName: 'airConditioner' },
  { name: 'Automatic', iconName: 'transmission' },
  { name: 'Kitchen', iconName: 'kitchen' },
  { name: 'TV', iconName: 'TV' },
  { name: 'Shower/WC', iconName: 'shower' },
];

export const INIT_FORM_STATE = {
  name: '',
  email: '',
  date: null,
  comment: '',
};
