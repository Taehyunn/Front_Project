import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import showStyles from "../../CSS/ShowList.module.scss";
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

export default function ShowList() {
  const [showIds, setShowIds] = useState([]);
  const [isError, setisError] = useState(false);
  const isMount = useIsMount();
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
    <div className={showStyles["Showlist"]}>
      <div className={showStyles["banner"]}>
        <h2>Show</h2>
        <p>Share and grow together</p>
        <span>
          <StyledShowLink to="/Show">More</StyledShowLink>
        </span>
      </div>
      <ul className={showStyles["Showul"]}>
        {showIds.slice(0, 5).map((showId) => (
          <ShowItem key={showId} showId={showId} isMount={isMount} />
        ))}
      </ul>
    </div>
  );
}
