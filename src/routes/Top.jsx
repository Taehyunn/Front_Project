import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getStoryIds } from "../componenets/Api";
import { ToptotalItem } from "../componenets/Top/ToptotalItem";

const TopStyled = styled.div`
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

    transform: matrix(0.97, 0, -0.28, 1, 0, 0);
  }
`;
const Topdetial = styled.ul`
  padding-bottom: 83px;
`;
export default function Top() {
  const [toplists, setList] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setList(data));
    return () => {
      setList([]);
    };
  }, []);
  return (
    <div>
      <TopStyled>
        <h1>TOP</h1>
      </TopStyled>
      <Topdetial>
        {toplists.slice(0, 20).map((toplist) => (
          <ToptotalItem key={toplist} toplist={toplist} />
        ))}
      </Topdetial>
    </div>
  );
}
