import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getUser } from "../componenets/utils/Api";
import { mapTime } from "../componenets/mapTime";

const UserInfowrap = styled.div`
  padding: 74px 20px 0 20px;

  strong {
    font-family: "Roboto";
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;

    color: #000000;
  }
`;
const Usertotal = styled.div`
  border: 2px solid black;
  padding: 10px;
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
      <Usertotal>
        <strong>user:</strong> {userDetail.id}
        <div className="usercreated">
          <strong> created:</strong> {mapTime(userDetail.created)}
        </div>
        <div className="userkarma">
          <strong>karma:</strong> {userDetail.karma}{" "}
        </div>
        <div className="userabout">
          <strong>about:</strong>
          <div dangerouslySetInnerHTML={{ __html: userDetail.about }}></div>
        </div>
      </Usertotal>
    </UserInfowrap>
  );
}
