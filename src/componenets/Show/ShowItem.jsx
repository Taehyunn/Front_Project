import React, { useState, useEffect } from "react";
import { getStory } from "../Api";
import showStyles from "../../CSS/ShowItem.module.scss";

export const ShowItem = ({ showId, isMount }) => {
  const [shows, setShow] = useState([]);
  const [showUrl, setShwoUrl] = useState("");

  useEffect(() => {
    if (isMount.current) {
      getStory(showId).then((data) => data && setShow(data));
      setShwoUrl(`/Show/${showId}`);
    }
    return () => {
      setShow();
    };
  }, [isMount]);

  //target=”_blank” 새탭에서 열람.
  return shows && shows.url ? (
    <li key={shows.id} className={showStyles["Showli"]}>
      <a href={shows.url} target="_blank">
        <p>{shows.title}</p>
      </a>
      <span>
        By :{shows.by} <br />
        Posted:{shows.time}
      </span>
      {shows.kids ? (
        <a href={showUrl} className={showStyles["show_comments"]}>
          <img src="img/comment_icon_show.png" alt="댓글" />
          &nbsp;
          {shows.kids.length}
        </a>
      ) : null}
    </li>
  ) : null;
};
