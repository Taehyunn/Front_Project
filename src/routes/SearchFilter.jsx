import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Searchbox = styled.div`
  width: 247px;
  height: 34px;
  display: flex;
  border-radius: 49px;
  position: relative;
  /* padding: 11px 0; */
  > a {
    position: absolute;
    width: 24px;
    height: 24px;
    margin: auto;
    top: 5px;
    bottom: 5px;
    left: 12px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  > input {
    padding-left: 41px;
    background: #ededed;
    border-radius: 49px;
    border: none;
    vertical-align: middle;
  }
`;

export const SearchFilter = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Searchbox>
      <Link to="#">
        <img src="/img/search.png" alt="검색" />
      </Link>
      <input
        type="text"
        value={text}
        placeholder="검색어를 입력해 주세요."
        onChange={handleChange}
      />
    </Searchbox>
  );
};
