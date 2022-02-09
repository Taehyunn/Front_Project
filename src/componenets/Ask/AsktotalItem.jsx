import React, { useState, useEffect } from "react";
import { getStory } from "../Api";
import styled from "styled-components";
import { mapTime } from "../mapTime";

const AskStyledItem = styled.div`
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
  .askmain_link {
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
  .askcomments {
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

export const AsktotalItem = ({ asklist }) => {
  const [askItem, setAskItem] = useState([]);
  const [askUrl, setAskUrl] = useState("");
  const [askDetail, setAskDetail] = useState("");

  useEffect(() => {
    getStory(asklist).then((data) => data && setAskItem(data));
    setAskUrl(`https://news.ycombinator.com/item?id=${asklist}`);
    setAskDetail(`/Ask/${asklist}`);
    return () => {
      setAskItem([]);
      setAskUrl("");
      setAskDetail("");
    };
  }, []);
  const urlName = askItem.url?.slice(8).split("/")[0];
  // console.log(askItem)
  return askItem ? (
    <AskStyledItem>
      <li>
        {urlName ? (
          <a href={askItem.url} className="small_link" target="_blank"></a>
        ) : null}
        <a href={askUrl} className="askmain_link" target="_blank">
          {askItem.title}
        </a>
        <div>
          <span>{mapTime(askItem.time)}</span>
          <a href={askDetail} className="askcomments">
            {askItem.kids ? <p>{askItem.kids.length} comments</p> : null}
          </a>
        </div>
      </li>
    </AskStyledItem>
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

//by, descemdamts, id, kids, score, text, title, time ,type:story