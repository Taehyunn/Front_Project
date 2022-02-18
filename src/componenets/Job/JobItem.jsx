import React, { useState, useEffect } from "react";
import { getStory } from "../utils/Api";
import jobStyles from "../../CSS/JobItem.module.scss";
import { Link } from "react-router-dom";

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
    <li key={jobs.id} className={jobStyles["Jobli"]}>
      <a href={jobs.url} className={jobStyles["jobTitle"]} target="_blank">
        <p>{jobs.title}</p>
      </a>
      <div className={jobStyles["jobby"]}>
        <Link to={jobUserUrl} className={jobStyles["jobby-name"]}>
          작성자 : {jobs.by}
        </Link>
        <br />
        Posted : {jobs.time}
      </div>
      {jobs.descendants ? (
        <Link to={jobUrl} className={jobStyles["job_comments"]}>
          <img src="/img/comment_icon_job.png" alt="댓글" />
          &nbsp;
          {jobs.descendants}
        </Link>
      ) : null}
    </li>
  ) : null;
};
