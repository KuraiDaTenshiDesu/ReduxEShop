import { FC } from "react";
import style from "../Footer.module.css";

const QuickLink: FC = () => {
  return (
    <div className={style.QuickLink}>
      <h2>Quick Link</h2>
      <a href="">Privacy Policy</a>
      <a href="">Terms Of Use</a>
      <a href="">FAQ</a>
      <a href="">Contact</a>
    </div>
  );
};

export default QuickLink;
