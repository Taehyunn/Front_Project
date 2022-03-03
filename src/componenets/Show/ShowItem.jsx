import React, { useState, useEffect } from "react";
import { getStory } from "../utils/Api";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ShowLi = styled.li`
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

  .showTitle {
    text-align: start;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
  }
  .showby {
    padding: 13px 0 16px;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 14px;
    .showby-name {
      margin-bottom: 3px;
    }
  }
  .showby > a:hover {
    color: #69a075;
  }
  .show_comments {
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

    color: #69a075;
  }
`;

export const ShowItem = ({ showId, isMount }) => {
  const [shows, setShow] = useState(
    () => JSON.parse(window.localStorage.getItem("shows")) || []
  );
  const [showUrl, setShwoUrl] = useState("");
  const [showUserUrl, setshowUserUrl] = useState("");
  useEffect(() => {
    window.localStorage.setItem("shows", JSON.stringify(shows));
  }, [shows]);
  useEffect(() => {
    getStory(showId).then((data) => data && setShow(data));
    setShwoUrl(`/Show/${showId}`);

    return () => {
      setShow();
      setShwoUrl();
    };
  }, []);
  useEffect(() => {
    setshowUserUrl(`/User/${shows.by}`);
    return () => {
      setshowUserUrl();
    };
  }, [shows.by]);

  //target=”_blank” 새탭에서 열람.
  return shows && shows.url ? (
    <ShowLi>
      <a href={shows.url} className="showTitle" target="_blank">
        <p>{shows.title}</p>
      </a>
      <div className="showby">
        <Link to={showUserUrl} className="showby-name">
          작성자 : {shows.by}
        </Link>
        <br />
        Posted : {shows.time}
      </div>
      {shows.descendants ? (
        <Link to={showUrl} className="show_comments">
          <img
            src="https://rawcdn.githack.com/Taehyunn/Front_Project/232f269887695c9ebd2f75a022a70625caa94027/public/img/icon_show.png"
            alt="댓글"
          />
          &nbsp;
          {shows.descendants}
        </Link>
      ) : null}
    </ShowLi>
  ) : null;
};
