import React, { useState, useEffect } from "react";
import { getStory, storyUrl } from "../Api";
import styled from "styled-components";
import { mapTime } from "../mapTime";
import { Link } from "react-router-dom";

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

export const ToptotalItem = ({ toplist }) => {
  const [totalItem, setTotal] = useState([]);
  const [detailUrl, setDetailUrl] = useState("");
  useEffect(() => {
    getStory(toplist).then((data) => data && setTotal(data));
    setDetailUrl(`/Top/${toplist}`);
    return () => {
      setTotal([]);
    };
  }, []);

  const urlName = totalItem.url?.slice(8).split("/")[0];

  return totalItem && totalItem.url ? (
    <TotalItemStyled>
      <li>
        <a href={totalItem.url} className="small_link" target="_blank">
          {urlName}
        </a>
        <a href={totalItem.url} target="_blank" className="main_link">
          {totalItem.title}
        </a>
        <div>
          <span>{mapTime(totalItem.time)}</span>

          <Link to={detailUrl} className="topcomments">
            {totalItem.kids ? <p>{totalItem.kids.length} comments</p> : null}
          </Link>
        </div>
      </li>
    </TotalItemStyled>
  ) : null;
};

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
