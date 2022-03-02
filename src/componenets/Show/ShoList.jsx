import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getShowIds } from "../utils/Api";
import { ShowItem } from "./ShowItem";
import useIsMount from "../useIsMount";

const StyledShowLink = styled(Link)`
  position: absolute;
  width: 30px;
  height: 12px;
  left: 20px;
  top: 9px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 12px;
  text-decoration: none;
  display: flex;
  align-items: flex-end;
  text-align: center;
  letter-spacing: -0.8px;
  color: #69a075;
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
  background-color: #69a075;

  h2 {
    position: absolute;
    width: 66px;
    height: 20px;
    left: 10px;
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
    width: 109px;
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
const ShowUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  margin-bottom: 60px;
`;

export default function ShowList() {
  const [showIds, setShowIds] = useState(
    () => JSON.parse(window.localStorage.getItem("showIds")) || []
  );
  const [isError, setisError] = useState(false);
  const isMount = useIsMount();
  useEffect(() => {
    window.localStorage.setItem("showIds", JSON.stringify(showIds));
  }, [showIds]);
  useEffect(() => {
    try {
      setisError(false);

      if (isMount.current) {
        getShowIds().then((data) => setShowIds(data));
      }
    } catch (e) {
      setisError(true);
    }

    getShowIds();
    return () => {
      setShowIds();
    };
  }, [isMount]);

  if (isError) return <div>에러가 발생했습니다</div>;
  return (
    <div>
      <Banner>
        <h2>Show</h2>
        <p>Share and grow together</p>
        <span>
          <StyledShowLink to="/Show">More</StyledShowLink>
        </span>
      </Banner>
      <ShowUl>
        {showIds.slice(0, 5).map((showId) => (
          <ShowItem key={showId} showId={showId} isMount={isMount} />
        ))}
      </ShowUl>
    </div>
  );
}
