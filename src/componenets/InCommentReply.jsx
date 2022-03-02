import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { mapTime } from "../componenets/mapTime";

const CommentsStyled = styled.div`
  /* border: 4px solid black; */
  border-bottom: 2px solid #e8e8ed;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 20px 40px 60px;
  background: #ffffff;
  /* word-wrap: break-word; 자동 줄바꿈 */
`;
const UserText = styled.div`
  max-width: 100%;
  word-break: break-word;
  /* border: 2px solid blue; */
  font-family: "Pretendard";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  padding: 10px 0;
  box-sizing: border-box;
  /* white-space: "pre-wrap"; */
`;

const User = styled.div`
  /* border: 1px solid orange; */
  color: #4d4d4d;
  height: 20px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  align-items: center;
  img {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 6px;
  }
`;

const Time = styled.div`
  color: #6b6b6b;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 110%;
`;

export const InCommentReply = ({ Reply }) => {
  const [commentReply, setcommentReply] = useState([]);

  const getInCommentReply = async () => {
    const result = await axios
      .get(`https://hacker-news.firebaseio.com/v0/item/${Reply}.json`)
      .then(({ data }) => data);

    return result;
  };
  useEffect(() => {
    getInCommentReply().then((data) => data && setcommentReply(data));
    return () => {
      setcommentReply([]);
    };
  }, []);

  return commentReply ? (
    <div>
      <CommentsStyled>
        <User>
          <img
            src="https://rawcdn.githack.com/Taehyunn/Front_Project/232f269887695c9ebd2f75a022a70625caa94027/public/img/vector.png"
            alt="userfill"
          />
          {commentReply.by}
        </User>
        <UserText>
          <div dangerouslySetInnerHTML={{ __html: commentReply.text }} />
        </UserText>
        <Time>{mapTime(commentReply.time)}</Time>
      </CommentsStyled>
    </div>
  ) : null;
};
