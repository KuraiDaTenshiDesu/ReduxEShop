import { FC } from "react";
import style from "../Footer.module.css";

const Support: FC = () => {
  return (
    <div className={style.Support}>
      <h2>Support</h2>
      <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
      <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
      <a href="tel:+88015-88888-9999">+88015-88888-9999</a>
    </div>
  );
};

export default Support;
