import { FC } from "react";
import style from "../Footer.module.css";
import FB from "/FB.svg";
import TW from "/TW.svg";
import Inst from "/Inst.svg";
import LN from "/LN.svg";

const Download: FC = () => {
  return (
    <div className={style.Download}>
      <h2>Download App</h2>
      <p>Save $3 with App New User Only</p>
      <div className={style.DownloadLinks}>
        <div>
          <img src="/QR.png" alt="QRCode" />
        </div>
        <a href="" id="Playmarket">
          <img src="/GooglePlay.png" alt="Playmarket" />
        </a>
        <a href="" id="Appstore">
          <img src="/AppStore.png" alt="Appstore" />
        </a>
      </div>
      <div className={style.Social}>
        <a href="">
          <img src={FB} alt="FB" />
        </a>
        <a href="">
          <img src={TW} alt="TW" />
        </a>
        <a href="">
          <img src={Inst} alt="Inst" />
        </a>
        <a href="">
          <img src={LN} alt="LN" />
        </a>
      </div>
    </div>
  );
};

export default Download;
