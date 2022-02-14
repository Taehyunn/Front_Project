import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getShowIds } from "../componenets/utils/Api";
import { ShowtotalItem } from "../componenets/Show/ShowtotalItem";
const ShowStyled = styled.div`
  padding: 64.7px 0 10.7px 11.7px;
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
const Showdetial = styled.ul`
  padding-bottom: 83px;
`;

export default function Show() {
  const [showlists, setShowList] = useState([]);

  useEffect(() => {
    getShowIds().then((data) => setShowList(data));
    return () => {
      setShowList([]);
    };
  }, []);
  return (
    <div>
      <ShowStyled>
        <h1>Show</h1>
      </ShowStyled>
      <Showdetial>
        {showlists.slice(0, 20).map((showlist) => (
          <ShowtotalItem key={showlist} showlist={showlist} />
        ))}
      </Showdetial>
    </div>
  );
}
