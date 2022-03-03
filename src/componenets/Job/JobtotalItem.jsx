import React, { useState, useEffect, useContext } from "react";
import { getStory } from "../utils/Api";
import styled from "styled-components";
import { mapTime } from "../mapTime";
import { Link } from "react-router-dom";
import TextContext from "../../contexts/TextContext";

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
  a {
    display: inline-block;
    text-decoration: none;
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
const Userinfo = styled.div`
  color: #6b6b6b;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 110%;
  .askItemby {
    color: #6b6b6b;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 110%;
  }
  .totalItemby:hover {
    color: #fd6106;
  }
`;

export function Jobtotal({ joblist }) {
  const [jobItem, setJobItem] = useState([]);
  const [jobDetailUrl, setJobDetailUrl] = useState("");
  const [jobUserUrl, setjobUserUrl] = useState("");
  const Text = useContext(TextContext);
  const Jobtext = Text.text;

  //Job 데이터 받아오기
  useEffect(() => {
    getStory(joblist).then((data) => data && setJobItem(data));
    setJobDetailUrl(`/Job/${joblist}`);
    return () => {
      setJobItem([]);
    };
  }, []);

  useEffect(() => {
    setjobUserUrl(`/User/${jobItem.by}`);
    return () => {
      setjobUserUrl();
    };
  }, [jobItem.by]);
  //소제목(host) 네임만 따오기.
  const urlName = jobItem.url?.slice(8).split("/")[0];

  return jobItem.url &&
    jobItem.title?.toLowerCase().includes(Jobtext.toLowerCase()) ? (
    <JobStyledItem>
      <li>
        {jobItem.url && (
          <a href={jobItem.url} className="small_link" target="_blank">
            {urlName}
          </a>
        )}
        <a href={jobItem.url} className="jobmain_link" target="_blank">
          {jobItem.title}
        </a>
        <Userinfo>
          {jobItem.score} points&nbsp;
          <Link to={jobUserUrl} className="askItemby">
            by {jobItem.by}
          </Link>
        </Userinfo>
        <div>
          <span>{mapTime(jobItem.time)}</span>

          <Link to={jobDetailUrl} className="jobcomments">
            {jobItem.descendants ? <p>{jobItem.descendants} comments</p> : null}
          </Link>
        </div>
      </li>
    </JobStyledItem>
  ) : null;
}
export const JobtotalItem = React.memo(Jobtotal);
