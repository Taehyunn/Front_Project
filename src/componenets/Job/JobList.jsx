import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import jobStyles from "../../CSS/JobList.module.scss";
import { getJobIds } from "../Api";
import { JobItem } from "./JobItem";
import useIsMount from "../useIsMount";

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

export const JobList = () => {
  const [jobIds, setJobIds] = useState([]);
  const [isError, setisError] = useState(false);
  const isMount = useIsMount();
  useEffect(() => {
    try {
      setisError(false);

      if (isMount.current) {
        getJobIds().then((data) => setJobIds(data));
      }
    } catch (e) {
      setisError(true);
    }

    getJobIds();
    return () => {
      setJobIds();
    };
  }, [isMount]);

  if (isError) return <div>에러가 발생했습니다</div>;

  return (
    <div className={jobStyles["Joblist"]}>
      <div className={jobStyles["banner"]}>
        <h2>JOBS</h2>
        <p>Your new possibility</p>
        <span>
          <StyledJobLink to="/Job">More</StyledJobLink>
        </span>
      </div>
      <ul className={jobStyles["Jobul"]}>
        {jobIds.slice(0, 5).map((jobId) => (
          <JobItem key={jobId} jobId={jobId} isMount={isMount} />
        ))}
      </ul>
    </div>
  );
};
