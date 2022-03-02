import React, { useState, useEffect } from "react";
import { getStory } from "../utils/Api";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TopLi = styled.li`
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

  .topTitle {
    text-align: start;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
  }
  .topby {
    padding: 13px 0 16px;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 14px;
    .topby-name {
      margin-bottom: 3px;
    }
  }
  .topby > a:hover {
    color: #fd6106;
  }
  .top_comments {
    display: flex;
    align-items: center;
    height: 10px;
    font-weight: normal;
    font-size: 10px;
    line-height: 10px;
    letter-spacing: -0.5px;
    color: #fd6106;
  }
`;

export default function TopItem({ storyId }) {
  const [top, setTop] = useState(
    () => JSON.parse(window.localStorage.getItem("top")) || []
  );
  const [topUrl, setTopUrl] = useState("");
  const [topUserUrl, settopUserUrl] = useState("");

  const [isError, setisError] = useState();
  useEffect(() => {
    window.localStorage.setItem("top", JSON.stringify(top));
  }, [top]);
  useEffect(() => {
    try {
      setisError(false);
      getStory(storyId).then((data) => data && setTop(data));
      setTopUrl(`/Top/${storyId}`);
    } catch (e) {
      setisError(true);
    }

    return () => {
      setTop();
    };
  }, []);

  useEffect(() => {
    settopUserUrl(`/User/${top.by}`);
    return () => {
      settopUserUrl();
    };
  }, [top.by]);

  if (isError) return <div>에러가 발생했습니다</div>;

  return top.url && top.title ? (
    <TopLi key={top.id}>
      <a href={top.url} className="topTitle" target="_blank">
        <p>{top.title}</p>
      </a>
      <div className="topby">
        <Link to={topUserUrl} className={"topby-name"}>
          작성자 : {top.by}
        </Link>{" "}
        <br />
        Posted : {top.time}
      </div>
      {top.descendants ? (
        <Link to={topUrl} className="top_comments">
          <img
            src="https://rawcdn.githack.com/Taehyunn/Front_Project/232f269887695c9ebd2f75a022a70625caa94027/public/img/comment_icon_top.png"
            alt="댓글"
          />
          &nbsp;
          {top.descendants}
        </Link>
      ) : null}
    </TopLi>
  ) : null;
}
