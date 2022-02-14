import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Comments } from "../componenets/Comments";
import { mapTime } from "../componenets/mapTime";

const DetailStyled = styled.div`
  padding-top: 60px;
  padding-bottom: 83px;
`;
const QWrap = styled.div`
  padding: 20px;
  white-space: pre-wrap;
  border-bottom: 1px solid #e8e8ed;
  .detailtitle {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 110%;
    color: #000000;
    /* border:1px solid black; */
  }
  .detailprofile {
    padding: 10px 0;
    color: #6b6b6b;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 110%;
    .detailprofile_by {
      display: inline-block;
      color: #6b6b6b;
      font-family: "Pretendard";
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 110%;
    }
  }
  .detailtext {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 140%;
    margin-bottom: 40px;
    color: #000000;
    max-width: 100%;
    word-break: break-word;
    word-wrap: break-word;
    white-space: pre-line;
    white-space: pre-wrap; /* CSS3*/
    word-wrap: break-all; /*internet Explorer 5.5+ */
    pre {
      white-space: pre-wrap;
    }
  }
`;

const CommentLength = styled.div`
  font-family: Pretendard;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 110%;

  a {
    text-decoration: none;
    color: #6b6b6b;
    &:hover {
      color: #ffc107;
    }
  }
`;
const Gopage = styled.div`
  /* margin-top: 2px; */
  padding: 20px;
  box-sizing: border-box;

  border-radius: 16px;
  /* border: 1px solid black; */
  height: 64px;
  position: relative;
  a {
    position: absolute;
    text-decoration: none;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    color: #6b6b6b;

    width: 100px;
    height: 24px;
    right: 24px;
    top: 20px;
    display: flex;
    align-items: center;
    img {
      width: 24px;
      height: 24px;
      right: 20px;
    }
  }
`;

export default function Detail(props, { listName, setListName }) {
  const id = props.match.params.id;
  const [detail, setDetail] = useState([]);
  const [kids, setKids] = useState([]);
  const [start, setStart] = useState(false);
  //답글 5개 이상 시 본문 페이지 이동.
  const GopageId = `https://news.ycombinator.com/item?id=${id}`;

  const getDetail = async () => {
    const result = await axios
      .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then(({ data }) => data);

    return result;
  };

  useEffect(() => {
    getDetail().then((data) => setDetail(data));
    return () => {
      setDetail("");
    };
  }, []);

  useEffect(() => {
    setKids(detail.kids);
  }, [detail.kids]);

  function Click() {
    setStart(!start);
  }

  return (
    <DetailStyled>
      <QWrap>
        {detail.title && <div className="detailtitle">{detail.title}</div>}
        <div className="detailprofile">
          {mapTime(detail.time)}&nbsp;
          <span className="detailprofile_by">by {detail.by}</span>
        </div>
        {detail.text && (
          <div
            className="detailtext"
            dangerouslySetInnerHTML={{ __html: detail.text }}
          />
        )}
        <CommentLength onClick={Click}>
          <a href="#">{kids?.length} comments</a>
        </CommentLength>
      </QWrap>
      {start ? (
        <ul>
          {kids &&
            kids.map((kid) => (
              <Comments
                dangerouslySetInnerHTML={{ __html: kid.text }}
                kid={kid}
                key={kid.toString()}
              />
            ))}

          <Gopage>
            <a href={GopageId} target="_blank">
              Go to page
              <img src="../img/expand_right.png" alt="본 페이지로 이동" />
            </a>
          </Gopage>
        </ul>
      ) : null}
    </DetailStyled>
  );
}

//detail.url ||  => Gopage
