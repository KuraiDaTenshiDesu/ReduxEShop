import { FC } from "react";
import style from "../Footer.module.css";
import Send from "/Send.svg";

const Subscribe: FC = () => {
  return (
    <div className={style.Subscribe}>
      <h2>Exclusive</h2>
      <p>Subscribe</p>
      <p>Get 10% off your first order</p>
      <form>
        <input type="text" placeholder="Enter your email" />
        <button>
          <img src={Send} alt="Send" />
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
