import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getJobIds } from "../utils/Api";
import { JobItem } from "./JobItem";
import useIsMount from "../useIsMount";

const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 63px;
  left: 0;
  right: 0;
  margin: auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: #febb10;

  h2 {
    position: absolute;
    width: 66px;
    height: 20px;
    left: 10px;
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

const StyledJobLink = styled(Link)`
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
  color: #febb10;
`;

const JobUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  margin-bottom: 83px;
`;

export default function JobList() {
  const [jobIds, setJobIds] = useState(
    () => JSON.parse(window.localStorage.getItem("jobIds")) || []
  );
  const [isError, setisError] = useState(false);
  const isMount = useIsMount();
  useEffect(() => {
    window.localStorage.setItem("jobIds", JSON.stringify(jobIds));
  }, [jobIds]);
  useEffect(() => {
    try {
      setisError(false);

      getJobIds().then((data) => setJobIds(data));
    } catch (e) {
      setisError(true);
    }
    getJobIds();
    return () => {
      setJobIds();
    };
  }, []);

  if (isError) return <div>에러가 발생했습니다</div>;

  return (
    <div>
      <Banner>
        <h2>JOBS</h2>
        <p>Your new possibility</p>
        <span>
          <StyledJobLink to="/Job">More</StyledJobLink>
        </span>
      </Banner>
      <JobUl>
        {jobIds.slice(0, 5).map((jobId) => (
          <JobItem key={jobId} jobId={jobId} isMount={isMount} />
        ))}
      </JobUl>
    </div>
  );
}
