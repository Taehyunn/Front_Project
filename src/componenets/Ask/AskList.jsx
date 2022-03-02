import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getAskIds } from "../utils/Api";
import { AskItem } from "./AskItem";
import useIsMount from "../useIsMount";

const StyledAskLink = styled(Link)`
  position: absolute;
  width: 30px;
  height: 12px;
  left: 20px;
  top: 9px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 12px;
  text-decoration: none;
  display: flex;
  align-items: flex-end;
  text-align: center;
  letter-spacing: -0.8px;
  color: #db00ff;
`;
const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 63px;
  left: 0;
  right: 0;
  margin: auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: #db00ff;

  h2 {
    position: absolute;
    width: 66px;
    height: 20px;
    left: 3px;
    top: 16px;
    margin: 0;

    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
    color: #ffffff;
  }
  p {
    margin: 0;
    position: absolute;
    height: 12px;
    left: 19px;
    top: 36px;

    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    /* identical to box height, or 120% */
    text-align: center;
    color: #ffffff;
  }
  span {
    position: absolute;
    width: 70px;
    height: 30px;
    top: 17px;
    right: 16px;

    background: #ffffff;
    border-radius: 121px;
  }
`;
const AskUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  margin-bottom: 60px;
`;

export default function AskList() {
  const [askIds, setAskIds] = useState(
    () => JSON.parse(window.localStorage.getItem("askIds")) || []
  );
  const [isError, setisError] = useState(false);
  const isMount = useIsMount();
  useEffect(() => {
    window.localStorage.setItem("askIds", JSON.stringify(askIds));
  }, [askIds]);
  useEffect(() => {
    try {
      setisError(false);

      getAskIds().then((data) => setAskIds(data));
    } catch (e) {
      setisError(true);
    }

    getAskIds();
    return () => {
      setAskIds();
    };
  }, []);

  if (isError) return <div>에러가 발생했습니다</div>;

  return (
    <>
      <Banner>
        <h2>Ask</h2>
        <p>Ask and get fresh informations</p>
        <span>
          <StyledAskLink to="/Ask">More</StyledAskLink>
        </span>
      </Banner>
      <AskUl>
        {askIds.slice(0, 5).map((askId) => (
          <AskItem key={askId} askId={askId} isMount={isMount} />
        ))}
      </AskUl>
    </>
  );
}
