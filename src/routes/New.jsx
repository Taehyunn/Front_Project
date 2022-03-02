import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getNewIds } from "../componenets/utils/Api";
import { NewtotalItem } from "../componenets/New/NewtotalItem";
import ReactLoading from "react-loading";

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
const LoaderWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function New() {
  const [newlists, setNewList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await getNewIds().then((data) => setNewList(data));
      } catch (err) {
        throw err;
      }
      setLoading(false);
    };

    fetchData();

    return () => {
      setNewList([]);
    };
  }, []);

  return (
    <div>
      <NewStyled>
        <h1>NEW</h1>
      </NewStyled>
      {loading ? (
        <LoaderWrap>
          <ReactLoading type="spin" color="#A593E0" />
        </LoaderWrap>
      ) : (
        <Newdetial>
          {newlists.slice(0, 10).map((newlist) => (
            <NewtotalItem key={newlist} newlist={newlist} />
          ))}
        </Newdetial>
      )}
    </div>
  );
}
