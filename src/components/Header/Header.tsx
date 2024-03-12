import { FC, useState } from "react";
import Logo from "/Logo.svg";
import Fav from "/Fav.svg";
import Cart from "/Cart.svg";
import User from "/User.svg";
import Search_Icon from "/Search_Icon.svg";
import style from "./Header.module.css";
import UserPopup from "./../UserPopup/UserPopup";

const Header: FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <header className={style.Header}>
      <UserPopup isVisible={isPopupVisible} />
      <img src={Logo} alt="Exclusive logo" />
      <nav className={style.Links}>
        <a href="" className={style.LinkActive}>
          Home
        </a>
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
          <button onClick={() => setIsPopupVisible(!isPopupVisible)}>
            <img src={User} alt="User" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
