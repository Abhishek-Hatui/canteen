import { useNavigate } from 'react-router-dom';
import ItemCard from './ItemCard';

const Items = () => {
  const navigate = useNavigate();

  return (
    <div className="items">
      <div className="items__functions">
        <input
          className="items__search input u-margin-top u-margin-bottom"
          placeholder="search dishes"
          type="text"
        />
        <button
          onClick={() => {
            navigate('/additem?mode=add');
          }}
          className="button button--primary"
        >
          +add new item
        </button>
      </div>
      <div className="items__display">
        <h2 className="items__title">featured dishes</h2>
        <ItemCard
          name="dish name"
          reviewcount="31"
          description="dsafafasdfasdfasd"
          price="10"
        />
      </div>
    </div>
  );
};

export default Items;
