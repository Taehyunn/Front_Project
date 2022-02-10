import React, { useState, useEffect } from "react";
import { getStory } from "../Api";
import { Link } from "react-router-dom";
import styles from "../../CSS/TopItem.module.scss";

export const TopItem = ({ storyId, isMount }) => {
  const [top, setTop] = useState([]);
  const [topUrl, setTopUrl] = useState("");
  const [topUserUrl, settopUserUrl] = useState("");
  useEffect(() => {
    if (isMount.current) {
      getStory(storyId).then((data) => data && setTop(data));
      setTopUrl(`/Top/${storyId}`);
    }
    return () => {
      setTop();
    };
  }, [isMount]);

  useEffect(() => {
    settopUserUrl(`/User/${top.by}`);
    return () => {
      settopUserUrl("");
    };
  }, [top.by]);

  //target=”_blank” 새탭에서 열람.
  return top && top.url ? (
    <li className={styles["Topli"]} key={top.id}>
      <a href={top.url} className={styles["topTitle"]} target="_blank">
        <p>{top.title}</p>
      </a>
      <div className={styles["topby"]}>
        <Link to={topUserUrl}>By :{top.by}</Link> <br />
        Posted:{top.time}
      </div>
      {top.descendants ? (
        <Link to={topUrl} className={styles["top_comments"]}>
          <img src="img/comment_icon_top.png" alt="댓글" />
          &nbsp;
          {top.descendants}
        </Link>
      ) : null}
    </li>
  ) : null;
};
