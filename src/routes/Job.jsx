import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getJobIds } from "../componenets/utils/Api";
import { JobtotalItem } from "../componenets/Job/JobtotalItem";

const JobStyled = styled.div`
  padding: 64.7px 0 10.7px 11.7px;
  border-bottom: 1px solid #e8e8ed;
  h1 {
    font-family: Pretendard;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 100%;
    display: flex;
    align-items: center;

    color: #ff6600;

    /* transform: matrix(0.97, 0, -0.28, 1, 0, 0); */
  }
`;
const Jobdetail = styled.ul`
  padding-bottom: 83px;
`;

export default function Job() {
  const [joblists, setJobList] = useState([]);
  useEffect(() => {
    getJobIds().then((data) => setJobList(data));
    return () => {
      setJobList([]);
    };
  }, []);
  return (
    <div>
      <JobStyled>
        <h1>Job</h1>
      </JobStyled>
      <Jobdetail>
        {joblists.slice(0, 20).map((joblist) => (
          <JobtotalItem key={joblist} joblist={joblist} />
        ))}
      </Jobdetail>
    </div>
  );
}
