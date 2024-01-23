import { useNavigate } from 'react-router-dom';
import {ReactComponent as Star} from '../../assests/SVG/star.svg';
import {ReactComponent as StarShape} from '../../assests/SVG/star-shape.svg';

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
            navigate('/additem');
          }}
          className="button button--primary"
        >
          +add new item
        </button>
      </div>
      <div className="items__display">
        <h2 className="items__title">featured dishes</h2>
        <div className="items__card">
          <div className="items__details items__details--1">
            <h2 className="heading-secondary">dish name</h2>
            <p className='items__text items__text--1'>
              <span className='items__rating'><Star/><Star/><Star/><Star/><StarShape/></span>(31)
            </p>
            <p className='items__text items__text--2'>Rs 70</p>
            <p className='items__text items__text--3'>fnaofhsoifhasiopfhjipafjaipfjipajfsssssssssssssssssssssssssssssssss</p>
          </div>
          <div className="items__details items__details--2">
            <img
              className="items__image"
              src="https://source.unsplash.com/1600x900/?burger"
              alt="tasty burger"
            />
            <button className='button button--primary items__button'><span className='items__button-text'>edit</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
