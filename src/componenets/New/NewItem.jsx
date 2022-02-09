import React, { useState, useEffect } from "react";
import { getStory } from "../Api";
import newStyles from "../../CSS/NewItem.module.scss";

export const NewItem = ({ newId, isMount }) => {
  const [news, setNew] = useState([]);
  const [newUrl, setNewUrl] = useState("");

  useEffect(() => {
    if (isMount.current) {
      getStory(newId).then((data) => data && setNew(data));
      setNewUrl(`/New/${newId}`);
    }
    return () => {
      setNew();
    };
  }, [isMount]);

  //target=”_blank” 새탭에서 열람.
  return news && news.url ? (
    <li key={news.id} className={newStyles["Newli"]}>
      <a href={news.url} target="_blank">
        <p>{news.title}</p>
      </a>
      <span>
        By :{news.by} <br />
        Posted:{news.time}
      </span>
      {news.kids ? (
        <a href={newUrl} className={newStyles["new_comments"]}>
          <img src="img/comment_icon_new.png" alt="댓글" />
          &nbsp;
          {news.kids.length}
        </a>
      ) : null}
    </li>
  ) : null;
};
