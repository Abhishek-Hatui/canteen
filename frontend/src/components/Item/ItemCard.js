import { useNavigate } from 'react-router-dom';
import { ReactComponent as Star } from '../../assests/SVG/star.svg';
import { ReactComponent as StarShape } from '../../assests/SVG/star-shape.svg';
const ItemCard = (props) => {
  const navigate = useNavigate();


  return (
    <div className="items__card">
      <div className="items__details items__details--1">
        <h2 className="heading-secondary">{props.name}</h2>
        <p className="items__text items__text--1">
          <span className="items__rating">
            {Array.from({length: props.rating}, (_,index) => <Star key={`star-${index}`}/>)}
            {Array.from({length: 5 - props.rating}, (_,index) => <StarShape key={`shape-${index}`}/>)}
          </span>
          &nbsp;
          ({props.reviewcount})
        </p>
        <p className="items__text items__text--2">Rs {props.price}</p>
        <p className="items__text items__text--3">{props.description}</p>
      </div>
      <div className="items__details items__details--2">
        <img
          className="items__image"
          // src={`https://source.unsplash.com/1600x900/?${props.name}`}
          src={props.image}
          alt="tasty burger"
        />
        <button
          className="button button--primary items__button"
          onClick={() => navigate(`/additem?mode=edit&item-id=${props.id}`)}
        >
          <span className="items__button-text">edit</span>
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
