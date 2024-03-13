import { FC } from "react";
import style from "./Footer.module.css";
import Subscribe from "./Blocks/Subscribe";
import Copyright from "/Copyright.svg";
import Support from "./Blocks/Support";
import Account from "./Blocks/Account";
import QuickLink from "./Blocks/QuickLink";
import Download from "./Blocks/Download";

const Footer: FC = () => {
  return (
    <footer className={style.Footer}>
      <div className={style.Container}>
        <Subscribe />
        <Support />
        <Account />
        <QuickLink />
        <Download />
      </div>
      <div className={style.Copyright}>
        <img src={Copyright} alt="Copyright" />
        <h2>Copyright Rimel 2022. All right reserved</h2>
      </div>
    </footer>
  );
};

export default Footer;
