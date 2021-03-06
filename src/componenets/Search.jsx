import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
    width: 24px;
    height: 25px;
    margin: 15px 0px 14.17px 27px;
    > img {
      display: inline-block;
      width: 24px;
      height: 25px;
      vertical-align: top;
    }
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

export default function Search({ searchIds, text, setText }) {
  const [visible, setVisible] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const onVisible = () => {
    setVisible(!visible);
    setText("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setText(text);
    setText("");
  };
  return (
    <SearchHeader>
      <Link to="/" className="linkgo">
        <img
          src="https://uploads.codesandbox.io/uploads/user/6e3df596-86d7-48a2-b9ab-7a55714f0d8b/HOht-reactlogo+(2).png"
          alt="??????"
        />
      </Link>
      <p>
        react
        <br />
        hacker
        <br />
        news
        <br />
      </p>
      <form className="search-box" onSubmit={handleSubmit}>
        <Link to="#" className="searchlink">
          <img
            src="https://rawcdn.githack.com/Taehyunn/Front_Project/232f269887695c9ebd2f75a022a70625caa94027/public/img/search.png"
            alt="??????"
            onClick={onVisible}
            type="submit"
          />
        </Link>
        <input
          value={text}
          type="text"
          autoFocus={true}
          className={visible ? "searchinput + focused" : "searchinput"}
          placeholder="???????????? ????????? ?????????"
          onChange={handleChange}
        />
      </form>
    </SearchHeader>
  );
}

//?????? ?????? ??????.
