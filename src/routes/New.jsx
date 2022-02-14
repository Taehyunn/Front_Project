import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getNewIds } from "../componenets/utils/Api";
import { NewtotalItem } from "../componenets/New/NewtotalItem";

const NewStyled = styled.div`
  padding: 64.7px 0 10.7px 20px;
  border-bottom: 1px solid #e8e8ed;
  h1 {
    font-family: Pretendard;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 100%;
    display: flex;
    align-items: center;

    color: #ff6600;

    /* transform: matrix(0.97, 0, -0.28, 1, 0, 0); */
  }
`;
const Newdetial = styled.ul`
  padding-bottom: 83px;
`;

export default function New() {
  const [newlists, setNewList] = useState([]);

  useEffect(() => {
    getNewIds().then((data) => setNewList(data));
    return () => {
      setNewList([]);
    };
  }, []);
  return (
    <div>
      <NewStyled>
        <h1>NEW</h1>
      </NewStyled>
      <Newdetial>
        {newlists.slice(0, 20).map((newlist) => (
          <NewtotalItem key={newlist} newlist={newlist} />
        ))}
      </Newdetial>
    </div>
  );
}
