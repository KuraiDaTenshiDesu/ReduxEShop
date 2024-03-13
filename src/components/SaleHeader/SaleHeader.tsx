import { FC } from "react";
import style from "./SaleHeader.module.css";

const SaleHeader: FC = () => {
  return (
    <div className={style.SaleHeader}>
      <h2>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h2>
      <a href="">Shop Now!</a>
      <select>
        <option value="">English</option>
        <option value="">Russian</option>
        <option value="">Spanish</option>
      </select>
    </div>
  );
};

export default SaleHeader;
