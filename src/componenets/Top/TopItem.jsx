import React, { useState, useEffect } from "react";
import { getStory } from "../utils/Api";
import { Link } from "react-router-dom";
import styles from "../../CSS/TopItem.module.scss";

export default function TopItem({ storyId, isMount }) {
  const [top, setTop] = useState([]);
  const [topUrl, setTopUrl] = useState("");
  const [topUserUrl, settopUserUrl] = useState("");

  const [isError, setisError] = useState();
  useEffect(() => {
    try {
      if (isMount.current) {
        setisError(false);
        getStory(storyId).then((data) => data && setTop(data));
        setTopUrl(`/Top/${storyId}`);
      }
    } catch (e) {
      setisError(true);
    }

    return () => {
      setTop();
    };
  }, [isMount]);

  useEffect(() => {
    settopUserUrl(`/User/${top.by}`);
    return () => {
      settopUserUrl();
    };
  }, [top.by]);

  if (isError) return <div>에러가 발생했습니다</div>;

  return top.url && top.title ? (
    <li className={styles["Topli"]} key={top.id}>
      <a href={top.url} className={styles["topTitle"]} target="_blank">
        <p>{top.title}</p>
      </a>
      <div className={styles["topby"]}>
        <Link to={topUserUrl} className={styles["topby-name"]}>
          작성자 : {top.by}
        </Link>{" "}
        <br />
        Posted : {top.time}
      </div>
      {top.descendants ? (
        <Link to={topUrl} className={styles["top_comments"]}>
          <img src="/img/comment_icon_top.png" alt="댓글" />
          &nbsp;
          {top.descendants}
        </Link>
      ) : null}
    </li>
  ) : null;
}
