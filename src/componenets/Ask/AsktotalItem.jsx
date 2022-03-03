import React, { useState, useEffect, useContext } from "react";
import { getStory } from "../utils/Api";
import styled from "styled-components";
import { mapTime } from "../mapTime";
import { Link } from "react-router-dom";
import TextContext from "../../contexts/TextContext";

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
  a {
    display: inline-block;
    text-decoration: none;
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

export function Asktotal({ asklist }) {
  const [askItem, setAskItem] = useState([]);
  const [askUrl, setAskUrl] = useState("");
  const [askDetail, setAskDetail] = useState("");
  const [askUserUrl, setaskUserUrl] = useState("");

  const Text = useContext(TextContext);
  const Asktext = Text.text;

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
  useEffect(() => {
    setaskUserUrl(`/User/${askItem.by}`);
    return () => {
      setaskUserUrl();
    };
  }, [askItem.by]);

  const filterAsk = askItem.title
    ?.toLowerCase()
    .includes(Asktext.toLowerCase());
  const urlName = askItem.url?.slice(8).split("/")[0];

  return askItem.title && filterAsk ? (
    <AskStyledItem>
      <li>
        {urlName ? (
          <a href={askItem.url} className="small_link" target="_blank"></a>
        ) : null}
        <a href={askUrl} className="askmain_link" target="_blank">
          {askItem.title}
        </a>
        <Userinfo>
          {askItem.score} points&nbsp;
          <Link to={askUserUrl} className="askItemby">
            by {askItem.by}
          </Link>
        </Userinfo>
        <div>
          <span>{mapTime(askItem.time)}</span>
          <Link to={askDetail} className="askcomments">
            {askItem.descendants ? <p>{askItem.descendants} comments</p> : null}
          </Link>
        </div>
      </li>
    </AskStyledItem>
  ) : null;
}
export const AsktotalItem = React.memo(Asktotal);

//by, descemdamts, id, kids, score, text, title, time ,type:story
