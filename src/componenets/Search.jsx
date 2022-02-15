import React, { useState } from "react";
import styles from "../CSS/Search.module.scss";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SearchFilter } from "../routes/SearchFilter";

// const horizontalCenter = css`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
// `;
// const SearchIcon = styled.span`
//   ${horizontalCenter}
//   right: 18px;
//   display: inline-block;
//   overflow: hidden;
//   color: transparent;
//   vertical-align: middle;
// `;
const SearchHeader = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 54px;
  background: #ffffff;
  box-sizing: border-box;
  border-bottom: 1px solid #ff6600;
  z-index: 10;

  .linkgo {
    display: block;
    width: 20px;
    height: 24.83px;
    margin: 15px 0px 14.17px 27px;
    color: orange;
  }
  p {
    width: 124px;
    height: 34px;

    margin: 10px 0 0 11px;

    text-align: left;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 10px;
    /* or 10px */

    color: #5f5f5f;
  }
  .search-box {
    position: absolute;
    top: 10px;
    right: 20px;
    height: 34px;
    border-radius: 40px;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    .searchlink {
      width: 24px;
      height: 24px;
      margin-left: 12px;
      > img {
        width: 100%;
        height: 100%;
      }
    }
    .searchinput {
      margin-left: 5px;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      width: 0;
      border: none;
      background: none;
      outline: none;
      padding: 0;
      transition: 0.4s;
      width: 0;
    }
  }

  .searchinput.focused {
    width: 179px;
  }
`;

export const Search = () => {
  const [visible, setVisible] = useState(false);

  return (
    <SearchHeader>
      <Link to="/" className="linkgo">
        <img src="/img/reactlogo.png" width="20" height="25" alt="로고" />
      </Link>
      <p>
        react
        <br />
        hacker
        <br />
        news
        <br />
      </p>
      <div className="search-box">
        <Link to="#" className="searchlink">
          <img
            src="/img/search.png"
            alt="검색"
            onClick={() => setVisible(!visible)}
          />
        </Link>
        <input
          type="text"
          className={visible ? "searchinput focused" : "searchinput"}
          placeholder="검색어를 입력해 주세요"
        />
      </div>
    </SearchHeader>
  );
};

//로고 차후 수정.
