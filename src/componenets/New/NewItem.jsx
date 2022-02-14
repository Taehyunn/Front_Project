import React, { useState, useEffect } from "react";
import { getStory } from "../utils/Api";
import { Link } from "react-router-dom";
import newStyles from "../../CSS/NewItem.module.scss";

export const NewItem = ({ newId, isMount }) => {
  const [news, setNew] = useState([]);
  const [newUrl, setNewUrl] = useState("");
  const [newUserUrl, setnewUserUrl] = useState("");

  useEffect(() => {
    getStory(newId).then((data) => data && setNew(data));
    setNewUrl(`/New/${newId}`);
    setnewUserUrl(`/User/${news.by}`);
    return () => {
      setNew();
      setNewUrl();
      setnewUserUrl();
    };
  }, []);

  //target=”_blank” 새탭에서 열람.
  return news && news.url ? (
    <li key={news.id} className={newStyles["Newli"]}>
      <a href={news.url} className={newStyles["newTitle"]} target="_blank">
        <p>{news.title}</p>
      </a>
      <div className={newStyles["newby"]}>
        <Link to={newUserUrl}>By :{news.by}</Link> <br />
        Posted:{news.time}
      </div>
      {news.descendants ? (
        <Link to={newUrl} className={newStyles["new_comments"]}>
          <img src="img/comment_icon_new.png" alt="댓글" />
          &nbsp;
          {news.descendants}
        </Link>
      ) : null}
    </li>
  ) : null;
};
