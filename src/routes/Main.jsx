import React, { useEffect, useState } from "react";

import { TopList } from "../componenets/Top/TopList";
import { NewList } from "../componenets/New/NewList";
import { AskList } from "../componenets/Ask/AskList";
import { ShowList } from "../componenets/Show/ShoList";
import { JobList } from "../componenets/Job/JobList";
import styles from "../CSS/Main.module.scss";
// import { Loading } from "../componenets/Loading";

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

// Top, New , Ask, Show, Job 中 => Top,New 구현완료. 나머지 기타 코드 동일. 코드 동일.
//Css 리팩토링 필요. css,scss module로 최대한 단일화..
// 아래 3가지는 기본적으로 구현돼야하며 UI 시안을 검토했을 때
// 아래에 명시하지 않은 기능이 존재한다면 API를 검토해서 구현 가능 여부를 검토해주세요.
//  구현이 가능하다고 판단된다면 같이 구현해주시면 됩니다.
//  검색처럼 API에서 지원하지 않아 구현이 불가능하다면
//   시안과 동일하게 UI만 구현해주시고 기능은 구현하지 않으셔도 괜찮습니다.
//   API를 검토했을 때 기능 구현 여부가 확실하지 않다면 슬랙으로 문의해주세요.

// 각 주제와 페이지에 맞는 글 목록을 조회할 수 있다. =>완료
// 유저가 선택한 주제에 맞춰 알맞은 페이지의 글 목록을 조회해서 보여줍니다.

// 선택한 글의 내용과 코멘트 목록을 볼 수 있다.=>  글 내용 확인 가능.
// 조회한 글 목록에서 글을 클릭하면 연결된 링크를 새로운 탭으로 열람해야 합니다.=> 완료
// 또한 코멘트 개수를 클릭하면 글에 연결된 코멘트 목록을 볼 수 있습니다.

// 글을 작성한 유저의 정보를 볼 수 있다.
// 조회한 글 목록에서 유저 이름을 클릭하면 유저의 정보를 볼 수 있습니다.
