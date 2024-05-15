import Card from 'components/Card';

const CardsList = ({ cards }) => {
  return (
    <ul>
      {cards.map(card => (
        <Card {...card} key={card._id} />
      ))}
    </ul>
  );
};

export default CardsList;
