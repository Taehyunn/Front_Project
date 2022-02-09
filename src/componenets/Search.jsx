import styles from "../CSS/Search.module.scss";
import { Link } from "react-router-dom";

export const Search = () => {
  return (
    <div className={styles["header"]}>
      <Link to="/" className={styles["linkgo"]}>
        <img src={require("../../public/img/sveltelogo.png")} alt="로고" />
      </Link>
      <p>
        svelte
        <br />
        hacker
        <br />
        news
        <br />
      </p>
      <Link to="#" className={styles["search2"]}>
        <img src={require("../../public/img/search.png")} alt="검색" />
      </Link>
    </div>
  );
};

//로고 차후 수정.
