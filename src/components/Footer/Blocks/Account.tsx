import { FC } from "react";
import style from "../Footer.module.css";

const Account: FC = () => {
  return (
    <div className={style.Account}>
      <h2>Account</h2>
      <a href="">My Account</a>
      <a href="">Login / Register</a>
      <a href="">Cart</a>
      <a href="">Wishlist</a>
      <a href="">Shop</a>
    </div>
  );
};

export default Account;
