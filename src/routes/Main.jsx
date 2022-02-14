import React from "react";

import TopList from "../componenets/Top/TopList";
import NewList from "../componenets/New/NewList";
import AskList from "../componenets/Ask/AskList";
import ShowList from "../componenets/Show/ShoList";
import JobList from "../componenets/Job/JobList";
import styles from "../CSS/Main.module.scss";

export default function Main() {
  return (
    <div className={styles["main"]}>
      <TopList />
      <NewList />
      <AskList />
      <ShowList />
      <JobList />
    </div>
  );
}
