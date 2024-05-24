import { type ReactNode } from 'react';
import Logo from './assets/robinhood.svg';
import './Header.css';

function Header(): ReactNode {
  return (
    <div className="header__wrapper">
      {/* logo */}
      <div className="header__logo">
        <img src={Logo} width={25} />
      </div>
      <div className="header__search">
        <div className="header__searchContainer">
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__menuItems">
        <a href="#">Free Stocks</a>
        <a href="#">Portfolio</a>
        <a href="#">Cash</a>
        <a href="#">Messages</a>
        <a href="#">Account</a>
      </div>
    </div>
  );
}

export default Header;
