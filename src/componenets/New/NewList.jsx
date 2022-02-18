import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import newStyles from "../../CSS/NewList.module.scss";
import { getNewIds } from "../utils/Api";
import { NewItem } from "./NewItem";
import useIsMount from "../useIsMount";

const StyledNewLink = styled(Link)`
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
  color: #7b61ff;
`;

export default function NewList() {
  const [newIds, setNewIds] = useState(
    () => JSON.parse(window.localStorage.getItem("newIds")) || []
  );
  const [isError, setisError] = useState(false);
  const isMount = useIsMount();
  useEffect(() => {
    window.localStorage.setItem("newIds", JSON.stringify(newIds));
  }, [newIds]);
  useEffect(() => {
    try {
      setisError(false);

      getNewIds().then((data) => setNewIds(data));
    } catch (e) {
      setisError(true);
    }

    getNewIds();
    return () => {
      setNewIds();
    };
  }, []);

  if (isError) return <div>에러가 발생했습니다</div>;

  return (
    <div className={newStyles["Newlist"]}>
      <div className={newStyles["banner"]}>
        <h2>NEW 5</h2>
        <p>Fast, Fresh, Fashioable</p>
        <span>
          <StyledNewLink to="/New">More</StyledNewLink>
        </span>
      </div>
      <ul className={newStyles["Newul"]}>
        {newIds.slice(0, 5).map((newId) => (
          <NewItem key={newId} newId={newId} isMount={isMount} />
        ))}
      </ul>
    </div>
  );
}
