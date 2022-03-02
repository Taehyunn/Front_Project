import React, { useState, useEffect } from "react";
import { getStory } from "../utils/Api";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NewLi = styled.li`
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

  .newTitle {
    text-align: start;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
  }
  .newby {
    padding: 13px 0 16px;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 14px;
    .newby-name {
      margin-bottom: 3px;
    }
  }
  .newby > a:hover {
    color: #7b61ff;
  }
  .new_comments {
    display: flex;
    align-items: center;
    height: 10px;
    font-weight: normal;
    font-size: 10px;
    line-height: 10px;
    letter-spacing: -0.5px;
    color: #7b61ff;
  }
`;

export const NewItem = ({ newId, isMount }) => {
  const [news, setNew] = useState(
    () => JSON.parse(window.localStorage.getItem("news")) || []
  );
  const [newUrl, setNewUrl] = useState("");
  const [newUserUrl, setnewUserUrl] = useState("");
  useEffect(() => {
    window.localStorage.setItem("news", JSON.stringify(news));
  }, [news]);
  useEffect(() => {
    getStory(newId).then((data) => data && setNew(data));
    setNewUrl(`/New/${newId}`);

    return () => {
      setNew();
      setNewUrl();
    };
  }, []);

  useEffect(() => {
    setnewUserUrl(`/User/${news.by}`);
    return () => {
      setnewUserUrl();
    };
  }, [news.by]);

  //target=”_blank” 새탭에서 열람.
  return news && news.url ? (
    <NewLi>
      <a href={news.url} className="newTitle" target="_blank">
        <p>{news.title}</p>
      </a>
      <div className="newby">
        <Link to={newUserUrl} className="newby-name">
          작성자 : {news.by}
        </Link>
        <br />
        Posted : {news.time}
      </div>
      {news.descendants ? (
        <Link to={newUrl} className="new_comments">
          <img src="/img/comment_icon_new.png" alt="댓글" />
          &nbsp;
          {news.descendants}
        </Link>
      ) : null}
    </NewLi>
  ) : null;
};
