import React, { useState, useEffect } from "react";
import { getStory } from "../Api";
import showStyles from "../../CSS/ShowItem.module.scss";
import { Link } from "react-router-dom";

export const ShowItem = ({ showId, isMount }) => {
  const [shows, setShow] = useState([]);
  const [showUrl, setShwoUrl] = useState("");
  const [showUserUrl, setshowUserUrl] = useState("");
  useEffect(() => {
    if (isMount.current) {
      getStory(showId).then((data) => data && setShow(data));
      setShwoUrl(`/Show/${showId}`);
    }
    return () => {
      setShow();
    };
  }, [isMount]);
  useEffect(() => {
    setshowUserUrl(`/User/${shows.by}`);
    return () => {
      setshowUserUrl("");
    };
  }, [shows.by]);

  //target=”_blank” 새탭에서 열람.
  return shows && shows.url ? (
    <li key={shows.id} className={showStyles["Showli"]}>
      <a href={shows.url} className={showStyles["showTitle"]} target="_blank">
        <p>{shows.title}</p>
      </a>
      <div className={showStyles["showby"]}>
        <Link to={showUserUrl}>By :{shows.by}</Link> <br />
        Posted:{shows.time}
      </div>
      {shows.descendants ? (
        <Link to={showUrl} className={showStyles["show_comments"]}>
          <img src="img/comment_icon_show.png" alt="댓글" />
          &nbsp;
          {shows.descendants}
        </Link>
      ) : null}
    </li>
  ) : null;
};
