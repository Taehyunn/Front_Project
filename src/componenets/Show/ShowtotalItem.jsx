import React, { useState, useEffect, useContext } from "react";
import { getStory } from "../utils/Api";
import styled from "styled-components";
import { mapTime } from "../mapTime";
import { Link } from "react-router-dom";
import TextContext from "../../contexts/TextContext";

const ShowStyledItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 20px;
  border-bottom: 1px solid #e8e8ed;
  div {
    display: flex;
    align-items: center;
  }
  a {
    display: inline-block;
    text-decoration: none;
  }
  .showmain_link {
    text-decoration: none;
    padding: 10px 0;
    box-sizing: border-box;
    color: #000000;
    font-family: "Pretendard", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 110%;
    /* identical to box height, or 18px */

    display: flex;
    align-items: center;
  }
  .show_comments {
    margin-left: 5px;
    color: #6b6b6b;
    font-family: "Pretendard", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 110%;
    text-decoration: none;
  }
  .small_link {
    display: inline-block;
    padding: 6px 10px;
    height: 20px;
    color: #6b6b6b;
    text-decoration: none;
    border: 1px solid #909090;
    box-sizing: border-box;
    border-radius: 12.5px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 50%;
    text-align: center;
  }
  span {
    color: #6b6b6b;
    font-family: "Pretendard", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 110%;
  }
  background: #ffffff;
`;
const Userinfo = styled.div`
  color: #6b6b6b;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 110%;
  .askItemby {
    color: #6b6b6b;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 110%;
  }
  .totalItemby:hover {
    color: #fd6106;
  }
`;

export function Showtotal({ showlist }) {
  const [showItem, setShowItem] = useState([]);
  const [showUrl, setShowUrl] = useState("");
  const [showDetail, setShowDetail] = useState("");
  const [showUserUrl, setshowUserUrl] = useState("");
  const Text = useContext(TextContext);
  const Showtext = Text.text;

  useEffect(() => {
    getStory(showlist).then((data) => data && setShowItem(data));
    setShowUrl(`https://news.ycombinator.com/item?id=${showlist}`);
    setShowDetail(`/Show/${showlist}`);
    return () => {
      setShowItem([]);
      setShowUrl("");
      setShowDetail("");
    };
  }, []);

  useEffect(() => {
    setshowUserUrl(`/User/${showItem.by}`);
    return () => {
      setshowUserUrl();
    };
  }, [showItem.by]);
  const urlName = showItem.url?.slice(8).split("/")[0];

  return showItem.url &&
    showItem.title?.toLowerCase().includes(Showtext.toLowerCase()) ? (
    <ShowStyledItem>
      <li>
        {showItem.url && (
          <a href={showItem.url} className="small_link" target="_blank">
            {urlName}
          </a>
        )}
        <a href={showUrl} className="showmain_link" target="_blank">
          {showItem.title}
        </a>
        <Userinfo>
          {showItem.score} points&nbsp;
          <Link to={showUserUrl} className="askItemby">
            by {showItem.by}
          </Link>
        </Userinfo>
        <div>
          <span>{mapTime(showItem.time)}</span>
          <Link to={showDetail} className="show_comments">
            {showItem.descendants ? (
              <p>{showItem.descendants} comments</p>
            ) : null}
          </Link>
        </div>
      </li>
    </ShowStyledItem>
  ) : null;
}
export const ShowtotalItem = React.memo(Showtotal);
