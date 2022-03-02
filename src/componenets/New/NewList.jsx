import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
const Banner = styled.div`
  position: relative;
  margin-top: 60px;
  width: 100%;
  height: 63px;
  left: 0;
  right: 0;
  margin: auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: #7b61ff;

  h2 {
    position: absolute;
    width: 66px;
    height: 20px;
    left: 20px;
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
const NewUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 60px 0;
  padding: 0;
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
    <>
      <Banner>
        <h2>NEW 5</h2>
        <p>Fast, Fresh, Fashioable</p>
        <span>
          <StyledNewLink to="/New">More</StyledNewLink>
        </span>
      </Banner>
      <NewUl>
        {newIds.slice(0, 5).map((newId) => (
          <NewItem key={newId} newId={newId} isMount={isMount} />
        ))}
      </NewUl>
    </>
  );
}
