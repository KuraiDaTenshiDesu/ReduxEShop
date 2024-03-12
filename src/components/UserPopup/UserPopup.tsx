import { FC } from "react";
import style from "./UserPopup.module.css";
import Account from "/Account.svg";
import Order from "/Order.svg";
import Cancellations from "/Cancellations.svg";
import Reviews from "/Reviews.svg";
import Logout from "/Logout.svg";

interface UserPopupProps {
  isVisible: boolean;
}

const UserPopup: FC<UserPopupProps> = ({ isVisible }) => {
  return (
    <nav className={isVisible ? style.Popup : style.Popup__hidden}>
      <a href="">
        <img src={Account} alt="Account" />
        Manage My Account
      </a>
      <a href="">
        <img src={Order} alt="Order" />
        My Order
      </a>
      <a href="">
        <img src={Cancellations} alt="Cancellations" />
        My Cancellations
      </a>
      <a href="">
        <img src={Reviews} alt="Reviews" />
        My Reviews
      </a>
      <a href="">
        <img src={Logout} alt="Logout" />
        Logout
      </a>
    </nav>
  );
};

export default UserPopup;
