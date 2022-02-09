import React, { useState, useEffect } from "react";
import { getStory } from "../Api";
import styles from "../../CSS/TopItem.module.scss";

export const TopItem = ({ storyId, isMount }) => {
  const [top, setTop] = useState([]);
  const [topUrl, setTopUrl] = useState("");

  useEffect(() => {
    if (isMount.current) {
      getStory(storyId).then((data) => data && setTop(data));
      setTopUrl(`/Top/${storyId}`);
    }
    return () => {
      setTop();
    };
  }, [isMount]);

  //target=”_blank” 새탭에서 열람.
  return top && top.url ? (
    <li className={styles["Topli"]} key={top.id}>
      <a href={top.url} target="_blank">
        <p>{top.title}</p>
      </a>
      <span>
        By :{top.by} <br />
        Posted:{top.time}
      </span>
      {top.kids ? (
        <a href={topUrl} className={styles["top_comments"]}>
          <img src="img/comment_icon_top.png" alt="댓글" />
          &nbsp;
          {top.kids.length}
        </a>
      ) : null}
    </li>
  ) : null;
};
