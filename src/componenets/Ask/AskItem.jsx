import React, { useState, useEffect } from "react";
import { getStory } from "../Api";
import askStyles from "../../CSS/AskItem.module.scss";
import { Link } from "react-router-dom";

export const AskItem = ({ askId, isMount }) => {
  const [asks, setAsk] = useState([]);
  const [askUrl, setAskUrl] = useState("");
  const [askDetail, setAskDetail] = useState("");

  useEffect(() => {
    if (isMount.current) {
      getStory(askId).then((data) => data && setAsk(data));
      setAskUrl(`https://news.ycombinator.com/item?id=${askId}`);
      setAskDetail(`/Ask/${askId}`);
    }
    return () => {
      setAsk();
    };
  }, [isMount]);

  //target=”_blank” 새탭에서 열람.
  return asks ? (
    <li key={asks.id} className={askStyles["Askli"]}>
      <a href={askUrl} target="_blank">
        <p>{asks.title}</p>
      </a>
      <span>
        By :{asks.by} <br />
        Posted:{asks.time}
      </span>
      {asks.descendants ? (
        <Link to={askDetail} className={askStyles["ask_comments"]}>
          <img src="img/comment_icon_ask.png" alt="댓글" />
          &nbsp;
          {asks.descendants}
        </Link>
      ) : null}
    </li>
  ) : null;
};

//by, descemdamts, id, kids, score, text, title, time ,type:story
