import { ReactComponent as LeftArrow } from '../../assests/SVG/left-arrow.svg';
import useInput from '../../hooks/useInput/use-input';
import { useNavigate } from 'react-router-dom';

const AddItem = () => {
  const navigate = useNavigate();
  ///////////////////////////////////////////////////////////////////////////////////////
  const {
    value: enteredName,
    hasError: nameHasError,
    reset: nameReset,
    isValueValid: isNameValid,
    blurHandler: nameBlurHandler,
    valueChangeHandler: nameChangeHandler,
  } = useInput((name) => name.trim() !== '');

  const {
    value: enteredPrice,
    hasError: priceHasError,
    reset: priceReset,
    isValueValid: isPriceValid,
    blurHandler: priceBlurHandler,
    valueChangeHandler: priceChangeHandler,
  } = useInput(
    (price) => price.trim() !== '' && price.match(/^[0-9]+$/) != null
  );

  const {
    value: enteredDesc,
    hasError: descHasError,
    reset: descReset,
    isValueValid: isDescValid,
    blurHandler: descBlurHandler,
    valueChangeHandler: descChangeHandler,
  } = useInput((desc) => desc.trim() !== '');

  const { value: enteredCategory, valueChangeHandler: categoryChangeHandler } =
    useInput((category) => category.trim() !== '');

  const { value: enteredType, valueChangeHandler: typeChangeHandler } =
    useInput((type) => type.trim() !== '');

  ///////////////////////////////////////////////////////////////////////////////////////

  const sendData = async (newItem) => {
    try {
      const response = await fetch('/api/v1/item/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });

      if (!response.ok) {
        throw new Error('error adding new item!');
      }

      const data = await response.json();
      return data;
    } catch (err) {
      window.alert(err.message);
      return null;
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!isNameValid && !isPriceValid & !isDescValid) {
      return;
    }
    const newItem = {
      name: enteredName,
      description: enteredDesc,
      price: +enteredPrice,
      category: enteredCategory,
      type: enteredType,
      availability: true,
      image: 'https://source.unsplash.com/1600x900/?' + enteredName,
    };

    const response = sendData(newItem);

    if(response){
      window.alert('item added successfully');
    }

    nameReset();
    priceReset();
    descReset();
  };

  /////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="add-item">
      <div className="add-item__title">
        <div onClick={() => navigate('..')}>
          <LeftArrow />
        </div>
        <h2 className="heading-secondary u-margin-left">add new item</h2>
      </div>

      <form className="add-item__form" onSubmit={onSubmitHandler}>
        <div className="add-item__form-group add-item__form-group--1">
          <label
            className="add-item__label heading-secondary u-margin-bottom"
            htmlFor="name"
          >
            Item name
          </label>
          <input
            className={nameHasError ? 'input--error' : 'input'}
            type="text"
            placeholder="enter item name"
            id="name"
            onBlur={nameBlurHandler}
            onChange={nameChangeHandler}
            value={enteredName}
          />
        </div>

        <div className="add-item__form-group add-item__form-group--2">
          <label
            className="add-item__label heading-secondary u-margin-bottom"
            htmlFor="price"
          >
            price
          </label>
          <input
            className={priceHasError ? 'input--error' : 'input'}
            type="text"
            placeholder="enter item price"
            id="price"
            value={enteredPrice}
            onChange={priceChangeHandler}
            onBlur={priceBlurHandler}
          />
        </div>

        <div className="add-item__form-group add-item__form-group--3">
          <label
            className="add-item__label heading-secondary u-margin-bottom"
            htmlFor="description"
          >
            description
          </label>
          <input
            className={descHasError ? 'input--error' : 'input'}
            type="text"
            placeholder="enter item description"
            id="description"
            value={enteredDesc}
            onChange={descChangeHandler}
            onBlur={descBlurHandler}
          />
        </div>

        <div className="add-item__form-group add-item__form-group--4">
          <label className="add-item__label heading-secondary u-margin-bottom">
            category
          </label>
          <div className="add-item__category">
            <input
              type="radio"
              name="category"
              onChange={categoryChangeHandler}
              value="breakfast"
              className="add-item__radio-input"
              id="breakfast"
            />
            <label htmlFor="breakfast" className="add-item__radio-label">
              breakfast
            </label>

            <input
              type="radio"
              name="category"
              onChange={categoryChangeHandler}
              value="lunch"
              className="add-item__radio-input"
              id="lunch"
            />
            <label htmlFor="lunch" className="add-item__radio-label">
              lunch
            </label>

            <input
              type="radio"
              name="category"
              onChange={categoryChangeHandler}
              value="snacks"
              className="add-item__radio-input"
              id="snacks"
            />
            <label htmlFor="snacks" className="add-item__radio-label">
              snacks
            </label>

            <input
              type="radio"
              name="category"
              onChange={categoryChangeHandler}
              value="dinner"
              className="add-item__radio-input"
              id="dinner"
            />
            <label htmlFor="dinner" className="add-item__radio-label">
              dinner
            </label>
          </div>
        </div>

        <div className="add-item__form-group add-item__form-group--5">
          <label className="add-item__label heading-secondary u-margin-bottom">
            type
          </label>
          <div className="add-item__category">
            <input
              type="radio"
              name="type"
              onChange={typeChangeHandler}
              value="veg"
              className="add-item__radio-input"
              id="veg"
            />
            <label htmlFor="veg" className="add-item__radio-label">
              veg
            </label>

            <input
              type="radio"
              name="type"
              onChange={typeChangeHandler}
              value="non-veg"
              className="add-item__radio-input"
              id="non-veg"
            />
            <label htmlFor="non-veg" className="add-item__radio-label">
              non-veg
            </label>
          </div>
        </div>

        <button className="button button--big button--primary u-margin-bottom-big">
          confirm
        </button>
      </form>
    </div>
  );
};

export default AddItem;
