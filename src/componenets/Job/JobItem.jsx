import React, { useState, useEffect } from "react";
import { getStory } from "../Api";
import jobStyles from "../../CSS/JobItem.module.scss";
import { Link } from "react-router-dom";

export const JobItem = ({ jobId, isMount }) => {
  const [jobs, setJob] = useState([]);
  const [jobUrl, setJobUrl] = useState("");

  useEffect(() => {
    if (isMount.current) {
      getStory(jobId).then((data) => data && setJob(data));
      setJobUrl(`/Job/${jobId}`);
    }
    return () => {
      setJob();
    };
  }, [isMount]);

  //target=”_blank” 새탭에서 열람.
  return jobs && jobs.url ? (
    <li key={jobs.id} className={jobStyles["Jobli"]}>
      <a href={jobs.url} target="_blank">
        <p>{jobs.title}</p>
      </a>
      <span>
        By :{jobs.by} <br />
        Posted:{jobs.time}
      </span>
      {jobs.kids ? (
        <Link to={jobUrl} className={jobStyles["job_comments"]}>
          <img src="img/comment_icon_job.png" alt="댓글" />
          &nbsp;
          {jobs.kids.length}
        </Link>
      ) : null}
    </li>
  ) : null;
};
