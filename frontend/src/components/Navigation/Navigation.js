import { ReactComponent as Home } from '../../assests/SVG/House.svg';
import { ReactComponent as Menu } from '../../assests/SVG/Fork.svg';
import { ReactComponent as Cart } from '../../assests/SVG/Cart.svg';
import { ReactComponent as User } from '../../assests/SVG/account.svg';

import { useState } from 'react';

const Navigation = () => {

  const [btnActive, setBtnActive] = useState(null);

  const btnChangeHandler = (btnName) => {
    setBtnActive(btnName);
  }

  return(
    <section>
    <nav className="navigation">
    <ul className="navigation__list">
      <li className={`navigation__item ${btnActive === 'home' ? 'navigation__item--active' : ''}`}>
        <button className="navigation__button" onClick={() => btnChangeHandler('home')}>
          <Home />
        </button>
      </li>
      <li className={`navigation__item ${btnActive === 'menu' ? 'navigation__item--active' : ''}`}>
        <button className="navigation__button" onClick={() => btnChangeHandler('menu')}>
          <Menu />
        </button>
      </li>
      <li className={`navigation__item ${btnActive === 'cart' ? 'navigation__item--active' : ''}`}>
        <button className="navigation__button" onClick={() => btnChangeHandler('cart')}>
          <Cart />
        </button>
      </li>
      <li className={`navigation__item ${btnActive === 'user' ? 'navigation__item--active' : ''}`}>
        <button className="navigation__button" onClick={() => btnChangeHandler('user')}>
          <User />
        </button>
      </li>
    </ul>
  </nav>
  </section>
  )
};

export default Navigation;
