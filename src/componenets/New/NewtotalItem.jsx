import React, { useState, useEffect } from "react";
import { getStory } from "../Api";
import styled from "styled-components";
import { mapTime } from "../mapTime";
import { Link } from "react-router-dom";

const NewStyledItem = styled.div`
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
  .newmain_link {
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
  .newcomments {
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

export const NewtotalItem = ({ newlist }) => {
  const [newItem, setNewItem] = useState([]);
  const [newDetailUrl, setNewDetailUrl] = useState("");

  useEffect(() => {
    getStory(newlist).then((data) => data && setNewItem(data));
    setNewDetailUrl(`/New/${newlist}`);
    return () => {
      setNewItem([]);
    };
  }, []);
  const urlName = newItem.url?.slice(8).split("/")[0];
  return newItem && newItem.url ? (
    <NewStyledItem>
      <li>
        <a href={newItem.url} className="small_link" target="_blank">
          {urlName}
        </a>
        <a href={newItem.url} className="newmain_link" target="_blank">
          {newItem.title}
        </a>
        <div>
          <span>{mapTime(newItem.time)}</span>

          <Link to={newDetailUrl} className="newcomments">
            {newItem.descendants ? <p>{newItem.descendants} comments</p> : null}
          </Link>
        </div>
      </li>
    </NewStyledItem>
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
