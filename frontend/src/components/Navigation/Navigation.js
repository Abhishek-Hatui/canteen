import {Outlet,NavLink} from 'react-router-dom';
import { ReactComponent as Home } from '../../assests/SVG/House.svg';
import { ReactComponent as Menu } from '../../assests/SVG/Fork.svg';
import { ReactComponent as Cart } from '../../assests/SVG/Cart.svg';
import { ReactComponent as User } from '../../assests/SVG/account.svg';

const Navigation = () => {
  return(
    <>
    <main>
      <Outlet/>
    </main>
    <footer>
    <nav className="navigation">
    <ul className="navigation__list">
      <li className={'navigation__item' }>
        <NavLink to='/' className={({isActive}) => isActive ? 'navigation__button--active' : 'navigation__button'} end>
          <Home />
        </NavLink>
      </li>
      <li className={'navigation__item' }>
        <NavLink to='/odashboard' className={({isActive}) => isActive ? 'navigation__button--active' : 'navigation__button'}>
          <Menu />
        </NavLink>
      </li>
      <li className={'navigation__item' }>
        <NavLink to='/additem?mode=add' className={({isActive}) => isActive ? 'navigation__button--active' : 'navigation__button'}>
          <Cart />
        </NavLink>
      </li>
      <li className={'navigation__item' }>
        <NavLink to='/oprofile' className={({isActive}) => isActive ? 'navigation__button--active' : 'navigation__button'}>
          <User />
        </NavLink>
      </li>
    </ul>
  </nav>
  </footer>
  </>
  )
};

export default Navigation;
