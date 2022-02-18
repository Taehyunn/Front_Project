import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import askStyles from "../../CSS/AskList.module.scss";
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
    <div className={askStyles["Asklist"]}>
      <div className={askStyles["banner"]}>
        <h2>Ask</h2>
        <p>Ask and get fresh informations</p>
        <span>
          <StyledAskLink to="/Ask">More</StyledAskLink>
        </span>
      </div>
      <ul className={askStyles["Askul"]}>
        {askIds.slice(0, 5).map((askId) => (
          <AskItem key={askId} askId={askId} isMount={isMount} />
        ))}
      </ul>
    </div>
  );
}
