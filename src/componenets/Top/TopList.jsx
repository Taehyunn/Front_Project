import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import styles from "../../CSS/TopList.module.scss";
import { getStoryIds } from "../utils/Api";
import TopItem from "./TopItem";
import useIsMount from "../useIsMount";
import { Loading } from "../Loading";
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

export default function TopList() {
  const [storyIds, setStoryIds] = useState(
    () => JSON.parse(window.localStorage.getItem("storyIds")) || []
  );
  const [loading, setLoading] = useState(true);
  const [isError, setisError] = useState();

  const isMount = useIsMount();
  useEffect(() => {
    window.localStorage.setItem("storyIds", JSON.stringify(storyIds));
  }, [storyIds]);
  useEffect(() => {
    try {
      if (isMount.current) {
        setisError(false);
        getStoryIds().then((data) => setStoryIds(data));
      }
    } catch (e) {
      setisError(true);
    }
    setLoading(false);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 1000);
    return () => {
      setStoryIds();
    };
  }, [isMount]);
  // if (loading) return <div>로딩중...</div>;
  if (isError) return <div>에러가 발생했습니다</div>;

  return (
    <>
      <div className={styles["banner"]}>
        <h2>TOP 5</h2>
        <p>Find out most hot isues</p>
        <span>
          <StyledTopLink to="/Top">More</StyledTopLink>
        </span>
      </div>
      {loading ? (
        <div>로딩중...</div> //로딩스피너 들어갈 자리.
      ) : (
        <ul className={styles["Topul"]}>
          {storyIds.slice(0, 5).map((storyId) => (
            <TopItem key={storyId} storyId={storyId} isMount={isMount} />
          ))}
        </ul>
      )}
    </>
  );
}
