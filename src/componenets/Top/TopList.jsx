import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import styles from "../../CSS/TopList.module.scss";
import { getStoryIds } from "../Api";
import { TopItem } from "./TopItem";
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

export const TopList = () => {
  const [storyIds, setStoryIds] = useState([]);

  const [isError, setisError] = useState(false);

  const isMount = useIsMount();
  useEffect(() => {
    try {
      setisError(false);

      if (isMount.current) {
        getStoryIds().then((data) => setStoryIds(data));
      }
    } catch (e) {
      setisError(true);
    }

    getStoryIds();
    return () => {
      setStoryIds();
    };
  }, [isMount]);

  if (isError) return <div>에러가 발생했습니다</div>;

  return (
    <div>
      <div className={styles["banner"]}>
        <h2>TOP 5</h2>
        <p>Find out most hot isues</p>
        <span>
          <StyledTopLink to="/Top">More</StyledTopLink>
        </span>
      </div>
      <ul className={styles["Topul"]}>
        {storyIds.slice(0, 5).map((storyId) => (
          <TopItem key={storyId} storyId={storyId} isMount={isMount} />
        ))}
      </ul>
    </div>
  );
};
