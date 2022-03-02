import React, { useState, useEffect } from "react";
import { getStory } from "../utils/Api";
import { Link } from "react-router-dom";
import styled from "styled-components";

const JobLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
  margin-bottom: 10px;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 164px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  img {
    vertical-align: top;
  }
  a {
    display: inline-block;
    text-decoration: none;
    color: #000000;
  }
  .jobTitle {
    text-align: start;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
  }
  .jobby {
    padding: 13px 0 16px;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 14px;
    .jobby-name {
      margin-bottom: 3px;
    }
  }
  .jobby > a:hover {
    color: #febb10;
  }
  .job_comments {
    display: inline-block;
    display: flex;
    align-items: center;
    // width: 63px;
    height: 10px;
    font-weight: normal;
    font-size: 10px;
    line-height: 10px;
    /* or 100% */
    letter-spacing: -0.5px;

    color: #febb10;
  }
`;

export const JobItem = ({ jobId, isMount }) => {
  const [jobs, setJob] = useState(
    () => JSON.parse(window.localStorage.getItem("jobs")) || []
  );
  const [jobUrl, setJobUrl] = useState("");
  const [jobUserUrl, setjobUserUrl] = useState("");
  useEffect(() => {
    window.localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);
  useEffect(() => {
    getStory(jobId).then((data) => data && setJob(data));
    setJobUrl(`/Job/${jobId}`);

    return () => {
      setJob();
      setJobUrl();
    };
  }, []);
  useEffect(() => {
    setjobUserUrl(`/User/${jobs.by}`);
    return () => {
      setjobUserUrl();
    };
  }, [jobs.by]);

  //target=”_blank” 새탭에서 열람.
  return jobs && jobs.url ? (
    <JobLi>
      <a href={jobs.url} className="jobTitle" target="_blank">
        <p>{jobs.title}</p>
      </a>
      <div className="jobby">
        <Link to={jobUserUrl} className="jobby-name">
          작성자 : {jobs.by}
        </Link>
        <br />
        Posted : {jobs.time}
      </div>
      {jobs.descendants ? (
        <Link to={jobUrl} className="job_comments">
          <img src="/img/comment_icon_job.png" alt="댓글" />
          &nbsp;
          {jobs.descendants}
        </Link>
      ) : null}
    </JobLi>
  ) : null;
};
