import React, { useState, useEffect, useContext } from "react";
import { getStory, storyUrl } from "../utils/Api";
import styled from "styled-components";
import { mapTime } from "../mapTime";
import { Link } from "react-router-dom";
import TextContext from "../../contexts/TextContext";

const TotalItemStyled = styled.div`
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
  .main_link {
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
  .topcomments {
    margin-left: 5px;
    box-sizing: border-box;
    text-decoration: none;
    color: #6b6b6b;
    font-family: "Pretendard", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 110%;
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
  .totalItemby {
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

export function Toptotal({ toplist }) {
  const [totalItem, setTotal] = useState([]);
  const [detailUrl, setDetailUrl] = useState("");
  const [topUserUrl, settopUserUrl] = useState("");
  // const [topfilterItem, setFilterItem] = useState([]);

  const Text = useContext(TextContext);
  const Toptext = Text.text;
  useEffect(() => {
    getStory(toplist).then((data) => data && setTotal(data));
    setDetailUrl(`/Top/${toplist}`);

    return () => {
      setTotal([]);
    };
  }, []);

  useEffect(() => {
    settopUserUrl(`/User/${totalItem.by}`);
  }, [totalItem.by]);

  const urlName = totalItem.url?.slice(8).split("/")[0];

  return totalItem.url &&
    totalItem.title.toLowerCase().includes(Toptext.toLowerCase()) ? (
    <TotalItemStyled>
      <li>
        {totalItem.url && (
          <a href={totalItem.url} className="small_link" target="_blank">
            {urlName}
          </a>
        )}
        {totalItem.title && (
          <a href={totalItem.url} className="main_link" target="_blank">
            {totalItem.title}
          </a>
        )}
        <Userinfo>
          {totalItem.score} points&nbsp;
          <Link to={topUserUrl} className="totalItemby">
            by {totalItem.by}
          </Link>
        </Userinfo>
        <div>
          <span>{mapTime(totalItem.time)}</span>
          <Link to={detailUrl} className="topcomments">
            {totalItem.descendants ? (
              <p>{totalItem.descendants} comments</p>
            ) : null}
          </Link>
        </div>
      </li>
    </TotalItemStyled>
  ) : null;
}
export const ToptotalItem = React.memo(Toptotal);

//descendants
// return top && top.url ? (
//   <li className={styles["Topli"]}>
//     <a href={top.url} target="_blank">
//       <p>{top.title}</p>
//     </a>
//     <span>
//       By :{top.by} <br />
//       Posted:{top.time}
//     </span>
//     <a href="#" className={styles["comments"]}>
//       comments : {top.kids ? top.kids.length : null}
//     </a>
//   </li>
// ) : null;
