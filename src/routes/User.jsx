import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getUser } from "../componenets/utils/Api";
import { mapTime } from "../componenets/mapTime";

const UserInfowrap = styled.div`
  padding-top: 59px;
  div {
    margin-bottom: 5px;
  }
`;

export default function User(props) {
  const [userDetail, setuserDetail] = useState([]);
  const id = props.match.params.id;

  useEffect(() => {
    getUser(id).then((data) => setuserDetail(data));
    return () => {
      setuserDetail("");
    };
  }, []);
  return (
    <UserInfowrap>
      <div className="userinfoid">user: {userDetail.id}</div>
      <div className="usercreated">created: {mapTime(userDetail.created)}</div>
      <div className="userkarma">karma: {userDetail.karma} </div>
      <div className="userabout">
        about:
        <div dangerouslySetInnerHTML={{ __html: userDetail.about }}></div>
      </div>
    </UserInfowrap>
  );
}
