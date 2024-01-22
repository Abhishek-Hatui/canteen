import { ReactComponent as Fork } from '../../assests/SVG/Fork.svg';
const OrderCard = (props) => (
  <div className="order__details">
    <span className="order__logo">
      <Fork />
    </span>
    <p className="order__text order__text--title">{props.title}</p>
    <p>
      x &nbsp;<span className="order__text">{props.quantity}</span>
    </p>
    <p className='order__text'>price: {props.price}</p>
  </div>
);

export default OrderCard;
