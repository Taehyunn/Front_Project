import styles from "../CSS/Footer.module.scss";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <ul className={styles["footer"]}>
      <li>
        <Link to="/Top" className={styles["top_icon"]}>
          <img src={require("../../public/img/icon_top.png")} alt="top_icon" />
          <img
            src={require("../../public/img/icon_top1.png")}
            alt="top1"
            className={styles["top1"]}
          />
        </Link>
      </li>
      <li>
        <Link to="/New" className={styles["new_icon"]}>
          <img src={require("../../public/img/icon_new.png")} alt="new_icon" />
          <img
            src={require("../../public/img/icon_new1.png")}
            alt="new1"
            className={styles["new1"]}
          />
        </Link>
      </li>
      <li>
        <Link to="/Ask" className={styles["ask_icon"]}>
          <img src={require("../../public/img/icon_ask.png")} alt="ask_icon" />
          <img
            src={require("../../public/img/icon_ask1.png")}
            alt="ask1"
            className={styles["ask1"]}
          />
        </Link>
      </li>
      <li>
        <Link to="/Show" className={styles["show_icon"]}>
          <img
            src={require("../../public/img/icon_show.png")}
            alt="show_icon"
          />
          <img
            src={require("../../public/img/icon_show1.png")}
            alt="show1"
            className={styles["show1"]}
          />
        </Link>
      </li>
      <li>
        <Link to="/Job" className={styles["job_icon"]}>
          <img src={require("../../public/img/icon_job.png")} alt="job_icon" />
          <img
            src={require("../../public/img/icon_job1.png")}
            alt="show1"
            className={styles["job1"]}
          />
        </Link>
      </li>
    </ul>
  );
};
