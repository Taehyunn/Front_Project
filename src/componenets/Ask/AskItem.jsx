import React, { useState, useEffect } from "react";
import { getStory } from "../utils/Api";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AskLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
  margin-bottom: 10px;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  min-height: 115px;
  max-height: 200px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  img {
    vertical-align: top;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: #000000;
  }
  .askTitle {
    text-align: start;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
  }
  .askby {
    padding: 13px 0 16px;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    font-weight: bold;
    .askby-name {
      margin-bottom: 3px;
    }
  }
  .askby > a:hover {
    color: #db00ff;
  }
  .ask_comments {
    display: inline-block;
    display: flex;
    align-items: center;
    // width: 63px;
    height: 10px;
    font-weight: normal;
    font-size: 10px;
    line-height: 10px;
    /* or 100% */
    letter-spacing: -0.5px;

    color: #db00ff;
  }
`;

export const AskItem = ({ askId, isMount }) => {
  const [asks, setAsk] = useState(
    () => JSON.parse(window.localStorage.getItem("asks")) || []
  );
  const [askUrl, setAskUrl] = useState("");
  const [askDetail, setAskDetail] = useState("");
  const [askUserUrl, setaskUserUrl] = useState("");
  useEffect(() => {
    window.localStorage.setItem("asks", JSON.stringify(asks));
  }, [asks]);
  useEffect(() => {
    getStory(askId).then((data) => data && setAsk(data));
    setAskUrl(`https://news.ycombinator.com/item?id=${askId}`);
    setAskDetail(`/Ask/${askId}`);

    return () => {
      setAsk();
    };
  }, []);
  useEffect(() => {
    setaskUserUrl(`/User/${asks.by}`);
    return () => {
      setaskUserUrl();
    };
  }, [asks.by]);

  //target=”_blank” 새탭에서 열람.
  return asks && asks.title ? (
    <AskLi>
      <a href={askUrl} className="askTitle" target="_blank">
        <p>{asks.title}</p>
      </a>
      <div className="askby">
        <Link to={askUserUrl} className="askby-name">
          작성자 : {asks.by}
        </Link>
        <br />
        Posted : {asks.time}
      </div>
      {asks.descendants ? (
        <Link to={askDetail} className="ask_comments">
          <img
            src="https://rawcdn.githack.com/Taehyunn/Front_Project/232f269887695c9ebd2f75a022a70625caa94027/public/img/comment_icon_ask.png"
            alt="댓글"
          />
          &nbsp;
          {asks.descendants}
        </Link>
      ) : null}
    </AskLi>
  ) : null;
};

//by, descemdamts, id, kids, score, text, title, time ,type:story
