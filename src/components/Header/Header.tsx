import { FC } from "react";
import Logo from "/Logo.svg";
import Fav from "/Fav.svg";
import Cart from "/Cart.svg";
import Search_Icon from "/Search_Icon.svg";
import style from "./Header.module.css";

const Header: FC = () => {
  return (
    <header className={style.Header}>
      <img src={Logo} alt="Exclusive logo" />
      <nav className={style.Links}>
        <a href="">Home</a>
        <a href="">Contact</a>
        <a href="">About</a>
        <a href="">Sign Up</a>
      </nav>
      <div className={style.SearchUserWrap}>
        <form className={style.Search}>
          <input type="text" placeholder="What are you looking for?" />
          <button type="submit">
            <img src={Search_Icon} alt="Search" />
          </button>
        </form>
        <div className={style.User}>
          <a href="">
            <img src={Fav} alt="Fav" />
          </a>
          <a href="">
            <img src={Cart} alt="Cart" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
