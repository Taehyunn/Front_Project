import { useState, useEffect } from "react";
import { getStory } from "../componenets/utils/Api";
import styled from "styled-components";
import { mapTime } from "../componenets/mapTime";
import { InComments } from "./InComments";

const CommentsStyled = styled.div`
  /* border: 1px solid black; */
  border-bottom: 2px solid #e8e8ed;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 20px;
  background: #ffffff;
  /* word-wrap: break-word; 자동 줄바꿈 */
`;
const UserText = styled.div`
  max-width: 100%;
  /* border: 2px solid blue; */
  font-family: "Pretendard";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  word-wrap: break-word;
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
export const Comments = ({ kid }) => {
  const [listkid, setListkid] = useState([]);
  const [inkids, setInkid] = useState([]);

  useEffect(() => {
    getStory(kid).then((data) => data && setListkid(data));
    return () => {
      setListkid([]);
    };
  }, [kid]);
  useEffect(() => {
    setInkid(listkid.kids);
  }, [listkid.kids]);

  return listkid ? (
    <div>
      <CommentsStyled>
        <User>
          <img src={require("../../public/img/user.png")} alt="userfill" />
          {listkid.by}
        </User>
        <UserText>
          <div dangerouslySetInnerHTML={{ __html: listkid.text }} />
        </UserText>
        <Time>{mapTime(listkid.time)}</Time>
      </CommentsStyled>
      {inkids &&
        inkids.map((inkid) => <InComments key={inkid} inkid={inkid} />)}
    </div>
  ) : null;
};
