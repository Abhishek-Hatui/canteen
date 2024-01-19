import { ReactComponent as Fork } from '../../assests/SVG/Fork.svg';

const Order = (props) => {
  return (
    <div className="owner-dashboard__order">
      <div className="owner-dashboard__order-logo">
        <Fork />
      </div>
      <p className="owner-dashboard__order-title">{props.title}</p>
      <p className="owner-dashboard__order-status">{props.status}</p>
    </div>
  );
};

export default Order;
