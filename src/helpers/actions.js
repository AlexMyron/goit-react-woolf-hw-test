import { PER_PAGE } from './constants';

const hasValidDetails = (details, keys) => {
  return keys.every(key => {
    const lowerCaseKey = key.toLowerCase();
    return (
      lowerCaseKey in details &&
      details[lowerCaseKey] !== null &&
      details[lowerCaseKey] !== undefined &&
      details[lowerCaseKey] !== 0
    );
  });
};

const toLowerCaseKeys = obj => {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] = obj[key];
    return acc;
  }, {});
};

export const filterCardsList = ({ target, list }) => {
  const fd = new FormData(target);
  const locationQuery = fd.get('location')?.toLowerCase() || '';

  const filterKeys = [];

  for (const [name] of fd.entries()) {
    if (name !== 'form' && name !== 'location') {
      filterKeys.push(name.toLowerCase());
    }
  }

  const selectedRadio = target.querySelector('input[type="radio"]:checked');
  if (selectedRadio) {
    filterKeys.push(selectedRadio.value.toLowerCase());
  }

  return list.filter(item => {
    const lowerCaseDetails = toLowerCaseKeys(item.details);
    lowerCaseDetails[item.form.toLowerCase()] = 1;
    lowerCaseDetails.transmission =
      item.transmission.toLowerCase() === 'automatic';

    const isCardPassed = hasValidDetails(lowerCaseDetails, filterKeys);
    const matchesLocation = item.location
      ?.toLowerCase()
      .includes(locationQuery);

    return isCardPassed && matchesLocation;
  });
};

export const paginate = (currentPage, list) => {
  const end = currentPage * PER_PAGE;

  return {
    cardsPayload: [...list].splice(0, end),
    isButtonVisible: list.length > end,
  };
};
