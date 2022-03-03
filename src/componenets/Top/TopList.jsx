import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getStoryIds } from "../utils/Api";
import TopItem from "./TopItem";
import useIsMount from "../useIsMount";

const StyledTopLink = styled(Link)`
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
  color: #fd6106;
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
  background-color: #fd6106;
  h2 {
    position: absolute;
    width: 60px;
    height: 20px;
    left: 19px;
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

    font-family: Roboto;
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
const TopUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  margin-bottom: 60px;
`;

export default function TopList() {
  const [storyIds, setStoryIds] = useState(
    () => JSON.parse(window.localStorage.getItem("storyIds")) || []
  );
  const [loading, setLoading] = useState(false);
  const [isError, setisError] = useState();

  const isMount = useIsMount();
  useEffect(() => {
    storyIds &&
      window.localStorage.setItem("storyIds", JSON.stringify(storyIds));
  }, [storyIds]);

  useEffect(() => {
    try {
      setisError(false);
      getStoryIds().then((data) => setStoryIds(data));
    } catch (e) {
      setisError(true);
    }
    setLoading(false);

    getStoryIds();
    return () => {
      setStoryIds([]);
    };
  }, [isMount]);

  if (isError) return <div>에러가 발생했습니다</div>;

  return (
    <div>
      <Banner>
        <h2>TOP 5</h2>
        <p>Find out most hot isues</p>
        <span>
          <StyledTopLink to="/Top">More</StyledTopLink>
        </span>
      </Banner>
      {loading ? (
        <div>로딩중...</div> //로딩스피너 들어갈 자리.
      ) : (
        <TopUl>
          {storyIds.slice(0, 5).map((storyId) => (
            <TopItem key={storyId} storyId={storyId} isMount={isMount} />
          ))}
        </TopUl>
      )}
    </div>
  );
}
