import React, { useState, useEffect } from "react";
import { getStory } from "../Api";
import styled from "styled-components";
import { mapTime } from "../mapTime";

const JobStyledItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 20px;
  border-bottom: 1px solid #e8e8ed;
  div {
    display: flex;
    align-items: center;
  }
  .jobmain_link {
    text-decoration: none;
    padding: 10px 0;
    box-sizing: border-box;
    color: #000000;
    font-family: "Pretendard", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 110%;
    /* identical to box height, or 18px */

    display: flex;
    align-items: center;
  }
  .jobcomments {
    margin-left: 5px;
    color: #6b6b6b;
    font-family: "Pretendard", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 110%;
    text-decoration: none;
  }
  .small_link {
    display: inline-block;
    padding: 6px 10px;
    height: 20px;
    color: #6b6b6b;
    text-decoration: none;
    border: 1px solid #909090;
    box-sizing: border-box;
    border-radius: 12.5px;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 50%;
    text-align: center;
  }
  span {
    color: #6b6b6b;
    font-family: "Pretendard", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 110%;
  }
  background: #ffffff;
`;

export const JobtotalItem = ({ joblist }) => {
  const [jobItem, setJobItem] = useState([]);
  const [jobDetailUrl, setJobDetailUrl] = useState("");

  useEffect(() => {
    getStory(joblist).then((data) => data && setJobItem(data));
    setJobDetailUrl(`/Job/${joblist}`);
    return () => {
      setJobItem([]);
    };
  }, []);
  const urlName = jobItem.url?.slice(8).split("/")[0];
  return jobItem && jobItem.url ? (
    <JobStyledItem>
      <li>
        <a href={jobItem.url} className="small_link" target="_blank">
          {urlName}
        </a>
        <a href={jobItem.url} className="jobmain_link" target="_blank">
          {jobItem.title}
        </a>
        <div>
          <span>{mapTime(jobItem.time)}</span>

          <a href={jobDetailUrl} className="jobcomments">
            {jobItem.kids ? <p>{jobItem.kids.length} comments</p> : null}
          </a>
        </div>
      </li>
    </JobStyledItem>
  ) : null;
};
